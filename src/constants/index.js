import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  // starbucks,
  // tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Flutter,
  Dart,
  Firebase,
  Android,
  Xcode,
  Python,
  Tensorflow,
  Shopify,
  Cybergen,
  Ecommerce,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "E-commerce Specialist",
    icon: backend,
  },
  {
    title: "Figma Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: Flutter,
  },
  {
    name: "Dart",
    icon: Dart,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Android",
    icon: Android,
  },
  {
    name: "Xcode",
    icon: Xcode,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Tensorflow",
    icon: Tensorflow,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Shopify",
    icon: Shopify,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "Cybergen/USA",
    icon: Cybergen,
    iconBg: "#383E56",
    date: "July 2024 - July 2025",
    points: [
      "Developing and deploying AI models to solve complex problems and enhance operational efficiency.",
      "Collaborating with data scientists, engineers, and product teams to integrate AI-driven solutions into products.",
      "Ensuring the scalability, reliability, and efficiency of AI systems for real-world applications.",
      "Contributing to the research, testing, and development of innovative AI technologies and methodologies.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "E-commerce Gallaxy",
    icon: Ecommerce,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2024",
    points: [
       "Developing and maintaining cross-platform mobile applications using Flutter and Dart.",
    "Collaborating with product managers, designers, and backend engineers to create seamless app experiences.",
    "Implementing responsive design and ensuring smooth performance across iOS and Android platforms.",
    "Participating in code reviews and providing mentorship to junior developers on best practices."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Hexon",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points:[
  "Developing and maintaining custom WordPress and Shopify themes using PHP, Liquid, HTML, CSS, and JavaScript.",
  "Collaborating with designers, project managers, and developers to deliver optimized, scalable websites.",
  "Implementing responsive layouts and ensuring performance and cross-browser compatibility.",
  "Participating in code reviews and maintaining clean, well-documented code across projects.",
],

  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
