import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";


import { IoHeart } from "react-icons/io5";

import SpecialTitle from "../../components/SpecialTitle";
import withLoadingAndNoPosts from "../../hoc/withLoadingAndNoPosts";
import PostList from "../../components/PostsList";
import NoLikes from "../../components/NoLikes"
import FindMoreArea from "../../components/FindMoreArea"



export default function ViewLikedPosts(){

    const {request, loading, setLoading} = useRequest()
    const [posts, setPosts] = useState([])
    const [offset, setOffSet] = useState(0)
    const [loadingMore, setLoadingMore] = useState(false)
    const [isPostsEmpty, setIsPostsEmpty] = useState(false)

    useEffect(()=>{
        setLoading(true)
        request("/posts/my-likes", {
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


    const PostListWithLoadingAndNoPost = withLoadingAndNoPosts(PostList, NoLikes)

    return(
        <section>
            <SpecialTitle title="Minhas curtidas">
                <IoHeart size={30} />
            </SpecialTitle>

            <PostListWithLoadingAndNoPost 
                posts={posts} 
                btnTxt="Responder"
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