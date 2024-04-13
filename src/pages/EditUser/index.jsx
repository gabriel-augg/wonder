

import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { editUserSchema } from "../../utils/schema"

import styles from "./styles.module.css"

import Form from "../../components/Form"
import Input from "../../components/Input"

import useRequest from "../../hooks/useRequest"
import { UserContext } from "../../contexts/UserContext"


export default function EditUser(){

    const {request, loadingSubmit, setLoadingSubmit} = useRequest()
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(editUserSchema)
    })

    useEffect(()=>{
        document.title = "Editando meu perfil"
    },[])

    async function handleEdit(userData){
        if(!loadingSubmit){
            setLoadingSubmit(true)
            request("/users/update-user", {
                method: "put",
                data: userData
            })
            .then((res) => {
                if(res?.status === 200){
                    setUser(res.data.user)
                    navigate(`/perfil/${user.id}`)
                }
            })

            setLoadingSubmit(false)


         
            


        }
    }


    return(
        <section className={styles.container_edit_user} >
            <div>
                <h1>Editando meu perfil</h1>
            </div>
            <Form 
                handleOnSubmit={handleSubmit(handleEdit)} 
                btnTxt="Salvar" 
                isLoading={loadingSubmit}
                >
                <>
                    <Input
                        text="Usuário"
                        type="text"
                        name="username"
                        placeholder="Digite um nome de usuário"
                        value={user.username}
                        register={register}
                        error={errors.username}
                    />

                    <Input
                        text="Email"
                        type="text"
                        name="email"
                        placeholder="Digite seu email"
                        value={user.email}
                        register={register}
                        error={errors.email}
                    />

                    <Input
                        text="Descrição"
                        type="text"
                        name="description"
                        placeholder="Digite uma descrição"
                        value={user.description}
                        register={register}
                        error={errors.description}
                    />

                    <Input
                        text="Nova senha"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        
                        register={register}
                        error={errors.password}
                    />

                    <Input
                        text="Repetir nova senha"
                        type="password"
                        name="confirmpassword"
                        placeholder="Confirme sua senha"
                        
                        register={register}
                        error={errors.confirmpassword}
                    />
                </>
            </Form>
        </section>
    )
}