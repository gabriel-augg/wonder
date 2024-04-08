
export default function withLoading(WrappedComponent, Loading){
    return ({loading, ...props}) => {
        return loading
        ? <Loading/>
        : <WrappedComponent {...props} />
    }
}