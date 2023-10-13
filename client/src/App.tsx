import Home from "./components/Home"
import Navigation from "./components/Navigation"
function App() {

  return (
    <main className="flex flex-col gap-16 font-poppins bg-black h-screen">
      <Navigation />
      <Home />
    </main>
  )
}

export default App
