import ParticlesComponent from "../../components/Particles";
import { useEffect } from "react";
import HeaderImage from "../../assets/IMG_20220327_230115_893.jpg";
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
        {/* <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div> */}
        <div className="name">
          <h2 data-aos="fade-up" className="firstname">
            Stephen
          </h2>
          <h2 data-aos="fade-up">Popoola</h2>
        </div>

        {/* <p data-aos="fade-up">I am a frontend developer</p> */}
        <h3
          style={{ paddingTop: "2rem", margin: "auto 0", fontWeight: "small" }}
        >
          I'm{" "}
          <span style={{ fontWeight: "bold" }} className="typewriter-text">
            {/* Style will be inherited from the parent element */}
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
        {/* <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div> */}
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
