import user_image from "../../assets/img/user.svg"
import Button from "../Button";

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
            <form onSubmit={handleOnSubmit}>
                <textarea name="description" ref={onRef} placeholder={placeholder}/>
                <Button 
                    type="submit" 
                    btnTxt={btnTxt} 
                    isLoading={isLoading} 
                />
            </form>
        </div>
    )
}