import "./App.css";
import BlurBackground from "./components/BlurBackground";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <BlurBackground />
      <NavBar />
      <main className="antialiased overflow max-w-7xl mx-auto relative z-10 ">
        <NavBar />
        <Hero />
        <About />
        <Skill/>
        <Projects />
        <Experience />
        <Contact/>
      </main>
    </>
  );
}

export default App;
