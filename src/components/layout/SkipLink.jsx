/**
 * Keyboard-first "skip to content" link. Visually hidden until focused, then
 * appears at the top-left so keyboard / screen-reader users can bypass the nav.
 */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
    >
      Skip to main content
    </a>
  )
}
