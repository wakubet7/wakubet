// Wakubet daily data: edit this file to update tips, results, booking codes,
// today's ticket and bookmaker of the month. Dates use YYYY-MM-DD.

// Today's ticket on the hero. Featured tips come from TIPS (featured: true).
const TICKET = { bookmaker:"1xbet", bookingCode:"6RF9B" };

// Bookmaker of the month
const BOOK_OF_MONTH = { id:"1xbet", month:"October 2026", image:"images/1xbet-banner.webp",
  reason:"The bookmaker I used most for this month's tickets: the deepest football markets, booking codes that load in one tap, and the biggest first-deposit bonus of my six partners." };


// Booking codes: up to 3 shown as cards. odds is optional.
const BOOKING_CODES = [
  { bookmaker:"1xbet",     date:"2026-10-04", games:3, odds:4.23,  code:"ABC123" },
  { bookmaker:"melbet",    date:"2026-10-04", games:5, odds:9.80,  code:"MLB456" },
  { bookmaker:"betwinner", date:"2026-10-05", games:4, odds:7.15,  code:"BW789X" }
];

// Booking code results, newest first. result: "won" | "lost"
const BOOKING_RESULTS = [
  { bookmaker:"1xbet",     date:"2026-10-03", games:3, odds:4.10,  code:"K7Q2M", result:"won" },
  { bookmaker:"melbet",    date:"2026-10-03", games:5, odds:11.40, code:"M8R4T", result:"lost" },
  { bookmaker:"betwinner", date:"2026-10-02", games:4, odds:6.75,  code:"B3W9P", result:"won" },
  { bookmaker:"1xbet",     date:"2026-09-28", games:3, odds:3.85,  code:"X5N1C", result:"won" },
  { bookmaker:"paripesa",  date:"2026-09-28", games:6, odds:15.20, code:"P2Z8L", result:"lost" },
  { bookmaker:"1win",      date:"2026-09-27", games:4, odds:6.30,  code:"W9H3D", result:"won" },
  { bookmaker:"1xbet",     date:"2026-09-21", games:3, odds:4.55,  code:"X1V7K", result:"lost" },
  { bookmaker:"melbet",    date:"2026-09-20", games:4, odds:7.90,  code:"M6J2S", result:"won" },
  { bookmaker:"betwinner", date:"2026-09-14", games:5, odds:10.60, code:"B4T8Q", result:"won" },
  { bookmaker:"1xbet",     date:"2026-09-13", games:3, odds:4.05,  code:"X3P6F", result:"won" }
];

// Leagues that get their own filter button. Any other league is grouped under "Other".
const MAIN_LEAGUES = ["Premier League","La Liga","Serie A","Bundesliga","Ligue 1","Eredivisie"];

// Upcoming tips. confidence: 1–5. featured: true puts it on the hero betslip.
const TIPS = [
  {date:"2026-10-07", time:"14:30", league:"Azerbaijan First Division", home:"Sahdag Kusar", away:"Zaqatala", tip:"Over 1.5", odds:1.23, confidence:3},
  {date:"2026-10-07", time:"17:00", league:"Egypt League Cup", home:"A. Petroleum", away:"Al Ahly", tip:"Al Ahly to Win", odds:1.50, confidence:3},
  {date:"2026-10-07", time:"17:00", league:"Egypt League Cup", home:"Pyramids", away:"Al Qanah", tip:"Pyramids to Win", odds:1.59, confidence:3},
  {date:"2026-10-07", time:"18:00", league:"Iraq Stars League", home:"Al Mosul", away:"Al Quwa Al Jawiya", tip:"DC X2", odds:1.27, confidence:3},
  {date:"2026-10-07", time:"18:00", league:"Nigerian Professional League", home:"Shooting Stars", away:"Kano Pillars", tip:"Shooting Stars to Win", odds:1.47, confidence:3},
  {date:"2026-10-07", time:"19:00", league:"Veikkausliiga", home:"Gnistan", away:"Inter Turku", tip:"Over 1.5", odds:1.21, confidence:3, featured:true},
  {date:"2026-10-07", time:"20:00", league:"Algeria Ligue 1", home:"CS Constantine", away:"Biskra", tip:"DC 12", odds:1.26, confidence:3, featured:true},
  {date:"2026-10-07", time:"22:00", league:"Algeria Ligue 1", home:"CR Belouizdad", away:"Khenchela", tip:"Over 1.5", odds:1.31, confidence:3, featured:true}
];

