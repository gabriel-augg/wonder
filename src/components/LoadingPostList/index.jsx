
import PostSkeleton from "../PostSkeleton"
import styles from "./styles.module.css"

export default function LoadingPost(){
    return(
        <div className={styles.loading_postlist}>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </div>
    )
}