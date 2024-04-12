import image_no_posts from "../../assets/img/ilustration_no_posts.svg"

import styles from "./styles.module.css"

export default function NoPosts(){
    return (
        <div className={styles.ilustration}>
            <img src={image_no_posts} alt="ilustration" />
            <h1>Nenhuma publicação foi encontrada.</h1>
        </div>
    )
}