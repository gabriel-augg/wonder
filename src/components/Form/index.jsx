import styles from "./styles.module.css"

import { Link } from "react-router-dom"
import { AiOutlineLoading } from "react-icons/ai";

export default function Form({children, handleOnSubmit, btnTxt, bottomTxt, linkTxt, path, isLoading}){
    return (
        <form className={styles.form_control} onSubmit={ !isLoading ? handleOnSubmit : undefined }>
            {children}
            <button type="submit" >
                { isLoading ? <AiOutlineLoading size={20}/> : btnTxt }
            </button>
            <span className={styles.link}>{bottomTxt} <Link to={path}>{linkTxt}</Link></span>
        </form>
    )
}