// Settled tips. result: "won" | "lost" | "void"
const RESULTS = [
  {date:"2026-10-03", league:"Premier League", home:"Liverpool", away:"Brentford", tip:"Liverpool to win", odds:1.40, score:"3-1", result:"won"},
  {date:"2026-10-03", league:"La Liga", home:"Sevilla", away:"Valencia", tip:"Under 2.5 goals", odds:1.75, score:"2-2", result:"lost"},
  {date:"2026-10-02", league:"Eredivisie", home:"Ajax", away:"Utrecht", tip:"Ajax to win", odds:1.50, score:"2-0", result:"won"},
  {date:"2026-09-28", league:"Serie A", home:"Napoli", away:"Torino", tip:"Over 1.5 goals", odds:1.33, score:"2-0", result:"won"},
  {date:"2026-09-28", league:"Premier League", home:"Chelsea", away:"Newcastle", tip:"Both teams to score", odds:1.72, score:"1-1", result:"won"},
  {date:"2026-09-27", league:"Bundesliga", home:"Leipzig", away:"Mainz", tip:"Leipzig to win", odds:1.65, score:"1-1", result:"lost"},
  {date:"2026-09-27", league:"Ligue 1", home:"Marseille", away:"Le Havre", tip:"Marseille -1 handicap", odds:1.90, score:"3-0", result:"won"},
  {date:"2026-09-21", league:"Premier League", home:"Man City", away:"Aston Villa", tip:"Over 2.5 goals", odds:1.55, score:"2-1", result:"won"},
  {date:"2026-09-21", league:"La Liga", home:"Barcelona", away:"Osasuna", tip:"Barcelona to win", odds:1.30, score:"1-2", result:"lost"},
  {date:"2026-09-20", league:"Eredivisie", home:"PSV", away:"Heracles", tip:"PSV to win", odds:1.38, score:"2-0", result:"won"},
  {date:"2026-09-20", league:"Serie A", home:"Roma", away:"Genoa", tip:"Draw no bet: Roma", odds:1.45, score:"0-0", result:"void"},
  {date:"2026-09-14", league:"Bundesliga", home:"Bayern", away:"Hoffenheim", tip:"Over 3.5 goals", odds:1.85, score:"4-1", result:"won"},
  {date:"2026-09-14", league:"Premier League", home:"Tottenham", away:"Fulham", tip:"Both teams to score", odds:1.68, score:"2-0", result:"lost"},
  {date:"2026-09-13", league:"Ligue 1", home:"Nice", away:"Toulouse", tip:"Under 2.5 goals", odds:1.60, score:"1-0", result:"won"},
  {date:"2026-09-07", league:"La Liga", home:"Atlético", away:"Celta Vigo", tip:"Atlético to win", odds:1.55, score:"2-0", result:"won"},
  {date:"2026-08-31", league:"Premier League", home:"Arsenal", away:"Wolves", tip:"Arsenal -1 handicap", odds:1.95, score:"3-0", result:"won"},
  {date:"2026-08-31", league:"Serie A", home:"Juventus", away:"Bologna", tip:"Under 2.5 goals", odds:1.70, score:"1-1", result:"won"},
  {date:"2026-08-30", league:"Eredivisie", home:"Feyenoord", away:"AZ Alkmaar", tip:"Both teams to score", odds:1.95, score:"1-0", result:"lost"},
  {date:"2026-08-24", league:"Bundesliga", home:"Dortmund", away:"Bochum", tip:"Dortmund to win", odds:1.42, score:"2-1", result:"won"},
  {date:"2026-08-24", league:"Premier League", home:"Man United", away:"Brighton", tip:"Over 2.5 goals", odds:1.80, score:"1-1", result:"lost"},
  {date:"2026-08-17", league:"La Liga", home:"Real Madrid", away:"Mallorca", tip:"Real Madrid -1.5", odds:1.75, score:"3-0", result:"won"},
  {date:"2026-08-17", league:"Premier League", home:"Liverpool", away:"Bournemouth", tip:"Liverpool to win", odds:1.33, score:"2-0", result:"won"}
];
