import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import useAxios from "../../hooks/useAxios"

import ContentArea from "../../components/ContentArea"
import Divisor from "../../components/Divisor"
import Title from "../../components/Title"
import ProfileArea from "../../components/ProfileArea"
import PostsList from "../../components/PostsList"

export default function Profile(){
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const {id} = useParams()
    const { request, loading, setLoading } = useAxios()

    useEffect(()=>{
        request(`/users/${id}/get-user`, {
            method: "get"
        })
        .then(({data}) => {
            console.log(data)
            setUser(data.user)
            setPosts(data.user.Posts)
            setLoading(false)
        })
    },[id])



    return(

        
        <section>
            <Title title="Perfil" />
                {loading ? undefined : (
                    <ContentArea>
                    <ProfileArea 
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
            )}

            
        </section>
    )
}