import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";


import { BsChatQuoteFill } from "react-icons/bs";

import SpecialTitle from "../../components/SpecialTitle";
import withLoadingAndNoPosts from "../../hoc/withLoadingAndNoPosts";
import PostList from "../../components/PostsList";
import NoUserPosts from "../../components/NoUserPosts"
import FindMoreArea from "../../components/FindMoreArea"



export default function ShowUserPosts(){

    const {request, loading, setLoading} = useRequest()
    const [posts, setPosts] = useState([])
    const [offset, setOffSet] = useState(0)
    const [loadingMore, setLoadingMore] = useState(false)
    const [isPostsEmpty, setIsPostsEmpty] = useState(false)

    useEffect(()=>{
        document.title = "Minhas publicações"

        setLoading(true)
        request("/posts/my-posts", {
            method: "get",
            params: {
                offset
            }
        })
        .then(({data}) => {
            offset === 0 
            ? setPosts(data.posts) 
            : (
                setPosts(prevPosts => [...prevPosts, ...data.posts]),
                setLoadingMore(false)
            );
            setIsPostsEmpty(data.posts.length === 0)
            setLoading(false)
        })
       
    },[offset])

    function handleFindMore() {
        setOffSet(prevOffSet => prevOffSet + 5)
        setLoadingMore(true)
    }

    async function handleDelete(id){
        setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
        await request(`/posts/${id}/remove-post`, {
            method: "delete"
        })
        await request(`/users/remove-posts-count`, {
            method: "patch"
        })
    }

    const PostListWithLoadingAndNoPost = withLoadingAndNoPosts(PostList, NoUserPosts)

    return(
        <section>
            <SpecialTitle title="Minhas publicações">
                <BsChatQuoteFill size={30} />
            </SpecialTitle>

            <PostListWithLoadingAndNoPost 
                posts={posts} 
                path="/publicacoes/editar" 
                btnTxt="Editar"
                handleDelete={handleDelete} 
                loading={loading} 
            />

            <FindMoreArea 
                show={(posts.length >= 5 && !isPostsEmpty)} 
                loading={loadingMore}
                handleFindMore={handleFindMore}
            />

        </section>
    )
}