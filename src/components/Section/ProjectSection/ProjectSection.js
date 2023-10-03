import Project from '../../Project/Project'
import styles from '../ProjectSection/ProjectSection.module.scss'
export default function ProjectSection () {
// Create an array of objects that gets looped over.
  // For each object there is a title, url, image, github, blurb and tech

  // Imported the image to get the static file generated. This is then passed into the image key
  // value pair. NOTE: There is a best practice alternative that needs to be explored.
  const projects = [
    {
      image: '/static/media/symptologix.621b2ea68e20a763e218.png',
      title: 'Symptologix - IN DEVELOPMENT',
      url: 'IN DEVELOPMENT',
      github: 'https://github.com/petermc87/symptologix',
      blurb: 'Symptologix is for people that need to log smyptoms on the go on either mobile or desktop. It uses analytics over time to help diagnose health issues.',
      tech: 'Next, Vercel, TypeScipt, Prisma, ESLint, Docker, Postgres, Node, PNPM'
    },
    {
      image: '/static/media/kiddoart.271456e8039428db7798.png',
      title: 'Kiddoart - IN DEVELOPMENT',
      url: 'https://kiddoart.vercel.app/',
      github: 'https://github.com/petermc87/kiddoart',
      blurb: 'Kiddoart is an image generation application used for young toddler education. It uses OpenAI, DALL-E API for image creation to provide the best user experience for your little one.',
      tech: 'Next, Vercel, TypeScipt, Prisma, ESLint, Docker, Postgres, Node, DALL-E, Amazon S3'
    },
    {
      image: '/static/media/mapandsnap.dbd23c2a0ca9e9f4a88c.png',
      title: 'Drone Map & Snap',
      url: 'https://dronemapandsnap.netlify.app/',
      github: 'https://github.com/petermc87/map-and-snap',
      blurb: 'A services website for a small side business of mine offering Photography, Videography and Mapping.',
      tech: 'React, SCSS, Node, EmailJS'
    },
    {
      image: '/static/media/instafake.5fff40d846662baf9b89.png',
      title: 'Instafake',
      url: 'https://instafake.herokuapp.com/',
      github: 'https://github.com/bjlovee/instagram',
      blurb: 'Instafake is an Insragram clone, modeled on the real thing, but without the annoyance of sponsored content. The user also has the ability to edit commments in place, a feature Instagram does not have.',
      tech: 'MongoDB, Mongoose, Express, Node, React, SCSS'
    },
    {
      image: '/static/media/PM-gamescreen.a7f2a885970961e04f82.png',
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
