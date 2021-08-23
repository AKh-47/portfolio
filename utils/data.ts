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
  resume: '/resume.pdf',
  projects: [
    {
      name: 'Design Portal',
      image: '/projects/prism.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse id voluptate fuga minus ab quia nam cumque officiis animi recusandae molestiae doloribus beatae ex culpa deserunt optio, neque soluta.',
      stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
      repo: 'https://github.com/JeremyBearimy83/typeracer-clone/tree/master',
      site: 'https://github.com/JeremyBearimy83/typeracer-clone/tree/master',
      ongoing: false,
    },
    {
      name: 'Coder',
      image: '/projects/coder.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse id voluptate fuga minus ab quia nam cumque officiis animi recusandae molestiae doloribus beatae ex culpa deserunt optio, neque soluta.',
      stack: ['React', 'Node.js'],
      repo: 'https://github.com/JeremyBearimy83/typeracer-clone/tree/master',
      site: '',
      ongoing: true,
    },
    {
      name: 'Hawkeye',
      image: '/projects/hawk.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse id voluptate fuga minus ab quia nam cumque officiis animi recusandae molestiae doloribus beatae ex culpa deserunt optio, neque soluta.',
      stack: ['React', 'Node.js'],
      repo: 'https://github.com/akhilkala/coder',
      site: '',
      ongoing: false,
    },
    {
      name: 'TypeRacer',
      image: '/projects/typeracer.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse id voluptate fuga minus ab quia nam cumque officiis animi recusandae molestiae doloribus beatae ex culpa deserunt optio, neque soluta.',
      stack: ['React', 'Node.js'],
      repo: 'https://github.com/akhilkala/coder',
      site: '',
      ongoing: true,
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
