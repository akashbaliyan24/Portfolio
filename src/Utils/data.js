import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    School
} from "lucide-react"

import { FiGithub, FiLinkedin } from "react-icons/fi"

import eCommerece from "../assets/image/e-commerce.png"
import letsCode from "../assets/image/letsCode.png"
// import profileImage from "../assets/image/profile_image.png"
import world from "../assets/image/world.png"
import { color } from "framer-motion"
export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful , responsive user interfaces",
        skills: [
            { name: "React", level: 80, color: "bg-blue-500" },
            { name: "Javascript", level: 75, color: "bg-blue-600" },
            { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
            { name: "Framer Motion", level: 70, color: "bg-pink-500" }
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Node.js", level: 90, color: "bg-green-500" },
            { name: "Express.js", level: 85, color: "bg-gray-700" },
            { name: "REST APIs", level: 92, color: "bg-orange-500" },
            { name: "JWT", level: 92, color: "bg-blue-500" },

        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Managing and Optimizing data storage",
        skills: [
            { name: "MongoDB", level: 85, color: "bg-green-600" },
            { name: "MySql", level: 80, color: "bg-blue-700" },
            { name: "Redis", level: 75, color: "bg-red-500" },
            { name: "PostgreSql", level: 70, color: "bg-indigo-600" }
        ],
    },
    {
        title: "Devops",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [
            { name: "Docker", level: 80, color: "bg-blue-600" },
            { name: "Git", level: 90, color: "bg-orange-600" },
            { name: "Github", level: 85, color: "bg-purple-600" },
            { name: "Versel", level: 85, color: "bg-gray-900" }
        ]
    }
];

export const TECH_STACK = [
    "HTML5",
    "CSS3",
    "TYPESCRIPT",
    "Vite",
    "Npm",
    "Pnpm",
    "Bootstrap",
    "Zustand",
    "Websocket",
    "Socket IO",
    "Chat gpt",
    "Github",
    "GSAP",
    "POSTMAN",
    "COOKIES",
];

export const PROJECTS = [
    {
        id: 1,
        title: "E-Commerece Platform",
        description: "A full-stack e-commerce solution with advanced filtering,payment integartion , and real-time inventory",
        image: eCommerece,
        tags: ["React", "Tailwind", "MongoDB", "Node.js", "Express.js"],
        liveUrl: "#",
        githubUrl: "https://github.com/akashbaliyan24/E_Commerce",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 2,
        title: "LetsCode",
        description: "A full stack DSA platform where user can solve multiple dsa problem",
        image:letsCode,
        tags: ["React", "Tailwind", "PostgreSql", "Express.js", "Zustand", "REST APIs"],
        liveUrl: "#",
        githubUrl: "https://github.com/akashbaliyan24/letsCode",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 3,
        title: "CountryInfo",
        description: "A React based Project where user can know about countries and there famous things",
        image:world,
        tags: ["React", "Tailwind", "PublicApi"],
        liveUrl: "#",
        githubUrl: "https://github.com/akashbaliyan24/Country_Info",
        featured: false,
        category: "Frontend"
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2020",
        title: " 12th Grade",
        company: "CBSE",
        description: "Finished higher Secondary education and developed intrest in technology",
        icon: School,
        color: "bg-blue-500",
    },
    {
        year: "2021",
        title: " Coding Journey",
        company: "Self taught",
        description: "Began learning Programing Fundamentals, exploring web devlopment and problem solving",
        icon: Code2,
        color: "bg-green-500",
    },
    {
        year: "2024",
        title: " B.tech",
        company: "Abdul Kalam Technical University",
        description: "Completed my graduation from vidya college of eng.",
        icon: GraduationCap,
        color:"bg-gray-600"
    }
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intutive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning Complex challenges into elegent solutions",
    },
    {
        icon: BookOpen,
        title: "Continous learning",
        description: "Always exploring new technologies and best practice",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/akashbaliyan24",
        color: "hover:text-gray-400",
        bgcolor: "hover:bg-gray-700",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/akash-baliyan-485059240/",
        color: "hover:text-blue-400",
        bgcolor: "hover:bg-blue-500/10",
    },
    {
        name:"Email",
        icon:Mail,
        url:"mailto:akashbaliyan24@gmail.com",
        color:"hover:text-green-400",
        bgcolor:"hover:bg-green-500/10"
    }
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Noida , UP",
    },
    {
        icon: Mail,
        label: "Email",
        value: "akashbaliyan24@gmail.com",
    },
    {
        icon:Phone,
        label:"Phone",
        value:"9997086770"
    }
];

