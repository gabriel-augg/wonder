import { useContext } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
 
import { Context } from "../../contexts/UserContext"

import {signInSchema} from "../../utils/schema"

import styles from "./styles.module.css"

import Form from "../../components/Form"
import Input from "../../components/Input"



export default function SignIn(){
    const { signIn, loadingAuth } = useContext(Context)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signInSchema)
    })

    function handleSignIn(userData){
        if(!loadingAuth){
            signIn(userData)
            return
        }
    }

    return(
        <section className={styles.container_signin} >
            <div>
                <h1>Iniciar sessão</h1>
            </div>
            <Form 
                handleOnSubmit={handleSubmit(handleSignIn)} 
                btnTxt="Entrar" 
                bottomTxt="Não possui uma conta?" 
                linkTxt="Cadastrar" 
                path="/cadastrar" 
                isLoading={loadingAuth}
                >
                    
                <>
                    <Input
                        text="Usuário"
                        type="text"
                        name="username"
                        placeholder="Digite seu usuário"
                        register={register}
                        error={errors.username}
                    />

                    <Input
                        text="Senha"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        register={register}
                        error={errors.password}
                    />
                </>
            </Form>
        </section>
    )
}