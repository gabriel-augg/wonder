import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/UserContext";

import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";
import useAxios from "../../hooks/useAxios";

import styles from "./styles.module.css"

export default function Like({id, type, likesQty}){
    const { get, update, loading, setLoading } = useAxios()
    const {authenticated} = useContext(Context)
    const [isLiked, setIsLiked] = useState(false)
    const [count, setCount] = useState(likesQty)
    const navigate = useNavigate()

    useEffect(()=>{
        if(authenticated){
            get(`/like-dislike/${type}/${id}`)
            .then(({status}) => {
                setIsLiked(status)
            })
        } else {
            setLoading(false)
        }

    },[authenticated, type, id])


    const handleLike = async () => {
        if(!authenticated){
            navigate("/entrar")
            return
        }

        setIsLiked(!isLiked);
        setCount(isLiked ? count - 1 : count + 1)
        update(`/like-dislike/${type}/${ isLiked ? "dislike" : "like" }/${id}`)
    }

    return(
        <div className={styles.like}>
            <span>{count}</span>
            { loading ? (
                <span className={styles.like_loading}>
                    <AiOutlineLoading size={18}/>
                </span>
            ) : (
                <button onClick={handleLike}>
                    {isLiked ? (
                        <IoIosHeart size={18} />
                    ) : (
                        <IoIosHeartEmpty size={18} />
                    )}
                </button>
            ) }
        </div>
    )
}