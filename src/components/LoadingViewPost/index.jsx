import CommentSkeleton from "../CommentSkeleton"
import DivisorSkeleton from "../DivisorSkeleton"
import NewPostSkeleton from "../NewPostSkeleton"
import NoCommentSkeleton from "../NoCommentSkeleton"
import ContentArea from "../ContentArea"

export default function LoadingViewPost() {
    return (
        <ContentArea loading={true}>
            <CommentSkeleton />
            <DivisorSkeleton />
            <NewPostSkeleton/>
            <NoCommentSkeleton />
        </ContentArea>
    )
}