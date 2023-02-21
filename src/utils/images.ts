// image imports
import LARams from "../assets/images/hero-images/la-rams-digital-studio.jpeg";
import KHOUHouston from "../assets/images/hero-images/khou-houston-studio.jpeg"
import NBCMiami from "../assets/images/hero-images/nbc-miami-studio.jpeg";
import SportsNetLA from "../assets/images/hero-images/sportsnet-la-studio.jpeg";
import UFCApex from "../assets/images/hero-images/ufc-apex-studio.jpeg";

// types
export type Image = {
  id: number;
  name: string;
  src: string;
  alt: string;
};

// hero images array
export const HeroImages: Image[] = [
  {
    id: 0,
    name: "KHOU 11 Houston",
    src: KHOUHouston,
    alt: "KHOU 11 Houston studio",
  },
  {
    id: 1,
    name: "LA Rams",
    src: LARams,
    alt: "Los Angeles Rams digital studio",
  },
  {
    id: 2,
    name: "NBC Miami",
    src: NBCMiami,
    alt: "NBC Miami studio",
  },
  {
    id: 3,
    name: "Sportsnet LA",
    src: SportsNetLA,
    alt: "Sportsnet LA studio",
  },
  {
    id: 4,
    name: "UFC Apex",
    src: UFCApex,
    alt: "UFC Apex studio",
  },
];
