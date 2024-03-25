import styles from "./styles.module.css"

import { Link } from "react-router-dom"

export default function Form({children, handleOnSubmit, btnTxt, bottomTxt, linkTxt, path}){
    return (
        <form className={styles.form_control} onSubmit={handleOnSubmit}>
            {children}
            <button type="submit" >{btnTxt}</button>
            <span className={styles.link}>{bottomTxt} <Link to={path}>{linkTxt}</Link></span>
        </form>
    )
}