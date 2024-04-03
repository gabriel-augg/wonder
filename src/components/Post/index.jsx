import { useEffect, useState, useContext } from "react";
import user_image from "../../assets/img/user.svg"
import { Link } from "react-router-dom";

import {Context} from "../../contexts/UserContext"

import styles from "./styles.module.css"
import timeAgo from "../../utils/date";
import Like from "../Like";
import Comment from "../Comment";

export default function Post({id, username, likesQty, txt, answerQty, createdAt, isAnswer, type, isAuthor}){
    const {authenticated} = useContext(Context)
    const [date, setDate] = useState(timeAgo(createdAt))
  

    useEffect(()=>{

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
            <div>
                <div>
                    <img src={user_image} />
                    <span className={styles.tag_username} >{username}</span>
                    <span className={styles.tag_date}>{date}</span>
                    { (isAnswer && isAuthor) && (
                        <span className={styles.tag_author}>Autor</span>
                    ) }

                </div>
                <div>

                    <Comment 
                        show={!isAnswer} 
                        count={answerQty} 
                    />

                    <Like 
                        id={id} 
                        type={type} 
                        likesQty={likesQty} 
                    />
                    
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