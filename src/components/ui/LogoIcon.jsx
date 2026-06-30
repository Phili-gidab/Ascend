/**
 * The icon portion of the official AFA logo, CSS-cropped out of the full
 * vertical lockup in /public/logo.jpg (which also contains the wordmark +
 * tagline). Rendered as a white "app-icon" chip so it reads cleanly on both
 * the dark hero and the light navbar.
 *
 * The crop maps the icon's bounding box (≈ x 280–1000, y 10–730 of the
 * 1280×1089 source) to a square. If it looks slightly off, nudge
 * backgroundSize / backgroundPosition below.
 */
export default function LogoIcon({ className = 'size-10' }) {
  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 rounded-xl bg-white ring-1 ring-black/5 ${className}`}
      style={{
        backgroundImage: 'url(/logo.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '178%',
        backgroundPosition: '50% 3%',
      }}
    />
  )
}
