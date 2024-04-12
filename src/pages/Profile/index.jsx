import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import useRequest from "../../hooks/useRequest"

import ContentArea from "../../components/ContentArea"
import Divisor from "../../components/Divisor"
import Title from "../../components/Title"
import ProfileArea from "../../components/ProfileArea"
import PostsList from "../../components/PostsList"
import withLoading from "../../hoc/withLoading"

import FindMoreArea from "../../components/FindMoreArea"

import LoadingProfile from "../../components/LoadingProfile"

export default function Profile(){
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const [offSet, setOffSet] = useState(0)
    const [loadingMore, setLoadingMore] = useState(false)
    const [isPostsEmpty, setIsPostsEmpty] = useState(false)
    const {id} = useParams()
    const { request, loading, setLoading } = useRequest()

    useEffect(()=>{
        setLoading(true)
        request(`/users/${id}/get-user`, {
            method: "get",
            params: {
                offset: offSet
            }
        })
        .then(({data}) => {
            setUser(data.user)
            offSet === 0 
            ? setPosts(data.user.Posts) 
            : (
                setPosts( prevPosts => [...prevPosts, ...data.user.Posts]),
                setLoadingMore(false)
            );
            
            setIsPostsEmpty(data.user.Posts.length === 0)
            setLoading(false)
        })
    },[id, offSet])

    function handleFindMore() {
        setOffSet(prevOffSet => prevOffSet + 5)
        setLoadingMore(true)
    }

    const Content = () => {
        return(
            <ContentArea>
                <ProfileArea 
                    id={user.id}
                    url={null} 
                    username={user.username} 
                    description={user.description}
                    followCount={user.followsCount} 
                    postsCount={user.postsCount} 
                />
                <Divisor txt="PUBLICAÇÕES"/>
                
                <PostsList 
                    posts={posts} 
                    btnTxt="Responder" 
                    unshow={true}
                />
            
            </ContentArea>
        )
    }

    const ContentWithLoading = withLoading(Content, LoadingProfile)

    return(

        
        <section>
            <Title title="Perfil" />
            
            <ContentWithLoading 
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