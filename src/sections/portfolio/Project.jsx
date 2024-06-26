import Card from "../../components/Card";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Portfolio Projectimage" />
      </div>

      <h4>{project.title}</h4>
      <p className="portfolio__project-desc">{project.desc}</p>

      <div className="portfolio__project-status">
        <span
          className="ping"
          style={{ backgroundColor: project.color }}
        ></span>

        <p>{project.status}</p>
      </div>

      <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="btn sm demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </Card>
  );
};

export default Project;
