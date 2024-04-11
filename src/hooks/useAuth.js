import api from "../utils/api.js"
import useAxios from "./useRequest.jsx"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useFlashMessage from "./useFlashMessage.jsx"

export default function useAuth(){
    const { request, loading, setLoading } = useAxios()
    const [authenticated, setAuthenticated] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(()=> {
        const token = localStorage.getItem("token")
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            request("/users/check-user", {
                method: "get"
            })
            .then(({data})=>{
                setUser(data.user)
                setAuthenticated(true)
            })
        } else {
            setLoading(false)
        }
    },[])

    async function authUser(token){
        localStorage.setItem("token", JSON.stringify(token))
        api.defaults.headers.Authorization = `Bearer ${token}`
        request("/users/check-user", {
            method: "get"
        })
        .then(({data})=>{
            setUser(data.user)
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
        request("/auth/signup", {
            method: "post",
            data: user
        })
        .then( async ({data}) => {
            if(data){
                await authUser(data.token)
            } else {
                setLoadingAuth(false)
            }
        })
    }

    async function signIn(user){
        setLoadingAuth(true)
        request("/auth/signin", {
            method: "post",
            data: user
        })
        .then( async ({data}) => {
            if(data){
                await authUser(data.token)
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