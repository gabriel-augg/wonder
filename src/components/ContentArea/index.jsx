import styles from "./styles.module.css"

export default function ContentArea({children, loading}){
    return <div className={loading ? styles.content_area_loading : styles.content_area}>{children}</div>
}