import meandsaorla from '../../../../src/images/merandsaorla.png'
import styles from '../Article/Article.module.scss'
export default function Article () {
    return(
        <div className={styles.aboutContainer}>
            <h1>About Me</h1>
            <article>
                    <div className={styles.aboutContents}>
                                <div className={styles.aboutContents__image}>
                                    <img src={meandsaorla} alt='meandsaorla'/>
                                </div>
                                <div className={styles.aboutContents__text}>
                                    <h3>Proud Husband & Dad</h3>
                                    <p> Originally from a rural part of Ireland, Moyvane, Co. Kerry, 
                        I moved to New York to seek out the American dream! My expectations were met, and some more. 
                        The image shows me and my then 3 month old baby daughter, Saorla, at Christmas, sporting a very Christmassy
                        outfit. 
                        </p>
                        <br/>
                        <br/>
                        <p>
                        I've always wanted to be a dad but didn't know when or how that would happen. 
                        I met my wife in New York a few weeks after arriving, which was the beginning of something wonderful between us.
                        Fast forward 5 years later and 2 becomes 3! Saorla brings happiness every moment I spend with her... except when she gets
                        really upset, thats when I don't really know what to do! Her mom has got great motherly instincts which is really helpful in those situations!</p>
                                </div>
                    </div>
            </article>

            <article className={styles.otherAbout}>
                    <div className={styles.aboutContents}>
                        <div className={styles.aboutContents__image}>
                            <img src={meandsaorla} alt='meandsaorla'/>
                        </div>
                        <div className={styles.aboutContents__text}>
                            <h3>Musician & Improviser</h3>
                            <p> Been playing guitar and singing for about 20 years. My styles vary from folk, indie, rock, pop to, well, just about anything really!
                </p>
                <br/>
                <br/>
                <p>
              Improv acting is something I also do in my spare time. Currently, you can find me jamming out at the PIT NYC's Friday Feel Good Jam or on the Armory
              Improv's Monday Night Barracks teams. I've also have Musical Improv experience and hope to perform a one man show in the future. Stay tuned for more info on this!</p>
                        </div>
                    </div>
            </article>

        </div>
    )
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//         molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//         numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
//         optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
//         obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
//         nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//         tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//         quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
//         sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
//         recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
//         minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
//         quibusdam sed amet tempora.