/**
 * Single source of truth for all ASCEND FOR ALL (AFA) content.
 * Editing copy here keeps the section components purely presentational.
 */

/**
 * Build an optimised Unsplash CDN URL from a photo id.
 * These are temporary, license-free placeholders — replace the ids below (or
 * point `image` fields at /images/*.jpg) with AFA's own consented photography.
 */
const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const heroImage = img('1515658323406-25d61c141a6e', 1920)
export const aboutImage = img('1632215861513-130b66fe97f4', 1200)
export const bandImage = img('1495743472318-995197a2acc4', 1920)
export const donateImage = img('1543689604-6fe8dbcd1f59', 1920)

export const org = {
  name: 'ASCEND FOR ALL',
  abbr: 'AFA',
  type: 'Board-Led National NGO',
  tagline: 'Elevating everyone, together — including persons with disabilities',
  established: 'January 28, 2026',
  registration: {
    certificate: '7818',
    body: 'Authority for Civil Society Organizations (ACSO)',
    entityId: '01/2018',
  },
  coverage: ['Tigray', 'Amhara', 'Addis Ababa', 'Dire Dawa', 'Oromia'],
  sectors: ['Health', 'Education', 'Protection', 'Economic Empowerment'],
  contact: {
    focalPerson: 'Filimon Aregay',
    role: 'Focal Person / Executive Manager',
    phone: '+251 91 412 5845',
    phoneHref: 'tel:+251914125845',
    email: 'ascendforall24@gmail.com',
    address: 'Arat Kilo, Addis Ababa, Ethiopia (Around Tourist Hotel)',
  },
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'focus', label: 'Approach' },
  { id: 'impact', label: 'Impact' },
  { id: 'contact', label: 'Contact' },
]

export const marqueeWords = [
  'Inclusion',
  'Empowerment',
  'Accessibility',
  'Equity',
  'Rehabilitation',
  'Dignity',
  'Advocacy',
  'Independence',
  'Opportunity',
]

export const stats = [
  { value: 5, suffix: '', label: 'Regions covered across Ethiopia' },
  { value: 4, suffix: '', label: 'Thematic sectors of impact' },
  { value: 7, suffix: '+', label: 'Areas of founder expertise' },
  { value: 100, suffix: '%', label: 'Rights-based & disability-led' },
]

export const background = {
  lead: 'ASCEND FOR ALL (AFA) is a national, non-governmental, disability-led organization officially registered with the Authority for Civil Society Organizations (ACSO) under the Civil Society Organizations Proclamation of Ethiopia.',
  body: 'AFA was established by a dedicated team of multidisciplinary professionals from Social Work, Good Governance, and Sociology — with proven track records across prevention and safeguarding, Education in Emergencies, MEAL, holistic rehabilitation, MHPSS, GBV response, disability inclusion, and gender equality.',
  expertise: [
    'Prevention, Protection & Safeguarding',
    'Education in Emergencies (EiE)',
    'Monitoring, Evaluation, Accountability & Learning (MEAL)',
    'Holistic Empowerment & Rehabilitation',
    'Mental Health & Psychosocial Support (MHPSS)',
    'Gender-Based Violence (GBV) Response & Disability Inclusion',
    "Women's Empowerment & Gender Equality",
  ],
  partners: [
    'UNICEF',
    'UN Women',
    'World Vision International',
    'Food for the Hungry (FH) Ethiopia',
    'ECCD',
    'OSSHD',
    'Mekelle University',
    'Bureau of Labor & Social Affairs (BoLSA)',
  ],
}

export const visionMission = {
  vision:
    'To see an inclusive world where every person with a disability is empowered, economically independent, and a competitive force in society.',
  mission:
    'To uplift people with disabilities by removing economic and educational barriers, advocating for inclusive policies, and creating sustainable job opportunities through comprehensive support, multi-sectoral interventions, and community awareness.',
}

export const values = [
  {
    title: 'Inclusivity',
    desc: 'Ensuring no one is left behind, regardless of physical, mental, or developmental challenges.',
  },
  {
    title: 'Empowerment',
    desc: 'Believing in the boundless potential of every individual to reach their peak.',
  },
  {
    title: 'Accountability',
    desc: 'Maintaining the highest standards of transparency, institutional integrity, and financial stewardship.',
  },
  {
    title: 'Volunteerism',
    desc: 'Valuing the selfless contribution of time, skills, and knowledge for social good.',
  },
  {
    title: 'Equity',
    desc: 'Striving for fair, open, and accessible systems in all operations and decision-making.',
  },
]

export const principles = [
  {
    title: 'Synergistic Inclusion',
    desc: 'Blending local insights and capacities with international expertise, resources, and global best practices to create resilient, scalable, inclusive solutions.',
  },
  {
    title: 'Locally-led & Localization',
    desc: 'Interventions driven by local needs, indigenous knowledge, and community capacities — in close collaboration with grassroots, government, and NGO partners.',
  },
  {
    title: 'Contextual Understanding',
    desc: 'Recognising unique cultural norms, socio-economic dynamics, and regional challenges, and intentionally adapting strategies to affected populations.',
  },
  {
    title: 'Evidence-based Interventions',
    desc: 'Leveraging continuous data, monitoring, and thorough evaluation to optimise program quality and impact.',
  },
  {
    title: 'Gender Equality & Social Inclusion',
    desc: 'Mainstreaming GESI across all project cycles so women, girls, and marginalised groups with disabilities have equal representation and participation.',
  },
  {
    title: 'Sustainability & Capacity Building',
    desc: 'Building institutional and community resilience so local structures own development and manage future crises.',
  },
]

