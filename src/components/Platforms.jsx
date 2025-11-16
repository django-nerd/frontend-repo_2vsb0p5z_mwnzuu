import { Music2, Apple, Youtube, Waves } from 'lucide-react'

const platforms = [
  {
    name: 'Spotify',
    icon: Music2,
    color: 'from-[#1DB954] to-[#1ed760]',
    link: 'https://open.spotify.com',
  },
  {
    name: 'Apple Music',
    icon: Apple,
    color: 'from-[#fb7185] to-[#f472b6]',
    link: 'https://music.apple.com',
  },
  {
    name: 'YouTube Music',
    icon: Youtube,
    color: 'from-[#ff0000] to-[#ff4d4d]',
    link: 'https://music.youtube.com',
  },
  {
    name: 'Tidal',
    icon: Waves,
    color: 'from-[#00FFFF] to-[#00bcd4]',
    link: 'https://tidal.com',
  },
]

export default function Platforms() {
  return (
    <section id="platforms" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_50%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Available everywhere</h2>
          <p className="mt-3 text-white/70">Stream Trackmaster Muzic on your favorite platform.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
            >
              <div className={`absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70 bg-gradient-to-r ${p.color}`} />
              <div className="relative z-10 flex items-center gap-4">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-white/10 text-white">
                  <p.icon size={24} />
                </span>
                <div>
                  <p className="text-white font-semibold">{p.name}</p>
                  <p className="text-white/60 text-sm">Tap to open</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
