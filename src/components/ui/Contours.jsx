/**
 * Decorative "ascent" motif — layered elevation lines rising to the right,
 * echoing the Ethiopian highlands and the organisation's name. Purely
 * presentational; place inside a `relative overflow-hidden` dark section.
 */
export default function Contours({ className = 'text-cream', opacity = 0.08 }) {
  const lines = [
    'M0 340 C 240 330, 420 290, 620 250 S 1030 190, 1440 120',
    'M0 380 C 260 368, 460 330, 660 290 S 1060 230, 1440 165',
    'M0 420 C 280 406, 500 370, 700 330 S 1090 270, 1440 210',
    'M0 460 C 300 448, 540 410, 740 372 S 1120 312, 1440 255',
    'M0 500 C 320 490, 580 452, 780 415 S 1150 355, 1440 300',
  ]
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 520"
      preserveAspectRatio="xMidYMax slice"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-full w-full ${className}`}
      style={{ opacity }}
    >
      {lines.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth={i === 0 ? 2 : 1.25}
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}
