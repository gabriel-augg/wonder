import { AiOutlineLoading } from "react-icons/ai";
import styles from "./styles.module.css"

export default function Button({ btnTxt, handleClick, type, isLoading}){
    return(
        <button 
            type={type ? type : undefined} 
            className={styles.button} 
            onClick={handleClick ? handleClick : undefined}
        >
            {isLoading ? <AiOutlineLoading size={20}/> : btnTxt  }
        </button>
    )
}