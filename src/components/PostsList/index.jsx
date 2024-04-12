import Post from "../Post"

import styles from "./styles.module.css"

export default function PostList({posts, handleDelete, btnTxt, path, unshow}){

    if(posts.length === 0) {
        return (
            <div className={styles.no}>
                <h1>Não há publicações.</h1>
            </div>
        )
    }

    return posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        id={post.id}
                        userId={post.UserId}
                        username={post.User.username}
                        createdAt={post.createdAt}
                        likesCount={post.likesCount}
                        description={post.description}
                        answersCount={post.answersCount}
                        handleDelete={handleDelete}
                        path={path}
                        btnTxt={btnTxt}
                        show={true}
                        unshow={unshow}
                    />
                )
            })
     
}