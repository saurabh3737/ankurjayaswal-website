// All site content lives here. Source of truth: Ankur's resume (Nov 2026).
// Testimonials are from his public LinkedIn recommendations.

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "25", label: "years in IT consulting & transformation" },
  { value: "150+", label: "onshore/offshore team led at AIG Europe" },
  { value: "90M+", label: "records in Commerzbank’s 19-market migration" },
  { value: "16M", label: "transactions a day on the Merrill Lynch EAI framework" },
  { value: "95%+", label: "customer satisfaction scores at Commerzbank" },
  { value: "1st", label: "online derivatives trading platform in India (NSE)" },
];

export const clients = [
  "Merrill Lynch",
  "Bank of America",
  "Commerzbank",
  "Silicon Valley Bank",
  "BMW Financial Services",
  "AIG Europe",
  "Swiss Re",
  "WestJet",
  "NSE India",
];

export const domains = [
  "Capital Markets",
  "International Trade & Finance",
  "Investment Banking",
  "Wealth Management",
  "Trade & Settlement",
  "Master & Reference Data",
  "Middleware Integration",
  "SWIFT Messaging",
  "Regulatory Reporting",
  "Data Governance",
];

export type Expertise = { title: string; icon: "layers" | "lifebuoy" | "shield"; items: string[] };

export const expertise: Expertise[] = [
  {
    title: "Functional consulting & design",
    icon: "layers",
    items: [
      "Business analysis & requirements",
      "As-Is / To-Be process design",
      "Functional solution architecture",
      "Data governance & data stewardship",
    ],
  },
  {
    title: "Delivery & production support",
    icon: "lifebuoy",
    items: [
      "AMS / production support & SLAs",
      "Incident, problem & change management",
      "Release / deployment governance",
      "RCA & operational readiness",
      "Stakeholder & customer management",
    ],
  },
  {
    title: "Quality & test management",
    icon: "shield",
    items: [
      "Test strategy, planning & RTM",
      "SIT / UAT / regression / E2E",
      "Defect & quality governance",
      "Integration & data validation",
    ],
  },
];

export type Sector = "Banking" | "Capital Markets" | "Insurance" | "Automotive & Airline";

export type Role = {
  dates: string;
  location: string;
  sector: Sector;
  title: string;
  client: string;
  program: string;
  points: string[];
};

