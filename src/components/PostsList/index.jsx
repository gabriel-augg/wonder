import Post from "../Post"

export default function PostList({posts, handleDelete, btnTxt, path, unshow}){
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