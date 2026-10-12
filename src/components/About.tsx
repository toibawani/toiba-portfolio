import { ABOUT_TEXT, STATS } from '../lib/data'
import { Reveal } from './ui'

export default function About() {
  return (
    <section id="about" className="relative z-[1] bg-white px-5 py-20 text-black sm:px-8 md:px-10 md:py-28">
      <Reveal>
        <p
          className="mb-3 text-[13px] uppercase tracking-[0.2em] text-black/50"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Who I am
        </p>
        <h2
          className="mb-8 max-w-3xl text-[34px] font-extrabold leading-[0.95] tracking-tight sm:text-[48px] md:text-[58px]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Logic by day,
          <br />
          language by night.
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <p
          className="mb-12 max-w-2xl text-[16px] leading-relaxed text-black/70 sm:text-[18px]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {ABOUT_TEXT}
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100}>
            <div className="border-t-2 border-black pt-4">
              <div
                className="text-[40px] font-extrabold leading-none tracking-tight sm:text-[52px]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.number}
              </div>
              <div className="mt-2 text-[13px] leading-snug text-black/60 sm:text-[14px]">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
