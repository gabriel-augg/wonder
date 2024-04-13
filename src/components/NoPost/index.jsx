import styles from "./styles.module.css"

export default function NoPost(){
    return(
        <div className={styles.no}>
            <h1>O usuário ainda não fez a sua primeira publicação.</h1>
        </div>
    )
}