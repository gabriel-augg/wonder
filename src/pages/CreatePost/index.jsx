import { useRef, useEffect,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../contexts/UserContext.jsx"

import Title from "../../components/Title";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post/index.jsx";

import styles from "./styles.module.css"
import useAxios from "../../hooks/useAxios.jsx";

export default function CreatePost(){
    const { create, get, loading, loadingSubmit } = useAxios()
    const { user } = useContext(Context)

    const [limit] = useState(2)
    const [posts, setPosts] = useState([])
    const descriptionRef = useRef(null)

    const navigate = useNavigate()

    useEffect(()=>{
        get("/posts", {
            method: "get",
            params: {
                limit,
            }
        })
        .then(({posts}) => {
            setPosts(posts)
        })
    },[])

    function handleSumit(e){
        e.preventDefault();

        const post = { 
            description: descriptionRef.current.value 
        }

        create("/posts/create", post)
        .then(() => {
            navigate("/")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <section className={styles.createpost_container}>
            <Title title="Publicar postagem"/>
            <div className={styles.createpost_area}>
                <NewPost 
                    username={user?.username} 
                    handleOnSubmit={handleSumit} 
                    onRef={descriptionRef}  
                    placeholder="Digite qualquer coisa" 
                    btnTxt="Publicar" 
                    isLoading={loadingSubmit}
                />
            </div>
            <Title title="O que estão publicando"/>
            {loading && (
                <div className={styles.loading_posts}>
                </div>
            )}

            <div className={styles.post_area}>
                {posts.length !== 0 && (
                    posts.map((post) => {
                        return(
                            <Post 
                                id={post.id} 
                                key={post.id}
                                username={post["User.username"]} 
                                createdAt={post.createdAt} 
                                likesQty={post.liked} 
                                txt={post.description} 
                                answerQty={post.answer_qty} 
                                type="posts" 
                            />                    
                        )
                    })
                )}
            </div>
        </section>
    )
}