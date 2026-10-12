import { PORTRAIT } from '../lib/data'

/** Fixed backdrop: Toiba's own photo, softly blurred and darkened. */
export default function Backdrop() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]" aria-hidden="true">
      <img
        src={PORTRAIT}
        alt=""
        className="h-full w-full scale-110 object-cover opacity-30 blur-2xl"
        onError={(e) => {
          ;(e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85" />
    </div>
  )
}
