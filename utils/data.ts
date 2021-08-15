interface Project {
  name: string;
  image: string;
  description: string;
  stack: string[];
  repo: string;
  site: string;
  ongoing: boolean;
}

interface Data {
  resume: string;
  projects: Project[];
  about: string;
  skills: {
    frontEnd: string[];
    backEnd: string[];
    misc: string[];
  };
}

const data: Data = {
  resume: "/Akhil's Resume.pdf",
  projects: [
    {
      name: 'TypeRacer clone',
      image: '/projects/typeracer.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse id voluptate fuga minus ab quia nam cumque officiis animi recusandae molestiae doloribus beatae ex culpa deserunt optio, neque soluta.',
      stack: [
        'React',
        'TypeScript',
        'Sass',
        'Node.js',
        'Express.js',
        'MongoDB',
        'GraphQL',
        'Socket.io',
      ],
      repo: 'https://github.com/JeremyBearimy83/typeracer-clone/tree/master',
      site: 'https://github.com/JeremyBearimy83/typeracer-clone/tree/master',
      ongoing: true,
    },

    {
      name: 'TypeRacer clone',
      image: '',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse id voluptate fuga minus ab quia nam cumque officiis animi recusandae molestiae doloribus beatae ex culpa deserunt optio, neque soluta.',
      stack: ['React', 'Node.js'],
      repo: 'https://github.com/JeremyBearimy83/typeracer-clone/tree/master',
      site: '',
      ongoing: false,
    },
  ],
  about:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt voluptatibus sequi odio necessitatibus nobis repellendus',
  skills: {
    frontEnd: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'React', 'Next.js'],
    backEnd: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    misc: ['TypeScript', 'GraphQL', 'Socket.io', 'Python'],
  },
};

export default data;
