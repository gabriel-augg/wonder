import Answer from "../Answer"
import NoAnswer from "../NoAnswer"

export default function AnswerList({answers, postUserId, txt}){
    return (
        <>
            {answers.length > 0 ? (
                answers.map((answer) => {
                    return (
                        <Answer
                            key={answer.id}
                            id={answer.id}
                            username={answer.User.username}
                            createdAt={answer.createdAt}
                            likesCount={answer.likesCount}
                            description={answer.description}
                            author={(answer.UserId === postUserId)}
                        />
                    )
                })
            ) : (
                <NoAnswer txt={txt}/>
            )}
        </>
    )
}