export const roles: Role[] = [
  {
    dates: "Jul 2025 – Present",
    location: "Dublin, Ireland",
    sector: "Insurance",
    title: "Regional Program Lead, EMEA & UK",
    client: "AIG Europe S.A.",
    program: "General Insurance ADM / AMS",
    points: [
      "Own the client relationship on a multi-year managed-services engagement for ADM of 200+ business applications across EMEA, leading a 150+ member onshore/offshore team.",
      "Serve as TCS’s primary point of contact to the CIO and executive offices.",
      "Lead incident and problem management, release/deployment, operational readiness and production governance; drive RCA and use incident trend analysis to eliminate recurring issues.",
      "Lead the BA function across Policy Admin & Underwriting, Claims, Finance, Reporting and Support domains.",
      "Primary liaison between business users and the core change team for escalations and functional impact analysis.",
    ],
  },
  {
    dates: "Jul 2023 – Oct 2024",
    location: "Calgary, Canada",
    sector: "Automotive & Airline",
    title: "Senior Program Lead & Business Analyst",
    client: "WestJet",
    program: "Cybersecurity Managed Services",
    points: [
      "Established a strategic relationship with Canada’s second-largest airline.",
      "Secured a multi-million CAD engagement for end-to-end Cybersecurity Operations, Engineering and Transformation managed services.",
    ],
  },
  {
    dates: "Apr 2020 – Jun 2023",
    location: "India",
    sector: "Banking",
    title: "Senior BA · Senior FP&A Analyst · Regulatory Reporting Data Steward",
    client: "Silicon Valley Bank",
    program: "AWS Cloud Ops & DevOps / LFI Program",
    points: [
      "Built As-Is / To-Be process blueprints and L1/L2/L3 process maps for the AWS Cloud Ops transformation.",
      "Led FP&A for a ~US$5.6M annual Risk Technology portfolio, partnering with Divisional CIOs on P&L and budget roadmaps.",
      "Owned SOWs, change orders, resource allocation, invoicing and vendor management.",
      "Drove data governance for the LFI and UK Subsidiarization programs; stewarded key data elements for FR Y-14Q and FR Y-14M reports.",
    ],
  },
  {
    dates: "Mar 2019 – Mar 2020",
    location: "India",
    sector: "Banking",
    title: "Delivery Manager / Senior System Analyst",
    client: "Royal Bank of Scotland",
    program: "Core Banking – Enterprise Services Platform",
    points: [
      "Managed delivery of Core ESP, an SOA middleware platform, leading a 60+ member design, build and test team.",
      "IBM Integration Bus, IBM DataPower, WSDL, IBM MQ.",
      "Led smoke, system, SIT, performance, E2E and regression testing with traceability in JIRA.",
    ],
  },
  {
    dates: "Aug 2018 – Feb 2019",
    location: "India",
    sector: "Insurance",
    title: "Project Manager & Senior Business Analyst",
    client: "Swiss Re (US) Corp",
    program: "Medical Insurance Data Analytics Platform",
    points: [
      "Led project management and requirements analysis for a global analytics platform used by actuarial teams.",
      "Harmonized differing data structures from multiple insurance-company sources.",
      "Supported change and release governance through to deployment and implementation evidence.",
    ],
  },
  {
    dates: "Jan 2017 – Jul 2018",
    location: "Munich, Germany",
    sector: "Automotive & Airline",
    title: "Senior Functional Architect",
    client: "BMW Financial Services",
    program: "Wholesale Leasing Platform (iDEAL)",
    points: [
      "Led functional architecture of “Integrated Commercial Finance” across France, Austria, Central & East Europe and UK & Ireland.",
      "Ran workshops in Munich and Salzburg; documented As-Is processes and dealer regulations across 15+ EU countries.",
      "Defined market-specific requirements for BMW and Rolls-Royce; led the RFP for a pan-European dealer quote-management system.",
    ],
  },
  {
    dates: "Jul 2015 – Dec 2016",
    location: "Frankfurt, Germany",
    sector: "Banking",
    title: "Senior Functional Architect",
    client: "Commerzbank AG",
    program: "International Trade-Finance Platform (Phoenix)",
    points: [
      "Led functional architecture consolidating international trade finance onto one core banking product across 6 modules and 19 markets.",
      "Reconciled the data migration strategy for 90M+ records; authored 1,000+ business test cases.",
      "Co-led the RFP for a 3-year program to migrate 1,200+ applications to cloud.",
      "Consistently scored 95%+ on customer satisfaction surveys.",
    ],
  },
  {
    dates: "Jul 2008 – Aug 2013",
    location: "New York, USA",
    sector: "Capital Markets",
    title: "Onsite Project Lead & Business Analyst",
    client: "Bank of America Merrill Lynch",
    program: "Capital Markets",
    points: [
      "Led back-office IT integration consulting for the Bank of America–Merrill Lynch merger, consolidating 20 business applications.",
      "Built “golden source” data stores from Bloomberg, Thomson Reuters and NYSE (FIX) data across Equities, Fixed Income, Currencies and Derivatives.",
      "Owned SOWs, scope, pricing, SLA and contract negotiation, audits, vendor management and collections.",
    ],
  },
  {
    dates: "Oct 2004 – Jun 2008",
    location: "New York, USA",
    sector: "Capital Markets",
    title: "Onsite Project Lead & Business Analyst",
    client: "Merrill Lynch",
    program: "Capital Markets",
    points: [
      "Led an 8-member US/UK/India team to build an EAI framework connecting 65 applications through 250 business processes — 16M transactions a day.",
      "Designed the end-to-end global SWIFT flow between institutional clients and Global Custody Services.",
      "Led teams across New York, Mexico, London and Mumbai on the MSR and Datalink frameworks.",
    ],
  },
  {
    dates: "Sep 2003 – Sep 2004",
    location: "London, UK",
    sector: "Capital Markets",
    title: "Onsite Project Lead & Business Analyst",
    client: "Merrill Lynch Investment Managers (BlackRock)",
    program: "Retail",
    points: [
      "Led the core team migrating 400 business applications to upgraded infrastructure, impacting 6,000+ users globally.",
    ],
  },
  {
    dates: "Aug 2001 – Aug 2003",
    location: "Mumbai, India",
    sector: "Capital Markets",
    title: "Onsite System Analyst & Module Lead",
    client: "National Stock Exchange",
    program: "Derivatives Trading",
    points: [
      "Led a 5-member team building the Futures & Options platform — the first online derivatives trading platform in India.",
      "Key SME for the derivatives trading engine; simulated live-market scenarios to benchmark order-matching capacity.",
    ],
  },
];

