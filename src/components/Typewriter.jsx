import { useEffect, useState } from 'react'

// Types `text` out one character at a time with a blinking cursor.
// Restarts whenever `text` changes (e.g. navigating between tech pages).
// Honours prefers-reduced-motion by showing the full text instantly.
export default function Typewriter({ text = '', speed = 38, className = '' }) {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setShown(text)
      setDone(true)
      return
    }

    setShown('')
    setDone(false)
    let i = 0
    const id = setInterval(() => {
      i += 1
      setShown(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return (
    <span className={className}>
      {shown}
      <span className={`type-cursor ${done ? 'type-cursor--idle' : ''}`} aria-hidden="true" />
    </span>
  )
}
