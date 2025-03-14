// Project data

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced filtering, cart functionality, and payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/example/ecommerce",
    technologies: [
      { name: "React", color: "text-blue-500" },
      { name: "Node.js", color: "text-green-500" },
      { name: "MongoDB", color: "text-green-700" },
      { name: "Stripe", color: "text-purple-500" },
      { name: "Tailwind CSS", color: "text-sky-500" }
    ],
    category: "Web Application",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity tool for teams to manage projects, track progress, and collaborate effectively.",
    imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    demoUrl: "https://example.com/task-app-demo",
    githubUrl: "https://github.com/example/task-app",
    technologies: [
      { name: "Vue.js", color: "text-emerald-500" },
      { name: "Firebase", color: "text-yellow-500" },
      { name: "Typescript", color: "text-blue-600" },
      { name: "Sass", color: "text-pink-500" }
    ],
    category: "Web Application",
    featured: true
  },
  {
    id: 3,
    title: "Fitness Tracking Dashboard",
    description: "A comprehensive fitness tracker with data visualization, workout plans, and progress monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    demoUrl: "https://example.com/fitness-demo",
    githubUrl: "https://github.com/example/fitness-tracker",
    technologies: [
      { name: "React", color: "text-blue-500" },
      { name: "Chart.js", color: "text-pink-500" },
      { name: "Express", color: "text-gray-600" },
      { name: "PostgreSQL", color: "text-blue-700" }
    ],
    category: "Web Application",
    featured: true
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description: "A secure messaging platform with real-time updates, file sharing, and channel management.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    demoUrl: "https://example.com/chat-demo",
    githubUrl: "https://github.com/example/chat-app",
    technologies: [
      { name: "Socket.io", color: "text-gray-500" },
      { name: "React", color: "text-blue-500" },
      { name: "Node.js", color: "text-green-500" },
      { name: "MongoDB", color: "text-green-700" }
    ],
    category: "Web Application",
    featured: false
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "A location-based weather application with hourly and weekly forecasts, and severe weather alerts.",
    imageUrl: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    demoUrl: "https://example.com/weather-demo",
    githubUrl: "https://github.com/example/weather-app",
    technologies: [
      { name: "React Native", color: "text-blue-400" },
      { name: "Redux", color: "text-purple-600" },
      { name: "OpenWeather API", color: "text-orange-500" }
    ],
    category: "Mobile App",
    featured: false
  },
  {
    id: 6,
    title: "Personal Finance Manager",
    description: "A tool to track personal expenses, create budgets, and visualize spending patterns.",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    demoUrl: "https://example.com/finance-demo",
    githubUrl: "https://github.com/example/finance-manager",
    technologies: [
      { name: "Angular", color: "text-red-500" },
      { name: "D3.js", color: "text-orange-500" },
      { name: "Node.js", color: "text-green-500" },
      { name: "MySQL", color: "text-blue-800" }
    ],
    category: "Web Application",
    featured: false
  }
];

// Skills data

export const frontendSkills = [
  { name: "React", percentage: 95 },
  { name: "TypeScript", percentage: 90 },
  { name: "HTML/CSS", percentage: 95 },
  { name: "Vue.js", percentage: 80 },
  { name: "Angular", percentage: 75 }
];

export const backendSkills = [
  { name: "Node.js", percentage: 92 },
  { name: "Express", percentage: 90 },
  { name: "MongoDB", percentage: 85 },
  { name: "PostgreSQL", percentage: 80 },
  { name: "GraphQL", percentage: 75 }
];

export const toolsSkills = [
  { name: "Git", percentage: 90 },
  { name: "Docker", percentage: 85 },
  { name: "AWS", percentage: 75 },
  { name: "CI/CD", percentage: 80 },
  { name: "Jest", percentage: 85 }
];