import { useState } from 'react'
import { ETH_REGIONS, ETH_VIEW } from '../../data/ethiopiaMap'

/**
 * Interactive coverage map of Ethiopia. Regions where AFA works glow gold and
 * respond to hover/focus; the rest sit quietly in the dark. The map itself is
 * presentational — the section pairs it with a plain-text region list, so no
 * information lives only in the graphic.
 *
 * @param {string[]} covered  region names that AFA covers (must match data names)
 */
export default function EthiopiaMap({ covered = [], className = '' }) {
  const [active, setActive] = useState(null)
  const isCovered = (name) => covered.includes(name)
  const activeRegion = ETH_REGIONS.find((r) => r.name === active)

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox={`0 0 ${ETH_VIEW.w} ${ETH_VIEW.h}`}
        role="img"
        aria-label={`Map of Ethiopia highlighting AFA's coverage: ${covered.join(', ')}`}
        className="w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
      >
        <defs>
          <linearGradient id="eth-covered" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-gold)" />
            <stop offset="100%" stopColor="#a87b1f" />
          </linearGradient>
        </defs>

        {/* Quiet base regions */}
        {ETH_REGIONS.filter((r) => !isCovered(r.name)).map((r) => (
          <path
            key={r.name}
            d={r.d}
            fill="var(--color-ink-soft)"
            stroke="var(--color-ink-line)"
            strokeWidth="1.5"
            opacity="0.75"
          >
            <title>{r.name}</title>
          </path>
        ))}

        {/* Covered regions — gold, interactive */}
        {ETH_REGIONS.filter((r) => isCovered(r.name)).map((r) => (
          <path
            key={r.name}
            d={r.d}
            tabIndex={0}
            aria-label={`${r.name} — AFA coverage region`}
            fill="url(#eth-covered)"
            stroke="var(--color-cream)"
            strokeWidth="2"
            className="cursor-pointer outline-none transition-[opacity,filter] duration-300"
            style={{
              opacity: active && active !== r.name ? 0.55 : 0.95,
              filter:
                active === r.name
                  ? 'drop-shadow(0 0 14px rgba(207,154,46,0.9)) brightness(1.1)'
                  : 'drop-shadow(0 0 6px rgba(207,154,46,0.35))',
            }}
            onMouseEnter={() => setActive(r.name)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(r.name)}
            onBlur={() => setActive(null)}
          >
            <title>{r.name}</title>
          </path>
        ))}

        {/* Label dots for covered regions */}
        {ETH_REGIONS.filter((r) => isCovered(r.name)).map((r) => (
          <g key={`dot-${r.name}`} pointerEvents="none">
            <circle cx={r.label[0]} cy={r.label[1]} r="7" fill="var(--color-ink)" opacity="0.85" />
            <circle cx={r.label[0]} cy={r.label[1]} r="3.5" fill="var(--color-cream)" className="map-pulse" />
          </g>
        ))}
      </svg>

      {/* Floating name chip for hovered/focused region */}
      <div
        aria-live="polite"
        className={`pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-full border border-gold/50 bg-ink/90 px-5 py-2 font-display text-sm font-extrabold tracking-wide text-cream backdrop-blur-sm transition-all duration-300 ${
          activeRegion ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}
      >
        {activeRegion ? activeRegion.name : ' '}
      </div>
    </div>
  )
}
