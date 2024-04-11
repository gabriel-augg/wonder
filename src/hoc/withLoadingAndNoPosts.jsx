import LoadingPostList from "../components/LoadingPostList";
import ContentArea from "../components/ContentArea";

export default function withLoadingAndNoPosts(WrappedComponent, NoPosts) {
    return ({ loading, posts, ...props }) => {

      return loading 
      ? <LoadingPostList/> 
      : (posts.length > 0) 
      ? (
          <ContentArea>
            <WrappedComponent 
              posts={posts} 
              {...props} 
            />
          </ContentArea>
      ) 
      : <NoPosts />;
    };
  }