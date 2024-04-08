import AnswerSkeleton from "../AnswerSkeleton"
import DivisorSkeleton from "../DivisorSkeleton"
import NewPostSkeleton from "../NewPostSkeleton"
import ContentArea from "../ContentArea"

export default function LoadingViewPost() {
    return (
        <ContentArea loading={true}>
            <AnswerSkeleton />
            <DivisorSkeleton />
            <NewPostSkeleton/>
            <AnswerSkeleton/>
        </ContentArea>
    )
}