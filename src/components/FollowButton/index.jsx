import { useEffect, useState, useContext } from "react";
import {useNavigate} from "react-router-dom"
import { UserContext } from "../../contexts/UserContext";

import Button from "../Button"
import useRequest from "../../hooks/useRequest"

import { AiOutlineLoading } from "react-icons/ai";

import styles from "./styles.module.css"

export default function FollowButton({ id, setFollowCount }) {
    const { request, loading, setLoading } = useRequest()
    const { user, authenticated } = useContext(UserContext)
    const navigate = useNavigate()
    const [isFollowed, setIsFollwed] = useState(false)

    useEffect(() => {
        
        if(authenticated) {
            request(`/follows/${id}/followed`, {
                method: "get"
            })
            .then(({data}) => {
                setIsFollwed(data.status)
                setLoading(false)
            })
        } else {
            setIsFollwed(false)
            setLoading(false)
        }

    },[id])

    async function handleClick(){
        setLoading(true)
        setIsFollwed(!isFollowed)

        if(!authenticated){
            navigate("/entrar")
            return
        }

        if(isFollowed) {
            await request(`/follows/${id}/unfollow`, {
                method: "delete"
            })
            await request(`/users/${id}/remove-follows-count`, {
                method: "patch"
            })
            setLoading(false)
            setFollowCount(prevCount => prevCount - 1)
        } else {
            await request(`/follows/${id}/follow`, {
                method: "post"
            })
            await request(`/users/${id}/add-follows-count`, {
                method: "patch"
            })
            setFollowCount(prevCount => prevCount + 1)
            setLoading(false)
        }
    }

    return loading
        ? (
            <span className={styles.loading}>
                <AiOutlineLoading size={25} />
            </span>
        )
        : id === user?.id
        ? <Button btnTxt="Editar" classN="btn_follow" />
        : isFollowed
        ? <Button options={{onClick: handleClick}} btnTxt="Não seguir" classN="btn_unfollow" />
        : <Button options={{onClick: handleClick}} btnTxt="Seguir" classN="btn_follow"/>


}