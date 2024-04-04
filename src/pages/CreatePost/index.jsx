import { useEffect,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext.jsx"

import Title from "../../components/Title";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post/index.jsx";

import styles from "./styles.module.css"
import useAxios from "../../hooks/useAxios.jsx";

export default function CreatePost(){
    const { create, get, loading, loadingSubmit } = useAxios()
    const { user } = useContext(UserContext)

    const [limit] = useState(2)
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        get("/posts", {
            params: {
                limit,
            }
        })
        .then(({posts}) => {
            setPosts(posts)
        })
    },[])

    function handleSumit(post, reset){
        create("/posts/create", post)
        .then(() => {
            navigate("/")
            reset()
        })
    }

    return(
        <section className={styles.createpost_container}>
            <Title title="Publicar"/>
            <div className={styles.createpost_area}>
                <NewPost 
                    username={user.username} 
                    handleOnSubmit={handleSumit} 
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
                                likesCount={post.liked} 
                                description={post.description} 
                                commentCount={post.answer_qty} 
                                type="posts" 
                                show={true}
                            />                    
                        )
                    })
                )}
            </div>
        </section>
    )
}