import styles from "./styles.module.css"

export default function Input({type, text, name, placeholder, value, onRef}){
    return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type} 
                name={name} 
                id={name} 
                value={value} 
                placeholder={placeholder}
                ref={onRef}
            />
        </div>
    )
}