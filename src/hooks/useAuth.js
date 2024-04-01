import api from "../utils/api.js"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(()=> {

        const token = localStorage.getItem("token")
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            api.get("/users/checkuser").then((res)=>{
                setUser(res.data.user)
                setAuthenticated(true)
                setLoading(false)
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
            setLoadingAuth(false)
            navigate("/")

        })
        .catch(()=>{
            setLoadingAuth(false)
            alert("ERRO!")
        })
    }

    async function signUp(user){
        setLoadingAuth(true)
        try {
            const data = await api.post("/auth/signup", user).then((res) => {
                return res.data
            })
            .catch(()=> {
                console.log("Deu erro aqui")
            })

            await authUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function signIn(user){
        setLoadingAuth(true)
        try {
            const data = await api.post("/auth/signin", user).then((res) => {
                return res.data
            })
            .catch(()=> {
                console.log("Deu erro aqui")
            })

            await authUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    return {authenticated, loading, user, signIn, signUp, loadingAuth}
}