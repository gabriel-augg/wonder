import bus from "../../utils/bus";
import { useEffect, useState } from "react";
import styles from "./styles.module.css"

import { CgDanger } from "react-icons/cg";

export default function Modal(){
    const [visibility, setVisibility] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(()=>{
        bus.addListener("flash", ({message}) => {
            setVisibility(true)
            setMessage(message)

            setTimeout(()=> {
                setVisibility(false)
            }, 3000)

        })
    },[])

    return(
        visibility && (
            <div className={styles.modal}>
                <CgDanger size={25} />
                <span>{message}</span>
            </div>
        )    
    )
}