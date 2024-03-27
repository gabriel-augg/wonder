import { useEffect, useState, useContext } from "react";
import api from "../../utils/api.js";

import { SearchContext } from "../../contexts/SearchContext.jsx";

import Title from "../../components/Title";
import ButtonCta from "../../components/ButtonCta"
import Post from "../../components/Post";

import styles from "./styles.module.css"

import image_no_posts from "../../assets/img/ilustration_no_posts.svg"


export default function Home(){
    const [posts, setPosts] = useState([])
    const {search} = useContext(SearchContext)

    useEffect(()=>{
        const findPosts = () => {
            api.get(`/posts?search=${search}&limit=5`).then((res) => {
                setPosts(res.data.posts)
            })
        }

        findPosts()

    },[search, true])

    return (
        <section>
            <Title title="Publicações">
                <ButtonCta title="+ Nova postagem" path="/novapostagem"/>
            </Title>
            <div >
                {posts.length ? (
                    <div className={styles.post_area}>
                        {posts.map(post => {
                            return (
                                <Post id={post.id} username={post["User.username"]} createdAt={post.createdAt} likesQty={post.liked} txt={post.description
                                } answerQty={post.answer_qty} type="posts" />
                            )
                        })}
                    </div>
                ) : (
                    <div className={styles.no_post_container}>
                        <h1>Não encontramos nenhum post no momento</h1>
                        <img src={image_no_posts} alt="ilustration" />
                    </div>
                )}
            </div>
        </section>
    )
}