export const sectors: Sector[] = ["Banking", "Capital Markets", "Insurance", "Automotive & Airline"];

export type CaseStudy = {
  id: string;
  label: string;
  title: string;
  metrics: Stat[];
  context: string;
  role: string;
  delivered: string;
  tags: string[];
  quote?: { text: string; by: string };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "commerzbank",
    label: "Commerzbank AG · 2015–16",
    title: "Phoenix: consolidating international trade finance",
    metrics: [
      { value: "90M+", label: "records migrated legacy → target" },
      { value: "19 markets", label: "on one core banking product" },
      { value: "95%+", label: "customer satisfaction" },
    ],
    context: "Trade finance spread across legacy systems in 19 markets, to be consolidated onto one product with 6 modules.",
    role: "Senior Functional Architect. Ran the As-Is study of 25+ IT processes for Limits & Collateral Management and led approvals through the IT Steering Committee.",
    delivered: "Reconciled migration strategy for 90M+ records, 1,000+ business test cases, and co-led a 1,200-application cloud migration RFP.",
    tags: ["Data migration", "Functional architecture", "Collateral management"],
    quote: {
      text: "Became the ‘go-to’ person on his team for subject matter expertise and software capability.",
      by: "Marty Bucher, Ankur’s client at Commerzbank",
    },
  },
  {
    id: "merrill-lynch",
    label: "Merrill Lynch · 2004–08",
    title: "An enterprise integration backbone and global SWIFT flow",
    metrics: [
      { value: "16M", label: "transactions processed a day" },
      { value: "65 apps", label: "integrated through 250 processes" },
      { value: "4 cities", label: "New York · Mexico · London · Mumbai" },
    ],
    context: "Dozens of capital-markets applications needed a common way to exchange messages, at high volume.",
    role: "Onsite Project Lead & BA, leading an 8-member US / UK / India team through design, build, test and production.",
    delivered: "The EAI framework, the end-to-end SWIFT flow to Global Custody Services, and the MSR and Datalink frameworks.",
    tags: ["EAI / middleware", "SWIFT", "Global delivery"],
    quote: {
      text: "Supported a critical, global, high-volume message interface for the application I managed.",
      by: "Marie Dulin, Global Markets VP, Bank of America Merrill Lynch",
    },
  },
  {
    id: "bofa-merger",
    label: "Bank of America Merrill Lynch · 2008–13",
    title: "Back-office integration in one of Wall Street’s biggest mergers",
    metrics: [
      { value: "20 apps", label: "consolidated after the merger" },
      { value: "4 asset classes", label: "Equities · Fixed Income · FX · Derivatives" },
    ],
    context: "Bank of America’s acquisition of Merrill Lynch left overlapping back-office systems and reference data.",
    role: "Led consulting on retirement priorities, risk and cost-benefit; owned SOWs, pricing, SLAs and contract negotiation.",
    delivered: "Consolidated 20 applications and built “golden source” stores from Bloomberg, Thomson Reuters and NYSE (FIX) data.",
    tags: ["M&A integration", "Reference data", "Commercial ownership"],
  },
  {
    id: "svb",
    label: "Silicon Valley Bank · 2020–23",
    title: "Regulatory data stewardship, FP&A and cloud ops — in one role",
    metrics: [
      { value: "US$5.6M", label: "annual Risk Technology portfolio managed" },
      { value: "2 regulators", label: "US Federal Reserve · Bank of England" },
    ],
    context: "The bank’s LFI and UK Subsidiarization programs demanded governed data for Fed and BoE reporting.",
    role: "Data steward, Senior BA and FP&A lead, partnering with Divisional CIOs on P&L and budget roadmaps.",
    delivered: "Business data rules and stewarded elements for FR Y-14Q / Y-14M; L1–L3 process maps for AWS Cloud Ops.",
    tags: ["Regulatory reporting", "Data governance", "FP&A"],
  },
];

