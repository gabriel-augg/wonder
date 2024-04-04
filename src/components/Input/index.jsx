import styles from "./styles.module.css"

export default function Input({text, name, placeholder, value, onRef}){
    return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type="text"
                id={name} 
                value={value} 
                placeholder={placeholder}
            />
        </div>
    )
}