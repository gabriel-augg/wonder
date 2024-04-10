import UserProfile from "../UserProfile"
import Info from "../Info"
import Button from "../Button"
import ButtonLink from "../ButtonLink"

import styles from "./styles.module.css"

export default function ProfileArea({id, username, url, description, followCount, postsCount}){
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
                        count={followCount}
                        txt="Seguidores"
                    />
                    <Info
                        count={postsCount}
                        txt="Publicações"
                    />
                </div>
                <div>
                    <Button btnTxt="Seguir" classN="btn_follow"/>
                    <ButtonLink btnTxt="Mensagem" classN="btn_message" />
                </div>                  
            </div>
        </div>
    )
}