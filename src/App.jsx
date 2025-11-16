import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Platforms from './components/Platforms'
import Tracks from './components/Tracks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      <main>
        <Hero />
        <Tracks />
        <Platforms />
      </main>
      <Footer />
    </div>
  )
}

export default App
