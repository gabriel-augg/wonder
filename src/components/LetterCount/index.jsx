import styles from "./styles.module.css"

export default function LetterCount({count}){
    return (
        <span className={styles.letter_count}>
            <span className={(count > 355 || count === 0) ? styles.error : undefined}>{count}</span>/355
        </span>
    )
}