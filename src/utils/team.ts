// image imports
import Erik from "../assets/images/team/erik.png";
import Danny from "../assets/images/team/danny.png";
import Spinner from '../utils/spinner.svg';
import Nautical from '../utils/nautical.svg';


import { Image } from "./images";

export type Bio = {
  id: number;
  name: string;
  position: string;
  image: Image;
  bio: string;
}

export const TeamBios: Bio[] = [
  {
    id: 0,
    name: 'Steve Mulkey',
    position: 'Co-Owner / Business Development',
    image: {
      id: 39,
      name: "Steve Mulkey",
      src: Spinner,
      alt: "Steve Mulkey - Co-Owner / Business Development, Redwood Light",
    },
    bio: `For more than 20 years, Steve has been at the forefront of 
      providing consulting, design, and integration services to broadcast, 
      production, and corporate studios across the world. During his time 
      with Redwood Media Group, he played a significant role in the 
      transition from traditional incandescent and fluorescent studio lighting 
      to the innovative LED lighting technology. Thanks to his vision and 
      expertise, Redwood Light was twice recognized with Emmy Awards for 
      Lighting Design under his leadership. Steve's pioneering work in the 
      field has helped to transform the industry, making him a respected figure 
      and a valuable asset to any lighting project.
    `
  },
  {
    id: 1,
    name: 'Erik Rodgers',
    position: 'Co-Owner / Director of Operations',
    image: {
      id: 40,
      name: "Erik Rodgers",
      src: Erik,
      alt: "Erik Rodgers - Co-Owner / Director of Operations, Redwood Light",
    },
    bio: `Erik is a seasoned expert in professional lighting and production, 
      serving as the head of operations for Redwood Light. With over 25 years 
      of industry experience, Erik has honed his skills in live events, film, 
      and broadcast television. Starting out as co-owner and technical 
      operations head for Theatre PS66 in Albuquerque, NM, Erik went on to work 
      in the film industry in Los Angeles, CA as a Best Boy and Gaffer. He then 
      founded String And A Can Productions, producing and directing online and 
      commercial content as well as independent films. Erik continued to 
      broaden his experience as a lighting director for CNN, Fox Sports, and 
      Thursday Night Football in the broadcast industry. In 2014, he joined the 
      Redwood Media group as a freelancer, ultimately taking over as director of 
      lighting operations and founding REDWOOD LIGHT in 2022.
    `
  },
  {
    id: 2,
    name: 'Danny Lankford',
    position: 'Designer / Programmer',
    image: {
      id: 41,
      name: "Danny Lankford",
      src: Danny,
      alt: "Danny Lankford - Designer / Programmer, Redwood Light",
    },
    bio: `With more than 15 years of experience in the lighting industry, Danny 
      has established himself as a talented lighting designer and programmer. 
      Born and raised in Charlottesville, Virginia, Danny began his journey as 
      a lighting designer at the Paramount Theater and continued to work as a 
      freelance lighting professional across the state. Currently based in 
      Los Angeles, he works as a freelancer, lending his expertise to various 
      projects as a lighting programmer and designer. In 2019, Danny joined 
      Redwood Light and has since installed lighting packages for numerous 
      studios throughout the country, including the LA Rams in-house studio and 
      Telemundo's flagship station in Puerto Rico.
    `
  },
  {
    id: 3,
    name: 'David Polcyn',
    position: 'Project Coordinator / Designer',
    image: {
      id: 42,
      name: "David Polcyn",
      src: Nautical,
      alt: "David Polcyn - Project Coordinator / Designer, Redwood Light",
    },
    bio: `David has been involved in theatrical and television lighting for over 
      two decades, accumulating a wealth of experience in the field. After 
      earning his degree from the University of Southern California, he began 
      his journey in live venue lighting in Los Angeles, working at iconic 
      venues such as the Wiltern and Orpheum Theatres, the LA Coliseum, and the 
      Sports Arena, where he lit performances by legends such as the Rolling 
      Stones, Elton John, Paul McCartney, and Katy Perry. From 2015 to 2019, 
      David honed his skills at CNN's Los Angeles bureau, managing both talent 
      and guest lighting for several shows and conducting numerous presidential 
      and celebrity interviews. During this time, he continued to freelance for 
      other prominent companies such as Fox Sports and Blizzard Entertainment at 
      their Burbank Studios. Since joining Redwood Light in 2015, David has 
      installed lighting packages in studios across the United States, 
      including NBC & Telemundo Miami, Amazon, UFC Studios, LA Rams, and 
      Telemundo Puerto Rico.
    `
  },
];

