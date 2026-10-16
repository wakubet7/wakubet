// Wakubet daily data: edit this file to update tips, results, booking codes,
// today's ticket and bookmaker of the month. Dates use YYYY-MM-DD.

// Today's ticket on the hero. It is also shown automatically as the first booking code card.
const TICKET = { bookmaker:"1xbet", date:"2026-10-16", bookingCode:"UNABU", picks:[
  {time:"21:00", league:"Eredivisie", home:"Heerenveen", away:"Excelsior", tip:"1 - Heerenveen to Win", odds:1.45},
  {time:"21:30", league:"Serie B", home:"Hellas Verona", away:"US Catanzaro", tip:"1 - Hellas Verona to Win", odds:1.70},
  {time:"22:00", league:"La Liga", home:"Deportivo La Coruna", away:"Levante UD", tip:"1 - Deportivo La Coruna to Win", odds:1.84}
]};

// Bookmaker of the month
const BOOK_OF_MONTH = { id:"1xbet", month:"October 2026", image:"images/1xbet-banner.webp",
  reason:"The bookmaker I used most for this month's tickets: the deepest football markets, booking codes that load in one tap, and the biggest first-deposit bonus of my six partners." };


// Booking codes: up to 3 shown as cards. odds is optional.
const BOOKING_CODES = [
  { bookmaker:"betway",    date:"2026-10-16", games:3, odds:4.49,  code:"BW7A450713" },
  { bookmaker:"1win",      date:"2026-10-16", games:7, odds:34.84, code:"vsHja529" }
];

// Booking code results, newest first. result: "won" | "lost"
const BOOKING_RESULTS = [
  { bookmaker:"1xbet",     date:"2026-10-15", games:3, odds:6.81,  code:"ANMMS", result:"won" },
  { bookmaker:"betway",    date:"2026-10-15", games:4, odds:5.05,  code:"BW79F4BC7F", result:"won" },
  { bookmaker:"1win",      date:"2026-10-15", games:8, odds:40.69, code:"K30ZLB80", result:"won" },
  { bookmaker:"1xbet",     date:"2026-10-14", games:3, odds:4.04,  code:"GB88Q", result:"won" },
  { bookmaker:"betway",    date:"2026-10-14", games:4, odds:4.27,  code:"BW79ABB2DD", result:"won" },
  { bookmaker:"1win",      date:"2026-10-14", games:7, odds:223.30, code:"bomfkk36", result:"lost" },
  { bookmaker:"1xbet",     date:"2026-10-13", games:3, odds:2.94,  code:"94185", result:"won" },
  { bookmaker:"1win",      date:"2026-10-13", games:5, odds:10.16, code:"TdV2dca6", result:"won" },
  { bookmaker:"betway",    date:"2026-10-13", games:3, odds:4.00,  code:"BW795FA342", result:"won" },
  { bookmaker:"1xbet",     date:"2026-10-12", games:3, odds:4.37,  code:"SRVNL", result:"lost" },
  { bookmaker:"1xbet",     date:"2026-10-11", games:3, odds:4.37,  code:"25CRJ", result:"lost" },
  { bookmaker:"1xbet",     date:"2026-10-10", games:3, odds:4.69,  code:"HE9J3", result:"lost" },
  { bookmaker:"1xbet",     date:"2026-10-09", games:3, odds:3.12,  code:"B1NVD", result:"lost" },
  { bookmaker:"1xbet",     date:"2026-10-08", games:3, odds:2.50,  code:"B58L2", result:"won" },
  { bookmaker:"1xbet",     date:"2026-10-07", games:3, odds:2.00,  code:"6RF9B", result:"lost" }
];

// Leagues that get their own filter button. Any other league is grouped under "Other".
const MAIN_LEAGUES = ["Premier League","La Liga","Serie A","Bundesliga","Ligue 1","Eredivisie"];

