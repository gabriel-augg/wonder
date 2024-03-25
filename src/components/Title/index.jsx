import styles from "./styles.module.css"

export default function Title({title, children}){
    return (
        <>
            {children ? (
                <div className={styles.title_children}>
                    <h1>{title}</h1>
                    {children}
                </div>
            ) : (
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
            )}
        </>
    )
}