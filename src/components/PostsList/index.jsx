import styles from "./styles.module.css"
import Post from "../Post"

export default function PostList({posts, handleDelete, btnTxt, path}){
    return (
        <>  
            { posts.length > 0 && (
                <div className={styles.postlist}>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                id={post.id}
                                username={post.User.username}
                                createdAt={post.createdAt}
                                likesCount={post.likesCount}
                                description={post.description}
                                answersCount={post.answersCount}
                                handleDelete={handleDelete}
                                path={path}
                                btnTxt={btnTxt}
                                show={true}
                            />
                        )
                    })}
                </div>
            )}
        </>
    )
}