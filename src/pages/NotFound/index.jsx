import ButtonCta from "../../components/ButtonCta"
import image from "../../assets/img/ilustration_not_found.svg"

import styles from "./styles.module.css"

export default function NotFound(){
    return(
        <section className={styles.notfound_container}>
            <div>
                <img src={image} alt="ilustration" />
                <p>Parece que você está tentando acessar uma página que não existe</p>
                <ButtonCta title="Voltar" path="/" />
            </div>
        </section>
    )
}