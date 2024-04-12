import { createContext } from "react";

import useAuth from "../hooks/useAuth";

export const UserContext = createContext()

export function UserProvider({children}){
    const {authenticated, loading, setLoading, user, loadingAuth, signUp, signIn, signOut} = useAuth()

    return(
        <UserContext.Provider value={{authenticated, user, loading, setLoading, loadingAuth, signUp, signIn, signOut}}>
            {children}
        </UserContext.Provider>
    )
}