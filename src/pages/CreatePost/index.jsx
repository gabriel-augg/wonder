import { useEffect,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext.jsx"

import Title from "../../components/Title";
import NewPost from "../../components/NewPost";

import LoadingPost from "../../components/LoadingPostList/index.jsx";


import useAxios from "../../hooks/useAxios.jsx";
import PostList from "../../components/PostsList/index.jsx";
import ContentArea from "../../components/ContentArea/index.jsx";

export default function CreatePost(){
    const { create, get, loading, loadingSubmit } = useAxios()
    const { user } = useContext(UserContext)

    const [limit] = useState(3)
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        document.title = `Nova publicação`
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
        if(!loadingSubmit){
            create("/posts/create", post)
            .then(() => {
                navigate("/")
                reset()
            })
            return
        }
    }

    return(
        <section>
            <Title title="Publicar"/>
            <ContentArea>
                <NewPost 
                    username={user.username} 
                    handleOnSubmit={handleSumit} 
                    placeholder="Digite qualquer coisa" 
                    btnTxt="Publicar" 
                    isLoading={loadingSubmit}
                />
            </ContentArea>
            <Title title="O que estão publicando"/>
            
            {loading ? (
                <LoadingPost/>
            ) : (
                <PostList posts={posts} btnTxt="Responder" />
            )}
            
        </section>
    )
}