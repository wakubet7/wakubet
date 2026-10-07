<?php
// Wakubet contact form handler: sends messages to admin@wakubet.com
$TO   = 'admin@wakubet.com';
$FROM = 'admin@wakubet.com'; // must be an address on wakubet.com for Hostinger mail()

$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'fetch';

function done($ok, $msg, $isAjax) {
  if ($isAjax) {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code($ok ? 200 : 400);
    echo json_encode(['ok' => $ok, 'message' => $msg]);
  } else {
    header('Location: contact.html?' . ($ok ? 'sent=1' : 'error=1'));
  }
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Location: contact.html');
  exit;
}

$clean = function ($v, $max) {
  $v = trim((string)($v ?? ''));
  $v = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v);
  return mb_substr($v, 0, $max);
};

$name    = $clean($_POST['name'] ?? '', 80);
$email   = $clean($_POST['email'] ?? '', 120);
$topic   = $clean($_POST['topic'] ?? 'General', 60);
$message = trim(mb_substr((string)($_POST['message'] ?? ''), 0, 4000));
$trap    = trim((string)($_POST['website'] ?? ''));     // honeypot: humans leave it empty
$started = (int)($_POST['started'] ?? 0);               // ms timestamp set when the page loaded

// Silently accept bots so they don't retry
if ($trap !== '') done(true, 'Thanks, your message has been sent.', $isAjax);
if ($started > 0 && (round(microtime(true) * 1000) - $started) < 3000) done(true, 'Thanks, your message has been sent.', $isAjax);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  done(false, 'Please fill in your name, a valid email and your message.', $isAjax);
}
if (mb_strlen($message) < 10) done(false, 'Your message is too short.', $isAjax);

$allowed = ['General', 'Tips and booking codes', 'Advertising and partnerships', 'Bookmaker question', 'Other'];
if (!in_array($topic, $allowed, true)) $topic = 'Other';

$subject = 'Wakubet contact: ' . $topic . ' from ' . $name;
$body  = "New message from the Wakubet contact form\n\n";
$body .= "Name:  $name\n";
$body .= "Email: $email\n";
$body .= "Topic: $topic\n";
$body .= "Date:  " . gmdate('Y-m-d H:i') . " UTC\n";
$body .= "IP:    " . ($_SERVER['REMOTE_ADDR'] ?? '') . "\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: Wakubet Website <$FROM>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$sent = @mail($TO, $encodedSubject, $body, $headers, '-f' . $FROM);

if ($sent) done(true, 'Thanks, your message has been sent. We usually reply within 24 hours.', $isAjax);
done(false, 'Sorry, the message could not be sent. Please email admin@wakubet.com directly.', $isAjax);
