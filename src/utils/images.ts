import LARams from "../assets/images/la-rams-digital-studio.jpeg";
import KHOUHouston from "../assets/images/khou-houston-studio.jpeg"
import NBCMiami from "../assets/images/nbc-miami-studio.jpeg";
import SportsNetLA from "../assets/images/sportsnet-la-studio.jpeg";
import UFCApex from "../assets/images/ufc-apex-studio.jpeg";

export type Image = {
  name: string;
  url: string;
  alt: string;
};

export const HeroImages: Image[] = [
  {
    name: 'LA Rams',
    url: LARams,
    alt: "Los Angeles Rams digital studio",
  },
  {  
    name: 'KHOU 11 Houston',
    url: KHOUHouston,
    alt: "KHOU 11 Houston studio",
  },
  {
    name: 'NBC Miami',
    url: NBCMiami,
    alt: "NBC Miami studio",
  },
  {
    name: 'Sportsnet LA',
    url:SportsNetLA,
    alt: "Sportsnet LA studio",
  },
  {
    name: 'UFC Apex',
    url: UFCApex,
    alt: "UFC Apex studio",
  },
];
