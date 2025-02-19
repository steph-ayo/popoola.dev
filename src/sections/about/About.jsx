import { MdOutlineFileDownload } from "react-icons/md";
import AboutImage from "../../assets/header.jpg";
import CV from "../../assets/cv.pdf";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="/" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <p>
            As an experienced front-end engineer with about 3 years of
            expertise, I excel in initiating and leading successful projects,
            thriving in dynamic, fast-paced environments.
            <br />
            <br />
            Whether collaborating within a team or working independently, I
            demonstrate exceptional adaptability and proficiency. My enthusiasm
            for learning drives me to craft impactful solutions that drive
            progress and deliver tangible outcomes.
            <br />
            <br /> I am committed to continuous growth and development in the
            ever-evolving technological landscape, ready to contribute
            effectively to any organization.
            <br />
            <br />
            When not coding, I am also a professional singer, coding and STEM
            tutor.
          </p>

          <a href={CV} download className="btn primary">
            Download CV <MdOutlineFileDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
