import { Experience, NavLink, Project } from "./types";

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Indeed",
    link: "https://indeed.com/",
    start: "May 2022",
    end: "July 2022",
    descriptions: [
      "Interned under the International Payments Team working the company's payment platform services.",
      "Drove a summer-long project to implement a new payment instrument authorization token format.",
      "Completed project extension of adding a new endpoint to retrieve token information.",
      "Participated in requirements gathering, brainstorming and story mapping sessions.",
      "Wrote unit, integration and E2E tests while practicing Behavior/Test-Driven Development and mob programming.",
    ],
    tags: [
      { label: "java", link: "https://java.com/" },
      { label: "kotlin", link: "" },
      { label: "typescript", link: "https://www.typescriptlang.org/" },
      { label: "spring", link: "https://spring.io/" },
      { label: "nodejs", link: "https://nodejs.org/" },
      { label: "react", link: "https://reactjs.org/" },
      { label: "jenkins", link: "https://www.jenkins.io/" },
      { label: "kibana", link: "https://www.elastic.co/kibana/" },
      { label: "datadog", link: "https://www.datadoghq.com/" },
      { label: "docker", link: "https://www.docker.com/" },
      { label: "mysql", link: "https://www.mysql.com/" },
      { label: "dynamodb", link: "https://aws.amazon.com/dynamodb/" },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "PayPal",
    link: "https://paypal.com/",
    start: "Jan 2021",
    end: "July 2021",
    descriptions: [
      "Interned under the Compliance Team working on the company's internal case management system.",
      "Participated in the team's weekly sprints and fixed several live issues",
      "Implemented PIN verification widget that facilitates the company's Know-Your-Customer process.",
      "Increased unit test coverage of multiple services to >95%.",
      "Set up Enterprice Continuous Delivery pipelines to ensure minimal service disruption.",
    ],
    tags: [
      { label: "java", link: "https://java.com/" },
      { label: "typescript", link: "https://www.typescriptlang.org/" },
      { label: "spring", link: "https://spring.io/" },
      { label: "nodejs", link: "https://nodejs.org/" },
      { label: "react", link: "https://reactjs.org/" },
      { label: "jenkins", link: "https://www.jenkins.io/" },
    ],
  },
  {
    role: "Tech Lead",
    company: "Developer Student Club",
    link: "https://dsc.comp.nus.edu.sg/",
    start: "Aug 2020",
    end: "July 2022",
    descriptions: [
      "Led a team of 8 software engineers to help FMAS develop a website to showcase hawker centres/stalls.",
      "Built an admin console for the ease of data management.",
    ],
    tags: [
      { label: "typescript", link: "https://www.typescriptlang.org/" },
      { label: "express", link: "https://expressjs.com/" },
      { label: "nodejs", link: "https://nodejs.org/" },
      { label: "react", link: "https://reactjs.org/" },
      { label: "docker", link: "https://www.docker.com/" },
      { label: "postgresql", link: "https://www.postgresql.org/" },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Roboto Coding Academy",
    link: "https://roboto.sg/",
    start: "May 2020",
    end: "July 2020",
    descriptions: [
      "Developed a drag and drop content builder for trainers to design modules.",
      "Integrated JWPlayer to streamline the process of uploading video resources.",
      "Set up logging for auditing and monitering user activities.",
    ],
    tags: [
      { label: "javascript", link: "https://www.javascript.com/" },
      { label: "pug", link: "https://pugjs.org/" },
      { label: "express", link: "https://expressjs.com/" },
      { label: "nodejs", link: "https://nodejs.org/" },
      { label: "mysql", link: "https://www.mysql.com/" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Live To Tilt",
    github: "https://github.com/Live-to-Tilt/live-to-tilt",
    descriptions: [
      "An iOS app clone of the classic mobile game Tilt To Live.",
      "Implemented game and physics engines from scratch.",
    ],
    tags: [{ label: "swift", link: "https://developer.apple.com/swift/" }],
  },
  {
    title: "NUSAbroad",
    github: "https://github.com/NUSAbroad",
    descriptions: [
      "A website for NUS students to plan their module mappings for exchange.",
    ],
    tags: [
      { label: "typescript", link: "https://www.typescriptlang.org/" },
      { label: "express", link: "https://expressjs.com/" },
      { label: "nodejs", link: "https://nodejs.org/" },
      { label: "react", link: "https://reactjs.org/" },
      { label: "postgresql", link: "https://www.postgresql.org/" },
    ],
  },
  {
    title: "The Social Census",
    github: "https://github.com/wenhaogoh/hack4good2021",
    descriptions: [
      "A prototype website that promotes inclusion among youths.",
      "Awarded 1st runner-up out of over 50 teams for Hack For Good 2021.",
    ],
    tags: [
      { label: "typescript", link: "https://www.typescriptlang.org/" },
      { label: "express", link: "https://expressjs.com/" },
      { label: "nodejs", link: "https://nodejs.org/" },
      { label: "react", link: "https://reactjs.org/" },
      { label: "postgresql", link: "https://www.postgresql.org/" },
    ],
  },
  {
    title: "NUSave",
    github: "https://github.com/wenhaogoh/tp",
    descriptions: ["An app that assists students in managing their finances."],
    tags: [
      { label: "java", link: "https://java.com/" },
      { label: "javafx", link: "https://openjfx.io/" },
    ],
  },
  {
    title: "Til Kingdom Come",
    github: "https://github.com/wenhaogoh/Til-Kingdom-Come",
    descriptions: [
      "An online multiplayer fighting game with original artwork and music.",
    ],
    tags: [
      { label: "c#", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
      { label: "unity", link: "https://unity.com/" },
    ],
  },
];

export const navLinks: NavLink[] = [
  {
    label: "about",
    link: "/about",
  },
  {
    label: "blog",
    link: "/blog",
  },
  {
    label: "contact",
    link: "/contact",
  },
];

export const adminNavLinks: NavLink[] = [
  {
    label: "about",
    link: "/admin/about",
  },
  {
    label: "blog",
    link: "/admin/blog",
  },
  {
    label: "contact",
    link: "/admin/contact",
  },
];
