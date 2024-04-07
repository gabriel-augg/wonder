
import PostSkeleton from "../PostSkeleton"
import styles from "./styles.module.css"

export default function LoadingPostList(){
    return(
        <div className={styles.loading_postlist}>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </div>
    )
}