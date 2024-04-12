import image_no_likes from "../../assets/img/ilustration_no_likes.svg"

import styles from "./styles.module.css"

export default function NoLikes(){
    return (
        <div className={styles.ilustration}>
            <img src={image_no_likes} width={300} alt="ilustration" />
            <h1>Você ainda não curtiu uma publicação!</h1>
        </div>
    )
}