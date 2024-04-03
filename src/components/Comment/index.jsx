import { BsChatQuote } from "react-icons/bs";

import styles from "./styles.module.css"

export default function Comment({show, count}){
    return (
        <>
            { show && (
                <div className={styles.comment}>
                    <span>{count}</span>
                    <span><BsChatQuote color="#299AD1" size={17}/></span>
                </div>
            )}
        </>
    )
}