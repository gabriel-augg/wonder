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
import AnswerList from "../../components/AnswerList"
import ViewPostContent from "../../components/ViewPostContent"
import withLoading from "../../hoc/withLoading"


export default function ViewPost() {
    const { get, create, loading, loadingSubmit } = useAxios()
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [offset, setOffSet] = useState(0)
    const [post, setPost] = useState(null)
    const [isAnswersEmpty, setIsAnswersEmpty] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [answers, setAnswers] = useState([])
    const ViewContentWithLoading = withLoading(ViewPostContent)

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



        return (
            <section>
                <Title title="Publicação" />
                <ViewContentWithLoading
                    loading={loading}
                    post={post}
                    user={user}
                    answers={answers}
                    loadingSubmit={loadingSubmit}
                    handleAnswer={handleAnswer}
                    txt="Seja o primeiro a responder!"
                />

                <FindMoreArea
                    show={(answers.length >= 5 && !isAnswersEmpty)}
                    loading={loadingMore}
                    handleFindMore={handleFindMore}
                />

            </section>
        )
}