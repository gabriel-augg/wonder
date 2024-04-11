import styles from "./styles.module.css"

export default function ProfileAreaSkeleton(){
    return(
        <div class={styles.skeleton}>
            <div>
                <div className={styles.profile_info}>
                    <div className={styles.avatar}></div>
                    <div className={styles.user_area}>
                        <div className={styles.username}></div>
                        <div className={styles.description}></div>
                        <div className={styles.description}></div>
                    </div>
                </div>
            </div>
            <div className={styles.info_area}>
                <div className={styles.info_content}>
                    <div className={styles.info}>
                        <div></div>
                        <div></div>
                    </div>
                    
                    <div className={styles.info}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={styles.button}></div>
            </div>
        </div>
    )
}