import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

import useAxios from "../../hooks/useAxios";
import NewPost from "../../components/NewPost"
import Comment from "../../components/Comment"
import SpecialTitle from "../../components/SpecialTitle"
import { RiUserFollowFill } from "react-icons/ri";

import styles from "./styles.module.css"

export default function UpdatePost(){
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const {get, put, loading} = useAxios()

    useEffect(()=>{
        get(`posts/id/${id}`)
        .then(({post}) => {
            setPost(post)
            setComments(post.Answers)
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
                        <div className={styles.divisor}><span>COMENTÁRIOS</span></div>
                        {comments.length > 0 && (
                            comments.map((comment) => {
                                return(
                                    <Comment 
                                        key={comment.id} 
                                        id={comment.id} 
                                        username={comment.username} 
                                        likesCount={comment.liked} 
                                        description={comment.description} 
                                        createdAt={comment.createdAt} 
                                        author={comment.username === post.User.username}
                                    />
                                )
                            })
                        )}
                        
                    </div>
                ) }

        </section>
    )
}