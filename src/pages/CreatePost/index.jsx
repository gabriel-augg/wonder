import api from "../../utils/api.js";

import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../contexts/UserContext.jsx"

import Title from "../../components/Title";
import NewPost from "../../components/NewPost";

import styles from "./styles.module.css"

export default function CreatePost(){
    const { user } = useContext(Context)
    const descriptionRef = useRef(null)

    const navigate = useNavigate()

    function handleSumit(e){
        e.preventDefault();
        const post = { description: descriptionRef.current.value }
        api.post("/posts/create", post).then((res) => {
            navigate("/")
        })
    }

    return(
        <section className={styles.createpost_container}>
            <Title title="Publicar postagem"/>
            <div className={styles.createpost_area}>
                <NewPost username={user.username} handleOnSubmit={handleSumit} onRef={descriptionRef}  placeholder="Digite qualquer coisa" btnTxt="Publicar"/>
            </div>
            <Title title="O que estão perguntando"/>
        </section>
    )
}