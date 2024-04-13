import styles from "./styles.module.css"

export default function Input({text, name, type, placeholder, value, register, error}){
    return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                id={name}  
                placeholder={placeholder}
                autoComplete="autocomplete_off_randString"
                {...register(name, {value})}
            />
            {error && (<span>{error.message}</span>)}
        </div>
    )
}