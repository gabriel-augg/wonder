import { Link } from "react-router-dom"
import Dropdown from "../Dropdown"
import user_image from "../../assets/img/user.svg"
import styles from "./styles.module.css"


export default function User({url, username, path}){

    return(
        <div className={`${styles.user} ${path && styles.user_header}`}>
            <img src={url ? url : user_image } />
            <div>
                <span>{username}</span>
                {path && <Dropdown /> }
            </div>
        </div>
    )
}