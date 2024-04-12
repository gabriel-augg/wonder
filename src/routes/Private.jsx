import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";

export default function Private({children}){

    const { authenticated, loading, setLoading } = useContext(UserContext)
    const navigate = useNavigate()


    useEffect(()=>{
        setLoading(true)
        if(!loading){
            if(!authenticated){
                navigate("/entrar")
            }
            setLoading(false)
        }
    },[authenticated])


    return (
        authenticated 
        ? children          
        : <></>
    )
}