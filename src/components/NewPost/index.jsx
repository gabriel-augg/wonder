import { useRef } from "react";
import Button from "../Button";
import User from "../User";

import styles from "./styles.module.css"

export default function NewPost({username, handleOnSubmit, placeholder, btnTxt, isLoading}){
    const descriptionRef = useRef(null)

    function handleSubmit(e){
        e.preventDefault()
        handleOnSubmit(descriptionRef.current.value)
        descriptionRef.current.value = ""
    }


    return(
        <div className={styles.newpost_container}>
           
            <User 
                url={null} 
                username={username} 
            />
   
            <form onSubmit={handleSubmit}>
                <textarea name="description" ref={descriptionRef} placeholder={placeholder}/>
                <Button 
                    type="submit" 
                    btnTxt={btnTxt} 
                    isLoading={isLoading} 
                />
            </form>
        </div>
    )
}