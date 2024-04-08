import styles from "./styles.module.css"

export default function Divisor({txt}){
    return(
        <div className={styles.divisor}>
            <span>{txt}</span>
        </div>
    )
}