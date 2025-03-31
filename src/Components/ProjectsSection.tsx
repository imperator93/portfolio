import { Container } from "react-bootstrap";

export const Projects = () => {
  return (
    <Container fluid className="projects-container py-5">
      <h1 className="display-5 text-center">Projects</h1>
      <div
        style={{ marginTop: "2vh" }}
        className="gap-2 row justify-content-center px-3 projects-wrapper"
      >
        <a
          href="https://monumental-kleicha-2704bd.netlify.app/"
          className="w-sm-100 col-sm-5 col-md-5 col-lg-3 p-4 fs-6 project-single-container"
        >
          <img src="https://imgur.com/FfWe3Wr.jpg" alt="" />
          <h2>Webshop</h2> <p>(wip)</p>
          <p>webshop with react/typescript and a millionaire game</p>
        </a>
        <a
          href="https://github.com/imperator93/chat-app"
          className="col-sm-5 col-md-5 col-lg-3 p-4 fs-6 project-single-container"
        >
          <img src="https://imgur.com/cHuWhB5.jpg" alt="" />
          <h2>ChatApp</h2> <p>(wip)</p>
          <p>
            chat-app for local network (react, ts, express) with polling Will
            soon convert the endpoints to use new .net backend service
          </p>
        </a>
        <a
          href="https://github.com/imperator93/webshop-backend"
          className="col-sm-5 col-md-5 col-lg-3 p-4 fs-6 project-single-container"
        >
          <img src="https://imgur.com/z1mYTzZ.jpg" alt="" />
          <h2>Webshop backend</h2> <p>(wip)</p>
          backend with mongoDB, mongoose, express.js
        </a>
        <a
          href="https://github.com/imperator93/chat-app-backend"
          className="col-sm-5 col-md-5 col-lg-3 p-4 fs-6 project-single-container"
        >
          <img src="https://imgur.com/abgwaAf.jpg" alt="" />
          <h2>ChatApp backend</h2> <p>(wip)</p>
          .net, ef core, sql server. Monolith, repository pattern, AES password
          encryption
        </a>
        <a
          href="https://github.com/imperator93/subtitle-parser"
          className="col-sm-5 col-md-5 col-lg-3 p-4 fs-6 project-single-container"
        >
          <img src="https://imgur.com/72qRcMt.jpg" alt="" />
          <h2>Subtitle parser</h2> <p>Done!</p>
          can increment/decrement subtitle times by an amount and write to a new
          file
        </a>
      </div>
    </Container>
  );
};
