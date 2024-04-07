import LoadingPostList from "../components/LoadingPostList";
import NoPosts from "../components/NoPosts";

export default function withLoadingAndNoPosts(WrappedComponent) {
    return ({ loading, handleDelete, posts, ...props }) => {

      return loading 
      ? <LoadingPostList/> 
      : (posts.length > 0) 
      ? <WrappedComponent posts={posts} handleDelete={handleDelete} {...props} /> 
      : <NoPosts />;
    };
  }