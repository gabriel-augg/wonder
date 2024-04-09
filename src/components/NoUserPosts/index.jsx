import image_no_user_posts from "../../assets/img/ilustration_no_user_posts.svg"
import ButtonLink from "../ButtonLink"

import styles from "./styles.module.css"

export default function NoUserPosts(){
    return (
        <div className={styles.no_user_posts}>
            <img src={image_no_user_posts} alt="ilustration" />
            <h1>Faça sua primeira publicação!</h1>
            <ButtonLink path="/nova-publicacao" btnTxt="Publicar" classN="btn" />
        </div>
    )
}