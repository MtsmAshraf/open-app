import styles from "./css/HeadingC.module.css"
type props = {
    h1 : string,
    p : string
}
function HeadingC(props: props){
    return(
        <>
            <h1 className={styles.h1}>{props.h1}</h1>
            <p className={styles.p}>{props.p}</p>
        </>
    )
}
export default HeadingC;