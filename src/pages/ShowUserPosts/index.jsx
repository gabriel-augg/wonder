import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";


import { IoIosChatbubbles } from "react-icons/io";

import SpecialTitle from "../../components/SpecialTitle";
import withLoadingAndNoPosts from "../../hoc/withLoadingAndNoPosts";
import PostList from "../../components/PostsList";
import NoUserPosts from "../../components/NoUserPosts"
import FindMoreArea from "../../components/FindMoreArea"



export default function ShowUserPosts(){

    const {get, deleteOne, loading} = useAxios()
    const [posts, setPosts] = useState([])
    const [offset, setOffSet] = useState(0)
    const [loadingMore, setLoadingMore] = useState(false)
    const [isPostsEmpty, setIsPostsEmpty] = useState(false)

    
    const PostListWithLoadingAndNoPost = withLoadingAndNoPosts(PostList, NoUserPosts)

    useEffect(()=>{
        get("/posts/my-posts", {
            params: {
                offset
            }
        })
        .then(({posts}) => {
            offset === 0 
            ? setPosts(posts) 
            : (
                setPosts(prevPosts => [...prevPosts, ...posts]),
                setLoadingMore(false)
            );
            setIsPostsEmpty(posts.length === 0)
        })
       
    },[offset])

    function handleFindMore() {
        setOffSet(prevOffSet => prevOffSet + 5)
        setLoadingMore(true)
    }

    function handleDelete(id){
        deleteOne(`/posts/id/${id}`)
        .then(()=> {
            setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
        })
    }


    return(
        <section>
            <SpecialTitle title="Minhas publicações">
                <IoIosChatbubbles size={30} />
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