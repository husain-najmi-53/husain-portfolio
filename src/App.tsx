import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Builds from "./components/Builds";
import Log from "./components/Log";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="relative min-h-screen">
      <div id="top" className="absolute top-0 left-0 -z-50 pointer-events-none" />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Builds />
        <Log />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
