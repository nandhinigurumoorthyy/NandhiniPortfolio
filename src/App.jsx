import { useState } from "react";
import "./App.css";
import BlurBackground from "./components/BlurBackground";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BlurBackground />
      <NavBar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 ">
        <NavBar />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact/>
      </main>
    </>
  );
}

export default App;
