/**
 * All editable site content lives here.
 *
 * To add a new academic document:
 *   1. Drop the PDF into /public/documents/
 *   2. Add an entry to the matching category's `items` array below.
 * No layout code needs to change — the grid renders whatever is in this file.
 */

export const profile = {
  name: 'Victor Bazet-Braun',
  tagline: 'Finance + AI',
  intro:
    'Finance major at The College of New Jersey and founder of Shuren, where I build and sell AI agents to small businesses. I work at the point where financial analysis meets practical automation.',
  email: 'victor.bazetbraun@gmail.com',
  photo: { src: '/images/victor.jpg', alt: 'Portrait of Victor Bazet-Braun' },
  location: 'In Ewing, New Jersey, when in the US, and Narbonne when in France',
  resumeUrl: '/documents/victor-bazet-braun-resume.pdf',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/victorbazetbraun' },
    { label: 'GitHub', href: 'https://github.com/victorbazet' },
  ],
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Shuren', href: '#shuren' },
  { label: 'Academic Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  paragraphs: [
    'I moved from France to the United States for my last year of high school and stayed for university. I am now a senior at The College of New Jersey studying Finance, on the Dean’s List every semester from Fall 2024 through Spring 2026, and graduating in May 2027.',
    'Alongside my degree I founded Shuren, an agency that builds AI agents for small businesses — mostly hotels and restaurants — to automate the repetitive work that eats their day. Running it taught me as much about pricing, client work, and operations as any course has.',
    'What interests me most is the intersection of finance and AI: using models and automation to make analysis faster and better, not just louder. I am currently looking for summer 2027 internships in quantitative and financial roles.',
  ],
  facts: [
    { label: 'University', value: 'The College of New Jersey' },
    { label: 'Major', value: 'Finance, B.S. — Class of 2027' },
    { label: 'Honors', value: 'Dean’s List, Fall 2024 – Spring 2026' },
    { label: 'Based in', value: 'Ewing, NJ · Narbonne, France' },
  ],
}

export const shuren = {
  name: 'Shuren',
  url: 'https://shuren.fr',
  summary:
    'An AI agent agency for small businesses. Shuren designs, builds, and maintains automations for hotels and restaurants — handling reservations, guest messaging, review responses, and back-office admin that would otherwise be done by hand.',
  highlights: [
    'Built and sold agents to hotel and restaurant clients, from first scoping call through deployment and support.',
    'Agents run on the Claude API, orchestrated with Make and n8n so clients keep working in the tools they already use.',
    'Own the full stack of the business: product, pricing, client acquisition, billing, and delivery.',
  ],
  stack: ['Claude API', 'Make', 'n8n', 'Cloudflare Pages', 'Stripe'],
}

/**
 * Academic work. Each item:
 *   title       — shown as the card heading
 *   description — one or two lines; keep it short
 *   file        — filename inside /public/documents/
 */
export const academicWork = [
  {
    id: 'marketing',
    title: 'Marketing & Strategy',
    blurb: 'Brand strategy and go-to-market plans built around real campaigns and products.',
    items: [
      {
        title: 'Soto × Under Armour × Kith',
        // TODO: replace with your own one-line description.
        description:
          'A three-way brand partnership plan positioning Juan Soto across performance and streetwear audiences.',
        file: 'marketing-soto-under-armour-kith.pdf',
      },
      {
        title: 'David Ortiz',
        // TODO: replace with your own one-line description.
        description:
          'A personal-brand marketing plan for David Ortiz, covering audience segmentation, positioning, and activation.',
        file: 'marketing-david-ortiz.pdf',
      },
      {
        title: 'Hyundai Virtual Reality Car Launch',
        // TODO: replace with your own one-line description.
        description:
          'A launch campaign using virtual reality showrooms to reach buyers outside the traditional dealership.',
        file: 'marketing-hyundai-vr-launch.pdf',
      },
    ],
  },
  {
    id: 'finance',
    title: 'Finance & Valuation',
    blurb: 'Company analysis and equity valuation work built from financial statements.',
    items: [
      {
        title: 'Nike — Analysis & Stock Valuation',
        // TODO: replace with your own one-line description.
        description:
          'Full equity analysis of Nike: financial statement review, comparables, and an intrinsic value estimate.',
        file: 'valuation-nike.pdf',
      },
      {
        title: 'Coca-Cola — Analysis & Stock Valuation',
        // TODO: replace with your own one-line description.
        description:
          'Valuation of Coca-Cola with a look at margin stability, capital structure, and dividend sustainability.',
        file: 'valuation-coca-cola.pdf',
      },
    ],
  },
  {
    id: 'essays',
    title: 'Essays',
    blurb: 'Writing on where finance, technology, and law collide.',
    items: [
      {
        title: 'FTX and the Collapse of Trust',
        // TODO: replace with your own one-line description.
        description:
          'Legal and ethical failures behind the FTX collapse, and what they revealed about governance in crypto markets.',
        file: 'essay-ftx-collapse-of-trust.pdf',
      },
      {
        title: 'AI: Reshaping the Fields of Business and Law',
        // TODO: replace with your own one-line description.
        description:
          'How AI is changing professional work in business and law, and where the limits of automation sit.',
        file: 'essay-ai-business-and-law.pdf',
      },
      {
        title: 'The Inevitable Rise of Cryptocurrencies',
        // TODO: replace with your own one-line description.
        description:
          'An argument for why digital money may displace parts of traditional currency, and what would have to hold for it.',
        file: 'essay-rise-of-cryptocurrencies.pdf',
      },
    ],
  },
]

export const skills = [
  {
    title: 'Finance',
    items: ['Financial analysis', 'Equity valuation', 'Financial modeling', 'Comparable company analysis'],
  },
  {
    title: 'Technical',
    items: ['Python', 'SQL', 'R', 'JavaScript', 'Claude API', 'Make', 'n8n', 'Excel', 'PowerPoint'],
  },
  {
    title: 'Languages',
    items: ['French — native', 'English — bilingual', 'Spanish — intermediate'],
  },
]

export const contact = {
  heading: 'Get in touch',
  note: 'Open to summer 2027 internship opportunities in finance and AI.',
}
