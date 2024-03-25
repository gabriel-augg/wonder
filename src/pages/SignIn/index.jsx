import styles from "./styles.module.css"

import Form from "../../components/Form"
import Input from "../../components/Input"

export default function SignIn(){
    return(
        <section className={styles.container_signin} >
            <div>
                <h1>Seja bem-vindo novamente!</h1>
            </div>
            <Form btnTxt="Entrar" bottomTxt="Não possui uma conta?" linkTxt="Cadastrar" path="/cadastrar">
                <>
                    <Input
                        text="Usuário"
                        type="text"
                        name="username"
                        placeholder="Digite seu usuário"
                    />

                    <Input
                        text="Senha"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                    />
                </>
            </Form>
        </section>
    )
}