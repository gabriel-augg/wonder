import { createContext } from "react";

import useAuth from "../hooks/useAuth";

export const Context = createContext()

export function UserProvider({children}){
    const {authenticated, loading, user, loadingAuth, signUp, signIn} = useAuth()

    return(
        <Context.Provider value={{authenticated, user, loading, loadingAuth, signUp, signIn}}>
            {children}
        </Context.Provider>
    )
}