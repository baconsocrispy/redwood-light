import * as Assets from './assets';

// types
export type Image = {
  id: number;
  name: string;
  src: string;
  alt: string;
};

export type Project = {
  id: number;
  name: string;
  client: string;
  category: string;
  newscastUrl: string;
  image: Image;
};

export type Service = {
  title: string;
  description: string;
  image: Image;
};

export type Bio = {
  id: number;
  name: string;
  position: string;
  image: Image;
  bio: string;
}

// hero images array
export const HeroImages: Image[] = [
  {
    id: 0,
    name: "KHOU 11 Houston",
    src: Assets.KHOUHouston,
    alt: "KHOU 11 Houston studio",
  },
  {
    id: 1,
    name: "LA Rams",
    src: Assets.LARams,
    alt: "Los Angeles Rams digital studio",
  },
  {
    id: 2,
    name: "NBC Miami",
    src: Assets.NBCMiami,
    alt: "NBC Miami studio",
  },
  {
    id: 3,
    name: "Sportsnet LA",
    src: Assets.SportsNetLA,
    alt: "Sportsnet LA studio",
  },
  {
    id: 4,
    name: "UFC Apex",
    src: Assets.UFCApex,
    alt: "UFC Apex studio",
  },
];

// partner logos array
export const ClientLogos: Image[] = [
  {
    id: 21,
    name: "AIG Logo",
    src: Assets.AIGLogo,
    alt: "AIG Logo",
  },
  {
    id: 22,
    name: "Amazon Logo",
    src: Assets.AmazonLogo,
    alt: "Amazon Logo",
  },
  {
    id: 23,
    name: "Fox Logo",
    src: Assets.FoxLogo,
    alt: "Fox Logo",
  },
  {
    id: 25,
    name: "LA Rams Logo",
    src: Assets.LARamsLogo,
    alt: "LA Rams Logo",
  },
  {
    id: 26,
    name: "LA Times Logo",
    src: Assets.LATimesLogo,
    alt: "LA Times Logo",
  },
  {
    id: 27,
    name: "NBC Universal Logo",
    src: Assets.NBCUniversalLogo,
    alt: "NBC Universal Logo",
  },
  {
    id: 30,
    name: "Telemundo Logo",
    src: Assets.TelemundoLogo,
    alt: "Telemundo Logo",
  },
  {
    id: 31,
    name: "Titans Logo",
    src: Assets.TitansLogo,
    alt: "Titans Logo",
  },
  {
    id: 32,
    name: "UFC Logo",
    src: Assets.UFCLogo,
    alt: "UFC Logo",
  },
];

// featured projects array
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
      src: Assets.UFC,
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
      src: Assets.Rams,
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
      src: Assets.Miami,
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
      src: Assets.Sportsnet,
      alt: "Sportsnet LA studio",
    },
  },
]; 

// awards projects array
export const AwardsProjects: Project[] = [
  {
    id: 4,
    name: "Lakers Digital Studio",
    client: "LA Lakers",
    category: "broadcast",
    newscastUrl: "https://www.newscaststudio.com/setstudio/twc-deportes-2/",
    image: {
      id: 9,
      name: "Lakers Digital Studio",
      src: Assets.Lakers,
      alt: "Lakers Digital Studio",
    },
  },
  {
    id: 5,
    name: "LA Dodgers Studio",
    client: "LA Dodgers",
    category: "broadcast",
    newscastUrl: "https://www.newscaststudio.com/setstudio/sportsnet-la/",
    image: {
      id: 10,
      name: "LA Dodgers Studio",
      src: Assets.Dodgers,
      alt: "LA Dodgers Studio",
    },
  },
];

export const Services: Service[] = [
  {
    title: "Broadcast News & Sports",
    description: `Our comprehensive lighting services cater to the needs of 
      broadcast news and sports organizations of all sizes. Whether you're 
      looking to build new or enhance existing news and interview sets, 
      or you require on-field production support, we have got you covered.`,
    image: {
      id: 17,
      name: "Broadcast Services",
      src: Assets.Broadcast,
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
      id: 18,
      name: "Corporate Solutions",
      src: Assets.Corporate,
      alt: "Corporate Solutions - Amazon Digital Studio",
    },
  },
  {
    title: "Live Events & E-Sports",
    description: `Elevate your live event coverage with Redwood Light. Our 
      temporary and permanent installations, including moving lights, LED 
      technology, and state-of-the-art designs, ensure a seamless experience 
      whether you're on-site for Super Bowl Sunday or in-studio for E-Sports gaming.`,
    image: {
      id: 19,
      name: "E-Sports and Live Events",
      src: Assets.LiveEvents,
      alt: "E-Sports, Live Events and More",
    },
  },
];

export const Schematics: Service[] = [
  {
    title: "Design & Integration",
    description: `Schematic for design and integration`,
    image: {
      id: 20,
      name: "Design & Integration",
      src: Assets.DesignIntegration1,
      alt: "Schematic for design and integration",
    },
  },
  {
    title: "Design Schematic",
    description: `Schematic for design and integration`,
    image: {
      id: 21,
      name: "Design Schematic",
      src: Assets.DesignIntegration2,
      alt: "Schematic for design and integration",
    },
  },
];

// team bios array
export const TeamBios: Bio[] = [
  {
    id: 0,
    name: 'Steve Mulkey',
    position: 'Co-Owner / Business Development',
    image: {
      id: 39,
      name: "Steve Mulkey",
      src: Assets.Steve,
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
      src: Assets.Erik,
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
      src: Assets.Danny,
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
      src: Assets.David,
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