import { createContext } from "react";

import useAuth from "../hooks/useAuth";

export const UserContext = createContext()

export function UserProvider({children}){
    const {authenticated, loading, user, setUser, loadingAuth, signUp, signIn, signOut} = useAuth()

    return(
        <UserContext.Provider value={{authenticated, user, setUser, loading, loadingAuth, signUp, signIn, signOut}}>
            {children}
        </UserContext.Provider>
    )
}