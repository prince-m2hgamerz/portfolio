import { Project, Experience, Testimonial, Skill, Service, BlogPost, Achievement } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "ModernBiz Corporate Website",
    description: "A fully responsive corporate website built for a Mumbai-based consulting firm. Features include service showcases, team profiles, contact integration, and advanced analytics dashboard.",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["React", "Tailwind CSS", "Node.js", "Firebase", "Framer Motion"],
    category: "business",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project1",
    featured: true,
    stats: {
      users: "10K+",
      performance: "98%",
      conversion: "15%"
    },
    challenges: ["Complex data visualization", "Real-time updates", "Mobile optimization"],
    solutions: ["Custom chart components", "WebSocket integration", "Progressive Web App"]
  },
  {
    id: 2,
    title: "Creative Designer Portfolio",
    description: "An elegant portfolio website for a graphic designer featuring animated galleries, project showcases, client testimonials, and interactive 3D elements.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Three.js"],
    category: "portfolio",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project2",
    featured: true,
    stats: {
      users: "5K+",
      performance: "95%",
      conversion: "25%"
    }
  },
  {
    id: 3,
    title: "FitLife Gym Landing Page",
    description: "High-converting landing page for a fitness center in Delhi with membership forms, class schedules, trainer profiles, and integrated payment system.",
    image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["React", "Tailwind CSS", "Firebase", "Stripe API"],
    category: "landing",
    liveUrl: "https://example.com",
    featured: true,
    stats: {
      users: "8K+",
      performance: "97%",
      conversion: "35%"
    }
  },
  {
    id: 4,
    title: "TaskMaster Web App",
    description: "A collaborative task management application with real-time updates, team collaboration features, progress tracking, and advanced reporting.",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["React", "Node.js", "Firebase", "Tailwind CSS", "Socket.io"],
    category: "webapp",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project4",
    featured: false,
    stats: {
      users: "2K+",
      performance: "94%",
      conversion: "20%"
    }
  },
  {
    id: 5,
    title: "Local Restaurant WordPress Site",
    description: "WordPress website for a traditional Indian restaurant with online menu, reservation system, customer reviews, and food delivery integration.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript", "WooCommerce"],
    category: "wordpress",
    liveUrl: "https://example.com",
    featured: true,
    stats: {
      users: "15K+",
      performance: "92%",
      conversion: "18%"
    }
  },
  {
    id: 6,
    title: "E-Commerce Fashion Store",
    description: "Modern e-commerce platform for a fashion brand with advanced filtering, wishlist, cart functionality, and secure payment integration.",
    image: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "ecommerce",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project6",
    featured: true,
    stats: {
      users: "25K+",
      performance: "96%",
      conversion: "12%"
    }
  },
  {
    id: 7,
    title: "SaaS Analytics Dashboard",
    description: "Comprehensive analytics dashboard for a SaaS platform with real-time data visualization, custom reports, and user management.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    category: "saas",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project7",
    featured: true,
    stats: {
      users: "50K+",
      performance: "99%",
      conversion: "28%"
    }
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description: "Building custom websites and web applications for local businesses across India. Specializing in responsive design, WordPress development, and modern React applications.",
    technologies: ["React", "WordPress", "PHP", "JavaScript", "Tailwind CSS", "Node.js"],
    achievements: [
      "Delivered 25+ successful projects",
      "Achieved 98% client satisfaction rate",
      "Increased client revenue by average 40%"
    ],
    type: "freelance"
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "TechStart Solutions",
    period: "Jan 2023 - Dec 2023",
    description: "Developed and maintained multiple client websites and web applications. Led a team of 3 junior developers and implemented modern development practices.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase", "AWS"],
    achievements: [
      "Led development of 5 major projects",
      "Reduced application load time by 60%",
      "Mentored 3 junior developers"
    ],
    type: "work"
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "Digital Innovations",
    period: "Jun 2022 - Dec 2022",
    description: "Assisted in developing client websites and maintaining existing web applications. Gained hands-on experience with modern web technologies and client communication.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    achievements: [
      "Completed 10+ client projects",
      "Improved website performance by 45%",
      "Received outstanding intern award"
    ],
    type: "work"
  },
  {
    id: 4,
    title: "Computer Science Student",
    company: "Delhi Technical University",
    period: "2021 - Present",
    description: "Pursuing Bachelor's in Computer Science with focus on web technologies. Active in coding clubs and hackathons, maintaining strong academic performance.",
    technologies: ["Data Structures", "Algorithms", "Web Development", "Database Management"],
    achievements: [
      "CGPA: 8.5/10",
      "Won 3 hackathons",
      "President of Coding Club"
    ],
    type: "education"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    company: "Kumar Consulting",
    content: "Exceptional work! The website perfectly represents our business and has significantly improved our online presence. Professional, timely, and highly recommended.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    projectType: "Corporate Website"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Graphic Designer",
    company: "Creative Studio",
    content: "Amazing portfolio website that showcases my work beautifully. The animations and design are exactly what I envisioned. Thank you for bringing my vision to life!",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    projectType: "Portfolio Website"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Gym Owner",
    company: "FitLife Fitness",
    content: "The landing page has increased our membership inquiries by 300%! Professional design, fast loading, and mobile-friendly. Excellent collaboration throughout the project.",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    projectType: "Landing Page"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Restaurant Owner",
    company: "Spice Garden",
    content: "Our online orders increased by 250% after the new website launch. The reservation system works flawlessly and customers love the user experience.",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    projectType: "WordPress Site"
  }
];

