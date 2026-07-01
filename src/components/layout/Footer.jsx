import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUp, ArrowUpRight, Heart } from 'lucide-react'
import { org, nav } from '../../data/site'

// Brand marks as inline SVG (lucide dropped brand icons over trademark concerns).
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.2v2.33H7.7V13h2.74v8h3.06z" />
  </svg>
)
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
  </svg>
)
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6.1 7H1.7l8-9.2L1 2h7l4.8 6.4L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z" />
  </svg>
)

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
}

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = (org.socials || []).filter((s) => s.href && s.href !== '')

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* CTA strip */}
        <div className="grid gap-6 border-b border-ink-line py-12 md:grid-cols-2 md:items-center md:py-14">
          <h2 className="max-w-md font-display text-2xl font-extrabold leading-tight sm:text-3xl">
            Together, we help everyone <span className="text-gold">ascend.</span>
          </h2>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-ink transition-colors hover:bg-gold/90"
            >
              <Heart className="size-4" aria-hidden="true" /> Donate
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 font-bold text-cream transition-colors hover:border-cream hover:bg-white/10"
            >
              Get in touch
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Main */}
        <div className="grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1.2fr]">
          <div>
            <img
              src="/logo.jpg"
              alt={`${org.name} (${org.abbr}) logo`}
              className="w-36 rounded-2xl bg-white p-3 shadow-lg shadow-black/20"
            />
            <p className="mt-5 max-w-sm text-cream/60">{org.tagline}</p>
            <p className="mt-4 text-sm text-cream/45">
              {org.type} · Reg. No. {org.registration.certificate} · {org.registration.body}
            </p>

            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map((s) => {
                  const Icon = socialIcons[s.label]
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid size-10 place-items-center rounded-full border border-ink-line text-cream/70 transition-colors hover:border-gold hover:text-gold"
                    >
                      {Icon && <Icon className="size-4" />}
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow mb-4 text-cream/50">Explore</h2>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-cream/70 transition-colors hover:text-gold">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-cream/70 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-4 text-cream/50">Contact</h2>
            <ul className="space-y-3 text-cream/70">
              <li>
                <a
                  href={org.contact.phoneHref}
                  className="flex items-start gap-2.5 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                  {org.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${org.contact.email}`}
                  className="flex items-start gap-2.5 break-all transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                  {org.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {org.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-ink-line py-6 text-sm text-cream/45 sm:flex-row sm:items-center">
          <p>
            © {year} {org.name} ({org.abbr}). All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 font-semibold text-cream/60 transition-colors hover:text-gold"
          >
            Back to top <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
