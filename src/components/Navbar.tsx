import { useState } from 'react'
import { NAV_LINKS } from '../lib/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-10 px-5 py-4 sm:px-8 sm:py-5">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <span
            className="text-[21px] tracking-tight text-white sm:text-[26px]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Toiba(Z)
          </span>
          <span className="select-none text-[25px] leading-none tracking-[-0.02em] text-white sm:text-[30px]">
            ✳︎
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center text-[23px] text-white md:flex" style={{ fontFamily: 'var(--font-display)' }}>
          {NAV_LINKS.map((link, i) => (
            <span key={link} className="whitespace-nowrap">
              <a href={`#${link.toLowerCase()}`} className="transition-opacity hover:opacity-60">
                {link}
              </a>
              {i < NAV_LINKS.length - 1 && <span className="mr-1">, </span>}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden text-[23px] text-white underline underline-offset-2 transition-opacity hover:opacity-60 md:inline"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-20 flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className="block h-[2px] w-6 bg-white transition-transform duration-300"
            style={open ? { transform: 'translateY(7px) rotate(45deg)' } : undefined}
          />
          <span
            className="block h-[2px] w-6 bg-white transition-opacity duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-6 bg-white transition-transform duration-300"
            style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : undefined}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[9] flex flex-col justify-center gap-8 bg-black/90 px-8 backdrop-blur-md transition-opacity duration-300 md:hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="text-[32px] font-medium text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="text-[32px] font-medium text-white underline underline-offset-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
