import styles from "./styles.module.css"

import Like from "../Like";
import Time from "../Time";
import User from "../User";
import Author from "../Author";
import Description from "../Description";


export default function Answer({id, username, likesCount, description, createdAt, author}){
    return(
        <div className={styles.answer}>
            <div className={styles.header}>
                <div >
                    <User 
                        url={null} 
                        username={username} 
                    />

                    <Time date={createdAt}/>

                    <Author author={(author)}/>

                </div>
                <div>
                    <Like 
                        id={id} 
                        type="answers"
                        likesCount={likesCount} 
                    />
                </div>
            </div>
            <Description description={description} />
        </div>
    )
}