import styles from "./styles.module.css"
import user_image from "../../assets/img/user.svg"

export default function UserProfile({username, url, description}){
    return(
        <div className={styles.user_profile}>
            <img src={url ? url : user_image} width={120}  />
            <div>
                <h1>{username}</h1>
                <span>{description}</span>
            </div>
        </div>
    )   
}