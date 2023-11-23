import Home from "./components/Home"
import Navigation from "./components/Navigation"
import Features from "./components/Features"
import Guide from "./components/Guide"
import Footer from "./components/Footer"
import { About } from "./components/About"
import { Reviews } from "./components/Reviews"
import Stats from "./components/Stats"

function App() {

  return (
      <main className="flex flex-col bg-gray-200 dark:bg-black gap-32 font-poppins overflow-hidden">
        <Navigation />
        <Home />
        <Stats />
        <Features />
        <About />
        <Reviews />
        <Guide />
        <Footer />
      </main>
  )
}

export default App
