import styles from "./styles.module.css"

export default function SpecialTitle({title, children}){
    return (
        <div className={styles.special_title}>
            {children}
            <h1>{title}</h1>
        </div>
    )    
}