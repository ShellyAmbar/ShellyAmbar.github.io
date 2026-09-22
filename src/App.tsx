import { useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Projects } from './components/Projects';
import { VideoModal } from './components/VideoModal';

function App() {
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  return (
    <>
      <CustomCursor />
      <ParticleCanvas />

      <VideoModal youtubeId={modalVideoId} onClose={() => setModalVideoId(null)} />

      <Navbar />

      <div className="container">
        <Hero />
        <About />
        <Experience />
        <Projects onOpenVideo={setModalVideoId} />
        <Contact />
      </div>
    </>
  );
}

export default App;
