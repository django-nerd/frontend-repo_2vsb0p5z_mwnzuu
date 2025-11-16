import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Ride the Waveforms
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/80">
          Trackmaster Muzic — AI‑generated tracks pulsing with neon futurism. Cosmic vibes. Real platform plays.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#platforms" className="rounded-full bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition">
            Listen on your platform
          </a>
          <a href="#tracks" className="rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-indigo-500 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">
            Featured tracks
          </a>
        </div>
      </div>
    </section>
  )
}
