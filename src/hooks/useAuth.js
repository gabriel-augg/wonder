import api from "../utils/api.js"
import useRequest from "./useRequest.jsx"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function useAuth(){
    const { request, loading, setLoading } = useRequest()
    const [authenticated, setAuthenticated] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(()=> {
        setLoading(true)
        const token = localStorage.getItem("token")
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            request("/users/check-user", {
                method: "get"
            })
            .then(({data})=>{
                setUser(data.user)
                setAuthenticated(true)
                setLoading(false)
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
        }).catch((res) => {
            setLoadingAuth(false)
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
        }).catch((error) => {
            setLoadingAuth(false)
        })
    }

    function signOut(){
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
    }

    return {authenticated, loading, setLoading, loadingAuth, user, setUser, signIn, signUp, signOut}
}