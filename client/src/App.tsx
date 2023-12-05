import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Features from "./components/Features";
import Guide from "./components/Guide";
import Footer from "./components/Footer";
import { About } from "./components/About";
import { Reviews } from "./components/Reviews";
import Stats from "./components/Icons";
import { Helmet } from "react-helmet";

function App() {
  return (
    <main>
      <Helmet>
        <title>IconizeAI</title>
        <meta
          name="description"
          content="Unlock creativity with Iconize AI, your go-to platform for generating personalized icons through advanced artificial intelligence. Explore endless possibilities, customize with ease, and enhance your projects with unique, AI-crafted icons."
        />
        <meta
          name="keywords"
          content="Icon Generator, AI Icons, Custom Icons, Graphic Design Tool, Creative Icon Maker, Artificial Intelligence Design, Personalized Graphics, Icon Creation Platform, Unique Icon Styles, Digital Art Generator"
        />
      </Helmet>
      <section className="flex flex-col bg-gray-200 dark:bg-black gap-32 font-poppins overflow-hidden">
        <Navigation />
        <Home />
        <Stats />
        <Features />
        <About />
        <Reviews />
        <Guide />
        <Footer />
      </section>
    </main>
  );
}

export default App;
