import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaSnapchat, FaInstagram, FaLinkedin, FaGit, FaBootstrap, FaGithub, FaJava } from "react-icons/fa";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { SiCplusplus, SiExpress, SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";

import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";




export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <a href="https://github.com/AkhilBBD" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>,
 
<a href="#"  rel="noopener noreferrer">
    <FaInstagram />
  </a>,

  <a href="https://www.linkedin.com/in/akhil-pandey-3612b519b" target="_blank" rel="noopener noreferrer">
  <FaLinkedin />
</a>,
  <a href="https://www.snapchat.com/add/pandeyjiup32?share_id=pOsOOgLRMio&locale=en-US" target="_blank" rel="noopener noreferrer">
  <FaSnapchat />
</a>,
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Akhil Pandey"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+916306488147"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "akhilpandey0721@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />,<FaSass />,<SiTailwindcss />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <SiExpress />, <FaGit />,<FaBootstrap />,<FaGithub />,<FaJava />,<SiCplusplus />,<DiMongodb />,<SiMysql />]

export const educations = [
  {
    id: 1,
    year: "2020-2024",
    pursuing: "Btech in Information Technology",
    institute:"Babu banarasi Das Engineering College, Lucknow"
    
  },
  {
    di: 2,
    year: "2018-2019",
    pursuing: "Class XII std (CBSE)",
    institute:"The Lucknow Public Collegiate,Lucknow"
    
  },
  {
    id: 3,
    year: "2018-2019",
    pursuing: "Class X std (CBSE)",
    institute:"The Lucknow Public Collegiate,Lucknow"
    
  }
]
export const achievements = [
  {
    id: 1,
    number: '100+',
    itemName: "Leetcode problems "
  },
  {
    id: 2,
    number: "4+",
    itemName: "Exellence Certifcates from Coding Ninjas"
  }
  
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "Javascript",
    githubLink: "https://github.com/AkhilBBD/Zomato-Clone-",
    liveLink: "https://zomato-clone-akhil-one.vercel.app"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "React",
    githubLink: "https://mishrasukriti.github.io/portfolio/",
    liveLink: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "Javascript",
    githubLink: "https://github.com/AkhilBBD/Calculator-app/tree/main/Calculator%20CN",
    liveLink: "https://calculator-app-akhil.vercel.app/"
  }
  
]


export const workNavs = [
  "All", "Javascript", "React"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Alambagh, Lucknow, UP"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "akhilpandey0721@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-6306-488-147"
  }
]
