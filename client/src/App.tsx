import Home from "./components/Home"
import Navigation from "./components/Navigation"
import AboutUs from "./components/AboutUs"
import Features from "./components/Features"
import Guide from "./components/Guide"
import Footer from "./components/Footer"

function App() {

  return (
      <main className="flex flex-col bg-gray-200 dark:bg-black gap-32 font-poppins overflow-hidden">
        <Navigation />
        <Home />
        <AboutUs />
        <Features />
        <Guide />
        <Footer />
      </main>
  )
}

export default App
