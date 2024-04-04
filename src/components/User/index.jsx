import { Link } from "react-router-dom"
import user_image from "../../assets/img/user.svg"
import styles from "./styles.module.css"


export default function User({url, username, header}){

    if(header){
        return (
            <div className={styles.user_header}>
                <img src={url ? url : user_image } />
                <div>
                    <span>{username}</span>
                    <Link>Minha conta</Link>
                </div>
            </div>  
        )
    }

    return(
        <div className={styles.user}>
            <img src={url ? url : user_image } />
            <span>{username}</span>
        </div>
    )
}