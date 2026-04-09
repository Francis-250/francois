export const blogCategories = [
  "All",
  "JavaScript",
  "CSS",
  "React",
  "Performance",
  "Tools",
];

export const blogs = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    description:
      "A deep dive into closures, scope, and how they power modern JavaScript frameworks.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600",
    category: "JavaScript",
    date: "March 15, 2026",
    readTime: "5 min read",
    author: "John Doe",
    content:
      "Closures are a fundamental concept in JavaScript that allows functions to remember their lexical scope even when executed outside that scope. This powerful feature enables data privacy, partial application, and module patterns.",
  },
  {
    id: 2,
    title: "Building Responsive Grid Layouts with CSS",
    description:
      "Master CSS Grid and Flexbox to create stunning, device-friendly layouts.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600",
    category: "CSS",
    date: "March 10, 2026",
    readTime: "4 min read",
    author: "John Doe",
    content:
      "CSS Grid has revolutionized how we build layouts on the web. With its two-dimensional grid system, we can create complex responsive designs with minimal code. This post covers grid containers, grid items, and responsive techniques.",
  },
  {
    id: 3,
    title: "React Hooks: From useState to Custom Hooks",
    description:
      "Everything you need to know about React Hooks with practical examples.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
    category: "React",
    date: "March 5, 2026",
    readTime: "7 min read",
    author: "John Doe",
    content:
      "React Hooks changed the way we write components by allowing state and lifecycle features in functional components. We'll explore useState, useEffect, useContext, and how to build your own custom hooks for reusable logic.",
  },
  {
    id: 4,
    title: "Optimizing Web Performance for Better UX",
    description:
      "Tips and techniques to speed up your website and improve user experience.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    category: "Performance",
    date: "February 28, 2026",
    readTime: "6 min read",
    author: "John Doe",
    content:
      "Performance is a critical aspect of modern web development. This post covers image optimization, lazy loading, code splitting, and Core Web Vitals. Learn practical strategies to make your websites load faster and rank higher.",
  },
  {
    id: 5,
    title: "Introduction to Tailwind CSS",
    description:
      "Why utility-first CSS framework is gaining popularity among developers.",
    image: "https://images.unsplash.com/photo-1581276873552-b4000b6e7b6c?w=600",
    category: "CSS",
    date: "February 20, 2026",
    readTime: "4 min read",
    author: "John Doe",
    content:
      "Tailwind CSS offers a different approach to styling with utility-first classes. Instead of writing custom CSS, you compose styles directly in your HTML. This post explains the benefits, setup process, and best practices.",
  },
  {
    id: 6,
    title: "Version Control with Git: Best Practices",
    description: "Learn how to use Git effectively for solo and team projects.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600",
    category: "Tools",
    date: "February 15, 2026",
    readTime: "5 min read",
    author: "John Doe",
    content:
      "Git is an essential tool for every developer. This guide covers branching strategies, commit conventions, merge vs rebase, and how to collaborate effectively using GitHub. Master these practices to work better in teams.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Stock Management System",
    description:
      "Complete inventory management system for tracking products, stock levels, and orders.",
    longDescription:
      "A full-featured stock management system with real-time inventory tracking, low stock alerts, purchase orders, sales recording, and detailed reporting. Includes role-based access for admin and staff users. Built with Next.js, Prisma, and PostgreSQL for optimal performance and scalability.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
    ],
    role: "Full Stack Developer",
    liveLink: "https://davesolution.vercel.app/",
    githubLink: "https://github.com/Francis-250/davesolutions",
    featured: true,
    year: "2026",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Modern online store with cart, checkout, and payment gateway integration.",
    longDescription:
      "A complete e-commerce solution featuring product catalog, shopping cart, user authentication, order management, and Stripe/PayPal payment integration. Includes admin dashboard for product and order management with real-time inventory updates.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
    category: "Full Stack",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    role: "Full Stack Developer",
    liveLink: "https://example.com",
    githubLink: "https://github.com/Francis-250/e-commerce",
    featured: true,
    year: "2026",
  },
];

export const skills = {
  frontend: [
    {
      name: "React",
      level: 85,
      icon: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      name: "Next.js",
      level: 80,
      icon: "https://cdn.simpleicons.org/nextdotjs/000000",
    },
    {
      name: "JavaScript",
      level: 88,
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
      name: "TypeScript",
      level: 85,
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    {
      name: "Python",
      level: 80,
      icon: "https://cdn.simpleicons.org/python/3776AB",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    {
      name: "HTML5",
      level: 90,
      icon: "https://cdn.simpleicons.org/html5/E34F26",
    },
    {
      name: "CSS3",
      level: 90,
      icon: "https://cdn.simpleicons.org/css3/1572B6",
    },
  ],
  backend: [
    {
      name: "Node.js",
      level: 85,
      icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    },
    {
      name: "Express.js",
      level: 85,
      icon: "https://cdn.simpleicons.org/express/000000",
    },
    { name: "PHP", level: 65, icon: "https://cdn.simpleicons.org/php/777BB4" },
    {
      name: "Django",
      level: 75,
      icon: "https://cdn.simpleicons.org/django/092E20",
    },
  ],
  database: [
    {
      name: "Prisma",
      level: 85,
      icon: "https://cdn.simpleicons.org/prisma/2D3748",
    },
    {
      name: "PostgreSQL",
      level: 80,
      icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    {
      name: "MySQL",
      level: 75,
      icon: "https://cdn.simpleicons.org/mysql/4479A1",
    },
  ],
  tools: [
    { name: "Git", level: 85, icon: "https://cdn.simpleicons.org/git/F05032" },
    {
      name: "GitHub",
      level: 85,
      icon: "https://cdn.simpleicons.org/github/181717",
    },
  ],
};

export const experiences = [
  {
    id: 1,
    title: "IT Student",
    organization: "University of RP Kigali College",
    location: "Kigali, Rwanda",
    duration: "2024 - Present",
    type: "education",
    achievements: [
      "Currently pursuing Information Technology degree",
      "Learning full-stack web development",
      "Working on practical projects including stock management and e-commerce",
    ],
  },
  {
    id: 2,
    title: "High School Diploma",
    organization: "High School",
    location: "Rwanda",
    duration: "Completed",
    type: "education",
    achievements: [
      "Completed secondary education",
      "Foundation in Software Development",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ishimwe Eric",
    position: "IT Lecturer",
    company: "University of RP Kigali College",
    text: "A dedicated student with strong passion for web development. Shows great progress in learning modern technologies like Next.js and Prisma. Consistently delivers quality work and demonstrates problem-solving skills.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    rating: 5,
  },
];

export const contactInfo = {
  email: "munyankindif0@egmail.com",
  github: "https://github.com/francis-250",
  linkedin: "https://linkedin.com/in/username",
  location: "Kigali, Rwanda",
};

export const stats = {
  projects: 2,
  skills: 13,
  experience: "1+ years",
  technologies: "Modern Stack",
};
