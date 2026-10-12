import { PORTRAIT } from '../lib/data'

export default function Hero() {
  return (
    <section id="top" className="relative z-[1] flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0">
      <div className="relative z-10 max-w-xl">
        <h1
          className="mb-4 text-[15vw] font-extrabold uppercase leading-[0.85] tracking-tight text-white sm:text-[64px] md:text-[76px]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Hi, I&rsquo;m
          <br />
          Toiba
        </h1>
        <p
          className="max-w-md text-[16px] leading-relaxed text-white/80 sm:text-[18px]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          CS Engineer (AI/ML) · Builder of RAG pipelines, simulations &amp; mobile apps · Published author. I debug algorithms by day and write poetry by night.
        </p>
      </div>

      {/* Portrait — top-right on mobile (text sits bottom), vertically centered right on md+ */}
      <div className="pointer-events-none absolute right-0 top-16 z-[1] w-[68vw] max-w-[420px] md:bottom-auto md:right-8 md:top-1/2 md:w-[34vw] md:max-w-[460px] md:-translate-y-1/2">
        <img
          src={PORTRAIT}
          alt="Portrait of Toiba Zehra"
          className="h-auto w-full object-cover"
          style={{
            maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          }}
        />
      </div>
    </section>
  )
}
