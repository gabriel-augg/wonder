import { createContext } from "react";

import useAuth from "../hooks/useAuth";

export const Context = createContext()

export function UserProvider({children}){
    const {authenticated, user, signUp, signIn} = useAuth()

    return(
        <Context.Provider value={{authenticated, user, signUp, signIn}}>{children}</Context.Provider>
    )
}