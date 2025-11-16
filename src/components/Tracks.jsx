import { Play, Headphones, Sparkles } from 'lucide-react'

const tracks = [
  {
    title: 'Nebula Drift',
    mood: 'Synthwave / Cosmic Chill',
    color: 'from-fuchsia-500 via-cyan-400 to-indigo-500',
    links: {
      spotify: 'https://open.spotify.com/',
      apple: 'https://music.apple.com/',
      youtube: 'https://music.youtube.com/',
    },
  },
  {
    title: 'Quantum Groove',
    mood: 'Bass / Hyperpop Blend',
    color: 'from-cyan-400 via-sky-500 to-blue-600',
    links: {
      spotify: 'https://open.spotify.com/',
      apple: 'https://music.apple.com/',
      youtube: 'https://music.youtube.com/',
    },
  },
  {
    title: 'Aurora Flux',
    mood: 'Ambient / Liquid DnB',
    color: 'from-violet-500 via-fuchsia-500 to-pink-500',
    links: {
      spotify: 'https://open.spotify.com/',
      apple: 'https://music.apple.com/',
      youtube: 'https://music.youtube.com/',
    },
  },
]

export default function Tracks() {
  return (
    <section id="tracks" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(236,72,153,0.15),transparent),radial-gradient(50%_50%_at_30%_100%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured drops</h2>
            <p className="mt-2 text-white/70">AI‑generated, human‑curated. Built for late nights and neon lights.</p>
          </div>
          <a href="#platforms" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10">
            <Headphones size={18} /> Stream everywhere
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <div key={t.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
              <div className={`absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60 bg-gradient-to-r ${t.color}`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                    <Sparkles size={18} />
                  </span>
                  <div>
                    <p className="text-white font-semibold">{t.title}</p>
                    <p className="text-white/60 text-sm">{t.mood}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a href={t.links.spotify} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
                    <Play size={16} /> Play preview
                  </a>
                  <a href={t.links.youtube} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white text-sm">YouTube</a>
                  <a href={t.links.apple} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white text-sm">Apple</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
