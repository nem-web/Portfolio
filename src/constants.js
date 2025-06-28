// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import iitbhuLogo from './assets/education_logo/iitbhuLogo.png';
import jnvLogo from './assets/education_logo/jnvLogo.png';

// Project Section Logo's
import smartRouteLogo from './assets/work_logo/Smart-route.png';
import easeAttendanceLogo from './assets/work_logo/Smart-route.png';
import spotifyCloneLogo from './assets/work_logo/Spotify-clone.png';
import quickshowLogo from './assets/work_logo/MovieBooking.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: iitbhuLogo, // replace with IIT BHU logo
      school: "Indian Institute of Technology (BHU), Varanasi",
      date: "Aug 2023 – May 2027",
      grade: "7.35 CGPA",
      desc: "Pursuing B.Tech in Electrical Engineering. Built a strong foundation in data structures, algorithms, and full-stack web development. Developed real-world projects such as SmartRoute, EaseAttendance, Spotify Clone, and QuickShow. Actively explored system design and API integration. Contributed to cultural and technical fests like Spardha, Technex, and Kashiyatra through leadership, promotion, and event execution.",
      degree: "B.Tech (Electrical Engineering)",
    },
    {
      id: 1,
      img: jnvLogo, // replace with JNV logo
      school: "Jawahar Navodaya Vidyalaya, Lakhimpur Kheri",
      date: "Apr 2021 – Mar 2022",
      grade: "85.8 %",
      desc: "Completed Class XII (PCM with Computer Science). Served as School Captain, managing discipline and leading student initiatives. Learned Python and MySQL, and built beginner-level projects like a library management system. Organized and led academic and cultural activities, supporting both staff and students throughout the year.",
      degree: "CBSE (XII) – PCM with CS",
    },
    {
      id: 2,
      img: jnvLogo,
      school: "Jawahar Navodaya Vidyalaya, Lakhimpur Kheri",
      date: "Apr 2019 – Mar 2020",
      grade: "94 %",
      desc: "Completed Class X with distinction. Held the role of Class Captain and maintained classroom discipline. Achieved 3rd place in the state-level Cryptic Crossword Puzzle among 5,000+ participants, and represented the school at the Regional Science Congress where the project won the 'Best Project' award.",
      degree: "CBSE (X)",
    }
  ];
  
  
  export const projects = [
    {
      id: 0,
      title: "SmartRoute Visualizer",
      description:
        "An interactive React-based web app for visualizing pathfinding algorithms like Dijkstra, A*, and BFS with real-time animations. Features internal priority queue simulation, real-time path cost display, and future plans for real-world map integration.",
      image: smartRouteLogo, // replace with actual image import
      tags: ["React", "Tailwind CSS", "A*", "BFS", "Dijkstra", "Leaflet"],
      github: "https://github.com/nem-web/SmartRoute",
      webapp: "https://smart-route-nem.netlify.app/",
    },
    {
      id: 1,
      title: "EaseAttendance",
      description:
        "Built using OpenCV and Flask, this app automates student attendance using facial recognition and syncs data to Google Sheets. Includes a dashboard for teachers and students, with plans for spoof detection and cloud hosting.",
      image: easeAttendanceLogo, // replace with actual image import
      tags: ["Python", "OpenCV", "Flask", "Google Sheets", "Face Recognition"],
      github: "https://github.com/nem-web/Ease-Attendance",
      webapp: "",
    },
    {
      id: 2,
      title: "Spotify Clone",
      description:
        "A responsive React and Tailwind-based music streaming clone with real-time playlist state management. Optimized for mobile use and planned Spotify API integration to stream live music.",
      image: spotifyCloneLogo, // replace with actual image import
      tags: ["React", "Tailwind CSS", "State Management", "JavaScript"],
      github: "https://github.com/nem-web/Spotify-Clone",
      webapp: "https://spotify-nem.netlify.app/",
    },
    {
      id: 3,
      title: "QuickShow",
      description:
        "A full-stack movie ticket booking platform with Clerk auth, Razorpay payments, Inngest emails, and TMDB movie data. Features seat selection, admin panel for show management, and auto-cancellation of unpaid bookings.",
      image: quickshowLogo, // replace with actual image import
      tags: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Clerk Auth",
        "Razorpay",
        "Inngest",
        "TMDB API"
      ],
      github: "https://github.com/nem-web/MovieBooking",
      webapp: "https://quickshow-pi.vercel.app/",
    }
  ];
  
  