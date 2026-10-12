import { MARQUEE_ITEMS } from '../lib/data'

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section className="relative z-[1] overflow-hidden border-y border-white/10 bg-black/40 py-4 backdrop-blur-sm">
      <div className="animate-scrollX flex w-max items-center whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center text-[15px] uppercase tracking-widest text-white/70 sm:text-[17px]" style={{ fontFamily: 'var(--font-display)' }}>
            {item}
            <span className="mx-6 text-white/40">✳︎</span>
          </span>
        ))}
      </div>
    </section>
  )
}
