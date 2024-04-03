import data from "./data";
import Card from "../../components/Card";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skillsData from "./skillsData";

const Services = () => {
  return (
    <section id="services">
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <div id="skills">
        <h2>My Skills</h2>
        <div className="container skills-container" data-aos="fade-up">
          {skillsData.map((skill) => (
            <div className="skill-card">
              <div className="skill-icon">
                <FontAwesomeIcon
                  key={skill.id}
                  icon={skill.icon}
                  className={skill.className}
                  style={{ color: skill.color }}
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