export type TestimonialGroup = "Clients" | "Bank leaders" | "Team & peers";

export type Testimonial = {
  name: string;
  role: string;
  context: string;
  group: TestimonialGroup;
  badge: string;
  quote: string;
  /** Short version used on the home page. */
  short?: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marty Bucher",
    role: "Banking · Business Analysis · Delivery Management",
    context: "Ankur’s client at Commerzbank",
    group: "Clients",
    badge: "Client",
    featured: true,
    quote:
      "I worked with Ankur on a global replacement project at Commerzbank for about two years. Immediately he made deep dives into the old product functionality and new product specified behaviour, and became the ‘go-to’ person on his team for subject matter expertise and software capability. A great analyst, he listens carefully, asks the right questions, maps his extensive knowledge and experience into the current project, and contributes greatly to the project’s success.",
    short:
      "He made deep dives into the old product functionality and new product specified behaviour, and became the “go-to” person on his team for subject matter expertise and software capability. A great analyst — he listens carefully and asks the right questions.",
  },
  {
    name: "Lalitha Gollamudi",
    role: "Founder & CEO",
    context: "Ankur’s client",
    group: "Clients",
    badge: "Client",
    quote: "Ankur is very diligent and hard working. Cooperative and works well with others.",
  },
  {
    name: "Boris Shlenskiy",
    role: "Director, Bank of America Merrill Lynch",
    context: "Worked together for many years",
    group: "Bank leaders",
    badge: "Senior leader",
    quote:
      "I worked with Ankur for many years and recommend him as a very professional and responsible technologist. He really knows what he is in charge of and always acts as a great partner, providing outstanding quality work. It was a great pleasure to work with Ankur, and I wish him success in his professional career.",
    short:
      "A very professional and responsible technologist. He really knows what he is in charge of and always acts as a great partner, providing outstanding quality work.",
  },
  {
    name: "Marie Dulin",
    role: "Global Markets VP, Bank of America Merrill Lynch",
    context: "Application owner",
    group: "Bank leaders",
    badge: "Senior leader",
    quote:
      "Ankur is a highly skilled developer with a wide range of knowledge. He is dependable and great to work with. He always came through with the right solutions quickly and supported a critical, global, high-volume message interface for the application I managed. I would highly recommend Ankur.",
    short:
      "He always came through with the right solutions quickly and supported a critical, global, high-volume message interface for the application I managed.",
  },
  {
    name: "Adrian Simo",
    role: "VP, Bank of America Merrill Lynch",
    context: "Partner team",
    group: "Bank leaders",
    badge: "Senior leader",
    quote:
      "Ankur is one of those rare guys that are always there for you when you need them. You realise the full extent of how much he did for you once it is too late and he is gone. I cannot thank him enough for all he did for us in the last few years.",
  },
  {
    name: "Neha Attri",
    role: "AVP, Third Party Risk Management",
    context: "Worked with Ankur for 2 years at TCS",
    group: "Team & peers",
    badge: "Same team · TCS",
    quote:
      "Ankur is a rare combination of patience, capabilities and business skills. I was always impressed by Ankur’s immense business knowledge and negotiation skills. He handled even the toughest situations and clients — effortlessly. His effective management always helped the team meet the deadlines. I had the opportunity to learn a lot under his mentorship. Ankur would be an asset to any team.",
    short:
      "A rare combination of patience, capabilities and business skills. He handled even the toughest situations and clients — effortlessly.",
  },
  {
    name: "Sandeep Kumar",
    role: "Test Manager, Tata Consultancy Services",
    context: "German bank migration program",
    group: "Team & peers",
    badge: "Same team · TCS",
    quote:
      "I worked with Ankur on the migration project for one of the largest German banks, which was critical for the customer as well as our organisation. Ankur was always the single point of contact where all our business queries got resolved — sometimes even the customer’s. He really helped the customer streamline their business with their own customers’ future needs in mind. A great team player, always approachable and ready to support everyone.",
  },
  {
    name: "John Frogley",
    role: "Senior Business Analyst, Bank of America (Merrill)",
    context: "Messaging support group",
    group: "Team & peers",
    badge: "Colleague",
    quote:
      "I worked with Ankur when he was in the messaging support group. He was always knowledgeable and helpful to me and my project. He was a good colleague.",
  },
  {
    name: "Karthik Subramaniam",
    role: "Software Engineer",
    context: "Ankur was his senior",
    group: "Team & peers",
    badge: "Team member",
    quote:
      "Ankur is always best at what he does, and is always there for the team. He was very supportive and encouraging. He was a great team leader to work with.",
  },
];

