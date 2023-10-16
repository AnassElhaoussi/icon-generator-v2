import Home from "./components/Home"
import Navigation from "./components/Navigation"
import AboutUs from "./components/AboutUs"
import Features from "./components/Features"
import Guide from "./components/Guide"

function App() {

  return (
    <main className="flex flex-col gap-32 font-poppins bg-black overflow-hidden">
      <Navigation />
      <Home />
      <AboutUs />
      <Features />
      <Guide />
    </main>
  )
}

export default App
