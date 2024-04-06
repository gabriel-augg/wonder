import styles from "./styles.module.css"

export default function Author({author}){
    return author && <span className={styles.autor}>Autor</span>        
}