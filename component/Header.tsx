import style from './css/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye , faBars } from '@fortawesome/free-solid-svg-icons';
function Header(){
    return(
        <>
            <div className={style.main}>
                <FontAwesomeIcon className={style.icon} icon={faBullseye} />
                <div className={style.registerBtns}>
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
                <FontAwesomeIcon className={style.bars} icon={faBars} />
            </div>
        </>
    )
}
export default Header; 