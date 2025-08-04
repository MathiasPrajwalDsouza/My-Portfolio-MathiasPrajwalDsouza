import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import bockaiLogo from "./assets/images/bockai_logo.jpeg";
import nexengLogo from "./assets/images/nexeng_logo.jpeg";
import fynnsLogo from "./assets/images/fynns.jpeg";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Mathias Prajwal D'Souza",
  title: "Mathias Prajwal D'Souza",
  subTitle: emoji(
    "A visionary AIML undergraduate specializing in LSTM modeling, federated learning, and full-stack development. Skilled in MLOps, Docker, Kubernetes, AWS, and GCP ☁️🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HlPNef7iN51ztkEjrGm-P-AsbyPd_03b/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/MathiasPrajwalDsouza",
  linkedin: "https://www.linkedin.com/in/mathias-prajwal-dsouza-a23a822ab",
  gmail: "mathiasprajwaldsouza@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE AIML ENGINEER WHO BUILDS REAL-WORLD AI SYSTEMS",
  skills: [
    emoji("⚡ LSTM-based predictive models, federated learning systems"),
    emoji("⚡ MLOps pipelines using Docker, Kubernetes, CI/CD on AWS/GCP"),
    emoji("⚡ Full-stack and frontend development with responsive design")
  ],
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "GCP", fontAwesomeClassname: "fab fa-google"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "MLOps", fontAwesomeClassname: "fas fa-cogs"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Lourdu Matha Public School, Tumkur",
      subHeader: "High School",
      duration: "2019",
      desc: "Completed schooling with strong foundations in mathematics and science."
    },
    {
      schoolName: "HMS Polytechnic, Tumkur",
      subHeader: "Diploma in Electrical & Electronics Engineering",
      duration: "Jan 2019 - Nov 2022",
      desc: "Graduated with a CGPA of 9.64."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend/Design", progressPercentage: "90%"},
    {Stack: "Backend", progressPercentage: "95%"},
    {Stack: "MLOps & AI", progressPercentage: "95%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "MLOps/DevOps Intern",
      company: "BOCK AI",
      date: "Aug 2024 – Nov 2024",
      desc: "Optimized ML pipelines using Docker/Kubernetes, deployed models on AWS/GCP with 99.9% uptime, enabled CI/CD.",
      logo: bockaiLogo,
      companylogo: bockaiLogo
    },
    {
      role: "Software Engineer Intern",
      company: "NexEng AI",
      date: "Mar 2025",
      desc: "Enhanced dynamic LLM responses, frontend development, pipeline integration, and RAG applications.",
      logo: nexengLogo,
      companylogo: nexengLogo
    },
    {
      role: "Data Analytics Intern",
      company: "Feynns AI Labs",
      date: "Jan 2025 – May 2025",
      desc: "Built 85% accurate LSTM-based weather prediction model; performed EV market clustering with K-Means to reduce marketing costs.",
      logo: fynnsLogo,
      companylogo: fynnsLogo
    }
  ]
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the AI projects I’ve built and deployed",
  projects: [
    {
      projectName: "LSTM Weather Prediction Model",
      projectDesc:
        "7-day weather forecast with 85% accuracy using 5+ years of NOAA data.",
      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/file/d/17ZW63pW70wlrXfd690gNhv9tv0-1vVAv/view"
        }
      ]
    },
    {
      projectName: "ISL Translation Using Federated Learning",
      projectDesc:
        "Sign language translator accepted in IEEE Xplore using federated learning.",
      footerLink: [
        {
          name: "IEEE Paper",
          url: "https://drive.google.com/file/d/1p79m6JrEe3yd5FrRocKXX6kDCuJYuc0b/view?usp=sharing"
        }
      ]
    },
    {
      projectName: "EV Market Segmentation",
      projectDesc:
        "Used K-Means clustering to identify 4 key EV customer segments, reduced client cost by 15%.",
      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/file/d/1t6ouAG9jS2XzFPbXLNXIJgOxXUoEZ2Yx/view"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Some of the recognition and certifications I’ve earned.",
  achievementsCards: [
    {
      title: "IEEE Published Paper",
      subtitle: "ISL Translation Using Federated Learning",
      image: "IEEE.png",
      imageAlt: "IEEE Xplore Digital Library Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://drive.google.com/file/d/1p79m6JrEe3yd5FrRocKXX6kDCuJYuc0b/view?usp=sharing"
        }
      ]
    },
    {
      title: "Agni Vira Space Data Analyst",
      subtitle:
        "Certified Space Data Analyst in collaboration with ISRO and Agni Vira.",
      image: "fynns.jpeg",
      imageAlt: "Agni Vira Space Data Analyst Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1k3fHowBHGNrIzTdbXT2zR_hFvkuLz6Zm/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I love to write and share what I learn.",
  displayMediumBlogs: true,
  blogs: [],
  display: true
};

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating or have a cool project idea? Reach out!",
  number: "+91 7349726978",
  email_address: "mathiasprajwaldsouza@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
