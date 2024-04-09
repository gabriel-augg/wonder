import styles from "./style.module.css"

export default function Info({count, txt}){
    return(
        <div className={styles.info}>
            <span>{count}</span>
            <span>{txt}</span>
        </div>
    )
}