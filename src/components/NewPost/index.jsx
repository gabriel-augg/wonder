import user_image from "../../assets/img/user.svg"

import styles from "./styles.module.css"

export default function NewPost({username, onRef, handleOnSubmit, placeholder, btnTxt}){
    return(
        <div className={styles.newpost_container}>
            <div>
                <img src={user_image}/>
                <span>{username}</span>
                <span>Você</span>
            </div>
            <form onSubmit={handleOnSubmit}>
                <textarea name="description" ref={onRef} placeholder={placeholder}/>
                <button>{btnTxt}</button>
            </form>
        </div>
    )
}