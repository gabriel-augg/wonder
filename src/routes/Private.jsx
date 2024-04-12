import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";

export default function Private({children}){

    const { authenticated, loading } = useContext(UserContext)
    const navigate = useNavigate()


    useEffect(()=>{
        if(!loading){
            if(!authenticated){
                navigate("/entrar")
            }
        }
    },[authenticated])


    return (
        !authenticated 
        ? <></>            
        : children
    )
}