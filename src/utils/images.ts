// image imports
import LARams from "../assets/images/la-rams-digital-studio.jpeg";
import KHOUHouston from "../assets/images/khou-houston-studio.jpeg"
import NBCMiami from "../assets/images/nbc-miami-studio.jpeg";
import SportsNetLA from "../assets/images/sportsnet-la-studio.jpeg";
import UFCApex from "../assets/images/ufc-apex-studio.jpeg";

// types
export type Image = {
  name: string;
  src: string;
  alt: string;
};

// hero images array
export const HeroImages: Image[] = [
  {
    name: "KHOU 11 Houston",
    src: KHOUHouston,
    alt: "KHOU 11 Houston studio",
  },
  {
    name: "LA Rams",
    src: LARams,
    alt: "Los Angeles Rams digital studio",
  },
  {
    name: "NBC Miami",
    src: NBCMiami,
    alt: "NBC Miami studio",
  },
  {
    name: "Sportsnet LA",
    src: SportsNetLA,
    alt: "Sportsnet LA studio",
  },
  {
    name: "UFC Apex",
    src: UFCApex,
    alt: "UFC Apex studio",
  },
];
