import ProfileAreaSkeleton from "../ProfileAreaSkeleton"
import PostSkeleton from "../PostSkeleton"
import ContentArea from "../ContentArea"

export default function LoadingProfile(){
    return(
        <ContentArea loading={true}>
            <ProfileAreaSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </ContentArea>
    )
}