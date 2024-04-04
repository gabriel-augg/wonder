import { useRef, useContext, useEffect } from "react"
import { register, handleSubmit } from "react-hook-form"

import { Context } from "../../contexts/UserContext"

import styles from "./styles.module.css"

import Form from "../../components/Form"
import Input from "../../components/Input"

export default function SignIn(){
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const { signIn, loadingAuth } = useContext(Context)

    useEffect(()=>{
        console.log("Caiu aqui")
    },[])

    function handleSubmit(e){
        e.preventDefault();
        if(!loadingAuth){
            signIn({
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
            return
        }
    }


    return(
        <section className={styles.container_signin} >
            <div>
                <h1>Seja bem-vindo novamente!</h1>
            </div>
            <Form 
                handleOnSubmit={handleSubmit} 
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
                        onRef={usernameRef}
                    />

                    <Input
                        text="Senha"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onRef={passwordRef}
                    />
                </>
            </Form>
        </section>
    )
}