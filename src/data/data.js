export const navData = [
  {
    id: `about`,
    url: `About`,
    text: `About`,
  },
  {
    id: `skills`,
    url: `Skills`,
    text: `Skills`,
  },
  {
    id: `projects`,
    url: `Projects`,
    text: `Projects`,
  },
  {
    id: `experience`,
    url: `Experience`,
    text: `Experience`,
  },
];

export const headData = {
  title: `Braden Wright`,
  lang: `en`,
  description: `I'm Braden Wright. I am a front end developer. Welcome to my portfolio website!`,
  image: `"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no' %3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='308.10999999999996' height='308.10999999999996' xml:space='preserve'%3E%3Cdesc%3ECreated with Fabric.js 1.6.0-rc.1%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;' transform='translate(10 10) scale(0.47 0.47)' %3E%3Cpath d='M 306 0 C 137.012 0 0 137.012 0 306 c 0 169.026 137.012 306 306 306 s 306 -136.974 306 -306 C 612 137.012 474.988 0 306 0 z M 306 573.75 C 158.125 573.75 38.25 453.875 38.25 306 C 38.25 158.125 158.125 38.25 306 38.25 c 147.875 0 267.75 119.875 267.75 267.75 C 573.75 453.875 453.875 573.75 306 573.75 z' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: %23000000; fill-rule: nonzero; opacity: 1;' transform='' stroke-linecap='round' /%3E%3C/g%3E%3Cg transform='translate(150.76 177.79) scale(3.62 3.57)'%3E%3Ctext font-family='Arial' font-size='40' font-weight='bold' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: %23000000; fill-rule: nonzero; opacity: 1;' %3E%3Ctspan x='-31.47' y='8.98' style='stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; fill: %23000000; fill-rule: ; opacity: 1;'%3EB%3C/tspan%3E%3Ctspan x='-5.56' y='8.98' style='stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; fill: %23000000; fill-rule: ; opacity: 1;'%3EW%3C/tspan%3E%3C/text%3E%3C/g%3E%3C/svg%3E"`,
};

export const heroData = {
  header: {
    title: `Hi, I'm `,
    titleAccent: `Braden Wright`,
    subTitle: `and I'm a `,
    subTitleAccent: `front end developer`,
    typewriter: ['surfer', 'soccer fan', 'front end developer'],
  },
  cta: `Know more!`,
};

export const aboutData = {
  title: `👋, I'm Braden. Nice to meet you!`,
  bio: [
    {
      id: 'a',
      paragraph: `Front end developing and making aesthetic, functional user interfaces is my passion. I received my B.S. in Computer Science at Brigham Young University - Hawaii and I enjoy working with javascript and react.`,
    },
    {
      id: 'b',
      paragraph: `I love learning and challenging myself and look forward to continuing my journey as a developer - you can read some of my thoughts and experiences on my blog.`,
    },
    {
      id: 'c',
      paragraph: `Check out my resume to view all my qualifications!`,
    },
  ],
  resume: `https://docs.google.com/document/d/e/2PACX-1vTy45cVuqDYyQA-8CV9bajCjscA6eY3pM82O7J2Lc5C6GKcD6XJde2ifi95alPc8w/pub`,
  blog: `https://brad0s.github.io/`,
};

