import { useEffect, useState } from 'react'

type Options = {
  text: string
  speed?: number
  startDelay?: number
}

/** Reveals `text` one character at a time after `startDelay` ms. */
export function useTypewriter({ text, speed = 28, startDelay = 400 }: Options) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)

    let interval = 0

    const timeout = window.setTimeout(() => {
      let i = 0
      interval = window.setInterval(() => {
        i += 1
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          window.clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      window.clearTimeout(timeout)
      window.clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}
