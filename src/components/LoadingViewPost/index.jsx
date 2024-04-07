import CommentSkeleton from "../CommentSkeleton"
import DivisorSkeleton from "../DivisorSkeleton"
import MainAreaSkeleton from "../MainAreaSkeleton"
import NewPostSkeleton from "../NewPostSkeleton"
import NoCommentSkeleton from "../NoCommentSkeleton"

export default function LoadingViewPost() {
    return (
        <MainAreaSkeleton>
            <CommentSkeleton />
            <DivisorSkeleton />
            <NewPostSkeleton/>
            <NoCommentSkeleton />
        </MainAreaSkeleton>
    )
}