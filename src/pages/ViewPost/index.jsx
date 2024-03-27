import { useEffect, useState, useRef } from "react" 

import Title from "../../components/Title"
import NewPost from "../../components/NewPost"
import Post from "../../components/Post"

import styles from "./styles.module.css"
import api from "../../utils/api"
import { useParams } from "react-router-dom"

import { BsChatQuote } from "react-icons/bs";

export default function ViewPost(){
    const {id} = useParams()
    const [post, setPost] = useState({})
    const descriptionRef = useRef(null)

    useEffect(()=>{
        api.get(`/posts/id/${id}`).then((res) => {
            setPost(res.data.post)
            setAnswers(res.data.post.Answers)
        })
    },[])

    function handleAnswer(e){
        e.preventDefault()
        api.post("/answers/create", {
            description: descriptionRef.current.value,
            postId: post.id
        }).then((res) => {
            descriptionRef.current.value = ""
        })
    }

    return(
        <section>
            <Title title="Postagem" />
            {post ? (
                <div className={styles.viewpost_container}>
                    <Post id={post.id} username={post.User?.username} time={post.timeAgo} likesQty={post.liked} txt={post.description} isAnswer={true}/>
                    <div className={styles.answer_line}><span>RESPOSTAS</span></div>
                    <NewPost username="gabriel" onRef={descriptionRef} handleOnSubmit={handleAnswer}  placeholder="Digite qualquer coisa" btnTxt="Responder" />
                    {post.Answers?.length ? (post.Answers.map((answer) => {
                        return(
                            <Post id={answer.id} username={answer.User?.username} time={answer.timeAgo} likesQty={answer.liked} txt={answer.description} isAnswer={true} />
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