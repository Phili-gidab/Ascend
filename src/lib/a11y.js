/**
 * On-site accessibility preferences (text size, contrast, motion, easy-read
 * font). Persisted to localStorage; applied as classes on <html> so plain CSS
 * does the heavy lifting. index.html re-applies them before first paint.
 */
const KEY = 'afa-a11y'
export const A11Y_EVENT = 'afa-a11y-change'

export const defaultSettings = { text: 'base', contrast: false, motion: false, font: false }

export function readSettings() {
  try {
    return { ...defaultSettings, ...JSON.parse(localStorage.getItem(KEY) || '{}') }
  } catch {
    return { ...defaultSettings }
  }
}

export function applySettings(s) {
  const c = document.documentElement.classList
  c.toggle('a11y-text-lg', s.text === 'lg')
  c.toggle('a11y-text-xl', s.text === 'xl')
  c.toggle('a11y-contrast', !!s.contrast)
  c.toggle('a11y-motion', !!s.motion)
  c.toggle('a11y-font', !!s.font)
}

export function saveSettings(s) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s))
  } catch {
    /* private mode — settings just won't persist */
  }
  applySettings(s)
  window.dispatchEvent(new CustomEvent(A11Y_EVENT, { detail: s }))
}
