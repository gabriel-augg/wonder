import { useEffect, useState, useContext } from "react"

import Title from "../../components/Title"
import ContentArea from "../../components/ContentArea"
import Post from "../../components/Post"
import Divisor from "../../components/Divisor"
import NewPost from "../../components/NewPost"
import AnswerList from "../../components/AnswerList"


import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest"
import { UserContext } from "../../contexts/UserContext"
import FindMoreArea from "../../components/FindMoreArea";
import withLoading from "../../hoc/withLoading"

import LoadingViewPost from "../../components/LoadingViewPost"


export default function ViewPost() {
    const { request, loading, setLoading, loadingSubmit, setLoadingSubmit } = useRequest()
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [offset, setOffSet] = useState(0)
    const [post, setPost] = useState(null)
    const [isAnswersEmpty, setIsAnswersEmpty] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [answers, setAnswers] = useState([])
    

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

    async function handleAnswer({ description }) {
        setLoadingSubmit(true)
        const answer = {
            description,
            postId: post.id
        }

        request("/answers/create", {
            method: "post",
            data: answer
        }).then( async ({data}) => {
            await request(`/posts/${post.id}/add-answers-count`, {
                method: "patch"
            })
            setAnswers(prevAnswers => [...prevAnswers, data.answer])
            const count = post.answersCount + 1
            setPost({...post, answersCount: count })
            setLoadingSubmit(false)
        })       

    }
    
    const Content = () => {
        return (
            <ContentArea>
                <Post
                    id={post.id}
                    userId={post.UserId}
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
                    txt="Responder"
                />

            </ContentArea>
        )
    }

    const ContentWithLoading = withLoading(Content, LoadingViewPost)

    return (
        <section>
            <Title title="Publicação" />

            <ContentWithLoading
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