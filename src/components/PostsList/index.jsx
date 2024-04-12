import Post from "../Post"
import NoPost from "../NoPost"

export default function PostList({posts, handleDelete, btnTxt, path, unshow}){

    if(posts.length === 0) {
        return <NoPost/>
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
                        unshow={unshow}
                        show={true}
                    />
                )
            })
     
}