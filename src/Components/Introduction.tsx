import { Container } from "react-bootstrap";
import { Details } from "./Details";
import { useState } from "react";
import { Colors } from "../Types/Colors";

export const Introduction = ({ stop }: { stop: boolean }) => {
  const [colors, setColors] = useState<Colors>({ red: 0, green: 0, blue: 0 });

  (() => {
    if (stop) {
      const i = setInterval(() => {
        setColors((prev) => ({
          ...prev,
          red: 150 + Math.floor(Math.random() * 50),
          blue: 150 + Math.floor(Math.random() * 50),
          green: 150 + Math.floor(Math.random() * 50),
        }));
        clearInterval(i);
      }, 200);
    }
  })();

  return (
    <Container fluid className="w-100 min-vh-100 introduction-container">
      <div className="row gap-5 introduction-wrapper">
        <div className="h-60 col">
          <h1
            style={
              {
                "--delay": "0ms",
                backgroundImage: `linear-gradient(to right, rgba(${colors.red}, ${colors.green}, ${colors.blue}), white)`,
                backgroundClip: "text",
                color: "transparent",
              } as React.CSSProperties
            }
            className="display-1 py-2 position-relative intro-animation"
          >
            Greetings!
          </h1>
          <p
            style={
              {
                "--delay": "1500ms",
                opacity: "0",
                backgroundImage: `linear-gradient(to right, rgba(${colors.red}, ${colors.green}, ${colors.blue}), white)`,
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } as React.CSSProperties
            }
            className="position-relative intro-animation"
          >
            I am Leo Binbauer, self-made full-stack developer with an ambition
            to become a software engineer. I have experience with React,
            Typescript, CSS, HTML, C#, .NET, SQL Server, EF core. I also have
            some experience dealing with no-SQL databases such as MongoDb with
            Mongoose and Express.js api-s.
          </p>
          <p
            style={
              {
                "--delay": "3000ms",
                opacity: "0",
                backgroundImage: `linear-gradient(to right, rgba(${colors.red}, ${colors.green}, ${colors.blue}), white)`,
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } as React.CSSProperties
            }
            className="position-relative intro-animation"
          >
            Free time I spend solving LeetCode problems and watching hackathons.
            My final goal as a programmer is to learn system and web
            architecture and become a software architect and as a hobby to learn
            C or C++ or Rust and develop my own game engine. I would like to
            work with other developers, exchange knowledge and ideas.
          </p>
        </div>
        <Details />
      </div>
    </Container>
  );
};
