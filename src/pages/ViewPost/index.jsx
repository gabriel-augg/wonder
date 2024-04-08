import { useEffect, useState, useContext } from "react"

import Title from "../../components/Title"
import NewPost from "../../components/NewPost"
import Comment from "../../components/Comment"
import Post from "../../components/Post"


import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios"
import LoadingViewPost from "../../components/LoadingViewPost"
import { UserContext } from "../../contexts/UserContext"
import Button from "../../components/Button"
import Divisor from "../../components/Divisor"
import NoComment from "../../components/NoComment"
import ContentArea from "../../components/ContentArea"
import FindMoreArea from "../../components/FindMoreArea";


export default function ViewPost() {
    const { get, create, loading, loadingSubmit } = useAxios()
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [offset, setOffSet] = useState(0)
    const [post, setPost] = useState(null)
    const [isAnswersEmpty, setIsAnswersEmpty] = useState(false)
    const [answers, setAnswers] = useState([])

    useEffect(() => {

        get(`/posts/id/${id}`, {
            params: {
                offset
            }
        })
            .then(({ post }) => {
                setPost(post)
                document.title = `Publicação de ${post.User.username}`
                setAnswers([...answers, ...post.Answers])
                setIsAnswersEmpty(post.Answers.length === 0)
            })

    }, [id, offset])

    function handleFindMore() {
        setOffSet(prevOffSet => prevOffSet + 5)
        // setLoadingMore(true)
    }

    function handleComment({ description }, reset, set) {
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
                            commentCount={post.answer_qty}
                        />

                        <Divisor />

                        <NewPost
                            username={user.username}
                            handleOnSubmit={handleComment}
                            placeholder="Digite qualquer coisa"
                            btnTxt="Responder"
                            isLoading={loadingSubmit}
                        />
                        {answers.length > 0 ? (answers.map((answer) => {
                            return (
                                <Comment
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
                            <NoComment txt="Seja o primeiro a responder!" />
                        )}
                    </ContentArea>

                    <FindMoreArea 
                        show={(answers.length >= 5 && !isAnswersEmpty)} 
                        // loading={loadingMore}
                        handleFindMore={handleFindMore}
                    />
                </>

            )}

        </section>
    )
}