export const focus = {
  lead: 'AFA operates on a rights-based approach to disability — addressing physical, psychological, educational, and economic barriers simultaneously.',
  areas: [
    {
      title: 'Comprehensive Rehabilitation',
      desc: 'Merging medical, physical, and psychosocial rehabilitation to support independent living.',
    },
    {
      title: 'Targeted Support for Marginalised Sub-groups',
      desc: 'Specialised interventions for women, girls, and children with disabilities facing double marginalisation and heightened GBV risk.',
    },
    {
      title: 'Inclusive Infrastructural Advocacy',
      desc: 'Working with schools, health centres, and public offices to make physical and digital environments universally accessible.',
    },
    {
      title: 'Assistive Technology & Material Aid',
      desc: 'Facilitating mobility aids, specialised educational materials (Braille, sign-language tools), and medical equipment.',
    },
  ],
}

export const goals = [
  'Ensure the economic benefit, financial independence, and professional competence of persons with disabilities.',
  'Minimise school dropout rates through tailored financial and material frameworks for children with disabilities.',
  'Facilitate equitable employment, career pathways, and inclusive workplace adaptations.',
  'Lobby and advocate for disability rights and economic benefits in government policies, guidelines, and laws.',
  'Foster community, corporate, and institutional awareness of the potential of persons with disabilities.',
]

/**
 * The four thematic sectors AFA works across. `image` points to an optional
 * photo in /public/images — drop a real file there to replace the placeholder.
 */
export const programs = [
  {
    title: 'Health',
    icon: 'health',
    desc: 'Maternal & child health, WASH, MHPSS, and disease prevention — with every facility made disability-friendly and accessible.',
    points: ['Maternal & child health', 'WASH & hygiene promotion', 'Psychosocial support (MHPSS)'],
    image: img('1509099863731-ef4bff19e808'),
  },
  {
    title: 'Education',
    icon: 'education',
    desc: 'Inclusive, accessible learning — reducing dropout, adapting infrastructure, and supplying Braille and sign-language materials.',
    points: ['Education in Emergencies', 'Accessible schools', 'Braille & sign-language tools'],
    image: img('1536337005238-94b997371b40'),
  },
  {
    title: 'Protection',
    icon: 'protection',
    desc: 'Preventing and responding to GBV against women, girls and children with disabilities, with safeguarding and trauma-informed care.',
    points: ['GBV prevention & response', 'Safeguarding', 'Trauma healing & counseling'],
    image: img('1473594659356-a404044aa2c2'),
  },
  {
    title: 'Economic Empowerment',
    icon: 'economic',
    desc: 'Pathways to independence: income-generating activities, vocational training, entrepreneurship, and inclusive employment.',
    points: ['Income-generating activities', 'Vocational & life skills', 'Inclusive employment'],
    image: img('1509099955921-f0b4ed0c175c'),
  },
]

/**
 * NOTE: These are ILLUSTRATIVE placeholder stories to show the layout — they
 * are NOT real people. Replace with real, consented testimonials and photos
 * before going live. See README → "Replacing placeholder content".
 */
export const testimonials = [
  {
    quote:
      'With assistive devices and a small business grant, I now run my own tailoring shop and support my family.',
    name: 'Illustrative story',
    role: 'Entrepreneur · Tigray',
    image: img('1521510186458-bbbda7aef46b'),
  },
  {
    quote:
      'My daughter went back to school once the classroom was made accessible and her teachers were trained.',
    name: 'Illustrative story',
    role: 'Parent · Amhara',
    image: img('1473649085228-583485e6e4d7'),
  },
  {
    quote:
      'The counseling and peer support helped me rebuild my confidence and speak up for my rights.',
    name: 'Illustrative story',
    role: 'Youth advocate · Addis Ababa',
    image: img('1505148359496-35d8d1ec9645'),
  },
]

export const donate = {
  eyebrow: 'Get involved',
  title: 'Your support helps someone ascend.',
  body: 'Every contribution funds assistive devices, accessible classrooms, livelihoods, and protection for women, girls and children with disabilities across Ethiopia.',
  options: [
    { amount: '$25', impact: 'Learning materials for a child' },
    { amount: '$75', impact: 'Mobility or assistive aid' },
    { amount: '$200', impact: 'Vocational training for a youth' },
  ],
  note: 'AFA is registered with ACSO (Reg. No. 7818). Online giving is being set up — for now, contact us to give or partner.',
}

export const objectives = [
  'Conduct systemic advocacy, institutional capacity building, and skills training on disability inclusion.',
  'Enhance income-generating opportunities (IGAs), vocational training, and entrepreneurship for youth with disabilities.',
  'Ensure equal participation of children and youth with disabilities in rehabilitation, community life, and peacebuilding.',
  'Prevent and alleviate gender-based violence against children, women, and girls with disabilities.',
  'Improve school infrastructure for accessibility and implement inclusive teaching methodologies.',
  'Provide psychosocial rehabilitation: trauma healing, mindfulness, counseling, and stress management.',
  'Deliver capacity-building on disability inclusion, SRHR, and trauma-informed care for service providers.',
  'Deliver leadership, communication, and life-skills training tailored for individuals with disabilities.',
  'Address maternal & child health, WASH, and disease prevention with disability-friendly facilities.',
  'Foster a conducive, accessible, and nurturing learning environment for children and youth with disabilities.',
]
