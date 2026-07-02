import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PersonStanding, X, Contrast, Pause, Type, CaseSensitive } from 'lucide-react'
import { readSettings, saveSettings } from '../../lib/a11y'

const EASE = [0.16, 1, 0.3, 1]

function ToggleRow({ icon: Icon, label, hint, pressed, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-colors ${
        pressed
          ? 'border-brand bg-brand text-white'
          : 'border-line bg-paper text-ink hover:border-brand/60'
      }`}
    >
      <Icon className={`size-5 shrink-0 ${pressed ? 'text-gold' : 'text-brand'}`} aria-hidden="true" />
      <span className="flex-1">
        <span className="block text-sm font-bold leading-tight">{label}</span>
        <span className={`block text-xs leading-tight ${pressed ? 'text-white/75' : 'text-ink/55'}`}>
          {hint}
        </span>
      </span>
      <span
        aria-hidden="true"
        className={`grid h-6 w-10 shrink-0 place-items-center rounded-full border text-[0.6rem] font-extrabold uppercase tracking-wide ${
          pressed ? 'border-gold/60 bg-gold text-ink' : 'border-line bg-sand text-ink/50'
        }`}
      >
        {pressed ? 'On' : 'Off'}
      </span>
    </button>
  )
}

/**
 * Floating accessibility panel — text size, high contrast, motion pause and an
 * easy-read font (Atkinson Hyperlegible). For a disability-led organisation
 * this is mission, not garnish: the site adapts to the visitor, not the other
 * way around. Settings persist across visits.
 */
export default function A11yToolbar() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState(readSettings)
  const panelRef = useRef(null)
  const buttonRef = useRef(null)

  // Functional update so rapid successive toggles never clobber each other.
  const update = (patch) =>
    setSettings((prev) => {
      const next = { ...prev, ...patch }
      saveSettings(next)
      return next
    })

  // Esc closes; clicking outside closes.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onDown = (e) => {
      if (!panelRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
    }
  }, [open])

  const sizes = [
    { value: 'base', label: 'A', title: 'Default text size' },
    { value: 'lg', label: 'A+', title: 'Large text' },
    { value: 'xl', label: 'A++', title: 'Largest text' },
  ]

  return (
    <div className="fixed bottom-5 right-5 z-[70] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            id="a11y-panel"
            role="dialog"
            aria-label="Accessibility options"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="absolute bottom-16 right-0 w-[19.5rem] rounded-2xl border border-line bg-paper p-4 shadow-2xl shadow-ink/20"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">
                Accessibility
              </p>
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  buttonRef.current?.focus()
                }}
                aria-label="Close accessibility options"
                className="grid size-8 place-items-center rounded-full text-ink/60 transition-colors hover:bg-sand hover:text-ink"
              >
                <X className="size-4" />
              </button>
            </div>

            <fieldset className="mb-3">
              <legend className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/55">
                <Type className="size-3.5" aria-hidden="true" /> Text size
              </legend>
              <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Text size">
                {sizes.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    role="radio"
                    aria-checked={settings.text === s.value}
                    title={s.title}
                    onClick={() => update({ text: s.value })}
                    className={`rounded-xl border py-2.5 font-display font-extrabold transition-colors ${
                      settings.text === s.value
                        ? 'border-brand bg-brand text-white'
                        : 'border-line bg-paper text-ink hover:border-brand/60'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="space-y-2">
              <ToggleRow
                icon={Contrast}
                label="High contrast"
                hint="Solid text, stronger lines"
                pressed={settings.contrast}
                onClick={() => update({ contrast: !settings.contrast })}
              />
              <ToggleRow
                icon={Pause}
                label="Pause motion"
                hint="Stops animation & parallax"
                pressed={settings.motion}
                onClick={() => update({ motion: !settings.motion })}
              />
              <ToggleRow
                icon={CaseSensitive}
                label="Easy-read font"
                hint="Atkinson Hyperlegible"
                pressed={settings.font}
                onClick={() => update({ font: !settings.font })}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label={open ? 'Close accessibility options' : 'Open accessibility options'}
        className="grid size-13 place-items-center rounded-full border-2 border-gold/50 bg-brand text-white shadow-xl shadow-ink/25 transition-transform hover:scale-105 sm:size-14"
      >
        <PersonStanding className="size-7" aria-hidden="true" />
      </button>
    </div>
  )
}
