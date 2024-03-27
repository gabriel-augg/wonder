import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../contexts/UserContext.jsx";

export default function Private({children}){

    const { authenticated, loading } = useContext(Context)

    if(loading){
        <div></div>
        return
    }

    if(!authenticated){
        return <Navigate to="/entrar" />
    }


    return children
}