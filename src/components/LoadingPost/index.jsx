import MainAreaSkeleton from "../MainAreaSkeleton"
import PostSkeleton from "../PostSkeleton"

export default function LoadingPost(){
    return(
        <MainAreaSkeleton>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </MainAreaSkeleton>
    )
}