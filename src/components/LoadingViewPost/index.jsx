import CommentSkeleton from "../CommentSkeleton"
import DivisorSkeleton from "../DivisorSkeleton"
import NewPostSkeleton from "../NewPostSkeleton"
import NoCommentSkeleton from "../NoCommentSkeleton"

export default function LoadingViewPost() {
    return (
        <div>
            <CommentSkeleton />
            <DivisorSkeleton />
            <NewPostSkeleton/>
            <NoCommentSkeleton />
        </div>
    )
}