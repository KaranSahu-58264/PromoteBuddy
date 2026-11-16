export interface ClientBrand {
  id: string;
  name: string;
  category: string;
  tagline?: string;
  scope: string;
  accentColor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'smm' | 'ads' | 'design';
  categoryLabel: string;
  image: string;
  headline: string;
  highlightMetric: string;
  metrics: { label: string; value: string }[];
  summary: string;
  deliverables: string[];
}

export interface ServiceDropdownItem {
  id: string;
  number: string;
  pillar: 'marketing' | 'smm' | 'design';
  pillarLabel: string;
  title: string;
  shortHook: string;
  details: string;
  deliverables: string[];
  outcome: string;
}

export interface CreativeWorkItem {
  id: string;
  title: string;
  brand: 'voltage' | 'fibertek';
  brandLabel: string;
  image: string;
}

export const WHATSAPP_NUMBER = '919669042618';
export const WHATSAPP_DIRECT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Ayush, I visited PromoteBuddy and I'd love to discuss growing my brand!"
)}`;
export const INSTAGRAM_PROFILE_URL =
  'https://www.instagram.com/promotebuddy11?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==';

export const CLIENT_BRANDS: ClientBrand[] = [
  {
    id: 'voltage-lubes',
    name: 'Voltage Lubes',
    category: 'Industrial & Auto',
    tagline: 'Quality & Quantity on Time Every Time',
    scope: 'Instagram 9-Grid, 3D Product Mockups, Dealer Ads',
    accentColor: '#0284c7',
  },
  {
    id: 'arham-palladium',
    name: 'Arham Palladium',
    category: 'Commercial Real Estate',
    tagline: 'Space That Moves You',
    scope: 'High-Converting Facebook Ads, Leasing Funnel',
    accentColor: '#d97706',
  },
  {
    id: 'alert-sgs',
    name: 'Alert SGS Pvt. Ltd.',
    category: 'Corporate Security',
    tagline: 'Trusted Protection & Surveillance',
    scope: 'B2B Lead Gen Ads, Print & Brand Positioning',
    accentColor: '#dc2626',
  },
  {
    id: 'avs-solar',
    name: 'AVS Solar Energy',
    category: 'Renewable CleanTech',
    tagline: 'Power That You Can Trust',
    scope: 'Rooftop Solar Lead Gen, Regional Meta Ads',
    accentColor: '#0284c7',
  },
  {
    id: 'devdepam-solar',
    name: 'Devdepam Solar',
    category: 'Solar & Energy',
    tagline: 'Suraj Ki Oorja, Aapke Ghar Ki Taakat',
    scope: 'Conversion Campaigns, Subsidy Awareness Creatives',
    accentColor: '#eab308',
  },
  {
    id: 'fibertek',
    name: 'Fibertek (Fibcon)',
    category: 'Construction Tech',
    tagline: 'The Concrete Reinforcement Fiber',
    scope: 'SMM Campaign, Packaging Design, Tech Infographics',
    accentColor: '#2563eb',
  },
  {
    id: 'a-one-motors',
    name: 'A-One Motors',
    category: 'EV & Mobility',
    tagline: 'E-Rickshaws and E-Cargo Solutions',
    scope: 'Digital Marketing & Dealership Inbound Leads',
    accentColor: '#4f46e5',
  },
  {
    id: 'amritrich',
    name: 'Amritrich',
    category: 'FMCG & Wellness',
    tagline: 'Wellness In Every Drop',
    scope: 'Packaging Creatives, SMM & Brand Identity',
    accentColor: '#059669',
  },
  {
    id: 'aargo-lifestyle',
    name: 'Aargo Lifestyle',
    category: 'Fashion & Apparel',
    tagline: 'Contemporary Living',
    scope: 'Instagram Creative Direction & Lookbooks',
    accentColor: '#0f172a',
  },
  {
    id: 'annapurna-marketing',
    name: 'Annapurna Marketing',
    category: 'Distribution',
    tagline: 'Regional Distribution Excellence',
    scope: 'B2B Marketing Collateral & Ad Creatives',
    accentColor: '#ea580c',
  },
  {
    id: 'bcb-construction',
    name: 'BCB Construction',
    category: 'Infrastructure',
    tagline: "Bhagwati Construction & Builder's",
    scope: 'Project Branding, Site Signage & Lead Ads',
    accentColor: '#334155',
  },
];

export const SERVICE_DROPDOWNS: ServiceDropdownItem[] = [
  {
    id: 'dm-growth',
    number: '01',
    pillar: 'marketing',
    pillarLabel: 'Digital Marketing',
    title: 'Paid Ads, SEO & Lead Generation Funnels',
    shortHook: 'Targeted Meta, Google & LinkedIn ads paired with local SEO and CRM automation.',
    details:
      'We combine persuasive regional copywriting with sharp visual hooks to capture high-intent leads straight into your WhatsApp or CRM while building long-term organic search rankings.',
    deliverables: [
      'Meta (Instagram & Facebook), Reels & Google Ads',
      'Local SEO positioning, UX copy & email marketing',
      'WhatsApp & Instant Lead Form CRM routing',
    ],
    outcome: '4.8x average ROAS · Lower cost per lead',
  },
  {
    id: 'smm-partnership',
    number: '02',
    pillar: 'smm',
    pillarLabel: 'Social Media Partnership',
    title: 'Strategic Planning, Content Creation & Analytics',
    shortHook: 'Monthly calendars, 9-grid Reels, active community care, and transparent KPI audits.',
    details:
      'Every month starts with a research-backed content calendar, followed by custom 3D renders, Reels, and bi-weekly analytics tying reach directly to real inquiries.',
    deliverables: [
      'Structured monthly content calendars & scheduling',
      'Custom 9-grid feed design, Reels & community DMs',
      'Bi-weekly reach, retention & ROI reporting',
    ],
    outcome: '+310% average engagement lift',
  },
  {
    id: 'design-ui-brand',
    number: '03',
    pillar: 'design',
    pillarLabel: 'Design & Visuals',
    title: 'UI/UX Websites, Branding & Product Packaging',
    shortHook: 'Apple-clean websites, iconic logos, 3D packaging mockups, and pitch decks.',
    details:
      'Your visual identity dictates how much customers trust you. We craft responsive landing pages, vector logos, packaging visuals, and corporate presentations that stand out.',
    deliverables: [
      'UI/UX for websites, apps & landing pages',
      'Logotypes, packaging & 3D product visuals',
      'Presentations, brochures & corporate cards',
    ],
    outcome: 'Premium authority on every touchpoint',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'voltage-lubes-case',
    title: 'Instagram Grid & Brand Elevation',
    client: 'Voltage Lubes',
    category: 'smm',
    categoryLabel: 'Social Media Management',
    image: './assets/portfolio/crops/mockup_smm_phones.png',
    headline: 'Turning an industrial lubricant manufacturer into a bold digital brand.',
    highlightMetric: '+2,564 Followers · +310% Engagement',
    metrics: [
      { label: 'Organic Followers', value: '2,564+' },
      { label: 'Feed Engagement', value: '+310%' },
      { label: 'Dealer Inquiries', value: '45+ / mo' },
    ],
    summary:
      'Engineered an authoritative Instagram presence featuring 3D bottle renders, festive campaigns, and educational carousels for mechanics and fleet owners.',
    deliverables: ['9-Grid Visual System', '3D Product Renders', 'Dealer Lead Funnel', 'Festival Creatives'],
  },
  {
    id: 'arham-palladium-case',
    title: 'Commercial Leasing Lead Funnel',
    client: 'Arham Palladium',
    category: 'ads',
    categoryLabel: 'Performance Ads',
    image: './assets/portfolio/crops/ad_arham_palladium.png',
    headline: '"Business ko sirf space nahi... ek perfect location chahiye!"',
    highlightMetric: '280+ Qualified Leads · ₹142 CPL',
    metrics: [
      { label: 'Cost Per Lead', value: '₹142' },
      { label: 'Qualified Leads', value: '280+' },
      { label: 'Ad Click Rate', value: '3.8%' },
    ],
    summary:
      'High-converting Meta ad campaign targeting showrooms, healthcare clinics, coaching centers, and retail brands looking for prime commercial spaces in Raipur.',
    deliverables: ['Geo-Targeted Meta Ads', 'High-CTR Visual Hooks', 'Instant Lead Forms'],
  },
  {
    id: 'solar-campaigns-case',
    title: 'Solar Adoption & Subsidy Campaigns',
    client: 'AVS Solar & Devdepam Solar',
    category: 'ads',
    categoryLabel: 'CleanTech Lead Gen',
    image: './assets/portfolio/crops/ad_avs_solar.png',
    headline: 'Relatable local storytelling driving rooftop solar inquiries across Chhattisgarh.',
    highlightMetric: '620+ Solar Leads · 4.8x ROAS',
    metrics: [
      { label: 'Solar Inquiries', value: '620+' },
      { label: 'Campaign ROAS', value: '4.8x' },
      { label: 'Lead Quality', value: '98%' },
    ],
    summary:
      'Built high-trust regional hooks ("Ab Sharma ji bhi solar laga chuke hain...") paired with clear 25-year performance and government subsidy callouts.',
    deliverables: ['Regional Hook Copywriting', 'WhatsApp Lead Routing', 'Homeowner Retargeting'],
  },
  {
    id: 'alert-sgs-case',
    title: 'Corporate Security Acquisition',
    client: 'Alert SGS Pvt. Ltd.',
    category: 'ads',
    categoryLabel: 'B2B Paid Ads',
    image: './assets/portfolio/crops/ad_alert_sgs.png',
    headline: 'High-authority security positioning for banks, hotels & industrial plants.',
    highlightMetric: '18+ Corporate Contracts · 3.4% CTR',
    metrics: [
      { label: 'B2B Contracts', value: '18+' },
      { label: 'Ad CTR', value: '3.4%' },
      { label: 'Verified Leads', value: '82%' },
    ],
    summary:
      'Designed structured service creatives showcasing night checking, bank security, and industrial surveillance across Central India.',
    deliverables: ['Authority Creative Design', 'B2B Decision-Maker Ads', 'Direct Call Tracking'],
  },
  {
    id: 'fibertek-case',
    title: 'Product Creative & Packaging',
    client: 'Fibertek (Fibcon)',
    category: 'design',
    categoryLabel: 'Brand & Packaging',
    image: './assets/aistudio/Fib_con_poster_design_2.jpg_98dc7f26.jpeg',
    headline: 'High-impact product visuals built to convert dealers and end buyers.',
    highlightMetric: '+140% Brand Recall · Pan-India',
    metrics: [
      { label: 'Market Reach', value: 'Pan-India' },
      { label: 'Brand Recall', value: '+140%' },
      { label: 'Catalog Views', value: '4.2K+' },
    ],
    summary:
      'Developed clean packaging mockups, 3D product compositions, and clear technical benefit callouts that elevate industrial brands on social feeds.',
    deliverables: ['3D Packaging Visuals', 'Technical Infographics', 'Distributor Banners'],
  },
];

export const CREATIVE_GALLERY: CreativeWorkItem[] = [
  {
    id: 'cw-fibertek-strongest',
    title: 'Strongest Concrete Fiber Campaign',
    brand: 'fibertek',
    brandLabel: 'Fibertek',
    image: './assets/aistudio/Fib_con_poster_design_2.jpg_98dc7f26.jpeg',
  },
  {
    id: 'cw-voltage-lineup-3',
    title: 'Car Coolant & Axle Lineup',
    brand: 'voltage',
    brandLabel: 'Voltage Lubes',
    image: './assets/aistudio/Artboard_2.jpg_aa464d86.jpeg',
  },
  {
    id: 'cw-voltage-star-4t',
    title: 'Star 4T 20W40 Action Poster',
    brand: 'voltage',
    brandLabel: 'Voltage Lubes',
    image: './assets/aistudio/11.jpg_606b3331.jpeg',
  },
  {
    id: 'cw-voltage-shine-girl',
    title: 'Shine HLP46 Brand Ambassador',
    brand: 'voltage',
    brandLabel: 'Voltage Lubes',
    image: './assets/aistudio/22.jpg_78380fc8.jpeg',
  },
  {
    id: 'cw-voltage-stargold',
    title: 'Stargold 4T Performance Visual',
    brand: 'voltage',
    brandLabel: 'Voltage Lubes',
    image: './assets/aistudio/33.jpg_5a281c7a.jpeg',
  },
  {
    id: 'cw-fibertek-builder',
    title: 'Crack-Resistant Fiber Poster',
    brand: 'fibertek',
    brandLabel: 'Fibertek',
    image: './assets/aistudio/Fib_con_poster_design_1.jpg_ee263751.jpeg',
  },
  {
    id: 'cw-voltage-booster',
    title: 'Booster 5W30 Synthetic Ad',
    brand: 'voltage',
    brandLabel: 'Voltage Lubes',
    image: './assets/aistudio/Artboard_1.jpg_47fffdcb.jpeg',
  },
  {
    id: 'cw-voltage-coldstar',
    title: 'Coldstar Green 1:5 Coolant',
    brand: 'voltage',
    brandLabel: 'Voltage Lubes',
    image: './assets/aistudio/55.jpg_f1b1bbe8.jpeg',
  },
  {
    id: 'cw-voltage-tractor',
    title: 'Shine HLP46 Agriculture Visual',
    brand: 'voltage',
    brandLabel: 'Voltage Lubes',
    image: './assets/aistudio/44.jpg_83ec0624.jpeg',
  },
  {
    id: 'cw-voltage-6range',
    title: 'Genuine Voltage 6-Product Range',
    brand: 'voltage',
    brandLabel: 'Voltage Lubes',
    image: './assets/aistudio/Artboard_4.jpg_d984332a.jpeg',
  },
  {
    id: 'cw-voltage-axle-desert',
    title: 'Axle EP 85W140 Desert SUV',
    brand: 'voltage',
    brandLabel: 'Voltage Lubes',
    image: './assets/aistudio/Artboard_3.jpg_3a25027c.jpeg',
  },
  {
    id: 'cw-fibertek-elephant',
    title: 'Elephant Strength Comparison',
    brand: 'fibertek',
    brandLabel: 'Fibertek',
    image: './assets/aistudio/Fibcon.jpg_6eb070a4.jpeg',
  },
];
