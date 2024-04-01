import api from "../../utils/api.js";

import { useRef, useEffect,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../contexts/UserContext.jsx"

import Title from "../../components/Title";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post/index.jsx";

import styles from "./styles.module.css"

export default function CreatePost(){
    const { user } = useContext(Context)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingPosts, setLoadingPosts] = useState(true)
    const descriptionRef = useRef(null)

    const navigate = useNavigate()

    useEffect(()=>{
        api.get("/posts?limit=2").then((res)=> {
            setPosts(res.data.posts)
            setLoadingPosts(false)
        })
        .catch(()=> {
            setLoadingPosts(false)
        })
    },[])

    function handleSumit(e){
        setLoading(true)
        e.preventDefault();
        const post = { description: descriptionRef.current.value }
        api.post("/posts/create", post).then((res) => {
            setLoading(false)
            navigate("/")
        })
        .catch(()=> {
            setLoading(false)
        })
    }

    return(
        <section className={styles.createpost_container}>
            <Title title="Publicar postagem"/>
            <div className={styles.createpost_area}>
                <NewPost username={user?.username} handleOnSubmit={handleSumit} onRef={descriptionRef}  placeholder="Digite qualquer coisa" btnTxt="Publicar" isLoading={loading}/>
            </div>
            <Title title="O que estão publicando"/>
            {loadingPosts && (
                <div className={styles.loading_posts}>
                </div>
            )}

            <div className={styles.post_area}>
                {posts.length !== 0 && (
                    posts.map((post) => {
                        return(
                            <Post id={post.id} username={post["User.username"]} createdAt={post.createdAt} likesQty={post.liked} txt={post.description
                            } answerQty={post.answer_qty} type="posts" />                    
                        )
                    })
                )}
            </div>
        </section>
    )
}