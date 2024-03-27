import api from "../utils/api.js"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(()=> {

        const token = localStorage.getItem("token")
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            api.get("/users/checkuser").then((res)=>{
                setUser(res.data.user)
                setAuthenticated(true)
            })
        }
        setLoading(false)
    },[])

    async function authUser(data){
        localStorage.setItem("token", JSON.stringify(data.token))
        api.defaults.headers.Authorization = `Bearer ${data.token}`
        api.get("/users/checkuser").then((res)=>{
            setUser(res.data.user)
            setAuthenticated(true)
            navigate("/")
        })
        .catch(()=>{
            alert("ERRO!")
        })
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

    return {authenticated, loading, user, signIn, signUp}
}