import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import useRequest from "../../hooks/useRequest";

import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";

import styles from "./styles.module.css"

export default function Like({id, type, likesCount}){
    const { request, loading, setLoading } = useRequest()
    const {authenticated} = useContext(UserContext)
    const [isLiked, setIsLiked] = useState(false)
    const [count, setCount] = useState(likesCount)
    const navigate = useNavigate()

    useEffect(()=>{
        setLoading(true)
        if(authenticated){
            request(`/likes/${id}/${type}`, {
                method: "get"
            })
            .then(({data}) => {
                setIsLiked(data.status)
                setLoading(false)
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
        
        setLoading(true)
        setIsLiked(!isLiked);
        if(isLiked){
            await request(`/likes/${type}/${id}/dislike`, {
                method: "delete"
            })
            await request(`/${type}/${id}/remove-likes-count`, {
                method: "patch"
            })
            setCount(count - 1)
            setLoading(false)
            
        } else {
            await request(`/likes/${type}/${id}/like`, {
                method: "post"
            })
            await request(`/${type}/${id}/add-likes-count`, {
                method: "patch"
            })
            setCount(count + 1)
            setLoading(false)
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