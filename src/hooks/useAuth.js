import api from "../utils/api.js"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false)

    const navigate = useNavigate()

    useEffect(()=> {
        const token = localStorage.getItem("token")
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    },[])

    async function authUser(data){
        setAuthenticated(true)
        localStorage.setItem("token", JSON.stringify(data.token))
        navigate("/")
    }

    async function signUp(user){
        try {
            const data = await api.post("/auth/signup", user).then((res) => {
                return res.data
            })

            await authUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function signIn(user){
        try {
            const data = await api.post("/auth/signin", user).then((res) => {
                return res.data
            })

            await authUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    return {authenticated, signIn, signUp}
}