import styles from "./styles.module.css"

export default function Title({title, children}){
    return (
            <div className={`${styles.title} ${children && styles.space}`}>
                <h1>{title}</h1>
                {children}
            </div>
        )
}