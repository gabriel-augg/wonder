import styles from "./styles.module.css"
import user_image from "../../assets/img/user.svg"
import Dropdown from "../Dropdown"

export default function UserHeader({username, url}){
    return(
        <div className={styles.user_header}>
            <img src={url ? url : user_image } />
            <div>
                <span>{username}</span>
                <Dropdown/>
            </div>
        </div>
    )
}