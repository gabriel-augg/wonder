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
        api.get("/posts").then((res) => {
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
                {/* <Post username="Gabrie" time="Há uma hora" likesQty="12" txt="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores harum dolore aperiam iusto fuga iste ab repellendus, ut nesciunt veritatis. Quia omnis beatae qui iusto porro soluta libero assumenda!" answerQty="12" id="2131321312" /> */}
                {posts.length ? (
                    posts.map(post => {
                        return (
                            <Post id={post.id} username="gabriel" time="Há duas horas" likesQty={post.liked} txt={post.description
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