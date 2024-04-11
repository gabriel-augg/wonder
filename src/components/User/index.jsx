import { Link } from "react-router-dom"
import Dropdown from "../Dropdown"
import user_image from "../../assets/img/user.svg"
import styles from "./styles.module.css"


export default function User({ id, username, url}){

    return(
        <div className={styles.user}>
            <img src={url ? url : user_image } />
            <Link to={`/perfil/${id}`}>{username}</Link>
        </div>
    )
}