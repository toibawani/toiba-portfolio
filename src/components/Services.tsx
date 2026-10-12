import { SKILL_GROUPS } from '../lib/data'
import { Reveal } from './ui'

export default function Services() {
  return (
    <section id="skills" className="relative z-[1] bg-[#0f0f0e] px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <Reveal>
        <p
          className="mb-3 text-[13px] uppercase tracking-[0.2em] text-white/50"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Technical skills
        </p>
        <h2
          className="mb-12 text-[34px] font-extrabold leading-[0.95] tracking-tight text-white sm:text-[48px] md:text-[58px]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          The stack
          <br />
          I build with.
        </h2>
      </Reveal>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 100}>
            <div className="border-t border-white/20 pt-5">
              <h3
                className="mb-4 text-[19px] font-semibold tracking-tight text-white sm:text-[21px]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-[14px] leading-snug text-white/60 sm:text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
