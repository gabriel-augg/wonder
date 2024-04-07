import styles from "./styles.module.css"

export default function MainArea({children}){
    return <div className={styles.main_area}>{children}</div>
}