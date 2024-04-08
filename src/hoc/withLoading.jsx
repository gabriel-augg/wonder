import LoadingViewPost from "../components/LoadingViewPost"

export default function withLoading(WrappedComponent){
    return ({loading, ...props}) => {
        return loading
        ? <LoadingViewPost/>
        : <WrappedComponent {...props} />
    }
}