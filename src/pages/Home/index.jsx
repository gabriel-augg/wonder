import { useEffect, useState, useContext } from "react";
import api from "../../utils/api.js";
import Title from "../../components/Title";
import ButtonCta from "../../components/ButtonCta"


export default function Home(){

    return (
        <div>
            <Title title="Perguntas do momento">
                <ButtonCta title="+ Nova pergunta" path="/perguntar"/>
            </Title>
        </div>
    )
}