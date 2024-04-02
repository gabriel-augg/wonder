import { useEffect, useState, useRef } from "react" 

import Title from "../../components/Title"
import NewPost from "../../components/NewPost"
import Post from "../../components/Post"

import styles from "./styles.module.css"
import { useParams } from "react-router-dom"

import { BsChatQuote } from "react-icons/bs";
import useAxios from "../../hooks/useAxios"

export default function ViewPost(){
    const { get, create } = useAxios()
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [answers, setAnswers] = useState(null)
    const descriptionRef = useRef(null)

    useEffect(()=>{
        get(`/posts/id/${id}`)
        .then(({data}) => {
            setPost(data.post)
            setAnswers(data.post.Answers)
        })
    },[id])

    function handleAnswer(e){
        e.preventDefault()

        const answer = {
            description: descriptionRef.current.value,
            postId: post.id
        }

        create("/answers/create", answer)
        .then(({answer}) => {
            descriptionRef.current.value = ""
            setAnswers([...answers, answer])
        })
    }

    return(
        <section>
            <Title title="Postagem" />
            {post ? (
                <div className={styles.viewpost_container}>

                    <Post 
                        id={post.id} 
                        username={post.User?.username} 
                        createdAt={post.createdAt} 
                        likesQty={post?.liked} 
                        txt={post.description} 
                        isAnswer={true} 
                        type="posts"
                    />

                    <div className={styles.answer_line}>
                        <span>RESPOSTAS</span>
                    </div>

                    <NewPost 
                        username="gabriel" 
                        onRef={descriptionRef} 
                        handleOnSubmit={handleAnswer}  
                        placeholder="Digite qualquer coisa" 
                        btnTxt="Responder" 
                    />
                    {answers.length ? (answers.map((answer) => {
                        return(
                            <Post 
                                key={answer.id}
                                id={answer.id} 
                                username={answer.username} 
                                createdAt={answer.createdAt} 
                                likesQty={answer.liked} 
                                txt={answer.description} 
                                isAnswer={true} 
                                type="answers" 
                            />
                        )
                    })) : (
                        <div className={styles.no_answer}>
                            <span>Seja o primeiro a responder!</span><BsChatQuote size={30} color="#299AD1" />
                        </div>
                    )}

                </div>
            ) : (
                <>
                </>
            )}

        </section>
    )
}