import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import user_image from "../../assets/img/user.svg"
import { Link } from "react-router-dom";

import { BsChatQuote } from "react-icons/bs";

import styles from "./styles.module.css"
import api from "../../utils/api";

export default function Post({id, username, time, likesQty, txt, answerQty, isAnswer}){

    function handleLike(id){
       api.patch(`/like/post/${id}`).then(()=> {
        alert("sucesso")
       })
    }

    return(
        <div className={styles.post_container} key={id}>
            <div className={styles.post_header}>
                <div>
                    <img src={user_image} />
                    <span>{username}</span>
                    <span>{time}</span>
                </div>
                <div onSubmit={handleLike}>
                    <span>{likesQty}</span>
                    <button onClick={()=>handleLike(id)}>
                        <CiHeart size={20}/>
                    </button>
                </div>
            </div>
            <p>{txt}</p>
            {isAnswer ? (
                <></>
            ) : (
                <div className={styles.post_footer}>
                    <div>
                        <span>{answerQty}</span>
                        <span><BsChatQuote size={20}/></span>
                    </div>

                    <div>
                        <Link to={`/posts/${id}`}>Ver respostas</Link>
                        <Link to={`/posts/${id}`}>Responder</Link>
                    </div>
                </div>
            )}

        </div>
    )
}