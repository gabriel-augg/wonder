import { Link } from "react-router-dom";

import styles from "./styles.module.css"
import Like from "../Like";
import Comment from "../Comment";
import Time from "../Time";
import User from "../User";
import Author from "../Author";
import ButtonLink from "../ButtonLink";
import useAxios from "../../hooks/useAxios";

export default function Post({id, username, likesCount, description, commentCount, createdAt, show, type, isAuthor, userPost}){

    const { deleteOne } = useAxios()

    async function handleDelete(){
        await deleteOne(`/posts/id/${id}`)
    }


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
                    <ButtonLink path={`/posts/${id}`} btnTxt="Ver respostas" classN="simple" />
                    <ButtonLink path={`/posts/${id}`} btnTxt="Responder" classN="btn" />
                </div>
            )}
            {userPost && (
                <div className={styles.post_footer}>
                    <ButtonLink path={`/posts/editar/${id}`} btnTxt="Ver respostas" classN="simple" />
                    <ButtonLink path={`/posts/${id}`} btnTxt="Editar" classN="btn" />
                </div>
            )}

        </div>
    )
}