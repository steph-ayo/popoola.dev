import data from "./data";
// import Scrollspy from "react-scrollspy";
import Socials from "./Socials";
import "./floating-socials.css";

const FloatingSocials = () => {
  return (
    <ul id="floating-socials">
      <div
        // offset={-500}
        className="scrollspy"
        // items={["header", "about", "services", "portfolio", "contact"]}
        // currentClassName="active"
      >
        {data.map((item) => (
          <Socials key={item.id} item={item} />
        ))}
      </div>
    </ul>
  );
};

export default FloatingSocials;
