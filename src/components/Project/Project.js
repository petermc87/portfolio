import styles from '../Project/Project.module.scss'

export default function Project ({ image, title, url, blurb }) {
  return (
    <div className={styles.projectContainer}>
      {/* <h1>Project</h1> */}
      <div className={styles.projectImage}><img src={image} alt='gamescreen' /></div>
      <div className={styles.projectDescription}>
        <div>
          <h2>{title}</h2>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          </p> */}
          <p>{blurb}</p>
        </div>
        <a href={url}>
          <div className={styles.button}><h4>Launch App</h4></div>
        </a>
      </div>
    </div>
  )
}
