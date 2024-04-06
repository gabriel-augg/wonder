import styles from "./styles.module.css"

export default function Textarea({name, register, placeholder, register}){
    return(
        <textarea 
            className={styles.textarea}
            name={name}
            {...register}
            placeholder={placeholder}
        />
    )
}