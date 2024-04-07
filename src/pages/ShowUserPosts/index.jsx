import { useEffect, useState } from "react";

import SpecialTitle from "../../components/SpecialTitle";
import { BsChatQuote } from "react-icons/bs";

import withLoadingAndNoPosts from "../../hoc/withLoadingAndNoPosts";
import PostList from "../../components/PostsList";

import useAxios from "../../hooks/useAxios";

export default function ShowUserPosts(){
    
    const [posts, setPosts] = useState([])
    const [offset, setOffSet] = useState(0)
    const {get, deleteOne, loading} = useAxios()
    
    const PostListWithLoadingAndNoPost = withLoadingAndNoPosts(PostList)

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
                <BsChatQuote size={25} />
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