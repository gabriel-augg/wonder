import styles from "./styles.module.css"

export default function Description({description}){
    return(
        <div className={styles.description}>
            <p>{description}</p>
        </div>
    )
}