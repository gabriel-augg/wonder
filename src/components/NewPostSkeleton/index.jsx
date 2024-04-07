import styles from "./styles.module.css"

export default function NewPostSkeleton(){
    return(
        <div className={styles.skeleton}>
        <div class={styles.header}>
            <div>
                <span class={styles.avatar}></span>
                <span class={styles.username}></span>
            </div>
        </div>
        <div className={styles.textarea} >
                <div className={styles.placeholder}></div>
                <div className={styles.button_area}>
                    <div className={styles.textcounter}></div>
                    <div className={styles.button}></div>
                </div>
        </div>
    </div>

    )
}