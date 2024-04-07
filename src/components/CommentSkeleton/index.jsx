import styles from "./styles.module.css"

export default function CommentSkeleton(){
    return(
        <div class={styles.skeleton}>
            <div class={styles.header}>
                <div>
                    <span class={styles.avatar}></span>
                    <span class={styles.username}></span>
                    <span class={styles.date}></span>
                </div>
                <div>
                    <span className={styles.comment}></span>
                    <span className={styles.like}></span>
                </div>
            </div>
            <div class={styles.message_content}>
                <div class={styles.message_paragraph}></div>
                <div class={styles.message_paragraph}></div>
            </div>
        </div>
    )
}