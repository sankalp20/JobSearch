import {
  WhatsApp,
  Twitter,
  Instagram,
  Spotify,
  Linkedin,
  Youtube,
  Google,
  Facebook,
  CodeWave,
} from "../assets";

export const jobTypes = ["Full-Time", "Part-Time", "Contract", "Intern"];

export const experience = [
  { title: "Under 1 Year", value: "0-1" },
  { title: "1 -2 Year", value: "1-2" },
  { title: "2 -6 Year", value: "2-6" },
  { title: "Over 6 Years", value: "6" },
];

export const popularSearch = [
  "Software Engineer",
  "Developer",
  "Full-Stack Developer",
  "Data Scientist",
  "Remote",
  "Full-Time",
  "Sales",
  "Office Assistant",
];

export const jobs = [
  {
    id: "1",
    company: {
      name: "X - formerly Twitter",
      location: "California",
      email: "careers@twitterx.com",
      contact: "support@x/bayarea",
      about:
        "Twitter, Inc. was an American social media company based in San Francisco, California. The company operated the social networking service Twitter and previously the Vine short video app and Periscope livestreaming service.",
      profileUrl: Twitter,
    },
    jobTitle: "Business Analyst",
    location: "Toronto",
    jobType: "Full-Time",
    salary: "3800",
    detail: [
      {
        desc: "Twitter, Inc. is seeking a Business Analyst to play a pivotal role in our data-driven decision-making processes. In this role, you will leverage your analytical skills to collect, clean, and interpret extensive datasets, collaborating closely with cross-functional teams to provide actionable insights, influence product enhancements, and contribute to strategic business growth. The ideal candidate will have a bachelor's degree in a quantitative field, 2+ years of relevant data analysis experience, proficiency in data analysis tools and visualization software, and a strong problem-solving aptitude, combined with excellent communication and teamwork skills. If you're passionate about data and eager to make an impact in the dynamic world of social media, we encourage you to apply.",

        requirement:
          "To excel in this role, you should have a Bachelor's degree in a quantitative field like Business, Economics, Mathematics, or Statistics and a minimum of 2 years of experience in a data analysis role. Proficiency in data analysis tools, such as SQL, Python, or R, is essential, as is familiarity with data visualization tools like Tableau or Power BI. Strong problem-solving skills, attention to detail, and effective communication are a must. Your ability to collaborate in a fast-paced environment and your experience with A/B testing and statistical analysis will be valuable assets. If you're eager to contribute your data expertise to Twitter and shape the future of social media, we encourage you to apply.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 5,
    createdAt: new Date(),
  },
  {
    id: "2",
    company: {
      name: "Google Corporation",
      location: "Califonia",
      email: "career@google.com",
      contact: "support@google",
      about:
        "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.",
      profileUrl: Google,
    },
    jobTitle: "Software Engineer - UI",
    location: "New York",
    jobType: "Full-Time",
    salary: "4200",
    detail: [
      {
        desc: "Google is seeking a talented Software Engineer specializing in UI to join our team. In this role, you will be responsible for crafting user interfaces that delight and engage users across a wide spectrum of Google products and services. You will collaborate closely with cross-functional teams to design, develop, and optimize responsive and user-friendly UI components, ensuring a seamless and world-class user experience. If you're passionate about creating visually appealing and efficient UIs, this position offers an exciting opportunity to shape the digital experiences of millions of users worldwide.",

        requirement:
          "To excel in this role, you should possess a Bachelor's degree in Computer Science or a related field and demonstrate hands-on experience as a Software Engineer, with a strong focus on UI design and development. Proficiency in HTML, CSS, JavaScript, and front-end technologies is essential. You should have a keen eye for detail, excellent problem-solving abilities, and the capacity to thrive in a fast-paced, collaborative environment. Familiarity with responsive design principles and front-end frameworks, such as React, Angular, or Vue.js, is a plus. Strong communication and teamwork skills are vital, along with a passion for shaping outstanding UIs and contributing to Google's mission of universal accessibility and usefulness of information.",
      },
    ],
    applicants: ["1", "2", "3"],
    vacancies: 3,
    createdAt: new Date(),
  },
  {
    id: "3",
    company: {
      name: "LinkedIn Corporation",
      location: "Germany",
      email: "careers@linkedin.com",
      contact: "support@linkedin",
      about:
        "LinkedIn, a Microsoft company, is the world's largest professional network. We connect professionals, making it easier for people to learn, connect, and advance their careers.",
      profileUrl: Linkedin,
    },
    jobTitle: "Product Manager",
    location: "India, Mumbai",
    jobType: "Full-Time",
    salary: "2800",
    detail: [
      {
        desc: "As a Product Manager at LinkedIn, you'll drive product development and strategy to create features and experiences that enhance our platform's value. Collaborating with cross-functional teams, you'll define product goals, gather requirements, and deliver solutions that meet the needs of our global user base.",

        requirement:
          "You should have a Bachelor's degree or equivalent practical experience, substantial experience in product management, and a strong understanding of the social media and professional networking space. Exceptional communication, leadership, and project management skills are crucial.",
      },
    ],
    applicants: ["1", "2", "3", "4", "5"],
    vacancies: 2,
    createdAt: new Date(),
  },
  {
    id: "4",
    company: {
      name: "Spotify Corporation",
      location: "Germany",
      email: "careers@spotify.com",
      contact: "support@listenspotify",
      about:
        "Spotify is a Swedish audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon. It is one of the largest music streaming service providers, with over 551 million monthly active users, including 220 million paying subscribers, as of June 2023.",
      profileUrl: Spotify,
    },
    jobTitle: "Quality Engineer",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1300",
    detail: [
      {
        desc: "As a Quality Engineer at Spotify, your primary responsibility is to ensure the quality and reliability of our music streaming platform. You will work closely with development teams to design and execute test strategies, implement and automate testing processes, and conduct rigorous testing of new features and enhancements. Your role will involve identifying and reporting bugs, tracking the resolution of issues, and contributing to the overall goal of delivering a seamless music streaming experience to our users.",

        requirement:
          "We are looking for candidates with a strong background in quality assurance and testing methodologies, along with hands-on experience in writing and executing test scripts. Proficiency in coding and scripting languages is essential. A deep passion for music and a genuine interest in ensuring a flawless listening experience are highly valued. While a Bachelor's degree in Computer Science or a related field is preferred, relevant work experience and expertise in quality engineering are equally important.",
      },
    ],
    applicants: ["1", "2"],
    vacancies: 8,
    createdAt: new Date(),
  },
  {
    id: "5",
    company: {
      name: "Meta (Facebook Corporation)",
      location: "Germany",
      email: "careers@meta.com",
      contact: "support@microsoft",
      about:
        "Meta builds technologies that help people connect, find communities and grow businesses. We're moving beyond 2D screens and into immersive experiences in the metaverse, helping create the next evolution of social technology.",
      profileUrl: Facebook,
    },
    jobTitle: "ML Engineer",
    location: "Norway",
    jobType: "Full-Time",
    salary: "5200",
    detail: [
      {
        desc: "As a Machine Learning (ML) Engineer at Facebook, you'll be at the forefront of developing cutting-edge machine learning algorithms and models to drive innovation and enhance user experiences. Your role involves researching, designing, and implementing ML solutions, working closely with cross-functional teams to deploy and optimize ML models in real-world applications, such as content recommendation, advertising, and more.",

        requirement:
          "We're seeking candidates with a strong background in machine learning, deep learning, and artificial intelligence. A Master's or Ph.D. in a related field is preferred, but exceptional candidates with a Bachelor's degree and relevant experience will be considered. Proficiency in programming languages like Python is essential, and familiarity with ML frameworks (e.g., TensorFlow, PyTorch) is highly valuable. Strong problem-solving skills, collaboration abilities, and a track record of successful ML projects are crucial.",
      },
    ],
    applicants: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    vacancies: 9,
    createdAt: new Date(),
  },
  {
    id: "6",
    company: {
      name: "WhatsApp Corporation",
      location: "California",
      email: "careers@meta.com",
      contact: "support@meta/whatsapp",
      about:
        "WhatsApp (officially WhatsApp Messenger) is a freeware, cross-platform, centralized instant messaging (IM) and voice-over-IP (VoIP) service owned by United States tech conglomerate Meta Platforms.",
        profileUrl: WhatsApp,
    },
    jobTitle: "Project Lead",
    location: "Mumbai, India",
    jobType: "Full-Time",
    salary: "3900",
    detail: [
      {
        desc: "As a Project Lead at WhatsApp Corporation, you will take charge of overseeing and coordinating project development efforts. You will manage project timelines, allocate resources, and ensure successful delivery. Your role will involve collaborating with cross-functional teams, setting project goals, and driving the team toward achievement. You'll play a key role in the development and delivery of WhatsApp's mission-critical projects.",

        requirement:
          "We are looking for experienced project leads with a strong track record of successfully managing complex projects. Excellent organizational and leadership skills are essential. A Bachelor's degree in a relevant field, coupled with project management experience, is preferred. Effective communication and a proven ability to work collaboratively with diverse teams are key. Knowledge of mobile technology and messaging systems is a plus.",
      },
    ],
    applicants: ["1", "2", "3", "4", "5"],
    vacancies: 5,
    createdAt: new Date(),
  },
  {
    id: "7",
    company: {
      name: "Instagram Corporation",
      location: "Norway",
      email: "career@meta.com",
      contact: "support@instagram/meta",
      about:
        "Instagram, online social media platform and social network service for photograph and video sharing. The app was launched in 2010 by cofounders Kevin Systrom and Mike Krieger, and it is now owned by Meta Platforms, Inc., the parent company of Facebook.",
      profileUrl: Instagram,
    },
    jobTitle: "Product Engineer",
    location: "Norway",
    jobType: "Full-Time",
    salary: "3300",
    detail: [
      {
        desc: "As a Product Engineer at Instagram, you'll be part of a team responsible for crafting and delivering innovative features to enhance the Instagram platform. You will collaborate with designers and cross-functional teams to implement and optimize new features and user experiences, contributing to Instagram's ongoing evolution.",

        requirement:
          "We are seeking candidates with a strong background in software engineering, web or mobile application development. Proficiency in programming languages like Java, Swift, or JavaScript is essential. Bachelor's or advanced degrees in Computer Science or related fields are preferred. Strong problem-solving skills and the ability to work in a dynamic, fast-paced environment are important. Experience with mobile app development and social media platforms is a plus.",
      },
    ],
    applicants: ["1", "2"],
    vacancies: 3,
    createdAt: new Date(),
  },
  {
    id: "8",
    company: {
      name: "Youtube Corporation",
      location: "California",
      email: "careers@youtube.com",
      contact: "support@youtube",
      about:
        "YouTube is an online video sharing and social media platform headquartered in San Bruno, California, United States. Accessible worldwide, it was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the second most visited website in the world, after Google Search.",
      profileUrl: Youtube,
    },
    jobTitle: "Software Engineer - AI",
    location: "West BayArea",
    jobType: "Full-Time",
    salary: "6600",
    detail: [
      {
        desc: "As a Software Engineer specializing in AI at YouTube, you'll work on developing AI-driven features and algorithms to enhance user experiences. Your responsibilities will include research, design, and implementation of AI solutions, as well as collaboration with cross-functional teams to integrate AI capabilities into the YouTube platform.",

        requirement:
          "We're seeking candidates with a strong background in software engineering and AI. A Bachelor's degree in Computer Science or a related field is preferred, along with proficiency in programming languages like Python and experience with machine learning frameworks (e.g., TensorFlow or PyTorch). Strong problem-solving skills, excellent communication, and teamwork abilities are crucial, as is a passion for AI and the desire to contribute to YouTube's mission of delivering engaging video content to users.",
      },
    ],
    applicants: ["1", "2", "3", "4", "5", "6"],
    vacancies: 4,
    createdAt: new Date(),
  },
  {
    id: "9",
    company: {
      name: "Beekin Corporation",
      location: "California",
      email: "career@beekin.com",
      contact: "support@beekin",
      about:
        "Beekin is a real estate data analytics platform. We’re driven to make real estate more efficient, replacing spreadsheets and hunches with advanced, yet accessible tools. We do the heavy lifting, making it easy for your team to work smarter and faster.",
      profileUrl: CodeWave,
    },
    jobTitle: "FullStack Engineer",
    location: "West-US",
    jobType: "Full-Time",
    salary: "4000",
    detail: [
      {
        desc: "As a Full Stack Developer at Beekin, you'll play a key role in building and maintaining web applications for our real estate technology platform. Your responsibilities will encompass both front-end and back-end development, including designing user interfaces, implementing server-side logic, and ensuring the responsiveness and performance of our applications.",

        requirement:
          "We are looking for talented Full Stack Developers with a strong background in web development. Proficiency in programming languages like JavaScript and experience with front-end frameworks (e.g., React) and back-end technologies (e.g., Node.js) are essential. Strong problem-solving skills, attention to detail, and the ability to work collaboratively with diverse teams are crucial. A Bachelor's degree in Computer Science or related fields is preferred, but candidates with a proven track record of full stack development work will also be considered.",
      },
    ],
    applicants: ["1", "2"],
    vacancies: 7,
    createdAt: new Date(),
  },
];

export const footerLinks = [
  {
    id: "01",
    title: "Company",
    links: ["Home", "About Us", "Services", "Our Team"],
  },
  {
    id: "02",
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "03",
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];

export const companies = [
  {
    _id: 1,
      name: "X - formerly Twitter",
      location: "California",
      email: "careers@twitterx.com",
      contact: "support@x/bayarea",
      about:
        "Twitter, Inc. was an American social media company based in San Francisco, California. The company operated the social networking service Twitter and previously the Vine short video app and Periscope livestreaming service.",
      profileUrl: Twitter,
    jobPosts: ["1", "2", "3", "4"],
  },
  {
    _id: 2,
    name: "Google Corporation",
      location: "Califonia",
      email: "career@google.com",
      contact: "support@google",
      about:
        "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.",
      profileUrl: Google,
    jobPosts: ["1", "2", "3"],
  },
  {
    _id: 3,
    name: "LinkedIn Corporation",
      location: "Germany",
      email: "careers@linkedin.com",
      contact: "support@linkedin",
      about:
        "LinkedIn, a Microsoft company, is the world's largest professional network. We connect professionals, making it easier for people to learn, connect, and advance their careers.",
      profileUrl: Linkedin,
    jobPosts: ["1", "2", "3", "4", "5"],
  },
  {
    _id: 4,
    name: "Spotify Corporation",
      location: "Germany",
      email: "careers@spotify.com",
      contact: "support@listenspotify",
      about:
        "Spotify is a Swedish audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon. It is one of the largest music streaming service providers, with over 551 million monthly active users, including 220 million paying subscribers, as of June 2023.",
      profileUrl: Spotify,
    jobPosts: ["1", "2"],
  },
  {
    _id: 5,
    name: "Meta (Facebook Corporation)",
    location: "Germany",
    email: "careers@meta.com",
    contact: "support@microsoft",
    about:
      "Meta builds technologies that help people connect, find communities and grow businesses. We're moving beyond 2D screens and into immersive experiences in the metaverse, helping create the next evolution of social technology.",
    profileUrl: Facebook,
    jobPosts: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  {
    _id: 6,
    name: "WhatsApp Corporation",
      location: "California",
      email: "careers@meta.com",
      contact: "support@meta/whatsapp",
      about:
        "WhatsApp (officially WhatsApp Messenger) is a freeware, cross-platform, centralized instant messaging (IM) and voice-over-IP (VoIP) service owned by United States tech conglomerate Meta Platforms.",
        profileUrl: WhatsApp,
    jobPosts: ["1", "2", "3", "4", "5"],
  },
  {
    _id: 7,
    name: "Instagram Corporation",
      location: "Norway",
      email: "career@meta.com",
      contact: "support@instagram/meta",
      about:
        "Instagram, online social media platform and social network service for photograph and video sharing. The app was launched in 2010 by cofounders Kevin Systrom and Mike Krieger, and it is now owned by Meta Platforms, Inc., the parent company of Facebook.",
      profileUrl: Instagram,
    jobPosts: ["1", "2"],
  },
  {
    _id: 8,
    name: "Youtube Corporation",
    location: "California",
    email: "careers@youtube.com",
    contact: "support@youtube",
    about:
      "YouTube is an online video sharing and social media platform headquartered in San Bruno, California, United States. Accessible worldwide, it was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the second most visited website in the world, after Google Search.",
    profileUrl: Youtube,
    jobPosts: ["1", "2", "3", "4", "5", "6"],
  },
  {
    _id: 9,
    name: "Beekin Corporation",
    location: "California",
    email: "career@beekin.com",
    contact: "support@beekin",
    about:
      "Beekin is a real estate data analytics platform. We’re driven to make real estate more efficient, replacing spreadsheets and hunches with advanced, yet accessible tools. We do the heavy lifting, making it easy for your team to work smarter and faster.",
    profileUrl: CodeWave,
    jobPosts: ["1", "2"],
  },
];

export const users = [
  {
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
    token: "gjhsdgsjgdjh",
  },
  {
    firstName: "Beekin",
    lastName: "Technologies",
    email: "support@ai.com",
    contact: "support@beekin",
    about:
      "Beekin is a real estate data analytics platform. We’re driven to make real estate more efficient, replacing spreadsheets and hunches with advanced, yet accessible tools. We do the heavy lifting, making it easy for your team to work smarter and faster.",
    profileUrl: CodeWave,
    accountType: "seeker",
    cvUrl: "",
    token: "gjhsdgsjgdjh",
  },
];
