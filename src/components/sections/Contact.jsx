import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  User,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import Reveal from '../ui/Reveal'
import AnimatedHeading from '../ui/AnimatedHeading'
import { org } from '../../data/site'

const details = [
  { icon: User, label: org.contact.role, value: org.contact.focalPerson },
  { icon: Phone, label: 'Phone', value: org.contact.phone, href: org.contact.phoneHref },
  { icon: Mail, label: 'Email', value: org.contact.email, href: `mailto:${org.contact.email}` },
  { icon: MapPin, label: 'Head office', value: org.contact.address },
]

const interests = ['Partnership / Funding', 'Volunteer', 'General enquiry']

/**
 * Optional form endpoint — works with any "no-backend" form service
 * (e.g. Web3Forms, Formspree). Set these in `.env`:
 *   VITE_FORM_ENDPOINT = your service's submit URL
 *   VITE_FORM_KEY      = access key, if the service needs one
 * When no endpoint is configured, the form opens the visitor's email client.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const FORM_KEY = import.meta.env.VITE_FORM_KEY

const fieldBase =
  'w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink/30 focus:border-brand focus:outline-none'

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(
        `[${data.get('interest')}] Website enquiry from ${data.get('name')}`,
      )
      const body = encodeURIComponent(
        `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`,
      )
      window.location.href = `mailto:${org.contact.email}?subject=${subject}&body=${body}`
      setStatus('success')
      return
    }

    setStatus('submitting')
    if (FORM_KEY) data.append('access_key', FORM_KEY)
    data.append('subject', `New website enquiry — ${data.get('interest')}`)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center gap-4 rounded-3xl border border-line bg-paper p-8"
      >
        <CheckCircle2 className="size-12 text-green" />
        <h3 className="text-2xl font-extrabold text-ink">Thank you.</h3>
        <p className="text-ink/70">
          {FORM_ENDPOINT
            ? 'Your message has been sent. Our team will be in touch shortly.'
            : 'Your email app should now be open with your message ready to send.'}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink/80 hover:border-brand hover:text-ink"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-paper p-6 shadow-sm shadow-ink/5 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink/80">
            Full name
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldBase} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldBase}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-ink/80">
            I'm reaching out about
          </label>
          <select id="interest" name="interest" className={fieldBase} defaultValue={interests[0]}>
            {interests.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink/80">
            Message
          </label>
          <textarea id="message" name="message" required rows={4} className={`${fieldBase} resize-y`} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-bold text-white transition-colors hover:bg-brand-deep disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Send className="size-4" />
          </>
        )}
      </button>

      <p role="status" aria-live="polite" className="mt-4 min-h-5 text-sm">
        {status === 'error' && (
          <span className="flex items-center gap-2 text-brand-deep">
            <AlertCircle className="size-4" /> Something went wrong. Please email us directly at{' '}
            <a href={`mailto:${org.contact.email}`} className="underline">
              {org.contact.email}
            </a>
            .
          </span>
        )}
      </p>
    </form>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 bg-sand px-6 py-16 text-ink sm:px-10 sm:py-24 md:py-32"
    >
      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal className="mb-5 flex items-center gap-3">
          <span className="eyebrow text-brand">12 — Contact</span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <AnimatedHeading
          as="h2"
          id="contact-heading"
          text="Let's build an inclusive world, together."
          highlight={[5]}
          className="max-w-4xl text-headline"
        />
        <Reveal as="p" delay={0.1} className="mt-6 max-w-2xl text-lg text-ink/70">
          Partner, fund, volunteer, or collaborate. Every contribution helps a person with a
          disability ascend toward independence and dignity.
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Details */}
          <Reveal>
            <ul className="space-y-7">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="eyebrow text-ink/45">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block break-words text-lg font-semibold text-ink transition-colors hover:text-brand"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg font-semibold text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
