import styles from "./styles.module.css"

export default function LoadingViewPost() {
    return (

        <div className={styles.loading_viewpost}>
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
            <div className={styles.divisor}></div>
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
            <div className={styles.no_comment}>
                <div></div>
            </div>
        </div>


    )
}