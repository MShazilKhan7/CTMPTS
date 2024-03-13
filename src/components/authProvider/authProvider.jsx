import {useContext, useEffect,useState} from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

// DESC: HOC, that provides the authentication functionality to any of the component wrapped inside it
// wrapper component

const AUTH_URL = 'http://127.0.0.1:8000/api/auth/verify-token'
const AuthProvider = ({Component})=>{
    const {isAuthenticated,setisAuthenticated}  = useContext(AuthContext)
    console.log("I am rendering");

    const checkAuthentication  = async()=>{
      // check the local storage 
      if(!isAuthenticated){
      // happens when i come without logging in...
      const token = JSON.parse(localStorage.getItem('jwt'))
      if(token){
        const response  =  await axios.post(AUTH_URL, {'jwt': token });
        console.log(response.data);
        if(response.data.status === 200){
        setisAuthenticated(()=>true)
        console.log("updated!!", isAuthenticated);
        }
        if(response.data.status === 401){
        setisAuthenticated(false)
        // localStorage.removeItem('jwt')
        }
      }
    }
      return;
    }
    useEffect(()=>{
        checkAuthentication()
    },[])


    console.log("before return", isAuthenticated);
    return(
      <>
        {/* {!isAuthenticated && <p>i am returned {JSON.stringify(isAuthenticated)}</p>} */}
        {/* <p>i am returned {isAuthenticated}</p> */}
        {isAuthenticated ? (
          <>
          {Component}
          </>
        ): 'you are not logged in'}
      </>
    )
}



export default AuthProvider;
