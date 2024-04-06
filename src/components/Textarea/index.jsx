import styles from "./styles.module.css"

export default function Textarea({name, placeholder, register}){
    return(
        <textarea 
            className={styles.textarea}
            name={name}
            {...register}
            placeholder={placeholder}
        />
    )
}