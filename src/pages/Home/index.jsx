import { useEffect, useState, useContext } from "react";

import { SearchContext } from "../../contexts/SearchContext.jsx";

import Title from "../../components/Title";
import { IoIosAddCircleOutline } from "react-icons/io";

import withLoadingAndNoPosts from "../../hoc/withLoadingAndNoPosts.jsx";

import useAxios from "../../hooks/useAxios.jsx";
import ButtonLink from "../../components/ButtonLink";
import PostList from "../../components/PostsList/index.jsx";
import FindMoreArea from "../../components/FindMoreArea/index.jsx";


export default function Home() {
    const { get, loading } = useAxios("/posts")
    const [posts, setPosts] = useState([])
    const { search } = useContext(SearchContext)
    const [offset, setOffSet] = useState(0)
    const [loadingMore, setLoadingMore] = useState(false)
    const [isPostsEmpty, setIsPostsEmpty] = useState(false)
    const PostListWithLoadingAndNoPost = withLoadingAndNoPosts(PostList)

    useEffect(() => {

        document.title = "Wonder"

        get("/posts", {
            params: {
                offset,
                ...(search && { search })
            }
        })
        .then(({ posts }) => {
            offset === 0 
            ? setPosts(posts) 
            : (
                setPosts(prevPosts => [...prevPosts, ...posts]),
                setLoadingMore(false)
            );
            setIsPostsEmpty(posts.length === 0)
            
        })
        .catch((error) => {
            console.log(error)
        })

    }, [offset, search])

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