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
  { key: 'about', href: '#about' },
  { key: 'shuren', href: '#shuren' },
  { key: 'experience', href: '#experience' },
  { key: 'work', href: '#work' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
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
 * Work experience, newest first.
 * Localised role titles, dates, locations, and bullet points live in `copy` below,
 * in the same order as this array.
 */
export const experience = [
  {
    id: 'gerard-bertrand',
    company: 'Groupe Gérard Bertrand — Château l’Hospitalet',
  },
]

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

export const copy = {
  en: {
    nav: { about: 'About', shuren: 'Shuren', experience: 'Experience', work: 'Academic Work', skills: 'Skills', contact: 'Contact' },
    menu: 'Menu', close: 'Close', sections: 'Sections', language: 'Language',
    hero: { email: 'Email me', resume: 'Download resume', intro: profile.intro, location: profile.location },
    ask: { title: 'Ask my AI', label: 'Ask a question about Victor', placeholder: 'Ask a question about me…', send: 'Send question', reset: 'Clear', limit: 'Question limit reached. Email me to keep talking.', disclaimer: 'Answers are AI-generated and may contain mistakes: email me to confirm anything important.', suggestions: ['What does Shuren actually do?', 'What did he do at Gérard Bertrand?', 'Why finance and AI?'], errors: { not_configured: 'The assistant is offline right now. Email me instead.', rate_limited: 'Too many questions in a short time. Try again in a few minutes.', default: 'Something went wrong on my side. Try again, or email me.' } },
    about: { eyebrow: 'About', title: 'Finance, with a build-it habit', facts: ['University', 'Major', 'Honors', 'Based in'], paragraphs: about.paragraphs, values: about.facts.map((fact) => fact.value) },
    shuren: { eyebrow: 'Featured project', stack: 'Stack', visit: 'Visit shuren.fr', summary: shuren.summary, highlights: shuren.highlights },
    experience: { eyebrow: 'Experience', title: 'Where I have worked', roles: ['Finance Intern, Assistant to the General Manager'], locations: ['Narbonne, France'], dates: ['June – July 2026'], points: [['Assisted the General Manager with day-to-day finance operations, including cash flow monitoring and budget analysis for the property.', 'Tracked and reported on treasury, reconciling daily cash positions across departments.', 'Supported budget analysis by compiling and checking expense data against departmental budgets.', 'Prepared summary reports and dashboards for the General Manager to support operational decision-making.']] },
    work: { eyebrow: 'Academic work', title: 'Selected coursework and writing', intro: 'Marketing plans, equity valuations, and essays written at The College of New Jersey. Every document opens as a PDF.', view: 'View PDF', categories: ['Marketing & Strategy', 'Finance & Valuation', 'Essays'], blurbs: academicWork.map((category) => category.blurb), descriptions: academicWork.map((category) => category.items.map((item) => item.description)) },
    skills: { eyebrow: 'Skills', title: 'What I work with', groups: ['Finance', 'Technical', 'Languages'], items: skills.map((group) => group.items) },
    contact: { eyebrow: 'Contact', heading: 'Get in touch', note: 'Open to summer 2027 internship opportunities in finance and AI.' },
  },
  fr: {
    nav: { about: 'À propos', shuren: 'Shuren', experience: 'Expérience', work: 'Travaux universitaires', skills: 'Compétences', contact: 'Contact' },
    menu: 'Menu', close: 'Fermer', sections: 'Navigation', language: 'Langue',
    hero: { email: 'Me contacter', resume: 'Télécharger mon CV', intro: 'Étudiant en finance au College of New Jersey et fondateur de Shuren, où je crée et commercialise des agents IA pour les petites entreprises. Je travaille à l’intersection de l’analyse financière et de l’automatisation concrète.', location: 'À Ewing, New Jersey, aux États-Unis, et à Narbonne, en France' },
    ask: { title: 'Interroger mon IA', label: 'Poser une question sur Victor', placeholder: 'Posez-moi une question…', send: 'Envoyer la question', reset: 'Effacer', limit: 'Limite de questions atteinte. Écrivez-moi pour continuer.', disclaimer: 'Les réponses sont générées par IA et peuvent contenir des erreurs : écrivez-moi pour confirmer un point important.', suggestions: ['Que fait concrètement Shuren ?', 'Qu’a-t-il fait chez Gérard Bertrand ?', 'Pourquoi la finance et l’IA ?'], errors: { not_configured: 'L’assistant est hors ligne pour le moment. Écrivez-moi plutôt.', rate_limited: 'Trop de questions en peu de temps. Réessayez dans quelques minutes.', default: 'Une erreur est survenue de mon côté. Réessayez ou écrivez-moi.' } },
    about: { eyebrow: 'À propos', title: 'La finance, avec le réflexe de construire', facts: ['Université', 'Spécialisation', 'Distinctions', 'Basé entre'], values: ['The College of New Jersey', 'Finance, B.S. — promotion 2027', 'Dean’s List, automne 2024 – printemps 2026', 'Ewing, NJ · Narbonne, France'], paragraphs: ['J’ai quitté la France pour les États-Unis lors de ma dernière année de lycée, puis j’y suis resté pour mes études. Je suis aujourd’hui en dernière année au College of New Jersey, où j’étudie la finance. Je figure au Dean’s List chaque semestre depuis l’automne 2024 et serai diplômé en mai 2027.', 'En parallèle de mes études, j’ai fondé Shuren, une agence qui développe des agents IA pour les petites entreprises — surtout des hôtels et des restaurants — afin d’automatiser les tâches répétitives qui encombrent leur quotidien. Lancer l’activité m’a autant appris sur les prix, les clients et les opérations que mes cours.', 'Ce qui m’intéresse le plus est l’intersection de la finance et de l’IA : utiliser des modèles et l’automatisation pour rendre l’analyse plus rapide et plus pertinente, pas simplement plus bruyante. Je recherche actuellement un stage d’été 2027 dans un rôle quantitatif ou financier.'] },
    shuren: { eyebrow: 'Projet à la une', stack: 'Technologies', visit: 'Visiter shuren.fr', summary: 'Une agence d’agents IA pour les petites entreprises. Shuren conçoit, déploie et maintient des automatisations pour les hôtels et les restaurants : réservations, messages aux clients, réponses aux avis et tâches administratives qui seraient autrement effectuées à la main.', highlights: ['Conception et commercialisation d’agents auprès d’hôtels et de restaurants, du premier échange jusqu’au déploiement et au suivi.', 'Les agents s’appuient sur l’API Claude, orchestrée avec Make et n8n, afin que les clients continuent à travailler dans leurs outils habituels.', 'Gestion de l’ensemble de l’activité : produit, tarification, acquisition clients, facturation et réalisation.'] },
    experience: { eyebrow: 'Expérience', title: 'Mon parcours professionnel', roles: ['Stagiaire finance, assistant du directeur général'], locations: ['Narbonne, France'], dates: ['Juin – juillet 2026'], points: [['Assistance du directeur général sur les opérations financières quotidiennes, dont le suivi de trésorerie et l’analyse budgétaire du domaine.', 'Suivi et reporting de la trésorerie, avec rapprochement quotidien des positions de caisse de chaque service.', 'Participation à l’analyse budgétaire : consolidation et contrôle des dépenses au regard des budgets par service.', 'Préparation de rapports de synthèse et de tableaux de bord destinés au directeur général pour éclairer les décisions opérationnelles.']] },
    work: { eyebrow: 'Travaux universitaires', title: 'Une sélection de projets et de travaux', intro: 'Plans marketing, valorisations boursières et essais écrits au College of New Jersey. Chaque document s’ouvre en PDF.', view: 'Voir le PDF', categories: ['Marketing & stratégie', 'Finance & valorisation', 'Essais'], blurbs: ['Stratégies de marque et plans de mise sur le marché élaborés autour de campagnes et de produits réels.', 'Analyses d’entreprises et valorisations boursières fondées sur les états financiers.', 'Réflexions sur les liens entre finance, technologie et droit.'], descriptions: [['Un plan de partenariat entre trois marques pour positionner Juan Soto auprès des publics du sport de haut niveau et du streetwear.', 'Un plan marketing de marque personnelle pour David Ortiz, couvrant la segmentation, le positionnement et l’activation.', 'Une campagne de lancement utilisant des showrooms en réalité virtuelle afin de toucher les acheteurs au-delà des concessions traditionnelles.'], ['Analyse complète de Nike : étude des états financiers, sociétés comparables et estimation de la valeur intrinsèque.', 'Valorisation de Coca-Cola, avec une analyse de la stabilité des marges, de la structure du capital et de la pérennité du dividende.'], ['Les échecs juridiques et éthiques à l’origine de l’effondrement de FTX et ce qu’ils révèlent sur la gouvernance des marchés crypto.', 'Comment l’IA transforme le travail professionnel dans les affaires et le droit, ainsi que les limites de l’automatisation.', 'Un argumentaire sur les raisons pour lesquelles les monnaies numériques pourraient remplacer une partie des devises traditionnelles, et les conditions nécessaires.']] },
    skills: { eyebrow: 'Compétences', title: 'Mes domaines de travail', groups: ['Finance', 'Technique', 'Langues'], items: [['Analyse financière', 'Valorisation boursière', 'Modélisation financière', 'Analyse des sociétés comparables'], ['Python', 'SQL', 'R', 'JavaScript', 'API Claude', 'Make', 'n8n', 'Excel', 'PowerPoint'], ['Français — langue maternelle', 'Anglais — bilingue', 'Espagnol — intermédiaire']] },
    contact: { eyebrow: 'Contact', heading: 'Restons en contact', note: 'À la recherche d’un stage d’été 2027 en finance ou en IA.' },
  },
}
