import { useEffect, useState, useRef, useContext } from "react"

import Title from "../../components/Title"
import NewPost from "../../components/NewPost"
import Post from "../../components/Post"

import styles from "./styles.module.css"
import { useParams } from "react-router-dom"

import { BsChatQuote } from "react-icons/bs";
import useAxios from "../../hooks/useAxios"
import Loading from "../../components/Loading"
import { Context } from "../../contexts/UserContext"
import Button from "../../components/Button"

export default function ViewPost() {
    const { get, create, loading, loadingSubmit } = useAxios()
    const { user } = useContext(Context)
    const { id } = useParams()
    const [offset, setOffset] = useState(0)
    const [post, setPost] = useState(null)
    const [isAnswersEmpty, setIsAnswersEmpty] = useState(false)
    const [answers, setAnswers] = useState([])
    const descriptionRef = useRef(null)

    useEffect(() => {
        get(`/posts/id/${id}`, {
            params: {
                offset
            }
        })
        .then(({ post }) => {
            setPost(post)
            setAnswers([...answers, ...post.Answers])
            if(post.Answers.length === 0){
                setIsAnswersEmpty(true)
            }
        })
        
    }, [id, offset])

    function handleAnswer(e) {
        e.preventDefault()

        const answer = {
            description: descriptionRef.current.value,
            postId: post.id
        }

        create("/answers/create", answer)
            .then(({ answer }) => {
                descriptionRef.current.value = ""
                setAnswers([...answers, answer])
            })
    }

    if (loading) {
        return (
            <section>
                <Title title="Postagem" />
                <Loading />
            </section>
        )
    }

    return (
        <section>
            <Title title="Postagem" />
            {post && (
                <>
                    <div className={styles.viewpost_container}>

                        <Post
                            id={post.id}
                            username={post.User.username}
                            createdAt={post.createdAt}
                            likesQty={post.liked}
                            txt={post.description}
                            isAnswer={true}
                            type="posts"
                        />

                        <div className={styles.answer_line}>
                            <span>RESPOSTAS</span>
                        </div>

                        <NewPost
                            username={user.username}
                            onRef={descriptionRef}
                            handleOnSubmit={handleAnswer}
                            placeholder="Digite qualquer coisa"
                            btnTxt="Responder"
                            isLoading={loadingSubmit}
                        />
                        {answers.length ? (answers.map((answer) => {
                            return (
                                <Post
                                    key={answer.id}
                                    id={answer.id}
                                    username={answer.username}
                                    createdAt={answer.createdAt}
                                    likesQty={answer.liked}
                                    txt={answer.description}
                                    show={true}
                                    isAuthor={(answer.username === post.User.username)}
                                    type="answers"
                                />
                            )
                        }
                        )) : (
                            <div className={styles.no_answer}>
                                <span>Seja o primeiro a responder!</span><BsChatQuote size={30} color="#299AD1" />
                            </div>
                        )}
                    </div>
                    { ( answers.length >= 5 && !isAnswersEmpty ) && (
                        <div className={styles.loading_more}>
                            <Button 
                                btnTxt="Buscar mais" 
                                handleClick={() => 
                                setOffset(prevOffSet => prevOffSet + 5)} 
                            />
                        </div>
                    )}

                </>

            )}

        </section>
    )
}