import { Link } from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io";

import styles from "./styles.module.css"

export default function ButtonCta({path, title}){
    return <Link to={path} className={styles.button_cta}><IoIosAddCircleOutline size={20} />{title}</Link>
}