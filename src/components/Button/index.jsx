import { AiOutlineLoading } from "react-icons/ai";
import styles from "./styles.module.css"

export default function Button({ btnTxt, isLoading, classN, options}){
    return(
        <button 
            className={styles[classN]} 
            {...options}
        >
            {isLoading ? <AiOutlineLoading size={19}/> : btnTxt  }
        </button>
    )
}