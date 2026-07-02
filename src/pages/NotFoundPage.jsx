import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <section aria-labelledby="nf-heading" className="grid min-h-[70vh] place-items-center bg-paper px-6 py-24 text-center">
      <div>
        <p className="font-display text-[clamp(5rem,18vw,10rem)] font-extrabold leading-none text-brand/15">
          404
        </p>
        <h1 id="nf-heading" className="mt-2 font-display text-2xl font-extrabold text-ink sm:text-3xl">
          This page hasn't been built yet.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink/60">
          The address may have changed — but the mission hasn't. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-bold text-white transition-colors hover:bg-brand-deep"
        >
          <ArrowLeft className="size-5" aria-hidden="true" /> Back to home
        </Link>
      </div>
    </section>
  )
}
