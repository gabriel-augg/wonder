import styles from "./styles.module.css"

import Like from "../Like";
import Time from "../Time";
import User from "../User";
import Author from "../Author";
import Description from "../Description";


export default function Comment({id, username, likesCount, description, createdAt, isAuthor}){
    return(
        <div className={styles.comment}>
            <div className={styles.comment_header}>
                <div >
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
                    <Like 
                        id={id} 
                        type="answers"
                        likesQty={likesCount} 
                    />
                </div>
            </div>
            <Description description={description} />
        </div>
    )
}