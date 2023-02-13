import UFC from "../assets/images/projects/UFC.jpeg";
import Rams from "../assets/images/projects/Rams.jpeg";
import Miami from "../assets/images/projects/Miami.jpeg";
import Sportsnet from "../assets/images/projects/Sportsnet.jpeg";

import { Image } from "./images";

export type Project = {
  name: string;
  client: string;
  newscastUrl: string;
  image: Image;
}

export const Projects: Project[] = [
  {
    name: "UFC Apex Studio",
    client: "UFC",
    newscastUrl: "https://www.newscaststudio.com/setstudio/ufc-apex-studio/",
    image: {
      name: "UFC Apex Studio",
      src: UFC,
      alt: "UFC Apex Studio",
    },
  },
  {
    name: "Los Angeles Rams Studio",
    client: "Los Angeles Rams",
    newscastUrl: "https://www.newscaststudio.com/setstudio/los-angeles-rams/",
    image: {
      name: "Los Angeles Rams Studio",
      src: Rams,
      alt: "Los Angeles Rams Studio",
    },
  },
  {
    name: "WTJV NBC Miami Studio",
    client: "WTJV NBC Miami",
    newscastUrl: "https://www.newscaststudio.com/setstudio/ufc-apex-studio/",
    image: {
      name: "WTJV NBC Miami Studio",
      src: Miami,
      alt: "WTJV NBC Miami Studio",
    },
  },
  {
    name: "Sportsnet LA Studio",
    client: "Sportsnet LA",
    newscastUrl: "https://www.newscaststudio.com/setstudio/ufc-apex-studio/",
    image: {
      name: "Sportsnet LA",
      src: Sportsnet,
      alt: "Sportsnet LA studio",
    },
  },
]; 