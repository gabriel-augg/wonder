import LoadingPostList from "../components/LoadingPostList";

export default function withLoadingAndNoPosts(WrappedComponent, NoPosts) {
    return ({ loading, posts, ...props }) => {

      return loading 
      ? <LoadingPostList/> 
      : (posts.length > 0) 
      ? (
        <WrappedComponent 
          posts={posts} 
          {...props} 
        />
      ) 
      : <NoPosts />;
    };
  }