// Upcoming tips. confidence: 1–5. featured: true puts it on the hero betslip.
const TIPS = [
  {date:"2026-10-16", time:"16:00", league:"NBC Premier League", home:"Fountain Gate", away:"Pamba", tip:"DC 12", odds:1.30, confidence:3},
  {date:"2026-10-16", time:"16:15", league:"Saudi Pro League", home:"Al Qadsiah", away:"Abha", tip:"Al Qadsiah to Win", odds:1.12, confidence:3},
  {date:"2026-10-16", time:"17:30", league:"Algeria Ligue 1", home:"Olympique Akbou", away:"Ben Aknoun", tip:"Over 1.5", odds:1.45, confidence:3},
  {date:"2026-10-16", time:"19:00", league:"NBC Premier League", home:"Geita Gold", away:"Dodoma FC", tip:"DC 1X", odds:1.30, confidence:3},
  {date:"2026-10-16", time:"20:00", league:"Super Lig", home:"Corum", away:"Rizespor", tip:"Over 1.5", odds:1.21, confidence:3},
  {date:"2026-10-16", time:"20:00", league:"Superliga", home:"Horsens", away:"Randers", tip:"Over 1.5", odds:1.24, confidence:3},
  {date:"2026-10-16", time:"21:00", league:"Eredivisie", home:"Heerenveen", away:"Excelsior", tip:"Heerenveen to Win", odds:1.53, confidence:3},
  {date:"2026-10-16", time:"21:30", league:"Bundesliga", home:"Eintracht Frankfurt", away:"FC Koln", tip:"DC 1X", odds:1.27, confidence:3},
  {date:"2026-10-16", time:"21:45", league:"Ligue 1", home:"Le Mans", away:"Toulouse", tip:"Over 1.5", odds:1.20, confidence:3},
  {date:"2026-10-16", time:"21:45", league:"Serie A", home:"Frosinone", away:"Sassuolo", tip:"DC 12", odds:1.27, confidence:3},
  {date:"2026-10-16", time:"22:00", league:"Championship", home:"Burnley", away:"Wolves", tip:"Over 1.5", odds:1.26, confidence:3},
  {date:"2026-10-16", time:"22:00", league:"La Liga", home:"Deportivo La Coruna", away:"Levante", tip:"DC 1X", odds:1.28, confidence:3}
];

