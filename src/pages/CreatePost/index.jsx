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
    const { request, loading, setLoading, loadingSubmit, setLoadingSubmit } = useAxios()
    const { user } = useContext(UserContext)

    const [limit] = useState(3)
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        document.title = `Nova publicação`
        request("/posts", {
            method: "get",
            params: {
                limit,
            }
        })
        .then(({data}) => {
            setPosts(data.posts)
            setLoading(false)
        })

    },[])

    async function handleSumit(postData, reset){
        if(!loadingSubmit){
            setLoadingSubmit(true)
            await request("/posts/create", {
                method: "post",
                data: postData
            })
            await request("/users/add-posts-count", {
                method: "patch"
            })
            setLoadingSubmit(false)
            navigate("/")
            reset()
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