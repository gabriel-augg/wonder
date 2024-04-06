import ButtonLink from "../../components/ButtonLink"
import image from "../../assets/img/ilustration_not_found.svg"

import styles from "./styles.module.css"

export default function NotFound(){
    return(
        <section className={styles.notfound_container}>
            <div>
                <img src={image} alt="ilustration" />
                <h1>Parece que você está tentando acessar uma página que não existe</h1>
                <ButtonLink btnTxt="Voltar" path="/" classN="cta"/>
            </div>
        </section>
    )
}