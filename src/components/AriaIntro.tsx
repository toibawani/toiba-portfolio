import { EMAIL, ACTION_PILLS, TYPEWRITER_TEXT } from '../lib/data'
import { useTypewriter } from '../hooks/useTypewriter'
import { useState } from 'react'

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
      <rect x="1.5" y="1.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export default function AriaIntro() {
  const { displayed, done } = useTypewriter({ text: TYPEWRITER_TEXT })
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <section className="relative z-[1] flex min-h-screen items-center px-5 py-24 sm:px-8 md:px-10">
      <div className="max-w-xl">
        {/* Blurred intro label */}
        <div
          className="pointer-events-none mb-5 select-none text-white sm:mb-6"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            filter: 'blur(4px)',
          }}
        >
          Hey there, meet Toiba,
          <br />
          CSE Student, Author &amp; Educator
        </div>

        {/* Typewriter */}
        <p
          className="mb-5 min-h-[54px] text-white sm:mb-6"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          {displayed}
          {!done && (
            <span
              className="ml-[2px] inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-white"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          )}
        </p>

        {/* Action pills — fade in after 400ms independent of typewriter */}
        <div className="flex flex-wrap gap-y-1 [animation:fadeInUp_.4s_ease_.4s_both]">
          {ACTION_PILLS.map((pill) => (
            <a
              key={pill.label}
              href={pill.href}
              className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]"
            >
              {pill.label}
            </a>
          ))}

          {/* Email pill with copy */}
          <button
            onClick={copy}
            className="mx-[0.2em] mb-[0.4em] inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
          >
            <span>
              Reach us: <span className="underline underline-offset-1">{copied ? 'copied!' : EMAIL}</span>
            </span>
            <CopyIcon />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
