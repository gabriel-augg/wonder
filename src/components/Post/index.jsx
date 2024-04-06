import styles from "./styles.module.css"
import Like from "../Like";
import CommentCounter from "../CommentCounter";
import Time from "../Time";
import User from "../User";
import Description from "../Description";
import ButtonLink from "../ButtonLink";

export default function Post({id, username, likesCount, description, commentCount, createdAt, show, children, btnTxt, path}){

    return(
        <div className={styles.post}>
            <div className={styles.post_header}>
                <div>
                    <User 
                        url={null} 
                        username={username} 
                    />

                    <Time 
                        date={createdAt} 
                    />
                </div>
                <div>

                    <CommentCounter 
                        count={commentCount} 
                    />

                    <Like 
                        id={id} 
                        type="posts"
                        likesQty={likesCount} 
                    />
                </div>
                
            </div>
            <Description description={description} />
            {show && (
                <div className={styles.post_footer}>
                    {children}
                    <ButtonLink path={`/posts/${id}`} btnTxt="Ver respostas" classN="simple" />
                    <ButtonLink path={ path ? path : `/posts/${id}`} btnTxt={btnTxt} classN="btn" />
                </div>
            )}

        </div>
    )
}