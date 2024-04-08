import ContentArea from "../ContentArea";
import NewPost from "../NewPost";
import Divisor from "../Divisor";
import AnswerList from "../AnswerList";

export default function PostEditContent({post, handleUpdate, answers, txt, loadingSubmit}){
    return(
        <ContentArea>
            <NewPost 
                username={post.User.username} 
                placeholder="Digite qualquer coisa" 
                btnTxt="Salvar" 
                handleOnSubmit={handleUpdate}
                isLoading={loadingSubmit}
                value={post.description} 
            />
            <Divisor txt="RESPOSTAS"/>
            <AnswerList 
                answers={answers} 
                postUser={post.User}
                txt={txt}
            />
        </ContentArea>  
    )
}