import { useEffect, useState, useContext } from "react"

import Title from "../../components/Title"
import NewPost from "../../components/NewPost"
import Answer from "../../components/Answer"
import Post from "../../components/Post"


import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios"
import LoadingViewPost from "../../components/LoadingViewPost"
import { UserContext } from "../../contexts/UserContext"
import Button from "../../components/Button"
import Divisor from "../../components/Divisor"
import NoAnswer from "../../components/NoAnswer"
import ContentArea from "../../components/ContentArea"
import FindMoreArea from "../../components/FindMoreArea";


export default function ViewPost() {
    const { get, create, loading, loadingSubmit } = useAxios()
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [offset, setOffSet] = useState(0)
    const [post, setPost] = useState(null)
    const [isAnswersEmpty, setIsAnswersEmpty] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [answers, setAnswers] = useState([])

    useEffect(() => {

        get(`/posts/id/${id}`, {
            params: {
                offset
            }
        })
        .then(({ post }) => {
            document.title = `Publicação de ${post.User.username}`
            setPost(post)
            offset === 0 
            ? setAnswers(post.Answers)
            : (
                setLoadingMore(false),
                setAnswers(prevAnswers => [...prevAnswers, ...post.Answers])
            )
            setAnswers([...answers, ...post.Answers])
            setIsAnswersEmpty(post.Answers.length === 0)
        })

    }, [id, offset])

    function handleFindMore() {
        setOffSet(prevOffSet => prevOffSet + 5)
        setLoadingMore(true)
    }

    function handleAnswer({ description }, reset, set) {
        const answer = {
            description,
            postId: post.id
        }

        create("/answers/create", answer)
        .then(({ answer }) => {
            setAnswers([...answers, answer])
            reset()
            set(0)
        })
}

    if (loading) {
        return (
            <section>
                <Title title="Publicação" />
                <LoadingViewPost />
            </section>
        )
    }

    return (
        <section>
            <Title title="Publicação" />
            {post && (
                <>
                    <ContentArea>
                        <Post
                            id={post.id}
                            username={post.User.username}
                            createdAt={post.createdAt}
                            likesCount={post.liked}
                            description={post.description}
                            AnswerCount={post.answer_qty}
                        />

                        <Divisor txt="RESPOSTAS" />

                        <NewPost
                            username={user.username}
                            handleOnSubmit={handleAnswer}
                            placeholder="Digite qualquer coisa"
                            btnTxt="Responder"
                            isLoading={loadingSubmit}
                        />
                        {answers.length > 0 ? (answers.map((answer) => {
                            return (
                                <Answer
                                    key={answer.id}
                                    id={answer.id}
                                    username={answer.username}
                                    createdAt={answer.createdAt}
                                    likesCount={answer.liked}
                                    description={answer.description}
                                    author={(answer.username === post.User.username)}
                                />
                            )
                        }
                        )) : (
                            <NoAnswer txt="Seja o primeiro a responder!" />
                        )}
                    </ContentArea>

                    <FindMoreArea 
                        show={(answers.length >= 5 && !isAnswersEmpty)} 
                        loading={loadingMore}
                        handleFindMore={handleFindMore}
                    />
                </>

            )}

        </section>
    )
}