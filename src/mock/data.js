import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dennis Buk | Fullstack developer',
  lang: 'en',
  description: 'Welcome to my portfolio page',
};

export const heroData = {
  title: `Hi! My name is `,
  name: 'Dennis Buk.',
  subtitle: `I'm a fullstack developer.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://github.com/TheStelarek', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'great-move.png',
    title: 'GreatMove',
    info: 'The idea behind this project was to create, a web application that would be useful for people associated with the gym and diets.',
    info2: '',
    url: '/GreatMove',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'conference.png',
    title: 'Hickari Conference Manager',
    info: 'A simple application that allows you to create conferences, and manage them. ',
    info2: '',
    url: '/ConferenceMenager',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'unsplash.png',
    title: 'Unsplash search',
    info: 'Simple app based on Unsplash API, which allows us to search for images from unsplash.com',
    info2: '',
    url: '/UnsplashSearch',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};
