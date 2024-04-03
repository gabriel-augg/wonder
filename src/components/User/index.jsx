import user_image from "../../assets/img/user.svg"
import styles from "./styles.module.css"

export default function User({url, username}){
    return(
        <div className={styles.user}>
            <img src={url ? url : user_image } />
            <span>{username}</span>
        </div>
    )
}