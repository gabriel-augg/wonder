import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../contexts/UserContext.jsx";

export default function Private({children}){

    const { authenticated, loading } = useContext(Context)
    const navigate = useNavigate()


    useEffect(()=>{
        if(!loading){
            if(!authenticated){
                navigate("/entrar")
            }
        }
    },[authenticated])


    return (
        !authenticated ? (
            <></>
        ) : children
    
    )
}