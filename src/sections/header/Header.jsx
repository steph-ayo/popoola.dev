import ParticlesComponent from "../../components/Particles";
import { useEffect } from "react";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="name">
          <h2 data-aos="fade-up" className="firstname">
            Stephen
          </h2>
          <h2 data-aos="fade-up">Popoola</h2>
        </div>
        <h3
          style={{ paddingTop: "2rem", margin: "auto 0", fontWeight: "small" }}
        >
          I'm{" "}
          <span style={{ fontWeight: "bold" }} className="typewriter-text">
            <Typewriter
              words={[
                "a Frontend developer.",
                "a Frontend developer.",
                "a Frontend developer.",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </h3>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <ParticlesComponent id="particles" />
    </header>
  );
};

export default Header;
