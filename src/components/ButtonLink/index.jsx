import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function ButtonLink({path, btnTxt, children, classN}){
    return(
        <Link className={`${styles[classN]}`} to={path}>
            {children}
            {btnTxt}
        </Link>
    )
}