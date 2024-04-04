import styles from "./styles.module.css"

import { Link } from "react-router-dom"
import { AiOutlineLoading } from "react-icons/ai";
import Button from "../Button";

export default function Form({children, handleOnSubmit, btnTxt, bottomTxt, linkTxt, path, isLoading}){
    return (
        <form className={styles.form_control} onSubmit={handleOnSubmit}>
            {children}
            <Button btnTxt={btnTxt} type="submit" isLoading={isLoading} />
            <span className={styles.link}>{bottomTxt} <Link to={path}>{linkTxt}</Link></span>
        </form>
    )
}