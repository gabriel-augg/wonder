import styles from "./styles.module.css"

export default function Author({show}){
    return(
        <>
            { show && (
                <span className={styles.autor}>Autor</span>
            )}
        </>

    )
}