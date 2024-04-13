import styles from "./styles.module.css"
import user_image from "../../assets/img/user.svg"

export default function UserProfile({username, url, description}){
    return(
        <div className={styles.user_profile}>
            <img src={url ? url : user_image}  />
            <div className={styles.user_area}>
                <h1>{username}</h1>
                <p>{ !description ? "Não há descrição." : description}</p>
            </div>
        </div>
    )   
}