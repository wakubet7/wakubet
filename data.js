// Wakubet daily data: edit this file to update tips, results, booking codes,
// today's ticket and bookmaker of the month. Dates use YYYY-MM-DD.

// Today's ticket on the hero. It is also shown automatically as the first booking code card.
const TICKET = { bookmaker:"1xbet", date:"2026-10-10", bookingCode:"HE9J3", picks:[
  {time:"14:30", league:"Premier League", home:"Arsenal", away:"Leeds", tip:"1 - Arsenal to Win", odds:1.34},
  {time:"17:00", league:"Premier League", home:"Sunderland", away:"Brighton", tip:"2 - Brighton to Win", odds:1.99},
  {time:"17:15", league:"La Liga", home:"Deportivo Alaves", away:"Atletico Madrid", tip:"2 - Atletico Madrid to Win", odds:1.76}
]};

// Bookmaker of the month
const BOOK_OF_MONTH = { id:"1xbet", month:"October 2026", image:"images/1xbet-banner.webp",
  reason:"The bookmaker I used most for this month's tickets: the deepest football markets, booking codes that load in one tap, and the biggest first-deposit bonus of my six partners." };


// Booking codes: up to 3 shown as cards. odds is optional.
const BOOKING_CODES = [
  { bookmaker:"melbet",    date:"2026-10-04", games:5, odds:9.80,  code:"MLB456" },
  { bookmaker:"betwinner", date:"2026-10-05", games:4, odds:7.15,  code:"BW789X" }
];

// Booking code results, newest first. result: "won" | "lost"
const BOOKING_RESULTS = [
  { bookmaker:"1xbet",     date:"2026-10-09", games:3, odds:3.12,  code:"B1NVD", result:"lost" },
  { bookmaker:"1xbet",     date:"2026-10-08", games:3, odds:2.50,  code:"B58L2", result:"won" },
  { bookmaker:"1xbet",     date:"2026-10-07", games:3, odds:2.00,  code:"6RF9B", result:"lost" }
];

// Leagues that get their own filter button. Any other league is grouped under "Other".
const MAIN_LEAGUES = ["Premier League","La Liga","Serie A","Bundesliga","Ligue 1","Eredivisie"];

// Upcoming tips. confidence: 1–5. featured: true puts it on the hero betslip.
const TIPS = [
  {date:"2026-10-10", time:"14:30", league:"Premier League", home:"Arsenal", away:"Leeds", tip:"Over 1.5", odds:1.26, confidence:3},
  {date:"2026-10-10", time:"16:30", league:"Bundesliga", home:"Augsburg", away:"Bayern Munich", tip:"Over 3.5", odds:1.38, confidence:3},
  {date:"2026-10-10", time:"16:30", league:"Bundesliga", home:"Mainz", away:"Bayer Leverkusen", tip:"DC 12", odds:1.27, confidence:3},
  {date:"2026-10-10", time:"17:00", league:"Premier League", home:"Chelsea", away:"Bournemouth", tip:"DC 12", odds:1.24, confidence:3},
  {date:"2026-10-10", time:"17:00", league:"Premier League", home:"Aston Villa", away:"Brentford", tip:"Over 1.5", odds:1.22, confidence:3},
  {date:"2026-10-10", time:"19:00", league:"NBC Premier League", home:"Simba", away:"Young Africans", tip:"DC 12", odds:1.33, confidence:3},
  {date:"2026-10-10", time:"19:00", league:"Serie A", home:"Inter", away:"Parma", tip:"Inter to Win", odds:1.15, confidence:3},
  {date:"2026-10-10", time:"19:30", league:"Premier League", home:"Manchester United", away:"Tottenham", tip:"DC 12", odds:1.24, confidence:3},
  {date:"2026-10-10", time:"19:30", league:"Bundesliga", home:"RB Leipzig", away:"Eintracht Frankfurt", tip:"Over 2.5", odds:1.28, confidence:3},
  {date:"2026-10-10", time:"19:30", league:"La Liga", home:"Barcelona", away:"Getafe", tip:"Barcelona to Win", odds:1.10, confidence:3},
  {date:"2026-10-10", time:"21:45", league:"Ligue 1", home:"PSG", away:"Le Mans", tip:"PSG to Win", odds:1.10, confidence:3},
  {date:"2026-10-10", time:"22:00", league:"La Liga", home:"Real Madrid", away:"Villarreal", tip:"Real Madrid to Win", odds:1.38, confidence:3}
];

