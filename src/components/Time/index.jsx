import { useState, useEffect } from "react";
import timeAgo from "../../utils/date";

import styles from "./styles.module.css"

export default function Time({date}){
    const [time, setTime] = useState(timeAgo(date))

    useEffect(()=>{

        const interval = setInterval(() => {
            const newDate = timeAgo(date);
            setTime(newDate);
        }, 60000);

        return () => {
        clearInterval(interval);
        }

    },[date])

    return (
        <span className={styles.time}>{time}</span>
    )
}