
import { Link } from "react-router-dom";

import styles from "./styles.module.css"
import Like from "../Like";
import Comment from "../Comment";
import Time from "../Time";
import User from "../User";

export default function Post({id, username, likesQty, txt, answerQty, createdAt, isAnswer, type, isAuthor}){


    return(
        <div className={styles.post_container} key={id}>
            <div>
                <div>
                    <User 
                        url={null} 
                        username={username} 
                    />

                    <Time 
                        date={createdAt} 
                    />
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