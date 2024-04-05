import { Link } from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io";

import styles from "./styles.module.css"

export default function ButtonCta({path, title, home}){

    if(home){
        return <Link to={path} className={styles.button_cta}><IoIosAddCircleOutline size={20} />{title}</Link>
    }

    return <Link to={path} className={styles.button_cta}>{title}</Link>
}