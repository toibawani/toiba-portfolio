import { VIDEO_SRC } from '../lib/data'

export default function VideoBg() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black" aria-hidden="true">
      <video
        className="h-full w-full object-cover opacity-45"
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => {
          ;(e.currentTarget as HTMLVideoElement).style.display = 'none'
        }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/80" />
    </div>
  )
}
