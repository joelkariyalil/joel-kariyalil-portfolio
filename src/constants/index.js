import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

import paper1 from "../assets/papers/paper-1.png"
import paper2 from "../assets/papers/paper-2.png"
import paper3 from "../assets/papers/paper-3.png"

import opensrcmod1 from "../assets/opensrc/opensrcmod-1.png"

export const TITLE = "Software Developer | Researcher";

export const HERO_CONTENT = `An Industrious Computer Science Engineer and Gold Medalist with a Zeal for Innovation hsving 2 years of industry experience. Contributing to Open-Source, Optimizing Code, Poly-Rhythms is everything I do.
Currently, working with Tally Solutions Pvt. Ltd. as a Test Operations Engineer -1.`;


export const PROJECTS = [
  {
    title: "EasyTabs",
    image: project1,
    link: "https://github.com/joelkariyalil/EasyTabs",
    description:
      "A project that Redefines your Browing Experience - WIP",
    technologies: ["Python", "React", "Node.js", "MongoDB"],
  },
  {
    title: "KMeans - Scheduling Algo",
    image: project2,
    link: "https://github.com/joelkariyalil/Scheduling-Algorithm-for-StreamIt",
    description:
      "Scheduling Algo for StreamIt. Algorithm used - KMeans",
    technologies: ["Python", "Jupyter Notebooks", "KMeans"],
  },
  {
    title: "Pneumonia Classification",
    image: project3,
    link: "https://github.com/joelkariyalil/Pneumonia-Classification-CNN-VGG19-and-ResNet50-Flask-Web-Implementation-",
    description:
      "Pnuemonia Classification using VGG19 and ResNet50 architectures, demonstrating practical application of AI and ML concepts",
    technologies: ["Python", "Flask", ],
  },
  {
    title: "Classical Image Processing Techniques",
    image: project4,
    link: "https://github.com/joelkariyalil/Classical-Image-Processing-Techniques",
    description:
      "Histograms, Spacial Filtering, Point Pixel Processing, Histogram Processing, Stable Diffusion, Image Generation",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  {
    title: "Speech to Text Processing",
    image: project5,
    link: "https://github.com/joelkariyalil/Voice-User-Interface-VUI-using-Python",
    description:
      "An Application for the Visually Disabled to make use of Speech for congnizance",
    technologies: ["Python"],
  },
  {
    title: "Maps",
    image: project6,
    link: "https://github.com/joelkariyalil/Maps",
    description:
      "This projects attempts to add Personalization to Google Maps. Cater Routes to your Personal Likings",
    technologies: ["Flutter"],
  },
  
  
];


export const OPSRCMODULES = [
  {
    title: "Context Aware Jenkins Job Transfers",
    image: opensrcmod1,
    link: "https://github.com/JoelKariyalil/Context-Aware-Jenkins-Job-Transfers",
    description:
      "A module that allows Jenkins jobs to be transferred to another server using Jenkins Context Aware Jenkins Job Transfers.",
    technologies: ["Python"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};


export const PAPERS = [
  {
    title: "Peer-to-Peer File Streaming Using Web Sockets Protocol with KMeans Grouping",
    image: paper1,
    link: "https://ieeexplore.ieee.org/document/10111896",
    description:
    "This work explores a peer-to-peer file streaming system using Secure WebSocket (WSS) for minimal buffering. Files are divided into chunks and streamed directly between peers without cloud storage. Chunk sizes adjust based on sender bandwidth, and each room has a unique name for initiating streaming sessions.",
    technologies: ["Python"],
  },

  {
    title: "Personalized Route Selection using Machine Learning",
    image: paper2,
    link: "https://ijircce.com/admin/main/storage/app/pdf/6YKC1w8iTTPavrwApxHP4dtReOKpIcpmk6ejZUNZ.pdf",
    description:
      "This work develops a personalized route selection algorithm using machine learning to align with user preferences, incorporating psychological factors. The algorithm enhances the A* routing by factoring in daily commute preferences like scenery and road type. Simulations show it improves user experience, offering efficient and personalized routing options.",
    technologies: ["Python"],
  },

  {
    title: "Performance Analysis of Regression Models using Case Study of Limited Data",
    image: paper3,
    link: "https://ijircce.com/admin/main/storage/app/pdf/wSRgiWMYmpdb6s1bk6dCjpTknLYCPhw70Q8ZVKw6.pdf",
    description:
      "This study compares regression models for house price prediction, evaluating accuracy, robustness, and generalizability. It aims to identify the best models and provide insights for choosing appropriate models based on data and research needs.",
    technologies: ["Python"],
  },
];


export const SKILLS = {
  Languages: ['C', 'C++', 'Java', 'Python', 'R', 'JavaScript'],
  VCS: ['Git'],
  IDE: ['JetBrains', 'VSCode'],
  Cloud: ['AWS'],
  Frameworks: ['React'],
  DBs: ['Redis', 'MySQL', 'PostgreSQL'],
  CICD: ['Jenkins', 'Ansible'],
  Containers : ['Docker', 'Kubernetes', 'OpenShift'],
};


export const EXPERIENCE = [
  {
    title: 'Test Operations - 1 Engineer',
    company: 'Tally Solutions Pvt. Ltd.',
    duration: 'May 2023 - Aug 2024',
    description: [
      'Awarded Improved Time Optimization by 99.35%',
      'Built Efficient Jenkins CI/CD Pipelines',
      'Improved DB Effeciency by 99% (built in-script Redis Functionality - Python)',
      'Open Source Contribution - Context Aware Jenkins Job Transfers',
      'Led Initial POC for Docker on K8s & OpenShift',
      'Utilized Several AWS Lambda Resoruces for Optimal Storage & Compute Requirements',
      'Awarded - Star of the Quarter Nomination (AMJ)',
      'Awarded - Spot Award of Excellence'
    ],
    technologies: ['Python', 'Jenkins', 'CI/CD', 'Docker', 'Kubernetes', 'AWS', 'React'],
  },
  {
    title: 'AIML Intern',
    company: 'AiROBOSOFT Products And Services',
    duration: 'Feb 2023 - Apr 2023',
    description: [
      'Worked on various projects involving front-end development with React, Framer-Motion, 3js',
      'Assisted in the development of internal tools and participated in code reviews.',
      'Developed and implemented ML models for specific applications, utilizing Python and frameworks like TensorFlow and PyTorch',
      'Conducted data analysis and preprocessing tasks, ensuring data quality and reliability',
      'Utilized various algorithms (e.g., VGG19, ResNet50) to train models and optimize performance',
      'Worked on Pneumonia Detection using VGG19, ResNet Architectures, demonstrating practical application of AI and ML concepts'
    ],
    technologies: ['Python', 'AIML', 'React', 'AWS'],
  },
  {
    title: 'Data Science Intern',
    company: 'Exposys Data Labs',
    duration: 'Feb 2023 - Mar 2023',
    description: [
      "Developed a comprehensive machine learning project titled 'Comparative Analysis of Regression Algorithms' under the guidance of Exposys Data Labs.",
      'Utilized Python and relevant libraries (scikit-learn, Pandas, NumPy) to implement and evaluate algorithm performance.',
      'Conducted in-depth research on regression algorithms, exploring their strengths, weaknesses, and practical applications.',
      'Performed data preprocessing, feature engineering, and model selection techniques to ensure accurate and robust analysis.',
      'Analyzed and compared algorithm performance using evaluation metrics (mean squared error, R-squared value, mean absolute error) and presented findings in a comprehensive case study.'
    ],
    technologies: ['Python', 'R', 'Regression Models', 'Algorithms', 'Data Science'],
  },
  {
    title: 'Research and Planning Head - Intern',
    company: 'Newton Schools',
    duration: 'Jan 2022 - Jun 2022',
    description: [

    'Served as the Research and Planning Head Intern for the Newton Schools',
    'Community, contributing to strategic initiatives and decision-making processes',
    "Conducted extensive research and analysis on educational trends, best practices, and innovative approaches to support the community's growth and development.",
    'Developed and implemented data-driven strategies and solutions to address challenges and improve educational outcomes within the Newton Schools Community.',
    'Collaborated with cross-functional teams to gather and analyze data, identify key insights, and present actionable recommendations to stakeholders.',
    'Assisted in the planning and execution of community events, workshops, and initiatives, fostering engagement and participation among students, parents, and educators'
    ],
    technologies: ['Data Science', 'Python', 'R', 'Regression Models', 'Algorithms'],
  },
];
