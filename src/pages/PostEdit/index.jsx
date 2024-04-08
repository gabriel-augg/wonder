import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"

import useAxios from "../../hooks/useAxios";
import SpecialTitle from "../../components/SpecialTitle"
import { RiUserFollowFill } from "react-icons/ri";
import LoadingPostEdit from "../../components/LoadingPostEdit";
import withLoading from "../../hoc/withLoading";
import PostEditContent from "../../components/PostEditContent";

export default function PostEdit(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const [answers, setAnswers] = useState([])
    const {get, put, loading, loadingSubmit} = useAxios()
    const PostEditContentWithLoading = withLoading(PostEditContent, LoadingPostEdit)

    useEffect(()=>{
        get(`posts/id/${id}`)
        .then(({post}) => {
            setPost(post)
            setAnswers(post.Answers)
        })
    },[id])

    function handleUpdate(description){
        put(`/posts/id/${id}`, description)
        .then(()=> {
            navigate("/minhas-publicacoes")
        })
    }

    return(
        <section>
                <SpecialTitle title="Editar minha publicação">
                    <RiUserFollowFill size={30} />
                </SpecialTitle>

                <PostEditContentWithLoading
                    loading={loading} 
                    post={post} 
                    handleUpdate={handleUpdate} 
                    loadingSubmit={loadingSubmit}
                    answers={answers} 
                    txt="Parece que não há respostas" 
                />

        </section>
    )
}