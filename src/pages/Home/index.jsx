import { useEffect, useState, useContext } from "react";
import api from "../../utils/api.js";

import { SearchContext } from "../../contexts/SearchContext.jsx";

import Title from "../../components/Title";
import ButtonCta from "../../components/ButtonCta"
import Post from "../../components/Post";

import styles from "./styles.module.css"

import image_no_posts from "../../assets/img/ilustration_no_posts.svg"

import { AiOutlineLoading } from "react-icons/ai";


export default function Home(){
    const [posts, setPosts] = useState([])
    const {search} = useContext(SearchContext)
    const [offset, setOffSet] = useState(0)
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)

    useEffect(()=>{
        const findPosts = () => {
            api.get(`/posts?search=${search}`).then((res) => {
                setPosts(res.data.posts)
                setLoading(false)
            })
            .catch(()=>{
                setLoading(false)
            })
        }

        findPosts()

    },[search, true])

    function handleFindPosts(){
        setLoadingMore(true)
        api.get(`/posts?search=${search}&offset=${offset + 5}`).then((res) => {
            setPosts([...posts, ...res.data.posts])
            setOffSet(offset + 5)
            setLoadingMore(false)
        })
        .catch(()=>{
            setLoadingMore(false)
        })
    }

    if(loading){
        return(
            <section>
                <Title title="Publicações">
                    <ButtonCta title="+ Nova postagem" path="/novapostagem"/>
                </Title>
                <div className={styles.loading_posts}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        )
    }

    return (
        <section>
            <Title title="Publicações">
                <ButtonCta title="+ Nova postagem" path="/novapostagem"/>
            </Title>
            <div>
                {posts.length === 0 ? (
                    <div className={styles.no_post_container}>
                        <h1>Não encontramos nenhum post no momento</h1>
                        <img src={image_no_posts} alt="ilustration" />
                    </div>
                ) : (
                    <>
                        <div className={styles.post_area}>
                            {posts.map(post => {
                                return (
                                    <Post id={post.id} username={post["User.username"]} createdAt={post.createdAt} likesQty={post.liked} txt={post.description
                                    } answerQty={post.answer_qty} type="posts" />
                                )
                            })}
                        </div>
                        <div className={styles.find_more}>
                            <button onClick={handleFindPosts}>
                                { loadingMore ? <AiOutlineLoading size={20}/> : "Buscar mais"}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}