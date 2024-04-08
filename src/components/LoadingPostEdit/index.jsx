import AnswerSkeleton from "../AnswerSkeleton";
import ContentArea from "../ContentArea";
import DivisorSkeleton from "../DivisorSkeleton";
import NewPostSkeleton from "../NewPostSkeleton";

export default function LoadingPostEdit(){
    return(
        <ContentArea loading={true}>
            <NewPostSkeleton />
            <DivisorSkeleton />
            <AnswerSkeleton />
            <AnswerSkeleton />
        </ContentArea>
    )
}