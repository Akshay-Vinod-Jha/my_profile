import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Akshay Vinod Jha",
  title: "Hi all, I'm Akshay Jha",
  description:
    "I am a passionate Full Stack Developer with experience in creating dynamic web applications using React.js for the frontend and Node.js for the backend. Additionally, I specialize in building cross-platform mobile applications with React Native. I am driven by a strong interest in learning new technologies and integrating them into my projects. As a self-motivated and dedicated professional, I excel in collaborative environments and am always eager to contribute to the success of the team.",
  resumeLink: "https://drive.google.com/file/d/1ZfqKxugXYA-QqzaScSuoij-EcDl1N_q2/view?usp=drive_link",
};

export const openSource = {
  githubUserName: "Akshay-Vinod-Jha",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // email: "mailto:akshayjha2006@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshay-jha-2b2658280",
  github: "https://github.com/Akshay-Vinod-Jha",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};
export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Node.js"),
        emoji("⚡ Building cross-platform mobile applications with React Native"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "React Native",
          iconifyTag: "devicon:reactnative-wordmark",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs-icon-alt",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Nodemon",
          iconifyTag: "logos:nodemon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "St. Francis De Sales High School",
    subHeader: "Secondary (X), Maharashtra State Board Of Secondary And Higher Secondary Education",
    duration: "2021",
    desc: "",
    grade: "96.60%",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Government Polytechnic, Aurangabad",
    subHeader: " Information Technology ",
    duration: "2021 - 2024",
    desc: "",
    grade: "94.65%",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Pune Institute of Computer Technology, Pune",
    subHeader: "Bachelor of Engineering (B.E), Information Technology",
    duration: "Pursuing",
    desc: "",
    grade: "-",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Front End Developer",
    company: "Ravi Programming Academy",
    companyLogo: "/img/icons/common/image.png",
    date: "Jun 2023 - Jul 2023",
    desc: "",
  },
];

export const projects: ProjectType[] = [
  {
    name: "ImmortalDictionary",
    desc: "ImmortalDictionary is a simple dictionary application that offersvarious features, including the ability to add words to favorites,view search history, and provide comprehensive informationrelated to each specified word. This project focuses on front-end development and was created using React",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://immortaldictionary.netlify.app/",
  },
  {
    name: "ThinkSmarter",
    desc: "ThinkSmarter is an AI-integrated tool platform designed to simplify the learning process for students by providing multiple AI-tools. This full-stack project was developed using React.js, Firebase, and various other technologies and APIs as our final year diploma project.",
    link: "https://thinksmarter.netlify.app/",
  },
  {
    name: "ImmortalTastyTable",
    desc: "ImmortalTastyTable is an application that provides recipes based on user-specified search items. Developed using React.js, this project was created to test and demonstrate proficiency in the Web Storage API.",
    link: "https://immortaltastytable.netlify.app/",
  },
  {
    name: "Ultimate Vargani App",
    desc: "Ultimate Vargani App is a full-stack application developed using Next.js, marking my first project with this framework. It is designed to store and log Vargani collected on a daily basis, offering a set of operations along with authentication features.",
    link: "https://ganpativarganiapp.vercel.app/",
  },
];

export const feedbacks = null;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Akshay Vinod Jha",
  description: greetings.description,
  author: "Akshay Vinod Jha",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Akshay Vinod Jha",
    "Akshay Vinod Jha",
    "@1hanzla100",
    // "",
    "Portfolio",
    "Akshay  Portfolio ",
    "Akshay Vinod Jha Portfolio",
  ],
};
