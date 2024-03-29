import { FaWallet } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
const LoginForm = ()=>{
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();
    const {isAuthenticated, setisAuthenticated} = useContext(AuthContext)
    const handleFormSubmission = async (data) => {
        if (data) {
            try {
                const user = {
                    username: data['username'],
                    password: data['password']
                }
                const response = await axios.post('http://127.0.0.1:8000/api/auth/login', user);
                const token = response.data.jwt;
                localStorage.setItem('jwt', JSON.stringify(token));
                setisAuthenticated(true)
            } catch (error) {
                console.log("error logged in!")
            }
        }
    }
   
    return (
        <div className="login flex flex-col gap-2 w-full items-center justify-center ">
            <div className="customer-portal flex flex-col items-center gap-3 ">
                <div className="flex items-center gap-2">
                    <FaWallet className="text-[#274C77]"/>
                    <p className="text-md">Customer Portal</p> 
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-lg font-semibold">Login</p>
                    <p className="text-lg font-semibold"><span className="text-[#274C77] font-bold">Customer Portal</span> account</p>
                </div>
            </div>
            <div className="form">
                <form action="" onSubmit={handleSubmit(handleFormSubmission)} className="flex flex-col gap-2">
                    <div className="username">
                        <label htmlFor="username" className="font-semibold">Username</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Username"
                        
                        name="username"
                        {...register("username",{ required: 'Username is required' })}/>
                        {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
                    </div>
                    <div className="password">
                    <label className="block text-gray-700 font-semibold" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="Password"
                        name="password"
                        {...register("password",{ required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8+ characters long' } })}
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                 </div>
                 <div className="submit">
                    <button
                        disabled={isSubmitting}
                        className="bg-[#274C77] w-full  flex items-center justify-center text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign Up
                    </button>
                </div>
                <div className="flex justify-center">
                   <p>Don't have an Account <Link to='/signup' className="font-bold text-[#274C77]">Sign Up</Link></p>
                </div>
            </form>
               {isAuthenticated && <Navigate to={'/dashboard'} />}
            </div>

        </div>
    )
}


export default LoginForm;