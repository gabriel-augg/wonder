import { useEffect, useState, useContext } from "react";
import api from "../../utils/api.js";

import { SearchContext } from "../../contexts/SearchContext.jsx";

import Title from "../../components/Title";
import ButtonCta from "../../components/ButtonCta"
import Post from "../../components/Post";

import styles from "./styles.module.css"


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
            <div className={styles.post_area}>
                {posts.length !== 0 && (
                    posts.map(post => {
                        return (
                            <Post id={post.id} username={post["User.username"]} time={post.timeAgo} likesQty={post.liked} txt={post.description
                            } answerQty={post.answer_qty} />
                        )
                    })
                )}
            </div>
        </section>
    )
}