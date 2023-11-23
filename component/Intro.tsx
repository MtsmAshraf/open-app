import React , {Component} from "react";
import HeadingC from "./HeadingC";
import styles from "./css/Intro.module.css";
// import ReactPlayer from 'react-player'
import pic from "@/public/images/hero-image-01.jpg"
function Intro() {
    return (
        <>
            <div className={styles.main}>
                <HeadingC h1="Landing template for startups" p="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."/>
                <div className={styles.registerBtns}>
                    <button>Start free trial</button>
                    <button>Learn more</button>
                </div>
                <div className={styles.video}>
                    <video src="./video.mp4" loop muted autoPlay></video>
                </div>
            </div>
        </>
    );
}
 
export default Intro;