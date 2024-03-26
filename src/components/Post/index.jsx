import { CiHeart } from "react-icons/ci";
import user_image from "../../assets/img/user.svg"
import { Link } from "react-router-dom";

import styles from "./styles.module.css"

export default function Post({username, time, likesQty, txt, answerQty, id}){
    return(
        <div className={styles.post_container} key={id}>
            <div className={styles.post_header}>
                <div>
                    <img src={user_image} />
                    <span>{username}</span>
                    <span>{time}</span>
                </div>
                <form>
                    <span>{likesQty}</span>
                    <input type="hidden" value={id} />
                    <button>
                        <CiHeart size={20}/>
                    </button>
                </form>
            </div>
            <p>{txt}</p>
            <div className={styles.post_footer}>
                <div>
                    <span>Respostas:</span>
                    <span>{answerQty}</span>
                </div>

                <div>
                    <Link to={`/posts/${id}`}>Ver respostas</Link>
                    <Link to={`/posts/${id}`}>Responder</Link>
                </div>
            </div>
        </div>
    )
}