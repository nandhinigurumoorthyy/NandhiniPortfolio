import restaurant from "../assets/restaurant.jpg";
import movie from "../assets/movie.jpg";
import blog from "../assets/blog.jpg";
import parlour from "../assets/parlour.PNG";
import secure from "../assets/secure.jpg";

export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certification", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "👩‍💻 Welcome to my portfolio!",
  introduction:
    "I’m Nandhini — a Full Stack Developer open to new opportunities. I’m curious and passionate about building smooth, smart, and user-friendly UI/UX applications. I focus on turning ideas into functional, real-world solutions.",
  description:
    "This portfolio is a reflection of my work, skills, and the passion I bring to web development.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Online Restaurant Booking",
    description:
      "A full-stack MERN application that allows users to browse restaurants, make reservations, and manage their bookings. Includes full CRUD functionality for reservations and booking management with a user-friendly interface.",
    image: restaurant,
    link: "https://github.com/nandhinigurumoorthyy/Restaurant_Reservation_frontend.git",
    demo: "https://restaurant-reservation-ui.netlify.app/",
  },
  {
    name: "Beauty Parlour Services",
    description:
      "A full-stack MERN app for booking beauty and grooming services with personalized cart and appointment scheduling, featuring full CRUD operations and a responsive UI.",
    image: parlour,
    link: "https://github.com/nandhinigurumoorthyy/Beauty-Services-MERN-Client",
    demo: "https://glam-on-go-beauty-services-mern-app.netlify.app/",
  },
  {
    name: "Blog Platform",
    description:
      "Blogging platform with JWT authentication, full CRUD on blogs, and responsive UI using React, Node.js, Express, and MongoDB.",
    image: blog,
    link: "https://github.com/nandhinigurumoorthyy/MERN-Blog-Client.git",
    demo: "https://mern-blogcom-client.netlify.app/",
  },
  {
    name: "Secure Password Reset System",
    description:
      "A secure password reset system with email verification, token-based authentication, and encrypted password storage using Node.js, Express.js, and MongoDB.",
    image: secure,
    link: "https://github.com/nandhinigurumoorthyy/Password-reset-flow-client.git",
    demo: "https://password-reset-flow-client-ui.netlify.app/",
  },
  {
    name: "Movie Search App",
    description:
      "A Movie Search App that lets users find movies by title, view details, and navigate results using React, React Router, Axios, Tailwind CSS, and the OMDb API.",
    image: movie,
    link: "https://github.com/nandhinigurumoorthyy/Movies-Search-App.git",
    demo: "https://movies-search-app-omdb-api.netlify.app/",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I’m a Full Stack Developer (MERN) who loves creating innovative and logical web applications. I enjoy designing user interfaces that are both functional and satisfying to use. Solving backend challenges genuinely excites me, especially when it comes to connecting the frontend and backend with clean logic.",
    "I’m constantly learning and exploring new technologies to grow as a developer. I thrive on solving challenges, managing my time effectively, and continuously improving the way I write efficient, scalable code. I’m passionate about turning ideas into real-world solutions and contributing meaningfully to impactful projects.",
  ],
};
export const CERTIFICATIONS = [
  {
    certificateName: "IIT-M Pravartak certified Full Stack Development Course with AI Tools – GUVI (Completed: 2024)",
    descriptions: [
      "Completed a comprehensive full stack development program covering the MERN stack and modern web development practices.",
      "Gained practical experience through hands-on projects involving CRUD operations, API integrations, and responsive UI design.",
    ],
  },
  {
    certificateName: "Python for Data Science – NPTEL",
    descriptions: [
      "Gained foundational knowledge of Python programming for data analysis, visualization, and scientific computing.",
     ],
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Aug 2024 — Feb 2025",
    title: "Trainee Software Engineer at StringServe Technology",
    location: "Chennai",
    description: [
      "Contributed to the development of eLearning solutions (C2C - Content 2 Classroom), focusing on enhancing user experience and effective content delivery.",

      "Improved front-end performance to ensure a smooth, responsive user interface.",

      "Collaborated with the team to build reusable UI components, troubleshoot issues, and refine the overall application design."
    ],
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S CREATE SOMETHING AMAZING",
  description:
    "I’m enthusiastic about working with a fast-paced, forward-thinking company. Let’s build innovative solutions, make smart moves, and grow together in a collaborative and inspiring environment.",
  email: "nandhinigurumoorthy2003@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/nandhinigurumoorthyy",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/nandhini-g-65b7202bb/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Nandhini G. All rights reserved.`,
};