export const skills: Skill[] = [
  { name: "HTML", level: 95, category: "frontend", yearsOfExperience: 3 },
  { name: "CSS", level: 90, category: "frontend", yearsOfExperience: 3 },
  { name: "JavaScript", level: 85, category: "frontend", yearsOfExperience: 2.5 },
  { name: "TypeScript", level: 75, category: "frontend", yearsOfExperience: 1.5 },
  { name: "React.js", level: 80, category: "frontend", yearsOfExperience: 2 },
  { name: "Next.js", level: 70, category: "frontend", yearsOfExperience: 1 },
  { name: "Tailwind CSS", level: 90, category: "frontend", yearsOfExperience: 2 },
  { name: "Framer Motion", level: 75, category: "frontend", yearsOfExperience: 1 },
  { name: "Node.js", level: 65, category: "backend", yearsOfExperience: 1.5 },
  { name: "Express.js", level: 60, category: "backend", yearsOfExperience: 1 },
  { name: "PHP", level: 55, category: "backend", yearsOfExperience: 2 },
  { name: "Python", level: 50, category: "backend", yearsOfExperience: 1 },
  { name: "Firebase", level: 70, category: "database", yearsOfExperience: 2 },
  { name: "MongoDB", level: 60, category: "database", yearsOfExperience: 1 },
  { name: "MySQL", level: 65, category: "database", yearsOfExperience: 1.5 },
  { name: "WordPress", level: 85, category: "tools", yearsOfExperience: 2.5 },
  { name: "Git/GitHub", level: 75, category: "tools", yearsOfExperience: 2 },
  { name: "Figma", level: 70, category: "design", yearsOfExperience: 2 },
  { name: "Canva", level: 80, category: "design", yearsOfExperience: 2.5 },
  { name: "React Native", level: 55, category: "mobile", yearsOfExperience: 0.5 }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Custom Web Development",
    description: "Build modern, responsive websites tailored to your business needs",
    icon: "Code",
    features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Cross-browser Compatibility"],
    price: "₹25,000 - ₹1,00,000",
    duration: "2-8 weeks"
  },
  {
    id: 2,
    title: "WordPress Development",
    description: "Create powerful WordPress websites with custom themes and plugins",
    icon: "Wordpress",
    features: ["Custom Themes", "Plugin Development", "E-commerce Integration", "Content Management"],
    price: "₹15,000 - ₹75,000",
    duration: "1-6 weeks"
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description: "Build online stores with secure payment integration and inventory management",
    icon: "ShoppingCart",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Admin Dashboard"],
    price: "₹50,000 - ₹2,00,000",
    duration: "4-12 weeks"
  },
  {
    id: 4,
    title: "Web App Development",
    description: "Develop interactive web applications with modern frameworks",
    icon: "Smartphone",
    features: ["React/Vue.js", "Real-time Features", "API Integration", "Database Design"],
    price: "₹75,000 - ₹3,00,000",
    duration: "6-16 weeks"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Web Development Trends in 2024",
    excerpt: "Discover the latest trends shaping the future of web development, from AI integration to advanced CSS features.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["Trends", "2024", "Frontend", "Technology"]
  },
  {
    id: 2,
    title: "Building Responsive Websites: A Complete Guide",
    excerpt: "Learn how to create websites that look great on all devices with modern CSS techniques and best practices.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "CSS",
    tags: ["Responsive", "CSS", "Mobile", "Design"]
  },
  {
    id: 3,
    title: "React Performance Optimization Tips",
    excerpt: "Boost your React application's performance with these proven optimization techniques and best practices.",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=500",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "React",
    tags: ["React", "Performance", "Optimization", "JavaScript"]
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Google Analytics Certified",
    description: "Completed Google Analytics Individual Qualification",
    date: "2023-12-01",
    icon: "Award",
    category: "certification"
  },
  {
    id: 2,
    title: "Best Web Developer Award",
    description: "Received recognition at Delhi Tech Awards 2023",
    date: "2023-11-15",
    icon: "Trophy",
    category: "award"
  },
  {
    id: 3,
    title: "50+ Projects Completed",
    description: "Successfully delivered over 50 web development projects",
    date: "2023-10-01",
    icon: "Target",
    category: "milestone"
  },
  {
    id: 4,
    title: "React Developer Certification",
    description: "Completed advanced React development certification",
    date: "2023-09-20",
    icon: "Code",
    category: "certification"
  }
];