export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Trackmaster Muzic. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <a href="#platforms" className="hover:text-white">Streaming</a>
            <a href="mailto:hello@trackmastermuzic.com" className="hover:text-white">Contact</a>
            <a href="/test" className="hover:text-white">System</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
