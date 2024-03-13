import React, { useState } from "react"
import AuthContext from "./AuthContext"


const AuthContextProvider = ({children})=>{
    const [isAuthenticated, setisAuthenticated] = useState(false)
    return (
        <AuthContext.Provider value={{isAuthenticated,setisAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

