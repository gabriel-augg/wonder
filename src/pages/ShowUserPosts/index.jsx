import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";


import { IoIosChatbubbles } from "react-icons/io";

import SpecialTitle from "../../components/SpecialTitle";
import withLoadingAndNoPosts from "../../hoc/withLoadingAndNoPosts";
import PostList from "../../components/PostsList";
import NoUserPosts from "../../components/NoUserPosts"



export default function ShowUserPosts(){
    
    const [posts, setPosts] = useState([])
    const [offset, setOffSet] = useState(0)
    const {get, deleteOne, loading} = useAxios()
    
    const PostListWithLoadingAndNoPost = withLoadingAndNoPosts(PostList, NoUserPosts)

    useEffect(()=>{
        get("/posts/my-posts")
        .then(({posts}) => {
            console.log(posts)
            if (offset === 0) {
                setPosts(posts)
            } else {
                setPosts(prevPosts => [...prevPosts, ...posts])
            }
        })
       
    },[])

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

        </section>
    )
}