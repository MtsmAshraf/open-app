import React from 'react';
import styles from './css/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye  } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter , faLinkedinIn , faFacebook, faInstagram ,faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer(){
    const websiteLink = 'https://moatasim-ashraf.netlify.app'
    return(
        <>
            <div className={styles.main}>
                <div className={styles.up}>
                    <div className={styles.about}>
                        <div className={styles.aboutIcon}>
                            <FontAwesomeIcon icon={faBullseye}/>
                        </div>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    </div>
                    <div className={styles.links}>
                        <h4>Products</h4>
                        <ul>
                            <li><a href="#">Web Studio</a></li>
                            <li><a href="#">DynamicBox Flex</a></li>
                            <li><a href="#">Programming Forms</a></li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h4>Products</h4>
                        <ul>
                            <li><a href="#">Nostrud exercitation</a></li>
                            <li><a href="#">Visual mockups</a></li>
                            <li><a href="#">Nostrud exercitation</a></li>
                            <li><a href="#">Visual mockups</a></li>
                            <li><a href="#">Programming Forms</a></li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h4>Products</h4>
                        <ul>
                        <li><a href="#">Nostrud exercitation</a></li>
                            <li><a href="#">Visual mockups</a></li>
                            <li><a href="#">Nostrud exercitation</a></li>
                            <li><a href="#">Visual mockups</a></li>
                            <li><a href="#">Programming Forms</a></li>
                        </ul>
                    </div>
                </div> 
                <div className={styles.down}>
                    <div className={styles.copy}>&copy; by: <a href={websiteLink}>Moatasim</a></div>
                    <div className={styles.social}>
                        <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                        <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href=""><FontAwesomeIcon icon={ faLinkedinIn } /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;