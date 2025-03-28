import { useRef, useState } from "react";
import { Introduction } from "./Components/Introduction";
import { Navigation } from "./Components/Navigation";
import { Projects } from "./Components/ProjectsSection";
import { SliderWindow } from "./Components/SliderWindow";
import { Footer } from "./Components/Footer";
import { FallingSand } from "./Components/FallingSand";
import { SidebarButton } from "./Components/SidebarButton";

export const App = () => {
  const [stop, setStop] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const homeRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  return (
    <main>
      <header ref={homeRef}>
        <Navigation
          refs={[{ Home: homeRef, Projects: projectRef, Skills: skillsRef }]}
          stop={stop}
          setStop={setStop}
        />
        <SidebarButton sidebar={sidebar} setSidebar={setSidebar} />
        {!sidebar && <FallingSand sidebar={sidebar} />}
        <Introduction stop={stop} />
      </header>
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
  );
};
