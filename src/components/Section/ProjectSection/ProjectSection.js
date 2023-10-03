import Project from '../../Project/Project'
import styles from '../ProjectSection/ProjectSection.module.scss'

export default function ProjectSection () {
// Create an array of objects that gets looped over.
  // For each object there is a title, url, image, github, blurb and tech

  // Use require module to pass in the image static path to the component.
  const projects = [
    {
      image: require('../../../images/symptologix.png'),
      title: 'Symptologix - IN DEVELOPMENT',
      url: 'IN DEVELOPMENT',
      github: 'https://github.com/petermc87/symptologix',
      blurb: 'Symptologix is for people that need to log symptoms on the go on either mobile or desktop. It uses analytics over time to help diagnose health issues.',
      tech: 'Next, Vercel, TypeScript, Prisma, ESLint, Docker, Postgres, Node, PNPM'
    },
    {
      image: require('../../../images/kiddoart.png'),
      title: 'Kiddoart - IN DEVELOPMENT',
      url: 'https://kiddoart.vercel.app/',
      github: 'https://github.com/petermc87/kiddoart',
      blurb: 'Kiddoart is an image generation application used for young toddler education. It uses OpenAI, DALL-E API for image creation to provide the best user experience for your little one.',
      tech: 'Next, Vercel, TypeScript, Prisma, ESLint, Docker, Postgres, Node, DALL-E, Amazon S3'
    },
    {
      image: require('../../../images/mapandsnap.png'),
      title: 'Drone Map & Snap',
      url: 'https://dronemapandsnap.netlify.app/',
      github: 'https://github.com/petermc87/map-and-snap',
      blurb: 'A services website for a small side business of mine offering Photography, Videography and Mapping.',
      tech: 'React, SCSS, Node, EmailJS'
    },
    {
      image: require('../../../images/instafake.png'),
      title: 'Instafake',
      url: 'https://instafake.herokuapp.com/',
      github: 'https://github.com/bjlovee/instagram',
      blurb: 'Instafake is an Insragram clone, modeled on the real thing, but without the annoyance of sponsored content. The user also has the ability to edit commments in place, a feature Instagram does not have.',
      tech: 'MongoDB, Mongoose, Express, Node, React, SCSS'
    },
    {
      image: require('../../../images/PM-gamescreen.png'),
      title: 'Piranha Madness!',
      url: 'https://petermc87.github.io/piranha-madness/',
      github: 'https://github.com/petermc87/project_1_piranha_madness',
      blurb: 'Arcade style game where the player has control over a selected sprite, modeled on a fish, with the objective of eating smaller sprites (fish) before hull points are reduced to 0 by the impending Piranhas!',
      tech: 'HTML, CSS, JavaScript'
    }

  ]
  return (
    <div className={styles.projectSection}>
      <br />
      <div className={styles.heading}><div className={styles.dash} /><h4>WORK</h4></div>
      {
        projects.map((project) => {
          return (
            <Project
              image={project.image}
              title={project.title}
              url={project.url}
              github={project.github}
              blurb={project.blurb}
              tech={project.tech}
            />
          )
        })
}
    </div>
  )
}
