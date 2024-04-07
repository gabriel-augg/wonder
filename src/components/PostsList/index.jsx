import styles from "./styles.module.css"
import Post from "../Post"

export default function PostList({posts}){
    return (
        <>  
            { posts.length > 0 && (
                <div className={styles.postlist}>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                id={post.id}
                                username={post["User.username"]}
                                createdAt={post.createdAt}
                                likesCount={post.liked}
                                description={post.description}
                                commentCount={post.answer_qty}
                                btnTxt="Responder"
                                show={true}
                            />
                        )
                    })}
                </div>
            )}
        </>
    )
}