import { useEffect, useState } from "react";

import SpecialTitle from "../../components/SpecialTitle";
import { BsChatQuote } from "react-icons/bs";

import useAxios from "../../hooks/useAxios";

import styles from "./styles.module.css"

import Post from "../../components/Post";

export default function ShowUserPosts(){
    const [posts, setPosts] = useState([])
    const [offset, setOffSet] = useState(0)
    const {get, loading} = useAxios()

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

    return(
        <section>
            <SpecialTitle title="Minhas publicações">
                <BsChatQuote size={25} />
            </SpecialTitle>
            <div>
                <div className={styles.post_area}>
                    { posts.length > 0 && (
                        posts.map((post) => {
                            return(
                                <Post 
                                    key={post.id}
                                    id={post.id}
                                    username={post["User.username"]} 
                                    createdAt={post.createdAt}
                                    likesCount={post.liked}
                                    description={post.description}
                                    commentCount={post.answer_qty}
                                    type="posts" 
                                    userPost={true}
                                />
                            )
                        })
                    )}  

                </div>
            </div>
        </section>
    )
}