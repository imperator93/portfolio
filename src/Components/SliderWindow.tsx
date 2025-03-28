import { Container } from "react-bootstrap";

import { skills } from "../Data/skills";

export const SliderWindow = () => {
  return (
    <Container fluid className="py-5 intro-animation skills-container">
      <h1 className="display-5 text-center">Skills</h1>
      <div className="row gap-2 justify-content-center">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="gap-2 col-md-2 p-2 skill-container-single "
          >
            <img src={skill.image} />
            <h4>{skill.label}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
