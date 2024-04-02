
import { useRef, useState, useContext } from "react"

import styles from "./styles.module.css"

import Form from "../../components/Form"
import Input from "../../components/Input"

import { Context } from "../../contexts/UserContext"

export default function SignUp(){

    const usernameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmpasswordRef = useRef(null)

    const { signUp, loadingAuth } = useContext(Context)

    function handleSubmit(e){
        e.preventDefault();
        if(!loadingAuth){
            signUp({
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                confirmpassword: confirmpasswordRef.current.value
            })
            return
        }
    }

    return(
        <section className={styles.container_signup} >
            <div>
                <h1>Criar uma nova conta</h1>
            </div>
            <Form 
                handleOnSubmit={handleSubmit} 
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
                        placeholder="Digite seu usuário"
                        onRef={usernameRef}
                    />

                    <Input
                        text="Email"
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        onRef={emailRef}
                    />

                    <Input
                        text="Senha"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onRef={passwordRef}
                    />

                    <Input
                        text="Confirmar senha"
                        type="password"
                        name="confirmpassword"
                        placeholder="Confirme sua senha"
                        onRef={confirmpasswordRef}
                    />
                </>
            </Form>
        </section>
    )
}