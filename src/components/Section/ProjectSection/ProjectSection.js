import Project from "../../Project/Project";
import styles from "../ProjectSection/ProjectSection.module.scss";

export default function ProjectSection() {
  // Create an array of objects that gets looped over.
  // For each object there is a title, url, image, github, blurb and tech

  // Use require module to pass in the image static path to the component.
  const devProjects = [
    {
      note: "",
      image: require("../../../images/symptologix.png"),
      title: "Symptologix - IN DEVELOPMENT",
      url: "IN DEVELOPMENT",
      github: "https://github.com/petermc87/symptologix",
      blurb:
        "Symptologix is for people that need to log symptoms on the go on either mobile or desktop. It uses analytics over time to help diagnose health issues.",
      tech: "Next, Vercel, TypeScript, Prisma, ESLint, Docker, Postgres, Node, PNPM",
    },
    {
      note: "",
      image: require("../../../images/kiddoart.png"),
      title: "Kiddoart - IN DEVELOPMENT",
      url: "https://kiddoart.vercel.app/",
      github: "https://github.com/petermc87/kiddoart",
      blurb:
        "Kiddoart is an image generation application used for young toddler education. It uses OpenAI, DALL-E API for image creation to provide the best user experience for your little one.",
      tech: "Next, Vercel, TypeScript, Prisma, ESLint, Docker, Postgres, Node, DALL-E, Amazon S3",
    },
    {
      note: "",
      image: require("../../../images/mapandsnap.png"),
      title: "Drone Map & Snap",
      url: "https://dronemapandsnap.netlify.app/",
      github: "https://github.com/petermc87/map-and-snap",
      blurb:
        "A services website for a small side business of mine offering Photography, Videography and Mapping.",
      tech: "React, SCSS, Node, EmailJS",
    },
    {
      note: "1. Log in to the Customer profile, select a restaurant, place an order, log out. 2. Log in as a Restaurant, select the restaurant ordered from, select 'Order History', select the order that should say 'not started'. Select 'Add Driver'. Add 'Jerry, Connecticut'. Log out. 3. Log in to Driver Profile, look for the order that says 'in progress'. Select the order, click 'Order Complete' ",
      image: require("../../../images/instafake.png"),
      title: "Yum2me",
      url: "https://starfish-app-glmra.ondigitalocean.app/",
      github: "https://github.com/petermc87/yum-2-me",
      blurb:
        "Yum2me adds a new dimension in food delivery, bringing users, restaurant owners, and drivers together effortlessly. Say goodbye to uncertainties with our exclusive driver rating system, promoting accountability and reliability. For a touch of transparency, restaurant profiles now unveil staff wages, letting you in on the behind-the-scenes details. Embrace a simpler, more connected way to enjoy your favorite meals – because great food is best enjoyed with peace of mind. The app achieved the MVP of fully interactive Customer, Restaurant and Driver profiles",
      tech: "MongoDB, Mongoose, Express, Node, React, SCSS",
    },
    {
      note: "",
      image: require("../../../images/PM-gamescreen.png"),
      title: "Piranha Madness!",
      url: "https://petermc87.github.io/piranha-madness/",
      github: "https://github.com/petermc87/project_1_piranha_madness",
      blurb:
        "Arcade style game where the player has control over a selected sprite, modeled on a fish, with the objective of eating smaller sprites (fish) before hull points are reduced to 0 by the impending Piranhas!",
      tech: "HTML, CSS, JavaScript",
    },
  ];

  const dataAnalytics = [
    {
      note: "Please note, the following report is a PowerBI desktop file. It will require you to have access to the application in order to view it.",
      image: require("../../../images/adventure-exec.png"),
      title: "Adventureworks Data Analysis",
      url: "https://1drv.ms/u/s!AmjDb-y7H2B0gYkKo7_maJg2CO8f8w?e=UIAFGt",
      github: "n/a",
      blurb: `An analytics dashboard showing high level executive and detailed reports with full interactivity for a Bicycle sales and parts supply company.`,
      tech: "PowerBI",
    },
  ];
  return (
    <div className={styles.projectSection}>
      <br />
      <div className={styles.heading}>
        <div className={styles.dash} />
        <h4>SOFTWARE DEVELOPMENT</h4>
      </div>
      {devProjects.map((project, i) => {
        return (
          <Project
            image={project.image}
            title={project.title}
            url={project.url}
            github={project.github}
            blurb={project.blurb}
            note={project.note}
            tech={project.tech}
            key={i}
          />
        );
      })}
      <br />
      <div className={styles.heading}>
        <div className={styles.dash} />
        <h4>DATA ANALYTICS</h4>
      </div>
      {dataAnalytics.map((project, i) => {
        return (
          <Project
            image={project.image}
            title={project.title}
            url={project.url}
            github={project.github}
            blurb={project.blurb}
            note={project.note}
            tech={project.tech}
            key={i}
          />
        );
      })}
    </div>
  );
}
