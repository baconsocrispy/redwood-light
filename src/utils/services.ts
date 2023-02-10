// image imports
import Broadcast from "../assets/images/services/broadcast-sportsnet.jpeg";
import Corporate from "../assets/images/services/corporate-amazon.png";
import LiveEvents from "../assets/images/services/esports-live-events-redbull-studio.jpeg";
import DesignIntegration1 from "../assets/images/services/design-integration.png";
import DesignIntegration2 from "../assets/images/services/schematic.png";

// types
import { Image } from "./images";
export type Service = {
  title: string;
  description: string;
  image: Image;
};

export const Services: Service[] = [
  {
    title: "Broadcast News & Sports",
    description: `Our comprehensive lighting services cater to the needs of 
      broadcast news and sports organizations of all sizes. Whether you're 
      looking to build new or enhance existing news and interview sets, 
      or you require on-field production support, we have got you covered.`,
    image: {
      name: "Broadcast Services",
      src: Broadcast,
      alt: "Broadcast Services - Los Angeles Sportsnet Digital Studio",
    },
  },
  {
    title: "Corporate Solutions",
    description: `We provide both turnkey solutions as well as
      customizable set and lighting designs tailored to the specific needs of 
      your business. From infrastructure to equipment and control technology 
      we can turn almost any space into a fully functional media center.`,
    image: {
      name: "Corporate Solutions",
      src: Corporate,
      alt: "Corporate Solutions - Amazon Digital Studio",
    },
  },
  {
    title: "Live Events, E-Sports and More",
    description: `Elevate your live event coverage with Redwood Light. Our 
      temporary and permanent installations, including moving lights, LED 
      technology, and state-of-the-art designs, ensure a seamless experience 
      whether you're on-site for Super Bowl Sunday or in-studio for E-Sports gaming.`,
    image: {
      name: "E-Sports and Live Events",
      src: LiveEvents,
      alt: "E-Sports, Live Events and More",
    },
  },
];

export const Schematics: Service[] = [
  {
    title: "Design & Integration",
    description: `Schematic for design and integration`,
    image: {
      name: "Design & Integration",
      src: DesignIntegration1,
      alt: "Schematic for design and integration",
    },
  },
  {
    title: "Design Schematic",
    description: `Schematic for design and integration`,
    image: {
      name: "Design Schematic",
      src: DesignIntegration2,
      alt: "Schematic for design and integration",
    },
  },
];
