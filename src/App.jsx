import React from 'react';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import OpSrcMods from './components/OpSrcMods';
import Papers from './components/Papers';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BottomNavbar from './components/BottomNavbar';
import MidNavbar from './components/MidNavbar';
import StarsCanvas from './canvas/Stars';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      <div className="fixed top-0 left-0 h-full w-full -z-10">
        <div className="absolute h-full w-full bg-black">
          {/* Background patterns */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="fixed top-0 left-0 h-full w-full -z-10">
        <StarsCanvas />
      </div>

      <TopNavbar />
      <MidNavbar />

      <div className="container mx-auto px-8 relative z-10">
        <section id="home" className="mb-30 mt-20">
          <Home />
        </section>
        <section id="skills" className="mb-30 mt-20">
          <Skills />
        </section>
        <section id="experience" className="mb-30 mt-20">
          <Experience />
        </section>
        <section id="opsrcmods" className="mb-30 mt-20">
          <OpSrcMods />
        </section>
        <section id="papers" className="mb-30 mt-20">
          <Papers />
        </section>
        <section id="projects" className="mb-30 mt-20">
          <Projects />
        </section>
        <section id="contact" className="mb-30 mt-20">
          <Contact />
        </section>
      </div>

      <BottomNavbar />
      
    </div>
  );
};

export default App;
