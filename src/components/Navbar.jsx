import { useState } from 'react'
import { Menu, X, Music2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#tracks', label: 'Tracks' },
    { href: '#platforms', label: 'Platforms' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-indigo-500 text-white shadow-lg shadow-fuchsia-500/20">
                <Music2 size={20} />
              </div>
              <span className="text-white font-semibold tracking-wide text-lg">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400">Trackmaster Muzic</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="#platforms"
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition"
              >
                Listen Now
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white/90"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 sm:px-6 pb-4">
              <div className="flex flex-col py-2 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#platforms"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  Listen Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
