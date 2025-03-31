import { CSSProperties } from "react";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export const Details = () => {
  return (
    <div
      style={{ "--delay": "4000ms", opacity: "0" } as CSSProperties}
      className="col p-2 intro-animation"
    >
      <img className="w-25" src="https://imgur.com/ZEf0Ric.jpg" />
      <h3 className="display-6">Leo Binbauer</h3>
      <h5>
        <CiMail /> leobinbauer@gmail.com
      </h5>
      <div className="row justify-content-start">
        <h1 className="col-auto">
          <a href="https://www.linkedin.com/in/leo-binbauer-402713303/">
            <CiLinkedin />
          </a>
        </h1>

        <h1 className="col-auto">
          <a href="https://github.com/imperator93">
            <FaGithub />
          </a>
        </h1>
        <h5>Phone: +385915257465</h5>
      </div>
    </div>
  );
};
