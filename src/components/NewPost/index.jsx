import user_image from "../../assets/img/user.svg"

import styles from "./styles.module.css"
import { AiOutlineLoading } from "react-icons/ai";

export default function NewPost({username, onRef, handleOnSubmit, placeholder, btnTxt, isLoading}){
    return(
        <div className={styles.newpost_container}>
            <div>
                <img src={user_image}/>
                <span>{username}</span>
                <span>Você</span>
            </div>
            <form onSubmit={ !isLoading ? handleOnSubmit : undefined}>
                <textarea name="description" ref={onRef} placeholder={placeholder}/>
                <button type="submit">
                    { isLoading ? <AiOutlineLoading size={20}/> : btnTxt}
                </button>
            </form>
        </div>
    )
}