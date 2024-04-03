
import { Link } from "react-router-dom";

import styles from "./styles.module.css"
import Like from "../Like";
import Comment from "../Comment";
import Time from "../Time";
import User from "../User";
import Author from "../Author";

export default function Post({id, username, likesCount, description, commentCount, createdAt, show, type, isAuthor}){


    return(
        <div className={styles.post_container}>
            <div>
                <div>
                    <User 
                        url={null} 
                        username={username} 
                    />

                    <Time 
                        date={createdAt} 
                    />

                    <Author 
                        show={(isAuthor)} 
                    />

                </div>
                <div>

                    <Comment 
                        show={show} 
                        count={commentCount} 
                    />

                    <Like 
                        id={id} 
                        type={type} 
                        likesQty={likesCount} 
                    />

                </div>
                
            </div>
            <p>{description}</p>
            {show && (
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