import { useEffect, useState, useContext } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import user_image from "../../assets/img/user.svg"
import { Link } from "react-router-dom";

import {Context} from "../../contexts/UserContext"

import { BsChatQuote } from "react-icons/bs";
import { AiOutlineLoading } from "react-icons/ai";

import styles from "./styles.module.css"
import api from "../../utils/api";
import timeAgo from "../../utils/date";

export default function Post({id, username, likesQty, txt, answerQty, createdAt, isAnswer, type, isAuthor}){

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(likesQty);
    const {authenticated} = useContext(Context)
    const [date, setDate] = useState(timeAgo(createdAt))
    const [isLoading, setIsLoading] = useState(true)
  

    function handleLike(){
        setIsLiked(!isLiked);
        setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
        if(!isLiked){
            api.patch(`/like-dislike/${type}/like/${id}`).then(()=>{
                console.log("deu certo")
            })
        } else {
            api.patch(`/like-dislike/${type}/dislike/${id}`).then(()=>{
                console.log("deu certo")
            })
        }
    }

    useEffect(()=>{
        if(authenticated){
            api.get(`/like-dislike/${type}/${id}`).then((res) => {
                if(res.data.status){
                    setIsLiked(true)
                } else {
                    setIsLiked(false)
                }
                setIsLoading(false)
            }).catch(()=> {
                alert("error")
                setIsLoading(false)
            })
        }

        if(!authenticated){
            setIsLoading(false)
        }


        const interval = setInterval(() => {
            const newDate = timeAgo(createdAt);
            setDate(newDate);
          }, 60000);
        
          return () => {
            clearInterval(interval);
          }
    },[authenticated, createdAt])

    return(
        <div className={styles.post_container} key={id}>
            <div className={styles.post_header}>
                <div>
                    <img src={user_image} />
                    <span className={styles.tag_username} >{username}</span>
                    <span className={styles.tag_date}>{date}</span>
                    { (isAnswer && isAuthor) && (
                        <span className={styles.tag_author}>Autor</span>
                    ) }

                </div>
                <div className={styles.icons_area}>
                    { !isAnswer && (
                        <div>
                            <span>{answerQty}</span>
                            <span><BsChatQuote color="#299AD1" size={18}/></span>
                        </div>
                    )}
                    <div>
                        <span>{likesCount}</span>
                        {
                            isLoading ? (
                            <>
                                <span className={styles.loading_heart}>
                                    <AiOutlineLoading size={18} />
                                </span>
                            </>
                            ) : (
                            <>
                                {isLiked ? (
                                    <button onClick={()=>handleLike(id)}>
                                        <IoIosHeart size={20}/>
                                    </button>
                                ) : (
                                    <button onClick={()=>handleLike(id)}>
                                        <IoIosHeartEmpty size={20}/>
                                    </button>
                                )}
                            </>
                            )
                        }
                    </div>
                </div>
                
            </div>
            <p>{txt}</p>
            {!isAnswer && (
                <div className={styles.post_footer}>
                    <div>
                        <Link to={`/posts/${id}`}>Ver respostas</Link>
                        <Link to={`/posts/${id}`}>Responder</Link>
                    </div>
                </div>
            )}

        </div>
    )
}