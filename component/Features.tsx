import React , {Component} from 'react';
import HeadingC from "./HeadingC";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faNewspaper, faStar ,faHeadSideVirus, faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';
import styles from "./css/Features.module.css"
function Features(){
    return(
        <>
            <div className={styles.main}>
                <HeadingC h1="Landing template for startups" p="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."/>
                <div className={styles.content}>
                    <div className={styles.box}>
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon icon={faStar} className={styles.boxIcon}/>
                        </div>
                        <h2>Instant Feature</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon icon={faNewspaper} className={styles.boxIcon}/>
                        </div>
                        <h2>Instant Feature</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon icon={faGlobe} className={styles.boxIcon}/>
                        </div>
                        <h2>Instant Feature</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon icon={faHeadSideVirus} className={styles.boxIcon}/>
                        </div>
                        <h2>Instant Feature</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon icon={faThumbsUp} className={styles.boxIcon}/>
                        </div>
                        <h2>Instant Feature</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.iconDiv}>
                            <FontAwesomeIcon icon={faComment} className={styles.boxIcon}/>
                        </div>
                        <h2>Instant Feature</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Features;