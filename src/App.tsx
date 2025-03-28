import { useRef, useState } from "react";
import { Introduction } from "./Components/Introduction";
import { Navigation } from "./Components/Navigation";
import { Projects } from "./Components/ProjectsSection";
import { SliderWindow } from "./Components/SliderWindow";
import { Footer } from "./Components/Footer";

export const App = () => {
  const [stop, setStop] = useState(true);
  const projectRef = useRef<HTMLSelectElement>(null);
  const skillsRef = useRef<HTMLSelectElement>(null);
  return (
    <>
      <Navigation
        refs={[{ Projects: projectRef, Skills: skillsRef }]}
        stop={stop}
        setStop={setStop}
      />
      <Introduction stop={stop} />
      <main>
        <section ref={projectRef}>
          <Projects />
        </section>
        <section ref={skillsRef}>
          <SliderWindow />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};
