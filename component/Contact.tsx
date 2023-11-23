import styles from './css/Contact.module.css'

function Contact(){
    return(
        <>
            <div className={styles.main}>
                <div className="text">
                    <h2>Stay in the loop</h2>
                    <p>Join our newsletter to get top news before anyone else.</p>
                </div>
                <form action="">
                    <input type="email" placeholder='Your best email...'/>
                    <input type="submit" value='Subscribe'/>
                </form>
            </div>
        </>
    )
}

export default Contact;