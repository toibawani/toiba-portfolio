import { EMAIL, GITHUB, LOCATION, QUOTE } from '../lib/data'
import { Reveal } from './ui'

export default function Footer() {
  return (
    <footer id="contact" className="relative z-[1] bg-black px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <Reveal>
        <blockquote
          className="mb-16 max-w-3xl text-[26px] font-light italic leading-snug tracking-tight text-white/90 sm:text-[34px] md:text-[40px]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          &ldquo;{QUOTE}&rdquo;
        </blockquote>
      </Reveal>

      <Reveal delay={120}>
        <div className="flex flex-col gap-8 border-t border-white/15 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-2 text-[13px] uppercase tracking-[0.2em] text-white/50"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let&rsquo;s talk
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-[26px] font-semibold tracking-tight text-white underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-[38px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {EMAIL}
            </a>
            <p className="mt-3 text-[14px] text-white/50">{LOCATION}</p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="text-[16px] text-white/80 underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              github.com/toibawani
            </a>
            <p className="text-[13px] text-white/40">© {new Date().getFullYear()} Toiba Zehra. All rights reserved.</p>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
