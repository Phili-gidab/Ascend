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

// Hero — smiling African schoolgirl in her wheelchair, bright school uniform.
// The source photo is portrait, so wide screens get a server-side face-aware
// 16:9 crop from the CDN; portrait screens use the original framing.
export const heroImage = img('1747214300383-81342dfa5f8e', 1080)
export const heroImageWide =
  'https://images.unsplash.com/photo-1747214300383-81342dfa5f8e?auto=format&fit=crop&crop=faces&w=1920&h=1080&q=80'
// About — AFA photo: an elder in a traditional shawl beside a young woman (4:5 crop, left-biased)
export const aboutImage = '/images/portrait-mother-daughter.jpg'
// About collage inset — AFA photo: a woman in her wheelchair, guided through the city
export const aboutImageSecondary = '/images/wheelchair-street.jpg'
// Band — children running down the street after school in Ale, Ethiopia
export const bandImage = img('1588349482083-036b31c6eca3', 1920)
// Donate — Ethiopian graduate in cap & gown embraced by elders in traditional netela
export const donateImage = img('1640117792676-595d18b594dc', 1920)

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
  // Replace '#' with real profile URLs when available (empty href hides the icon).
  socials: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
}

export const nav = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/impact', label: 'Impact' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
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

/**
 * Leadership & board. Filimon Aregay is from the official AFA profile; the
 * board names are PLACEHOLDERS — update `name` when confirmed. Portraits are
 * optional: drop a photo at the `image` path in /public/images and it replaces
 * the initials monogram automatically. `initials` overrides the monogram
 * letters while a real name is not yet public.
 */
export const team = {
  executive: {
    name: 'Filimon Aregay',
    role: 'Executive Manager',
    bio: 'Leads AFA’s strategy, partnerships, and programs — bringing years of multidisciplinary experience across social work, safeguarding, and disability inclusion in Ethiopia.',
    image: '/images/team-filimon.jpg',
    email: 'ascendforall24@gmail.com',
    phoneHref: 'tel:+251914125845',
  },
  board: [
    { name: 'Board Chairperson', role: 'Chairperson of the Board', initials: 'CH', image: '/images/team-chair.jpg' },
    { name: 'Board Member', role: 'Vice Chairperson', initials: 'VC', image: '/images/team-vice.jpg' },
    { name: 'Board Member', role: 'Secretary', initials: 'SC', image: '/images/team-secretary.jpg' },
    { name: 'Board Member', role: 'Member', initials: 'BM', image: '/images/team-member1.jpg' },
    { name: 'Board Member', role: 'Member', initials: 'BM', image: '/images/team-member2.jpg' },
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
      desc: 'Specialised interventions for women, young girls, and children with disabilities facing double marginalisation (gender and disability) and heightened GBV risk.',
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
  'Minimise school dropout rates by providing tailored financial and material frameworks that overcome learning obstacles for children with disabilities.',
  'Facilitate equitable employment opportunities, career pathways, and inclusive workplace adaptations for those facing structural barriers in the job market.',
  'Lobby and advocate for the systematic inclusion of disability rights and economic benefits in government policies, guidelines, and laws.',
  'Foster deep community, corporate, and institutional awareness of the immense economic and social potential of persons with disabilities.',
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
    // African nurse consulting a young girl at a clinic (maternal & child health)
    image: img('1536064479547-7ee40b74b807'),
  },
  {
    title: 'Education',
    icon: 'education',
    desc: 'Inclusive, accessible learning — reducing dropout, adapting infrastructure, and supplying Braille and sign-language materials.',
    points: ['Education in Emergencies', 'Accessible schools', 'Braille & sign-language tools'],
    // AFA photo: three young people with visual impairments together at a table
    image: '/images/students-at-table.jpg',
    // keep faces in frame when the card crops to 16:10
    imagePos: '50% 18%',
  },
  {
    title: 'Protection',
    icon: 'protection',
    desc: 'Preventing and responding to GBV against women, girls and children with disabilities, with safeguarding and trauma-informed care.',
    points: ['GBV prevention & response', 'Safeguarding', 'Trauma healing & counseling'],
    // Ethiopian women in traditional white netela with a young girl (family, care)
    image: img('1640117792694-97b464c05f66'),
  },
  {
    title: 'Economic Empowerment',
    icon: 'economic',
    desc: 'Pathways to independence: income-generating activities, vocational training, entrepreneurship, and inclusive employment.',
    points: ['Income-generating activities', 'Vocational & life skills', 'Inclusive employment'],
    // African tailor at work in his own shop (livelihoods, entrepreneurship)
    image: img('1687422808289-e721259c9eb4'),
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
    // Tailor working at a sewing machine in his shop
    image: img('1744808336885-c6b2425c3f1e'),
  },
  {
    quote:
      'My daughter went back to school once the classroom was made accessible and her teachers were trained.',
    name: 'Illustrative story',
    role: 'Parent · Amhara',
    // Smiling woman wearing a headscarf
    image: img('1743871698163-a2e470d8eac7'),
  },
  {
    quote:
      'The counseling and peer support helped me rebuild my confidence and speak up for my rights.',
    name: 'Illustrative story',
    role: 'Youth advocate · Addis Ababa',
    // Joyful young man living with cerebral palsy, photographed at home
    image: img('1752057932466-8b78fd0e808e'),
  },
]

