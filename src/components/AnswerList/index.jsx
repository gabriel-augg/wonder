import Answer from "../Answer"
import NoAnswer from "../NoAnswer"

export default function AnswerList({answers, postUserId, txt}){

    if(answers.length === 0 ){
        return <NoAnswer txt={txt}/>
    }

    return answers.map((answer) => {
        return (
            <Answer
                key={answer.id}
                id={answer.id}
                userId={answer.UserId}
                username={answer.User.username}
                createdAt={answer.createdAt}
                likesCount={answer.likesCount}
                description={answer.description}
                author={(answer.UserId === postUserId)}
            />
        )
    })

}