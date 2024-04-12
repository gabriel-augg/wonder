import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"

import ContentArea from "../../components/ContentArea";
import NewPost from "../../components/NewPost";
import Divisor from "../../components/Divisor";
import AnswerList from "../../components/AnswerList";

import useRequest from "../../hooks/useRequest";
import SpecialTitle from "../../components/SpecialTitle"
import { RiUserFollowFill } from "react-icons/ri";
import LoadingPostEdit from "../../components/LoadingPostEdit";
import withLoading from "../../hoc/withLoading";

export default function PostEdit(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const [answers, setAnswers] = useState([])
    const { request, loading, setLoading, loadingSubmit, setLoadingSubmit} = useRequest()

    useEffect(()=>{
        document.title = "Editando minha publicação"
        setLoading(true)
        request(`/posts/${id}/get-post`, {
            method: "get"
        })
        .then(({data}) => {
            setPost(data.post)
            setAnswers(data.post.Answers)
            setLoading(false)
        })
    },[id])

    async function handleUpdate(description){
        setLoadingSubmit(true)
        await request(`/posts/${id}/update-post`, {
            method: "put",
            data: description
        })
        setLoadingSubmit(false)
        navigate("/minhas-publicacoes")
    }

    const Content = () => {
        return (
            <ContentArea>
                <NewPost 
                    username={post.User.username} 
                    placeholder="Digite qualquer coisa" 
                    btnTxt="Salvar" 
                    handleOnSubmit={handleUpdate}
                    isLoading={loadingSubmit}
                    value={post.description} 
                />
                <Divisor txt="RESPOSTAS"/>
                <AnswerList 
                    answers={answers} 
                    postUser={post.User}
                    txt="Parece que não há respostas"
                />
            </ContentArea>  
        )
    }

    const ContentWithLoading = withLoading(Content, LoadingPostEdit)

    return(
        <section>
                <SpecialTitle title="Editar minha publicação">
                    <RiUserFollowFill size={30} />
                </SpecialTitle>

                <ContentWithLoading
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