export const careerPath = [
  { year: "2001", name: "NSE", place: "Mumbai" },
  { year: "2003", name: "Merrill Lynch", place: "London · New York" },
  { year: "2008", name: "BofA Merrill Lynch", place: "New York" },
  { year: "2013", name: "MBA, HEC Paris", place: "Paris" },
  { year: "2015", name: "Commerzbank · BMW FS", place: "Frankfurt · Munich" },
  { year: "2020", name: "Silicon Valley Bank", place: "Regulatory · FP&A" },
  { year: "2023", name: "WestJet", place: "Calgary" },
  { year: "2025", name: "AIG Europe", place: "Dublin" },
];

export const education = [
  {
    dates: "2013 – 2015",
    school: "HEC Paris",
    detail: "MBA, Finance & Strategy · GPA 3.64 / 4.0 · GMAT 710",
    extra: "Vice President, General Management & Leadership Club · Convener & Organizer, CEO Speaker Series",
  },
  {
    dates: "2012",
    school: "Columbia Business School",
    detail: "Exchange MBA elective: Strategic Issues Facing Investment Banks · Grade A",
  },
  {
    dates: "2012",
    school: "Columbia University, School of Continuing Education",
    detail: "Post-Baccalaureate Certificate in Business · GPA 3.66 / 4.0",
    extra: "Ran a month-long “Knowledge Audit” of a bilingual educational institute in New York, delivering a full knowledge strategy.",
  },
  {
    dates: "1997 – 2001",
    school: "MMM University of Technology",
    detail: "Bachelor of Engineering, Electrical Engineering · First Class",
  },
];

export const certifications = [
  { name: "AIMates AI Passport", meta: "AIMates · 2026" },
  { name: "IIBA BABOK Certificate in Business Analysis", meta: "75 PD hours · Grade A" },
  { name: "Certificate in European Banking", meta: "TCS Business Domain Academy · Grade A" },
  { name: "Finastra Loan IQ", meta: "40 hours" },
  { name: "TCS Ambassador Corps Sales Leadership Program", meta: "Wave 57 · Nov 2023" },
  { name: "TCS TRANSCEND Pre-Sales Program", meta: "TCS" },
  { name: "TCS EMBARK Leadership Certificate · TCS Contextual Master", meta: "TCS" },
];

export const inProgress = [
  { name: "PMP", meta: "35 hours of PMBOK training completed" },
  { name: "Google Cloud Digital Leader", meta: "In progress" },
];

export const languages = [
  { name: "English", level: "Full professional" },
  { name: "French", level: "Elementary" },
];

export const principles = [
  {
    title: "See the risk before the client does",
    body: "Incident trend analysis, RCA and early escalation — so recurring issues get eliminated, not managed.",
  },
  {
    title: "Speak business and technology",
    body: "From a SWIFT message flow to a P&L roadmap, I translate clearly between business users, engineers and the board.",
  },
  {
    title: "Own the commercials too",
    body: "SOWs, pricing, SLAs, vendor management and pre-sales — delivery leadership that also grows the account.",
  },
];
