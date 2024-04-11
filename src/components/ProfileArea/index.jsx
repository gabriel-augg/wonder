import { useState, useEffect } from "react"
import UserProfile from "../UserProfile"
import Info from "../Info"
import FollowButton from "../FollowButton"

import styles from "./styles.module.css"

export default function ProfileArea({id, username, url, description, followCount, postsCount}){
    const [followCounter, setFollowCounter] = useState(followCount)

    return(
        <div className={styles.profile_area}>
            <UserProfile 
                username={username}
                url={url} 
                description={description}
            />
            <div className={styles.profile_content}>
                <div>
                    <Info
                        count={followCounter}
                        txt="Seguidores"
                    />
                    <Info
                        count={postsCount}
                        txt="Publicações"
                    />
                </div>

                <FollowButton id={id} setFollowCount={setFollowCounter} />
             
            </div>
        </div>
    )
}