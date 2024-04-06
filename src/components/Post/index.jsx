import styles from "./styles.module.css"
import Like from "../Like";
import CommentCounter from "../CommentCounter";
import Time from "../Time";
import User from "../User";
import Author from "../Author";
import Button from "../Button";
import ButtonLink from "../ButtonLink";

export default function Post({id, username, likesCount, description, commentCount, createdAt, show, type, isAuthor, userPost, handleClick}){




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

                    <CommentCounter 
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
                    <Button btnTxt="Excluir" classN="delete" options={{
                        onClick: () => handleClick(id)
                    }}  />
                    <ButtonLink path={`/posts/editar/${id}`} btnTxt="Ver respostas" classN="simple" />
                    <ButtonLink path={`/posts/${id}`} btnTxt="Editar" classN="btn" />
                </div>
            )}

        </div>
    )
}