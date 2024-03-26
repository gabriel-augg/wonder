import { useEffect, useState, useContext } from "react";
import api from "../../utils/api.js";

import { Context } from "../../contexts/UserContext.jsx";

import Title from "../../components/Title";
import ButtonCta from "../../components/ButtonCta"
import Post from "../../components/Post";

import styles from "./styles.module.css"


export default function Home(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        api.get("/posts?limit=5").then((res) => {
            setPosts([...posts, ...res.data.posts])
        })
    },[])

    console.log(posts)

    return (
        <section>
            <Title title="Publicações">
                <ButtonCta title="+ Nova postagem" path="/novapostagem"/>
            </Title>
            <div className={styles.post_area}>
                {posts.length ? (
                    posts.map(post => {
                        return (
                            <Post id={post.id} username={post["User.username"]} time="Há duas horas" likesQty={post.liked} txt={post.description
                            } answerQty={post.answer_qty} />
                        )
                    })
                ) : (
                    <div></div>
                )}
            </div>
        </section>
    )
}