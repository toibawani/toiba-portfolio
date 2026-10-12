import { PROJECTS } from '../lib/data'
import { Reveal } from './ui'

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] bg-white px-5 py-20 text-black sm:px-8 md:px-10 md:py-28">
      <Reveal>
        <p
          className="mb-3 text-[13px] uppercase tracking-[0.2em] text-black/50"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Selected work
        </p>
        <h2
          className="mb-12 text-[34px] font-extrabold leading-[0.95] tracking-tight sm:text-[48px] md:text-[58px]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Things I&rsquo;m building
          <br />
          &amp; writing.
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 120}>
            <a
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex h-full flex-col rounded-2xl border border-black/10 bg-[#f6f5f1] p-6 transition-colors duration-300 hover:bg-black hover:text-white sm:p-7"
            >
              <span
                className="mb-6 inline-flex w-fit rounded-full border border-current/20 px-3 py-1 text-[11px] uppercase tracking-widest opacity-60"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {project.tag}
              </span>
              <h3
                className="mb-3 text-[24px] font-bold leading-tight tracking-tight sm:text-[27px]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {project.title}
              </h3>
              <p className="mb-6 text-[14px] leading-relaxed opacity-70 sm:text-[15px]">{project.body}</p>
              <span
                className="mt-auto text-[14px] underline underline-offset-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Learn more →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
