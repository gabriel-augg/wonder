import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

import useAxios from "../../hooks/useAxios";
import NewPost from "../../components/NewPost"
import Answer from "../../components/Answer"
import SpecialTitle from "../../components/SpecialTitle"
import { RiUserFollowFill } from "react-icons/ri";

import styles from "./styles.module.css"
import Divisor from "../../components/Divisor";

export default function UpdatePost(){
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [answers, setAnswers] = useState([])
    const {get, put, loading} = useAxios()

    useEffect(()=>{
        get(`posts/id/${id}`)
        .then(({post}) => {
            setPost(post)
            setAnswers(post.Answers)
        })
    },[id])

    function handleUpdate(description){
        put(`/posts/id/${id}`, description)
    }

    return(
        <section>
                <SpecialTitle title="Minha publicação">
                    <RiUserFollowFill size={30} />
                </SpecialTitle>
                { post && (
                    <div className={styles.post_container}>
                        <NewPost 
                            username={post.User.username} 
                            placeholder="Digite qualquer coisa" 
                            btnTxt="Salvar" 
                            handleOnSubmit={handleUpdate}
                            value={post.description} 
                        />
                        <Divisor/>
                        {answers.length > 0 && (
                            answers.map((answer) => {
                                return(
                                    <Answer 
                                        key={answer.id} 
                                        id={answer.id} 
                                        username={answer.username} 
                                        likesCount={answer.liked} 
                                        description={answer.description} 
                                        createdAt={answer.createdAt} 
                                        author={answer.username === post.User.username}
                                    />
                                )
                            })
                        )}
                        
                    </div>
                ) }

        </section>
    )
}