/**
 * Gallery — verified, license-free photography (Unsplash) of Ethiopian life
 * and disability inclusion. `tall` marks portrait frames in the filmstrip.
 * Replace freely with AFA's own consented photos as they become available.
 */
export const gallery = [
  {
    image: img('1764145144753-922ae256714b', 1200),
    tall: true,
    title: 'Ashenda in full colour',
    place: 'Tigray',
    desc: 'Girls in traditional dress dance through the streets during the Ashenda festival.',
  },
  {
    image: '/images/wheelchair-street.jpg',
    title: 'Side by side',
    place: 'Ethiopia',
    desc: 'A caregiver and a woman in her wheelchair move through the city together.',
  },
  {
    image: img('1740572497450-4f4f2d3be984', 1200),
    title: 'Teammates',
    place: 'Wheelchair basketball',
    desc: 'Players ready their chairs together before a game — sport as independence.',
  },
  {
    image: img('1626598442658-ea6a1a5943df', 1200),
    tall: true,
    title: 'The guiding line',
    place: 'Piazza, Addis Ababa',
    desc: 'Tactile paving threads through the city, guiding pedestrians with visual impairments.',
  },
  {
    image: img('1588349242964-28b720afcb36', 1200),
    title: 'Full speed',
    place: 'Ale, Ethiopia',
    desc: 'A boy races his wheel down the village road — a game played the world over.',
  },
  {
    image: '/images/students-at-table.jpg',
    title: 'Together at the table',
    place: 'Ethiopia',
    desc: 'Three young people with visual impairments share a bench and a moment.',
  },
  {
    image: img('1633539656332-d0861676473a', 1200),
    tall: true,
    title: 'Unstoppable joy',
    place: 'Ethiopia',
    desc: 'A laugh that needs no caption.',
  },
  {
    image: img('1778086017952-063be172d3a8', 1200),
    title: 'Pilgrims',
    place: 'Lalibela',
    desc: 'Pilgrims gather among the rock-hewn churches of Lalibela.',
  },
  {
    image: img('1598122666068-59b41e0a3193', 1200),
    tall: true,
    title: 'Heritage worn proudly',
    place: 'Tigray',
    desc: 'Traditional dress at the Ashenda celebration.',
  },
  {
    image: img('1647316703389-e114712500e5', 1200),
    title: 'Addis after dark',
    place: 'Addis Ababa',
    desc: 'The capital at night — a city of four million stories.',
  },
  {
    image: img('1588349500046-854848044870', 1200),
    tall: true,
    title: 'The long road',
    place: "Weyt'o Valley",
    desc: 'Two friends head home through the southern lowlands.',
  },
  {
    image: '/images/portrait-mother-daughter.jpg',
    title: 'Generations',
    place: 'Ethiopia',
    desc: 'A quiet strength passed between generations.',
  },
  {
    image: img('1782283034357-47f4185af8f8', 1200),
    title: 'Quiet faith',
    place: 'Lalibela',
    desc: 'A moment of stillness beside centuries-old stone.',
  },
  {
    image: img('1764145177622-8317fbfe1877', 1200),
    tall: true,
    title: 'A bright future',
    place: 'Ethiopia',
    desc: 'Every child deserves the chance to ascend.',
  },
  {
    image: img('1741940365437-e55b919a89d3', 1200),
    title: 'Mother and child',
    place: 'East Africa',
    desc: 'Care is where every ascent begins.',
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
  /**
   * Ways to give — fill these in as payment rails open and they appear on the
   * site automatically (the `note` above shows only while this list is empty).
   * Examples:
   *   { method: 'Bank transfer', detail: 'Commercial Bank of Ethiopia · Account 1000XXXXXXX · ASCEND FOR ALL' },
   *   { method: 'Telebirr', detail: '+251 9X XXX XXXX' },
   *   { method: 'PayPal', detail: 'paypal.me/ascendforall', href: 'https://paypal.me/ascendforall' },
   */
  methods: [],
}

export const objectives = [
  'Conduct systemic advocacy, institutional capacity building, and targeted skills training on disability inclusion.',
  'Enhance sustainable income-generating opportunities (IGAs), specialized vocational training, and entrepreneurship development for youth with disabilities.',
  'Ensure the equal participation and explicit inclusion of children and youth with disabilities in rehabilitation programs, community life, and local peacebuilding.',
  'Prevent and alleviate gender-based violence against children, women, and girls with disabilities — in both development and emergency contexts.',
  'Improve school infrastructure for physical accessibility and implement innovative, inclusive teaching methodologies.',
  'Provide robust psychosocial rehabilitation: trauma healing, mindfulness, individual and group counseling, and stress management.',
  'Deliver capacity-building on disability inclusion, SRHR, and trauma-informed care for community leaders and service providers.',
  'Deliver leadership, advanced communication, and practical life-skills training tailored for individuals with disabilities.',
  'Address maternal & child health, safe drinking water, sanitation and hygiene (WASH), and disease prevention — with every facility disability-friendly.',
  'Foster a highly conducive, accessible, and nurturing learning environment for children and youth with disabilities.',
]
