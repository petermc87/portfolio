import Project from "../../Project/Project";
import styles from "../ProjectSection/ProjectSection.module.scss";

export default function ProjectSection({ projectsRef }) {
  // State for showing projects.
  // const [showSoftware, setShowSoftware] = useState(false);
  // const [showDataAnalytics, setShowDataAnalytics] = useState(false);

  // Create an array of objects that gets looped over.
  // For each object there is a title, url, image, github, blurb and tech

  // Use require module to pass in the image static path to the component.
  const devProjects = [
    {
      note: "The app features a demo profile. Please select login or signup to access the demo button at the bottom of the modal.",
      image: require("../../../images/jobtrack.png"),
      title: "JobTrack",
      url: "https://jobtrack-jade.vercel.app/",
      github: "https://github.com/petermc87/jobtrack",
      blurb:
        "Use JobTrack to keep on top of you job applications. It uses a simple storage method to keep track of up-to-date information about a particular job and application status. ",
      tech: "Next, Vercel, TypeScript, Prisma, GraphQL, Apollo, Postgres, Node, SCSS",
    },
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
      image: require("../../../images/yum2me.png"),
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
      note: "PLEASE NOTE: The following is a folder with a PowerBI report and the raw data files. It will require you to have access to the application in order to view it. The raw data also needs to be imported from the file location downloaded onto your machine in order for the report to be populated correctly.",
      image: require("../../../images/adventure-exec.png"),
      title: "Adventureworks Data Analysis",
      url: "https://1drv.ms/f/s!AmjDb-y7H2B0gYkjPL6QFVdY4f36TA?e=DirJOg",
      github: "n/a",
      blurb: `An analytics dashboard showing high level executive and detailed reports with full interactivity for a Bicycle sales and parts supply company.`,
      tech: "PowerBI, DAX, Power Query",
    },
    {
      note: "The redirect link is to a PowerBI service website hosting a live interactive dashboard.",
      image: require("../../../images/cycles-exec.png"),
      title: "Maven Cycles",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMDJlMWIzZWUtZTczYS00NTZjLTkwMGUtMTI1YTZjNjE2ZjQ5IiwidCI6IjQ1MGI0NTlkLWEyY2YtNGFkMy1iOWZiLWU1NTVmZDVmYTM4NiIsImMiOjN9",
      github: "",
      blurb:
        "Data insights for a bicycle retailer with a global reach. Power BI was used to create a high-level overview of key KPIs, with granular analysis performed on a number of different data metrics.",
      tech: "PowerBI, DAX, Power Query",
    },
  ];
  return (
    <>
      <div className={styles.projectSection} ref={projectsRef}>
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
    </>
  );
}
