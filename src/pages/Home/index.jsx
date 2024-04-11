import { useEffect, useState, useContext } from "react";
import useRequest from "../../hooks/useRequest.jsx";
import { SearchContext } from "../../contexts/SearchContext.jsx";

import { IoIosAddCircleOutline } from "react-icons/io";

import ButtonLink from "../../components/ButtonLink";
import PostList from "../../components/PostsList/index.jsx";
import FindMoreArea from "../../components/FindMoreArea/index.jsx";
import Title from "../../components/Title";
import withLoadingAndNoPosts from "../../hoc/withLoadingAndNoPosts.jsx";
import NoPosts from "../../components/NoPosts/index.jsx";


export default function Home() {
    const { request, loading, setLoading } = useRequest()
    const [posts, setPosts] = useState([])
    const { search } = useContext(SearchContext)
    const [offSet, setOffSet] = useState(0)
    const [loadingMore, setLoadingMore] = useState(false)
    const [isPostsEmpty, setIsPostsEmpty] = useState(false)
    const PostListWithLoadingAndNoPost = withLoadingAndNoPosts(PostList, NoPosts)

    useEffect(() => {

        document.title = "Wonder"
        setLoading(true)

        request("/posts", {
            method: "get",
            params: {
                offset: offSet,
                ...(search && { search })
            }
        })
        .then(({data}) => {

            offSet === 0 
            ? setPosts(data.posts) 
            : (
                setPosts(prevPosts => [...prevPosts, ...data.posts]),
                setLoadingMore(false)
            );
            setIsPostsEmpty(data.posts.length === 0)
            setLoading(false)
            
        })

    }, [offSet, search])

    function handleFindMore() {
        setOffSet(prevOffSet => prevOffSet + 5)
        setLoadingMore(true)
    }

    return (
        <section>
            <Title title="Publicações">
                <ButtonLink btnTxt="Nova publicação" path="/nova-publicacao" classN="cta">
                    <IoIosAddCircleOutline size={20} />
                </ButtonLink>
            </Title>

            <PostListWithLoadingAndNoPost 
                posts={posts} 
                loading={loading} 
                btnTxt="Responder"
            />

            <FindMoreArea 
                show={(posts.length >= 5 && !isPostsEmpty)} 
                loading={loadingMore}
                handleFindMore={handleFindMore}
            />

        </section>
    )
}