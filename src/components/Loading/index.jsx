import Skeleton from "../Skeleton"
import styles from "./styles.module.css"

export default function Loading(){
    return(
        <div className={styles.loading}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    )
}