import restaurant from "../assets/restaurant.jpg";
import landingPage from "../assets/landing_page.jpg";
import calc from "../assets/income_calc.jpg";
import movie from "../assets/movie.jpg";
import backend from "../assets/backend.jpg";
import shop from "../assets/shop.jpg";

export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I'm Nandhini, an ambitious Full Stack Developer passionate about creating scalable and user-friendly web applications.",
  description: "A portfolio of my full-stack projects, demonstrating my skills in developing dynamic and efficient web applications.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Online Restaurant Booking",
    description: "A full-stack Restaurant Booking System that enables users to browse restaurants, make reservations, and manage bookings with React, Tailwind CSS, Node.js, and MongoDB.",
    image: restaurant,
    link: "https://github.com/nandhinigurumoorthyy/Restaurant_Reservation_backend.git",
    demo: "https://restaurant-reservation-ui.netlify.app/"
  },
  {
    name: "Landing Page",
    description: "Premium Web Hosting Landing Page – HTML, Tailwind CSS.",
    image: landingPage,
    link: "https://github.com/nandhinigurumoorthyy/GUVI_Task_TailwindCSS_Landing_Page.git",
    demo: "https://nandhinigguviliveprojecttask.netlify.app/"
  },
  {
    name: "Income-Expense Calculator",
    description: "An Income-Expense Calculator that allows users to track their finances, store data using MockAPI, and manage transactions with JavaScript, HTML, and CSS.",
    image: calc,
    link: "https://github.com/nandhinigurumoorthyy/GUVI-Nandhini-Income-Expense-calculator.git",
    demo: "https://nandhini-income-expense-calc-guvitask.netlify.app/"
  },
  {
    name: "Movie Search App",
    description:
      "A Movie Search App that lets users find movies by title, view details, and navigate results using React, React Router, Axios, Tailwind CSS, and the OMDb API.",
    image: movie,
    link: "https://github.com/nandhinigurumoorthyy/Nandhini-Movies-Search-App.git",
    demo: "https://nandhini-movies-search-app.netlify.app/"
  },
  {
    name: "Password Reset System",
    description: "Secure Password Reset System that enables users to reset their passwords via email verification, built with Node.js, Express.js, and MongoDB.",
    image: backend,
    link: "https://github.com/nandhinigurumoorthyy/Password-reset-flow-client.git",
    demo: "https://password-reset-flow-client-ui.netlify.app/"
  },
  {
    name: "Online Shopping App",
    description: "React Router-based Shopping App that enables users to add products to the cart, view total price, and manage their purchases seamlessly.",
    image: shop,
    link: "https://github.com/nandhinigurumoorthyy/Nandhini-React-Router-App-GuviTask.git",
    demo: "https://nandhini-react-router-app-guvitask.netlify.app/"
  }
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a futuristic Full Stack Developer dedicated to building dynamic, high-performance web applications. Skilled in React, Node.js, MongoDB, and Express.js, I focus on creating seamless user experiences and robust back-end solutions.",
    "Driven by curiosity and innovation, I constantly explore new technologies to enhance my skills. I thrive on solving complex challenges and writing clean, efficient code, eager to contribute to impactful projects in the ever-evolving world of web development."],
};

export const EXPERIENCES = [
  {
    yearRange: "Aug 2024 — Feb 2025",
    title: "Trainee Software Engineer at StringServe Technology",
    location: "Chennai",
    description: [
      "Built and maintained interactive user interfaces.",
      "Improved front-end performance to ensure a smooth and responsive user experience.",
      "Worked closely with the team to develop UI components, resolve issues, and refine application design."
    ],
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S CREATE SOMETHING AMAZING",
  description:
    "I’m eager to collaborate on innovative projects that make a difference. Let’s build, innovate, and push boundaries together. Let’s turn ideas into reality!",
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
