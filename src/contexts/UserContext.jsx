import { createContext } from "react";

import useAuth from "../hooks/useAuth";

export const UserContext = createContext()

export function UserProvider({children}){
    const {authenticated, loading, user, loadingAuth, signUp, signIn} = useAuth()

    return(
        <UserContext.Provider value={{authenticated, user, loading, loadingAuth, signUp, signIn}}>
            {children}
        </UserContext.Provider>
    )
}