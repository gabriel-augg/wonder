
import PostSkeleton from "../PostSkeleton"
import ContentArea from "../ContentArea"

export default function LoadingPostList(){
    return(
        <ContentArea loading={true}>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </ContentArea>
    )
}