// Settled tips. result: "won" | "lost" | "void"
const RESULTS = [
  {date:"2026-10-09", league:"Algeria Ligue 1", home:"Kabylie", away:"ASO Chlef", tip:"Kabylie to Win", odds:1.42, score:"1-0", result:"won"},
  {date:"2026-10-09", league:"Algeria Ligue 1", home:"MC Alger", away:"Temouchent", tip:"MC Alger to Win", odds:1.17, score:"1-0", result:"won"},
  {date:"2026-10-09", league:"Ligue 1", home:"Lens", away:"Lyon", tip:"DC 12", odds:1.29, score:"2-1", result:"won"},
  {date:"2026-10-09", league:"Bundesliga", home:"Dortmund", away:"Werder Bremen", tip:"Dortmund to Win", odds:1.35, score:"2-2", result:"lost"},
  {date:"2026-10-09", league:"Eredivisie", home:"PSV", away:"Heerenveen", tip:"PSV to Win", odds:1.27, score:"2-0", result:"won"},
  {date:"2026-10-09", league:"La Liga", home:"Malaga", away:"Espanyol", tip:"Over 1.5", odds:1.33, score:"1-1", result:"won"},
  {date:"2026-10-09", league:"Saudi Pro League", home:"Al Kholood", away:"Al Qadsiah", tip:"Al Qadsiah to Win", odds:1.50, score:"0-5", result:"won"},
  {date:"2026-10-09", league:"Saudi Pro League", home:"Al Nassr", away:"Al Diriyah", tip:"Al Nassr to Win", odds:1.39, score:"3-0", result:"won"},
  {date:"2026-10-09", league:"Championship", home:"West Ham", away:"Queens Park Rangers", tip:"West Ham to Win", odds:1.50, score:"1-1", result:"lost"},
  {date:"2026-10-09", league:"Jupiler Pro League", home:"Beveren", away:"Lommel SK", tip:"DC 1X", odds:1.23, score:"1-3", result:"lost"},
  {date:"2026-10-08", league:"Algeria Ligue 1", home:"Rouisset", away:"USM Alger", tip:"DC 12", odds:1.34, score:"1-0", result:"won"},
  {date:"2026-10-08", league:"Algeria Ligue 1", home:"Saoura", away:"Olympique Akbou", tip:"DC 12", odds:1.31, score:"0-0", result:"lost"},
  {date:"2026-10-08", league:"Algeria Ligue 1", home:"Oran", away:"ES Setif", tip:"DC 1X", odds:1.21, score:"0-0", result:"won"},
  {date:"2026-10-08", league:"Azerbaijan First Division", home:"Sabail", away:"Karvan", tip:"Over 1.5", odds:1.28, score:"1-1", result:"won"},
  {date:"2026-10-08", league:"Ireland Premier Division", home:"Shamrock Rovers", away:"Drogheda", tip:"Over 1.5", odds:1.22, score:"3-1", result:"won"},
  {date:"2026-10-08", league:"Jamaica Premier League", home:"Portmore", away:"Waterhouse", tip:"DC 12", odds:1.34, score:"1-1", result:"lost"},
  {date:"2026-10-08", league:"Botola Pro 1", home:"Union Touarga", away:"Berkane", tip:"DC 12", odds:1.33, score:"0-0", result:"lost"},
  {date:"2026-10-08", league:"Botola Pro 1", home:"AS Far Rabat", away:"Wydad", tip:"AS Far Rabat to Win", odds:1.40, score:"1-0", result:"won"},
  {date:"2026-10-08", league:"Botola Pro 1", home:"Maghreb Fez", away:"Raja Casablanca", tip:"DC 12", odds:1.39, score:"0-0", result:"lost"},
  {date:"2026-10-08", league:"NBC Premier League", home:"Pamba", away:"Geita Gold", tip:"DC 1X", odds:1.38, score:"4-0", result:"won"},
  {date:"2026-10-07", league:"Algeria Ligue 1", home:"CS Constantine", away:"Biskra", tip:"DC 12", odds:1.26, score:"4-0", result:"won"},
  {date:"2026-10-07", league:"Algeria Ligue 1", home:"CR Belouizdad", away:"Khenchela", tip:"Over 1.5", odds:1.31, score:"1-0", result:"lost"},
  {date:"2026-10-07", league:"Egypt League Cup", home:"A. Petroleum", away:"Al Ahly", tip:"Al Ahly to Win", odds:1.50, score:"0-5", result:"won"},
  {date:"2026-10-07", league:"Egypt League Cup", home:"Pyramids", away:"Al Qanah", tip:"Pyramids to Win", odds:1.59, score:"3-2", result:"won"},
  {date:"2026-10-07", league:"Veikkausliiga", home:"Gnistan", away:"Inter Turku", tip:"Over 1.5", odds:1.21, score:"0-0", result:"lost"},
  {date:"2026-10-07", league:"Iraq Stars League", home:"Al Mosul", away:"Al Quwa Al Jawiya", tip:"DC X2", odds:1.27, score:"0-3", result:"won"},
  {date:"2026-10-07", league:"Nigerian Professional League", home:"Shooting Stars", away:"Kano Pillars", tip:"Shooting Stars to Win", odds:1.47, score:"0-0", result:"lost"},
  {date:"2026-10-07", league:"Azerbaijan First Division", home:"Sahdag Kusar", away:"Zaqatala", tip:"Over 1.5", odds:1.23, score:"6-0", result:"won"}
];
