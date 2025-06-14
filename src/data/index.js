import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
  FaHeadset,
  FaChartLine,
  FaBriefcase,
  FaClipboardList,
  FaUserShield, FaGoogle, FaMicrosoft, FaAmazon, FaApple, FaGithub, FaSlack, FaDropbox
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
export const services = [
  'Find jobs', 'employers', 'my application', 'saved jobs'
]
export const socials = [
  {
    id: 1,
    name: "Facebook",
    url: "https://facebook.com/quickhire",
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://twitter.com/quickhire",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://linkedin.com/company/quickhire",
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://instagram.com/quickhire",
  },
];
export const legals = [
  {
    id: 1,
    title: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    id: 2,
    title: "Terms of Service",
    url: "/terms-of-service",
  },
  {
    id: 3,
    title: "Cookie Policy",
    url: "/cookie-policy",
  },
  {
    id: 4,
    title: "Accessibility",
    url: "/accessibility",
  },
];

export const jobs = [

  { value: '97', title: 'Career Advisor', availability: 'Open Position', icon: FaChalkboardTeacher },
  { value: '185', title: 'Frontend Developer', availability: 'Open Position', icon: FaLaptopCode },
  { value: '132', title: 'HR Officer', availability: 'Open Position', icon: FaUsers },
  { value: '164', title: 'Customer Support', availability: 'Open Position', icon: FaHeadset },
  { value: '149', title: 'Marketing Lead', availability: 'Open Position', icon: FaChartLine },
  { value: '121', title: 'Operations Manager', availability: 'Open Position', icon: FaBriefcase },
  { value: '103', title: 'Admin Executive', availability: 'Open Position', icon: FaClipboardList },
  { value: '90', title: 'Compliance Officer', availability: 'Open Position', icon: FaUserShield },
];

export const jobListings = [
  {
    title: "Frontend Developer",
    company: "TechNova Inc.",
    logo: "https://placehold.jp/1e3a8a/ffffff/150x150.png?text=TN",
    salary: "$70k - $90k",
    roleType: "Full-time",
    datePosted: "2025-06-10",
    location: "San Francisco, CA"
  },
  {
    title: "Product Manager",
    company: "Innovent Solutions",
    logo: "https://placehold.jp/047857/ffffff/150x150.png?text=IS",
    salary: "$95k - $120k",
    roleType: "Hybrid",
    datePosted: "2025-06-12",
    location: "New York, NY"
  },
  {
    title: "UX/UI Designer",
    company: "PixelForge",
    logo: "https://placehold.jp/f59e0b/ffffff/150x150.png?text=PF",
    salary: "$65k - $85k",
    roleType: "Remote",
    datePosted: "2025-06-08",
    location: "Remote"
  },
  {
    title: "DevOps Engineer",
    company: "CloudStack",
    logo: "https://placehold.jp/0f766e/ffffff/150x150.png?text=CS",
    salary: "$100k - $130k",
    roleType: "Full-time",
    datePosted: "2025-06-11",
    location: "Austin, TX"
  }
];


export const techBrands = [
  { name: "Google", icon: FaGoogle, color: "#4285F4" },
  { name: "Microsoft", icon: FaMicrosoft, color: "#737373" },
  { name: "Amazon", icon: FaAmazon, color: "#FF9900" },
  { name: "Apple", icon: FaApple, color: "#000000" },
  { name: "Meta", icon: FaMeta, color: "#4267B2" },
  { name: "GitHub", icon: FaGithub, color: "#333333" },
  { name: "Slack", icon: FaSlack, color: "#611f69" },
  { name: "Dropbox", icon: FaDropbox, color: "#0061FF" },
];



