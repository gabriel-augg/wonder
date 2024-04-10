import { useEffect, useState, useContext } from "react"

import Title from "../../components/Title"


import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios"
import { UserContext } from "../../contexts/UserContext"
import FindMoreArea from "../../components/FindMoreArea";
import ViewPostContent from "../../components/ViewPostContent"
import withLoading from "../../hoc/withLoading"

import LoadingViewPost from "../../components/LoadingViewPost"


export default function ViewPost() {
    const { request, loading, setLoading, loadingSubmit, setLoadingSubmit } = useAxios()
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [offset, setOffSet] = useState(0)
    const [post, setPost] = useState(null)
    const [isAnswersEmpty, setIsAnswersEmpty] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [answers, setAnswers] = useState([])
    const ViewContentWithLoading = withLoading(ViewPostContent, LoadingViewPost)

    useEffect(() => {
        setLoading(true)
        request(`/posts/${id}/get-post`, {
            method: "get",
            params: {
                offset
            }
        })
        .then(({ data }) => {
            document.title = `Publicação de ${data.post.User.username}`
            setPost(data.post)
            offset === 0
                ? setAnswers(data.post.Answers)
                : (
                    setLoadingMore(false),
                    setAnswers(prevAnswers => [...prevAnswers, ...data.post.Answers])
                )
            setIsAnswersEmpty(data.post.Answers.length === 0)
            setLoading(false)
        }) 

    }, [id, offset])

    function handleFindMore() {
        setOffSet(prevOffSet => prevOffSet + 5)
        setLoadingMore(true)
    }

    async function handleAnswer({ description }, reset, set) {
        setLoadingSubmit(true)
        const answer = {
            description,
            postId: post.id
        }

        const { data } = await request("/answers/create", {
            method: "post",
            data: answer
        })
        
        await request(`/posts/${post.id}/add-answers-count`, {
            method: "patch"
        })
        

        setAnswers(prevAnswers => [...prevAnswers, data.answer])
        setLoadingSubmit(false)
        reset()
        set(0)
        

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