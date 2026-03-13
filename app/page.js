import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects.js";
import Experience from "../components/Experience";

import Contact from "../components/Contact";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <About />

      <Skills/>

      <Projects/>

      <Experience/>

      


     <Contact/>
      <Footer />

    </main>

  );
}