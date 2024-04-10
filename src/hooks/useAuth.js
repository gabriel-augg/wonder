import api from "../utils/api.js"
import useAxios from "./useAxios.jsx"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useFlashMessage from "./useFlashMessage.jsx"

export default function useAuth(){
    const { get, post, loading, setLoading } = useAxios()
    const [authenticated, setAuthenticated] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(()=> {
        const token = localStorage.getItem("token")
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            get("/users/check-user")
            .then(({user})=>{
                setUser(user)
                setAuthenticated(true)
            })
        } else {
            setLoading(false)
        }
    },[])

    async function authUser(token){
        localStorage.setItem("token", JSON.stringify(token))
        api.defaults.headers.Authorization = `Bearer ${token}`
        get("/users/check-user")
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
        post("/auth/signup", user)
        .then( async (res) => {
            if(res){
                await authUser(res.token)
            } else {
                setLoadingAuth(false)
            }
        })
    }

    async function signIn(user){
        setLoadingAuth(true)
        post("/auth/signin", user)
        .then( async (res) => {
            if(res){
                await authUser(res.token)
            } else {
                setLoadingAuth(false)
            }
        })
    }

    function signOut(){
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
    }

    return {authenticated, loading, loadingAuth, user, signIn, signUp, signOut}
}