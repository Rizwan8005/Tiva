import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";

export let Links = [
  { name: "Home", icon: <FontAwesomeIcon icon={faPlus} />, link: "/" },
  {
    name: "Services",
    icon: <FontAwesomeIcon icon={faPlus} />,
    link: "/services",
  },
  {
    name: "Portfolio",
    icon: <FontAwesomeIcon icon={faPlus} />,
    link: "/portfolio",
  },
  { name: "Blog", icon: <FontAwesomeIcon icon={faPlus} />, link: "/blog" },
  {
    name: "Contact Us",
    // icon: <FontAwesomeIcon icon={faPlus} />,
    link: "/contact",
  },
];
