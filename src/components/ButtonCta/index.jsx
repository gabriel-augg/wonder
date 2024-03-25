import { Link } from "react-router-dom"

import styles from "./styles.module.css"

export default function ButtonCta({path, title}){
    return <Link to={path} className={styles.button_cta}>{title}</Link>
}