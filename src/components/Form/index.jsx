import styles from "./styles.module.css"

import { Link } from "react-router-dom"

export default function Form({children, handleSubmit, btnTxt, bottomTxt, linkTxt, path}){
    return (
        <form className={styles.form_control} onSubmit={handleSubmit}>
            {children}
            <button type="submit" >{btnTxt}</button>
            <span className={styles.link}>{bottomTxt} <Link to={path}>{linkTxt}</Link></span>
        </form>
    )
}