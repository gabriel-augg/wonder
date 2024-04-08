import Answer from "../Answer"
import NoAnswer from "../NoAnswer"

export default function AnswerList({answers, postUser, txt}){
    return (
        <>
            {answers.length > 0 ? (
                answers.map((answer) => {
                    return (
                        <Answer
                            key={answer.id}
                            id={answer.id}
                            username={answer.username}
                            createdAt={answer.createdAt}
                            likesCount={answer.liked}
                            description={answer.description}
                            author={(answer.username === postUser.username)}
                        />
                    )
                })
            ) : (
                <NoAnswer txt={txt}/>
            )}
        </>
    )
}