import { useState } from "react";
import { useForm } from "react-hook-form"
import Button from "../Button";
import User from "../User";

import styles from "./styles.module.css"
import LetterCount from "../LetterCount";

export default function NewPost({username, handleOnSubmit, placeholder, btnTxt, isLoading}){
    const {register, handleSubmit, reset} = useForm()
    const [textCount, setTextCount] = useState(0)

    function handleDescription(description){
        handleOnSubmit(description, reset, setTextCount)
    }


    return(
        <div className={styles.newpost_container}>
           
            <User 
                url={null} 
                username={username} 
            />
   
            <form onSubmit={handleSubmit(handleDescription)}>
                <textarea 
                    name="description" 
                    {...register("description", {required: true, maxLength: 355})}
                    onChange={(e) => setTextCount(e.target.value.length)}  
                    placeholder={placeholder}
                />
                <div className={styles.newpost_footer}>
                    <LetterCount count={textCount} />
                    <Button 
                        btnTxt={btnTxt} 
                        isLoading={isLoading}
                        classN="button"
                        options={{
                            type: "submit"
                        }}
                    />
                    </div>
            </form>
        </div>
    )
}