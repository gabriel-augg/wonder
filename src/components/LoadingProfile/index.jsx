import ProfileAreaSkeleton from "../ProfileAreaSkeleton"
import PostSkeleton from "../PostSkeleton"
import ContentArea from "../ContentArea"
import DivisorSkeleton from "../DivisorSkeleton"

export default function LoadingProfile(){
    return(
        <ContentArea loading={true}>
            <ProfileAreaSkeleton />
            <DivisorSkeleton/>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </ContentArea>
    )
}