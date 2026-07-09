import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Builds from "./components/Builds";
import Log from "./components/Log";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
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
    </div>
  );
}

export default App;
