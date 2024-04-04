import { useEffect, useState, useContext } from "react";

import { SearchContext } from "../../contexts/SearchContext.jsx";

import Title from "../../components/Title";
import ButtonCta from "../../components/ButtonCta"
import Button from "../../components/Button";
import Post from "../../components/Post";

import styles from "./styles.module.css"

import image_no_posts from "../../assets/img/ilustration_no_posts.svg"

import useAxios from "../../hooks/useAxios.jsx";
import Loading from "../../components/Loading";


export default function Home(){
    const { get, loading } = useAxios("/posts")

    const [posts, setPosts] = useState([])
    const {search} = useContext(SearchContext)
    const [offset, setOffSet] = useState(0)
    const [loadingMore, setLoadingMore] = useState(false)
    const [isPostsEmpty, setIsPostsEmpty] = useState(false)

    useEffect(()=>{

            document.title = "Wonder"

            get("/posts", {
                params: {
                    offset,
                    ...(search && {search})
                }
            })
            .then(({posts}) => {
                if (offset === 0) {
                    setPosts(posts)
                } else {
                    setPosts(prevPosts => [...prevPosts, ...posts])
                    setLoadingMore(false)
                }
                if(posts.length === 0){
                    setIsPostsEmpty(true)
                }
            })
            .catch((error) => {
                console.log(error)
            })

    },[offset, search])

    function handleBtnMore(){
        setOffSet(prevOffSet => prevOffSet + 5)
        setLoadingMore(true)
    }


    if(loading){
        return(
            <section>
                <Title title="Publicações">
                    <ButtonCta title="Nova postagem" path="/novapostagem"/>
                </Title>
                <Loading />
            </section>
        )
    }

    return (
        <section>
            <Title title="Publicações">
                <ButtonCta title="Nova publicação" path="/novapostagem"/>
            </Title>
            {/* <div className={styles.order_row}>
                <span>Ordenar por: </span> 
                <select>
                    <option>Mais recente</option>
                    <option>Mais antigo</option>
                </select>
                <select>
                    <option>Mais curtido</option>
                    <option>Menos curtido</option>
                </select>
            </div> */}
            <div>
                {posts.length > 0 ? (
                    <>
                        <div className={styles.post_area}>
                            {posts.map(post => {
                                return (
                                    <Post 
                                        key={post.id} 
                                        id={post.id} 
                                        username={post["User.username"]} 
                                        createdAt={post.createdAt} 
                                        likesCount={post.liked} 
                                        description={post.description} 
                                        commentCount={post.answer_qty} 
                                        type="posts" 
                                        show={true}
                                    />
                                )
                            })}
                        </div>
                        { (posts.length >= 5 && !isPostsEmpty) && (
                        <div className={styles.loading_more}>
                            <Button 
                                btnTxt="Buscar mais"
                                handleClick={handleBtnMore}
                                isLoading={loadingMore}
                            />
                        </div>

                        )}
                    </>
                ) : (
                    <div className={styles.no_post_container}>
                        <h1>Nenhuma publicação foi encontrada.</h1>
                        <img src={image_no_posts} alt="ilustration" />
                    </div>
                )}
            </div>
        </section>
    )
}