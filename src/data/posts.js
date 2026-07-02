/**
 * Blog posts. Each post's `body` is a constrained markdown dialect rendered by
 * src/components/ui/Markdown.jsx — supported: paragraphs (blank-line
 * separated), `## `/`### ` headings, `> ` quotes, `- ` lists, **bold**,
 * *italic*, and [links](https://…).
 *
 * NOTE: these four launch posts are SEED CONTENT written from AFA's official
 * profile (registration facts, programs, values). Review, edit, or replace
 * them before/after go-live — and keep adding posts here; newest date first
 * is not required (the site sorts by date).
 */
const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const categories = ['Announcements', 'Programs', 'Perspectives']

export const posts = [
  {
    slug: 'afa-officially-registered',
    title: 'ASCEND FOR ALL is officially registered — and ready to work',
    category: 'Announcements',
    date: '2026-02-10',
    author: 'AFA Communications',
    image: img('1640117792676-595d18b594dc'),
    imageAlt: 'A graduate in cap and gown embraced by elders in traditional Ethiopian netela',
    excerpt:
      'On January 28, 2026, ASCEND FOR ALL received its certificate of registration from the Authority for Civil Society Organizations. Here is what that means — and what comes next.',
    body: `On January 28, 2026, ASCEND FOR ALL (AFA) was officially registered as a national non-governmental organization under Ethiopia's Civil Society Organizations Proclamation — certificate No. 7818, issued by the Authority for Civil Society Organizations (ACSO).

For our founding team, the certificate is more than paperwork. It is permission to do, at national scale, what each of us has spent years doing inside other institutions: removing the barriers that keep persons with disabilities out of classrooms, clinics, workplaces and public life.

## Who we are

AFA is disability-led and board-governed. Our founders come from Social Work, Good Governance and Sociology, with track records across prevention and safeguarding, Education in Emergencies, monitoring and evaluation, holistic rehabilitation, mental health and psychosocial support, gender-based violence response, and disability inclusion.

## Where we will work

We are registered to operate across five regions — Tigray, Amhara, Addis Ababa, Dire Dawa and Oromia — in four thematic sectors:

- Health, including maternal and child health, WASH and MHPSS
- Education, inclusive and accessible from the first classroom
- Protection, with a focus on women, girls and children with disabilities
- Economic empowerment, from vocational training to inclusive employment

## What comes next

Registration is the starting line, not the finish. In the months ahead we are building partnerships with government bureaus, communities and fellow organizations, and preparing our first program cycles. If your organization shares our vision of an inclusive Ethiopia, [we would love to hear from you](/contact).

> Everyone deserves the chance to ascend. Now the climb begins.`,
  },
  {
    slug: 'four-sectors-one-future',
    title: 'Health, education, protection, livelihoods: how our four programs fit together',
    category: 'Programs',
    date: '2026-03-18',
    author: 'AFA Team',
    image: img('1536064479547-7ee40b74b807'),
    imageAlt: 'An African nurse consults a young girl at a clinic desk',
    excerpt:
      'Disability is never just a health issue, or just an education issue. Our four program sectors are designed as one system — because barriers never come one at a time.',
    body: `Ask anyone living with a disability in Ethiopia what stands between them and the life they want, and you will rarely hear a single answer. A child who cannot reach the clinic also misses school. A woman denied rehabilitation is also denied work. Barriers arrive together — so responses must, too.

That is why AFA works across four sectors at once, on a rights-based approach that treats physical, psychological, educational and economic barriers as one connected problem.

## Health

Maternal and child health, water and sanitation, disease prevention, and mental health and psychosocial support (MHPSS) — with every facility we touch made disability-friendly and accessible. Rehabilitation is central: merging medical, physical and psychosocial support so people can live independently.

## Education

We work to keep children with disabilities in school: adapting infrastructure, training teachers, supplying Braille and sign-language materials, and supporting Education in Emergencies where crisis has interrupted learning.

## Protection

Women, girls and children with disabilities face double marginalisation and heightened risk of gender-based violence. Our protection work spans prevention, safeguarding, trauma-informed care, and response — built into every other program we run.

## Economic empowerment

Independence is the goal that ties everything together: income-generating activities, vocational and life-skills training, entrepreneurship support, and advocacy for inclusive workplaces.

### One system, not four silos

A single family may need all four at once — and should not have to knock on four different doors. That is the promise behind our programs: [one organization, one plan, one future](/programs).`,
  },
  {
    slug: 'why-disability-led-matters',
    title: "Why 'disability-led' isn't just a label",
    category: 'Perspectives',
    date: '2026-05-06',
    author: 'AFA Team',
    image: img('1740572497450-4f4f2d3be984'),
    imageAlt: 'Wheelchair basketball players readying their chairs together before a game',
    excerpt:
      'Plenty of organizations work for persons with disabilities. Far fewer are led by them. The difference shows up in every decision an organization makes.',
    body: `Plenty of organizations work *for* persons with disabilities. Far fewer are *led by* them. AFA was founded to be the second kind — and the difference is not cosmetic.

## Lived experience changes the questions

An organization led by people with lived experience of disability starts from different questions. Not "how do we help?" but "what is in the way?" Not "what can we give?" but "what would independence take?" Those questions lead somewhere different: to tactile paving instead of pity, to vocational training instead of charity alone, to advocacy that treats access as a right rather than a favour.

## It shows up in our values

Our five values — inclusivity, empowerment, accountability, volunteerism and equity — were not chosen from a template. They describe how decisions get made when the people affected by them are in the room:

- Programs are designed with communities, not delivered to them
- Gender equality and social inclusion are mainstreamed across every project cycle
- Local knowledge leads, and international best practice supports

## And in who we answer to

Being board-led and nationally registered means we are accountable in both directions — to the authorities who license us, and to the communities who trust us. We publish who we are, where we work and what we stand for, and we invite scrutiny.

> Nothing about us, without us — the oldest rule in the disability rights movement. We simply intend to keep it.

If that conviction resonates, [join us](/contact) — as a partner, a volunteer, or a donor.`,
  },
  {
    slug: 'the-guiding-line',
    title: 'What a yellow line in Addis Ababa taught us about inclusion',
    category: 'Perspectives',
    date: '2026-06-14',
    author: 'AFA Team',
    image: img('1626598442658-ea6a1a5943df'),
    imageAlt: 'A long pedestrian street in Addis Ababa with a yellow tactile guide path running through it',
    excerpt:
      'Down a walkway in Piazza runs a strip of yellow, textured paving. Most people never notice it. For a blind pedestrian, it is the difference between dependence and a free afternoon.',
    body: `Walk through Piazza in Addis Ababa and you may not notice it: a strip of yellow, textured paving running down the centre of the walkway. Thousands of feet cross it every day without a second thought.

But that line is infrastructure with a purpose. Tactile paving — detectable underfoot or by cane — lets a person with a visual impairment navigate the street independently: no guide, no guesswork, no waiting for help. One yellow line is the difference between asking for an escort and simply going.

## Inclusion is mostly invisible

That is the thing about accessibility: done well, it disappears. A ramp is just a path. A sign-language interpreter is just part of the meeting. A Braille textbook is just a textbook. What remains visible is people — moving, learning, working, participating.

## The audit we walk with

When AFA visits a school, a health centre or a public office, we walk it the way our community must: Where does a wheelchair stop? Where does a cane lose the path? Which counter has no seat, which notice has no audio, which door has no width? This is what our inclusive infrastructural advocacy looks like in practice — patient, specific, and relentless.

## From one line to a network

One tactile path in one district is a start. Our advocacy goal is bigger: that accessibility becomes a default standard in public infrastructure — budgeted, built and maintained like any other civic duty, not added as an afterthought when someone asks.

Until then, we will keep pointing at the yellow line and asking every planner the same question: *who is your street for?*

[Explore our programs](/programs) to see how advocacy fits into the wider work.`,
  },
]

/** Posts newest-first. */
export const postsByDate = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))

export const findPost = (slug) => posts.find((p) => p.slug === slug)

export const readMinutes = (post) =>
  Math.max(2, Math.round(post.body.split(/\s+/).length / 200))

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
