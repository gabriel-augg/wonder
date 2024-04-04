import { useForm } from "react-hook-form"
import Button from "../Button";
import User from "../User";

import styles from "./styles.module.css"

export default function NewPost({username, handleOnSubmit, placeholder, btnTxt, isLoading}){
    const {register, handleSubmit, reset} = useForm()

    function handleDescription(description){
        handleOnSubmit(description, reset)
    }


    return(
        <div className={styles.newpost_container}>
           
            <User 
                url={null} 
                username={username} 
            />
   
            <form onSubmit={handleSubmit(handleDescription)}>
                <textarea name="description" {...register("description", {required: true})} placeholder={placeholder}/>
                <Button 
                    type="submit" 
                    btnTxt={btnTxt} 
                    isLoading={isLoading} 
                />
            </form>
        </div>
    )
}