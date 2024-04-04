import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"

import { Context } from "../../contexts/UserContext"

import styles from "./styles.module.css"

import Form from "../../components/Form"
import Input from "../../components/Input"

export default function SignIn(){
    const { signIn, loadingAuth } = useContext(Context)
    const { register, handleSubmit } = useForm()

    function handleSignIn(userData){
        console.log(userData)
        // if(!loadingAuth){
        //     signIn(userData)
        //     return
        // }
    }


    return(
        <section className={styles.container_signin} >
            <div>
                <h1>Seja bem-vindo novamente!</h1>
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
                        options={{
                            required: true
                        }}
                    />

                    <Input
                        text="Senha"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        register={register}
                        options={{
                            required: true
                        }}
                    />
                </>
            </Form>
        </section>
    )
}