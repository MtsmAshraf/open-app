import React from 'react';
import HeadingC from './HeadingC';
import styles from "./css/Products.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
function Products(){
    return(
        <>
            <div className={styles.main}>
                <div className={styles.miniHeading}>
                    Reach goals that matter
                </div>
                <HeadingC h1="One product, unlimited solutions" p="<span><FontAwesomeIcon icon={faCheck} /></span> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla."/>
                <div className={styles.content}>
                    <div className={styles.product}>
                        <div className={styles.text}>
                            <span>More speed. Less spend</span>
                            <h2>Keep projects on schedule</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span> Duis aute irure dolor in reprehenderit</li>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span> Excepteur sint occaecat</li>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span> Amet consectetur adipiscing elit</li>
                            </ul>
                        </div>
                        <div className={styles.productImg}>
                            <img src="./features-03-image-01.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productImg}>
                            <img src="./features-03-image-02.png" alt="" />
                        </div>
                        <div className={styles.text}>
                            <span>More speed. Less spend</span>
                            <h2>Keep projects on schedule</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span> Duis aute irure dolor in reprehenderit</li>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span> Excepteur sint occaecat</li>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span> Amet consectetur adipiscing elit</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.text}>
                            <span>More speed. Less spend</span>
                            <h2>Keep projects on schedule</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span> Duis aute irure dolor in reprehenderit</li>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span> Excepteur sint occaecat</li>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span> Amet consectetur adipiscing elit</li>
                            </ul>
                        </div>
                        <div className={styles.productImg}>
                            <img src="./features-03-image-03.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products