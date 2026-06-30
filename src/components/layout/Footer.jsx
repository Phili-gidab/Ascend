import { Mail, Phone, MapPin } from 'lucide-react'
import { org, nav } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink px-6 pb-10 pt-20 text-cream sm:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Oversized wordmark */}
        <p
          aria-hidden="true"
          className="pointer-events-none select-none font-display text-[18vw] font-extrabold leading-[0.8] tracking-tighter text-cream/5"
        >
          ASCEND
        </p>

        <div className="grid gap-12 border-t border-ink-line pt-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <img
              src="/logo.jpg"
              alt={`${org.name} (${org.abbr}) logo`}
              className="w-40 rounded-2xl bg-white p-3 shadow-lg shadow-black/20"
            />
            <p className="mt-5 max-w-sm text-cream/60">{org.tagline}</p>
            <p className="mt-4 text-sm text-cream/45">
              {org.type} · Reg. No. {org.registration.certificate} · {org.registration.body}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow mb-4 text-cream/50">Explore</h2>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-cream/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
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

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-line pt-6 text-sm text-cream/45 sm:flex-row sm:items-center">
          <p>
            © {year} {org.name} ({org.abbr}). All rights reserved.
          </p>
          <p>Built with inclusion at its core · Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </footer>
  )
}
