import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 1, link: "https://instagram.com", icon: <FaInstagram /> },
  { id: 4, link: "https://github.com/steph-ayo", icon: <FaGithub /> },
  { id: 2, link: "https://twitter.com/Popoolasteph", icon: <FaXTwitter /> },
  {
    id: 3,
    link: "https://www.linkedin.com/in/stephen-popoola-b90990233/",
    icon: <FaLinkedin />,
  },
];
