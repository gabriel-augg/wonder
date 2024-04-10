import ContentArea from "../ContentArea"
import Post from "../Post"
import Divisor from "../Divisor"
import NewPost from "../NewPost"
import AnswerList from "../AnswerList"

export default function ViewPostContent({ post, user, answers, loadingSubmit, handleAnswer, txt }) {
    return(
        <ContentArea>
            <Post
                id={post.id}
                username={post.User.username}
                createdAt={post.createdAt}
                likesCount={post.likesCount}
                answersCount={post.answersCount}
                description={post.description}
            />

            <Divisor txt="RESPOSTAS" />

            <NewPost
                username={user.username}
                handleOnSubmit={handleAnswer}
                placeholder="Digite qualquer coisa"
                btnTxt="Responder"
                isLoading={loadingSubmit}
            />

            <AnswerList 
                answers={answers} 
                postUserId={post.UserId}
                txt={txt}
            />

        </ContentArea>
    )
}

