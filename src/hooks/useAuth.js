import api from "../utils/api.js"
import useAxios from "./useAxios.jsx"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function useAuth(){
    const { get, create, loading } = useAxios()
    const [authenticated, setAuthenticated] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(()=> {
        const token = localStorage.getItem("token")
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            get("/users/checkuser")
            .then(({user})=>{
                setUser(user)
                setAuthenticated(true)
            })
        }
    },[])

    async function authUser(token){
        localStorage.setItem("token", JSON.stringify(token))
        api.defaults.headers.Authorization = `Bearer ${token}`
        get("/users/checkuser")
        .then(({user})=>{
            setUser(user)
            setAuthenticated(true)
            setLoadingAuth(false)
            navigate("/")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    async function signUp(user){
        setLoadingAuth(true)
        create("/auth/signup", user)
        .then(({token}) => {
            authUser(token)
        })
    }

    async function signIn(user){
        setLoadingAuth(true)
        create("/auth/signin", user)
        .then(({token}) => {
            authUser(token)
        })
    }

    return {authenticated, loading, loadingAuth, user, signIn, signUp}
}