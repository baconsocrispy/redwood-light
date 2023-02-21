import UFC from "../assets/images/projects/UFC.jpeg";
import Rams from "../assets/images/projects/Rams.jpeg";
import Miami from "../assets/images/projects/Miami.jpeg";
import Sportsnet from "../assets/images/projects/Sportsnet.jpeg";

import { Image } from "./images";

export type Project = {
  id: number;
  name: string;
  client: string;
  category: string;
  newscastUrl: string;
  image: Image;
}

export const Projects: Project[] = [
  {
    id: 0,
    name: "UFC Apex Studio",
    client: "UFC",
    category: "broadcast",
    newscastUrl: "https://www.newscaststudio.com/setstudio/ufc-apex-studio/",
    image: {
      id: 5,
      name: "UFC Apex Studio",
      src: UFC,
      alt: "UFC Apex Studio",
    },
  },
  {
    id: 1,
    name: "Los Angeles Rams Studio",
    client: "Los Angeles Rams",
    category: "broadcast",
    newscastUrl: "https://www.newscaststudio.com/setstudio/los-angeles-rams/",
    image: {
      id: 6,
      name: "Los Angeles Rams Studio",
      src: Rams,
      alt: "Los Angeles Rams Studio",
    },
  },
  {
    id: 2,
    name: "WTJV NBC Miami Studio",
    client: "WTJV NBC Miami",
    category: "broadcast",
    newscastUrl: "https://www.newscaststudio.com/setstudio/ufc-apex-studio/",
    image: {
      id: 7,
      name: "WTJV NBC Miami Studio",
      src: Miami,
      alt: "WTJV NBC Miami Studio",
    },
  },
  {
    id: 3,
    name: "Sportsnet LA Studio",
    client: "Sportsnet LA",
    category: "broadcast",
    newscastUrl: "https://www.newscaststudio.com/setstudio/ufc-apex-studio/",
    image: {
      id: 8,
      name: "Sportsnet LA",
      src: Sportsnet,
      alt: "Sportsnet LA studio",
    },
  },
]; 