export const projectsData = [
  {
    id: 'h',
    title: `Bank Dice Game.`,
    subtitle: ``,
    description: `Inspired by the dice game "Bank", I create this game using react. A simple game where you roll a dice and try to ge the highest score possible.`,
    tags: [`react`, `scss`],
    image: {
      filename: `bank-dice-game.webp`,
      alt: 'Bank dice game screenshot',
    },
    repo: `https://github.com/brad0s/bank-dice-app`,
    url: `https://bank-game.braden-wright.dev/`,
  },
  {
    id: 'g',
    title: `Landing page.`,
    subtitle: `Eye-Catching.`,
    description: `I am captivated by the elegance of landing pages, and I tried take myself out of my comfort zone to create this landing page about the painter Claude Monet using React, HTML, and SCSS.`,
    tags: [`react`, `scss`, `gsap`],
    image: {
      filename: `monet-app.webp`,
      alt: 'Monet Landing page screenshot',
    },
    repo: `https://github.com/brad0s/monet-app`,
    url: `https://monet.braden-wright.dev/`,
  },
  {
    id: 'f',
    title: `Country flag quiz.`,
    subtitle: ``,
    description: `I wanted to learn the countries flags so I created this quiz to help me learn. Try it out! My fastest time was under 9 minutes.`,
    tags: [`react`, `scss`, `vite`],
    image: {
      filename: `country-flag-quiz.webp`,
      alt: '197 countries flag quiz',
    },
    repo: `https://github.com/brad0s/country-flags-quiz`,
    url: `https://flags-quiz.braden-wright.dev/`,
  },
  {
    id: 'c',
    title: `Grant Writer Portfolio.`,
    subtitle: `99% Lighthouse Score.`,
    description: `Discover the pinnacle of web design: a fully custom WordPress theme powered by PHP, SCSS, and JavaScript. Bask in its near-perfect 99% Lighthouse score, a testament to its speed and user experience. Crafted with SEO best practices, this website ensures top-notch performance in search rankings.`,
    tags: [`wordpress`, `php`, `seo`],
    image: {
      filename: `lani-portfolio.webp`,
      alt: 'lani wright grant writer portfolio',
    },
    repo: ``,
    url: `https://laniwright.com/`,
  },
  {
    id: 'a',
    title: `API-connected.`,
    subtitle: `Data driven.`,
    description: `I have a profound passion for the Premier League, which inspired me to design this website utilizing a football data API. Showcasing my expertise in React development, SCSS styling, and API integration, this platform reflects my skills in web development.`,
    tags: [`react`, `scss`, `api`, `js`],
    image: { filename: `soccer.webp`, alt: 'Soccer states website screenshot' },
    repo: `https://github.com/brad0s/epl-webapp`,
    url: `https://fabulous-dusk-36fd2a.netlify.app/`,
  },
  {
    id: 'b',
    title: `Responsive Webpages.`,
    subtitle: `Pixel-perfect design.`,
    description: `While working at Martindale-Nolo, I actively contributed to a significant project involving the development of a new LLC launch path, aimed at facilitating users in creating their own LLCs. Collaborating with another front end developer, we transformed the graphic designer's templates into pixel-perfect, mobile-first websites using HTML, LESS, and JS technologies.`,
    tags: [`js`, `less`, `php`],
    image: {
      filename: `llc.webp`,
      alt: 'Nolo llc builder landing page screenshot',
    },
    repo: ``,
    url: `https://www.nolo.com/lander/entry/llc/llcname`,
  },
  {
    id: 'd',
    title: `Quote Generator.`,
    subtitle: `Consuming APIs.`,
    description: `A straightforward quote generator app providing random, inspirational quotes, powered by API Ninjas.`,
    tags: [`axios`, `react`, `api`],
    image: {
      filename: `quote-gen.webp`,
      alt: 'quote generator screenshot',
    },
    repo: `https://github.com/brad0s/quote-generator`,
    url: `https://coruscating-nasturtium-3e8edf.netlify.app/`,
  },
  // {
  //   id: 'e',
  //   title: `Landing page.`,
  //   subtitle: `Mobile first design.`,
  //   description: `I am captivated by the elegance of landing pages, and drawing inspiration from Shopify, I embarked on a project to recreate their stunning landing page using React, HTML, JS, and SCSS.`,
  //   tags: [`react`, `scss`],
  //   image: {
  //     filename: `skopify.webp`,
  //     alt: 'Ecommerce Landing page screenshot',
  //   },
  //   repo: `https://github.com/brad0s/skopify-lander`,
  //   url: `https://elegant-perlman-a14ab1.netlify.app/`,
  // },
];

export const experienceData = [
  {
    id: 'a',
    company: `Floodlight Design`,
    location: `Remote`,
    jobTitle: `Front End Developer`,
    dates: { start: `Nov 2021`, end: `current` },
  },
  {
    id: 'b',
    company: `BYU-Hawaii`,
    location: `Laie, HI`,
    jobTitle: `Software Developer`,
    dates: { start: `Feb 2020`, end: `Feb 2021` },
  },
  {
    id: 'c',
    company: `Martindale-Nolo`,
    location: `Pleasanton, CA`,
    jobTitle: `Front End Developer Internship`,
    dates: { start: `Oct 2019`, end: `Feb 2020` },
  },
  {
    id: 'd',
    company: `BYU-Hawaii`,
    location: `Laie, HI `,
    jobTitle: `Student Developer`,
    dates: { start: `Dec 2016`, end: `Jun 2019` },
  },
  {
    id: 'e',
    company: `Varian Medical Systems`,
    location: `Palo Alto, CA`,
    jobTitle: `Software Developer Internship`,
    dates: { start: `Jun 2017`, end: `Aug 2017` },
  },
];

export const educationData = [
  {
    id: 'a',
    name: `BYU-Hawaii`,
    location: `Laie, HI`,
    degree: `B.S.`,
    major: `Computer Science`,
    date: {
      start: `Aug 2016`,
      end: `Jun 2019`,
    },
  },
  // {
  //   id: nanoid(),
  //   name: `Utah Valley Univeristy`,
  //   location: `Orem, UT`,
  //   degree: `A.S.`,
  //   major: `Pre-Professional`,
  //   date: {
  //     start: `Aug 2015`,
  //     end: `Jun 2016`,
  //   },
  // },
];

export const footerData = {
  networks: [
    {
      id: 'a',
      name: `Twitter`,
      url: `https://twitter.com/Braden23763605`,
    },
    {
      id: 'b',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/wright-braden/',
    },
    {
      id: 'c',
      name: 'Github',
      url: 'https://github.com/brad0s',
    },
  ],
  copyright: 'Braden Wright',
};
