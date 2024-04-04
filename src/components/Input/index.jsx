import styles from "./styles.module.css"

export default function Input({text, name, type, placeholder, value, register, options}){
    return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                id={name} 
                value={value} 
                placeholder={placeholder}
                {...register(name, options)}
            />
        </div>
    )
}