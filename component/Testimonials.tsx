import styles from "./css/Testimonials.module.css"
import HeadingC from "./HeadingC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials(){
    return(
        <>
            <div className={styles.main}>
                <HeadingC h1="Don't take our word for it" p="Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare."/>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.profile}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>
                            <div className={styles.img}>
                                <img src="./testimonial-03.jpg" alt="" />
                            </div>
                        </div>
                        <p>
                            — Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.
                        </p>
                        <div className={styles.details}>
                            <h5>Anastasia Dan</h5>
                            <span>-</span> 
                            <a href="#">UX Board</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.profile}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>
                            <div className={styles.img}>
                                <img src="./testimonial-03.jpg" alt="" />
                            </div>
                        </div>
                        <p>
                            — Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.
                        </p>
                        <div className={styles.details}>
                            <h5>Anastasia Dan</h5>
                            <span>-</span> 
                            <a href="#">UX Board</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.profile}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>
                            <div className={styles.img}>
                                <img src="./testimonial-03.jpg" alt="" />
                            </div>
                        </div>
                        <p>
                            — Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.
                        </p>
                        <div className={styles.details}>
                            <h5>Anastasia Dan</h5>
                            <span>-</span> 
                            <a href="#">UX Board</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;