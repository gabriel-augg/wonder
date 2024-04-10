import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import useAxios from "../../hooks/useAxios";

import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";

import styles from "./styles.module.css"

export default function Like({id, type, likesQty}){
    const { get, patch, post, deleteOne, loading, setLoading } = useAxios()
    const {authenticated} = useContext(UserContext)
    const [isLiked, setIsLiked] = useState(false)
    const [count, setCount] = useState(likesQty)
    const navigate = useNavigate()

    useEffect(()=>{
        if(authenticated){
            get(`/likes/${id}/${type}`)
            .then(({status}) => {
                setIsLiked(status)
            })
        } else {
            setIsLiked(false)
            setLoading(false)
        }

    },[authenticated, type, id])


    const handleLike = async () => {
        if(!authenticated){
            navigate("/entrar")
            return
        }
        
        setIsLiked(!isLiked);
        if(isLiked){
            setLoading(true)
            await deleteOne(`/likes/${type}/${id}/dislike`)
            await patch(`/${type}/${id}/remove-likes-count`)
            setLoading(false)
            setCount(count - 1)
        } else {
            setLoading(true)
            await post(`/likes/${type}/${id}/like`)
            await patch(`/${type}/${id}/add-likes-count`)
            setLoading(false)
            setCount(count + 1)
        }
        
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