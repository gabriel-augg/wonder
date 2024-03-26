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
    const descriptionRef = useRef(null)

    const navigate = useNavigate()

    useEffect(()=>{
        api.get("/posts?limit=2").then((res)=> {
            setPosts(res.data.posts)
        })
    },[])

    function handleSumit(e){
        e.preventDefault();
        const post = { description: descriptionRef.current.value }
        api.post("/posts/create", post).then((res) => {
            navigate("/")
        })
    }

    return(
        <section className={styles.createpost_container}>
            <Title title="Publicar postagem"/>
            <div className={styles.createpost_area}>
                <NewPost username={user?.username} handleOnSubmit={handleSumit} onRef={descriptionRef}  placeholder="Digite qualquer coisa" btnTxt="Publicar"/>
            </div>
            <Title title="O que estão publicando"/>
            <div className={styles.post_area}>
                {posts.length ? (
                    posts.map((post) => {
                        return(
                            <Post id={post.id} username={post["User.username"]} time={post.timeAgo} likesQty={post.liked} txt={post.description
                            } answerQty={post.answer_qty} />                    
                        )
                    })
                ) : (
                    <></>
                )}
            </div>
        </section>
    )
}