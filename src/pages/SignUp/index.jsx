
import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "../../utils/schema"

import styles from "./styles.module.css"

import Form from "../../components/Form"
import Input from "../../components/Input"

import { UserContext } from "../../contexts/UserContext"

export default function SignUp(){
    const { signUp, loadingAuth } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signUpSchema)
    })

    useEffect(()=>{
        document.title = "Cadastrar-se"
    },[])

    function handleSignUp(userData){
        if(!loadingAuth){
            signUp(userData)
            return
        }
    }

    return(
        <section className={styles.container_signup} >
            <div>
                <h1>Criar uma nova conta</h1>
            </div>
            <Form 
                handleOnSubmit={handleSubmit(handleSignUp)} 
                btnTxt="Cadastrar" 
                bottomTxt="Já possui uma conta?" 
                linkTxt="Entrar" path="/entrar" 
                isLoading={loadingAuth}
                >
                <>
                    <Input
                        text="Usuário"
                        type="text"
                        name="username"
                        placeholder="Digite um nome de usuário"
                        register={register}
                        error={errors.username}
                    />

                    <Input
                        text="Email"
                        type="text"
                        name="email"
                        placeholder="Digite seu email"
                        register={register}
                        error={errors.email}
                    />

                    <Input
                        text="Senha"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        register={register}
                        error={errors.password}
                    />

                    <Input
                        text="Repetir senha"
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