// Settled tips. result: "won" | "lost" | "void"
const RESULTS = [
  {date:"2026-10-15", league:"Europa League", home:"Lech Poznan", away:"Bayer Leverkusen", tip:"Bayer Leverkusen to Win", odds:1.60, score:"0-4", result:"won"},
  {date:"2026-10-15", league:"Europa League", home:"Lyon", away:"Crystal Palace", tip:"DC 12", odds:1.28, score:"3-2", result:"won"},
  {date:"2026-10-15", league:"Europa League", home:"Salzburg", away:"AC Milan", tip:"DC X2", odds:1.29, score:"0-4", result:"won"},
  {date:"2026-10-15", league:"Europa League", home:"Royale Union SG", away:"Real Sociedad", tip:"Over 1.5", odds:1.19, score:"1-1", result:"won"},
  {date:"2026-10-15", league:"Europa League", home:"Torreense", away:"Sunderland", tip:"Sunderland to Win", odds:1.36, score:"1-2", result:"won"},
  {date:"2026-10-15", league:"Conference League", home:"CSKA Sofia", away:"Monaco", tip:"Over 1.5", odds:1.20, score:"1-2", result:"won"},
  {date:"2026-10-15", league:"Conference League", home:"Brighton", away:"Kauno Zalgiris", tip:"2nd Half Over 1.5", odds:1.34, score:"4-0", result:"won"},
  {date:"2026-10-15", league:"Europa League", home:"Benfica", away:"Celtic", tip:"Benfica to Win", odds:1.25, score:"4-1", result:"won"},
  {date:"2026-10-15", league:"Europa League", home:"Celta Vigo", away:"Juventus", tip:"DC 12", odds:1.34, score:"1-2", result:"won"},
  {date:"2026-10-15", league:"Europa League", home:"Bournemouth", away:"Sturm Graz", tip:"Bournemouth to Win", odds:1.20, score:"3-0", result:"won"},
  {date:"2026-10-15", league:"Europa League", home:"Marseille", away:"Olympiacos", tip:"Over 1.5", odds:1.24, score:"0-1", result:"lost"},
  {date:"2026-10-15", league:"Conference League", home:"Atalanta", away:"Pafos", tip:"Atalanta to Win", odds:1.35, score:"3-1", result:"won"},
  {date:"2026-10-14", league:"Champions League", home:"Feyenoord", away:"Como", tip:"DC 12", odds:1.25, score:"3-2", result:"won"},
  {date:"2026-10-14", league:"Champions League", home:"LASK", away:"Liverpool", tip:"Liverpool to Win", odds:1.38, score:"3-6", result:"won"},
  {date:"2026-10-14", league:"Algeria Ligue 1", home:"ES Setif", away:"Kabylie", tip:"DC 1X", odds:1.22, score:"1-1", result:"won"},
  {date:"2026-10-14", league:"Championship", home:"Queens Park Rangers", away:"Derby", tip:"Over 1.5", odds:1.28, score:"4-1", result:"won"},
  {date:"2026-10-14", league:"Champions League", home:"AS Roma", away:"Real Madrid", tip:"DC 12", odds:1.25, score:"3-4", result:"won"},
  {date:"2026-10-14", league:"Champions League", home:"Slovan Bratislava", away:"Stuttgart", tip:"Stuttgart to Win", odds:1.30, score:"0-3", result:"won"},
  {date:"2026-10-14", league:"Champions League", home:"Aston Villa", away:"Fenerbahce", tip:"DC 1X", odds:1.17, score:"6-0", result:"won"},
  {date:"2026-10-14", league:"Champions League", home:"Real Betis", away:"FC Porto", tip:"Over 1.5", odds:1.22, score:"3-2", result:"won"},
  {date:"2026-10-14", league:"Champions League", home:"Bodo/Glimt", away:"Dortmund", tip:"DC 12", odds:1.24, score:"1-0", result:"won"},
  {date:"2026-10-14", league:"Champions League", home:"Shakhtar Donetsk", away:"AEK Athens", tip:"Over 1.5", odds:1.28, score:"3-1", result:"won"},
  {date:"2026-10-14", league:"Champions League", home:"Manchester City", away:"PSG", tip:"DC 12", odds:1.26, score:"2-4", result:"won"},
  {date:"2026-10-14", league:"Championship", home:"Lincoln", away:"West Ham", tip:"1st Half Over 0.5", odds:1.34, score:"0-6", result:"won"},
  {date:"2026-10-13", league:"NBC Premier League", home:"Simba", away:"Mashujaa FC", tip:"Simba to Win", odds:1.15, score:"6-1", result:"won"},
  {date:"2026-10-13", league:"Champions League", home:"Lens", away:"Sporting CP", tip:"DC 12", odds:1.28, score:"0-2", result:"won"},
  {date:"2026-10-13", league:"Champions League", home:"Sabah Baku", away:"Slavia Prague", tip:"Over 1.5", odds:1.20, score:"2-0", result:"won"},
  {date:"2026-10-13", league:"Botola Pro 1", home:"Berkane", away:"Renaissance", tip:"Berkane to Win", odds:1.55, score:"2-2", result:"lost"},
  {date:"2026-10-13", league:"Champions League", home:"Arsenal", away:"Lille", tip:"Arsenal to Win", odds:1.21, score:"3-0", result:"won"},
  {date:"2026-10-13", league:"Champions League", home:"Atletico Madrid", away:"Manchester United", tip:"DC 12", odds:1.26, score:"3-0", result:"won"},
  {date:"2026-10-13", league:"Champions League", home:"Galatasaray", away:"Barcelona", tip:"Barcelona to Win", odds:1.31, score:"1-4", result:"won"},
  {date:"2026-10-13", league:"Champions League", home:"Inter Milan", away:"Club Brugge", tip:"Inter Milan to Win", odds:1.26, score:"3-4", result:"lost"},
  {date:"2026-10-13", league:"Champions League", home:"RB Leipzig", away:"PSV", tip:"DC 1X", odds:1.20, score:"1-0", result:"won"},
  {date:"2026-10-13", league:"Champions League", home:"Viking FK", away:"Bayern Munich", tip:"Bayern Munich to Win", odds:1.10, score:"3-3", result:"lost"},
  {date:"2026-10-13", league:"Champions League", home:"Villarreal", away:"Napoli", tip:"DC 12", odds:1.28, score:"3-1", result:"won"},
  {date:"2026-10-13", league:"Algeria Ligue 1", home:"USM Alger", away:"Saoura", tip:"USM Alger to Win", odds:1.49, score:"1-0", result:"won"},
  {date:"2026-10-12", league:"Algeria Ligue 1", home:"El Biar", away:"CR Belouizdad", tip:"DC 12", odds:1.31, score:"2-3", result:"won"},
  {date:"2026-10-12", league:"Algeria Ligue 1", home:"Khenchela", away:"CS Constantine", tip:"Over 1.5", odds:1.46, score:"2-0", result:"won"},
  {date:"2026-10-12", league:"Serie A", home:"Atalanta", away:"Venezia", tip:"DC 1X", odds:1.14, score:"3-1", result:"won"},
  {date:"2026-10-12", league:"Allsvenskan", home:"Elfsborg", away:"Halmstad", tip:"Elfsborg to Win", odds:1.33, score:"4-0", result:"won"},
  {date:"2026-10-12", league:"Allsvenskan", home:"Malmo FF", away:"Kalmar", tip:"Over 1.5", odds:1.24, score:"1-0", result:"lost"},
  {date:"2026-10-12", league:"Super Lig", home:"Eyupspor", away:"Goztepe", tip:"Over 1.5", odds:1.24, score:"0-4", result:"won"},
  {date:"2026-10-12", league:"Serie A", home:"Torino", away:"Udinese", tip:"DC 1X", odds:1.34, score:"2-1", result:"won"},
  {date:"2026-10-12", league:"Premier League", home:"Coventry", away:"Newcastle", tip:"DC X2", odds:1.35, score:"4-1", result:"lost"},
  {date:"2026-10-12", league:"La Liga", home:"Levante", away:"Sevilla", tip:"DC X2", odds:1.43, score:"3-3", result:"won"},
  {date:"2026-10-12", league:"Ireland Premier Division", home:"Shamrock Rovers", away:"Bohemians", tip:"Over 1.5", odds:1.25, score:"2-1", result:"won"},
  {date:"2026-10-12", league:"Liga Portugal", home:"Famalicao", away:"Alverca", tip:"Over 1.5", odds:1.33, score:"1-4", result:"won"},
  {date:"2026-10-12", league:"Botola Pro 1", home:"Hassania Agadir", away:"AS Far Rabat", tip:"DC 12", odds:1.31, score:"2-2", result:"lost"},
  {date:"2026-10-11", league:"Premier League", home:"Crystal Palace", away:"Nottingham Forest", tip:"Over 1.5", odds:1.27, score:"3-1", result:"won"},
  {date:"2026-10-11", league:"Premier League", home:"Hull", away:"Everton", tip:"Over 1.5", odds:1.32, score:"2-2", result:"won"},
  {date:"2026-10-11", league:"Premier League", home:"Liverpool", away:"Manchester City", tip:"DC 12", odds:1.29, score:"0-3", result:"won"},
  {date:"2026-10-11", league:"Ligue 1", home:"Nice", away:"Strasbourg", tip:"Over 1.5", odds:1.19, score:"2-1", result:"won"},
  {date:"2026-10-11", league:"Ligue 1", home:"Troyes", away:"Marseille", tip:"DC X2", odds:1.28, score:"0-2", result:"won"},
  {date:"2026-10-11", league:"Bundesliga", home:"FC Koln", away:"B. Monchengladbach", tip:"DC 12", odds:1.27, score:"2-1", result:"won"},
  {date:"2026-10-11", league:"Bundesliga", home:"Freiburg", away:"Schalke", tip:"Freiburg to Win", odds:1.65, score:"2-1", result:"won"},
  {date:"2026-10-11", league:"Serie A", home:"Como", away:"AS Roma", tip:"DC 12", odds:1.30, score:"0-0", result:"lost"},
  {date:"2026-10-11", league:"Serie A", home:"Sassuolo", away:"AC Milan", tip:"DC X2", odds:1.21, score:"1-1", result:"won"},
  {date:"2026-10-11", league:"Serie A", home:"Cagliari", away:"Juventus", tip:"Over 1.5", odds:1.31, score:"1-1", result:"won"},
  {date:"2026-10-11", league:"La Liga", home:"Real Sociedad", away:"Deportivo La Coruna", tip:"Over 1.5", odds:1.23, score:"3-2", result:"won"},
  {date:"2026-10-11", league:"La Liga", home:"Real Betis", away:"Osasuna", tip:"Real Betis to Win", odds:1.55, score:"5-2", result:"won"},
  {date:"2026-10-10", league:"NBC Premier League", home:"Simba", away:"Young Africans", tip:"DC 12", odds:1.33, score:"2-1", result:"won"},
  {date:"2026-10-10", league:"Premier League", home:"Arsenal", away:"Leeds", tip:"Over 1.5", odds:1.26, score:"2-1", result:"won"},
  {date:"2026-10-10", league:"Premier League", home:"Chelsea", away:"Bournemouth", tip:"DC 12", odds:1.24, score:"5-1", result:"won"},
  {date:"2026-10-10", league:"Premier League", home:"Aston Villa", away:"Brentford", tip:"Over 1.5", odds:1.22, score:"2-2", result:"won"},
  {date:"2026-10-10", league:"Premier League", home:"Manchester United", away:"Tottenham", tip:"DC 12", odds:1.24, score:"1-1", result:"lost"},
  {date:"2026-10-10", league:"Ligue 1", home:"PSG", away:"Le Mans", tip:"PSG to Win", odds:1.10, score:"3-1", result:"won"},
  {date:"2026-10-10", league:"Bundesliga", home:"Augsburg", away:"Bayern Munich", tip:"Over 3.5", odds:1.38, score:"2-2", result:"won"},
  {date:"2026-10-10", league:"Bundesliga", home:"Mainz", away:"Bayer Leverkusen", tip:"DC 12", odds:1.27, score:"3-4", result:"won"},
  {date:"2026-10-10", league:"Bundesliga", home:"RB Leipzig", away:"Eintracht Frankfurt", tip:"Over 2.5", odds:1.28, score:"6-0", result:"won"},
  {date:"2026-10-10", league:"Serie A", home:"Inter", away:"Parma", tip:"Inter to Win", odds:1.15, score:"3-0", result:"won"},
  {date:"2026-10-10", league:"La Liga", home:"Barcelona", away:"Getafe", tip:"Barcelona to Win", odds:1.10, score:"3-0", result:"won"},
  {date:"2026-10-10", league:"La Liga", home:"Real Madrid", away:"Villarreal", tip:"Real Madrid to Win", odds:1.38, score:"1-0", result:"won"},
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
