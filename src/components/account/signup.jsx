import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from "react-router-dom";


const SignupForm = ()=>{
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();
    const [value, setValue]  = useState()
    return (
        <div className="sign-up flex flex-col gap-2 w-full items-center justify-center mt-10">
            <div className="customer-portal flex flex-col items-center gap-3 ">
                <div className="flex items-center gap-2">
                    <FaWallet className="text-[#274C77]"/>
                    <p className="text-md">Customer Portal</p> 
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-lg font-semibold">create</p>
                    <p className="text-lg font-semibold"><span className="text-[#274C77] font-bold">Customer Portal</span> account</p>
                </div>
            </div>
            <div className="form">
                <form action="" className="flex flex-col gap-2">

                    <div className="username">
                        <label htmlFor="username" className="font-semibold">Username</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Username"
                        
                        name="username"
                        {...register("username",{ required: 'Username is required' })}/>
                        {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
                    </div>
                    <div className="phone">
                        <label htmlFor="phone" className="font-semibold">Phone Number</label>
                        <PhoneInput
                        inputStyle={{
                           width: '100%',
                           padding: '20px 50px',
                           backgroundColor: "#F3F4F6"
                        }}
                        inputClass="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        country={'us'}
                        value={value}
                        onChange={setValue}
                        />
                        {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
                    </div>
                    <div className="account-number">
                        <label htmlFor="account-number" className="font-semibold">Account Number</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Account Number"
                        name="accountnumber"
                        {...register("accountNumber",{ required: 'Account Number is required' })}/>
                        {errors.accountNumber && <p className="text-red-500 text-xs italic">{errors.accountNumber.message}</p>}
                    </div>
                    <div className="email">
                        <label htmlFor="email" className="font-semibold">Email Address</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type=""
                        placeholder="Email Address"
                        name="email"
                        {...register("email",{ required: 'email is required' })}/>
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
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
                        className="bg-[#274C77] w-full  flex items-center justify-center text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign Up
                    </button>
                </div>
                <div className="flex justify-center">
                   <p>Already have an Account <Link to='/login' className="font-bold text-[#274C77]">Sign in</Link></p>
                </div>
                </form>
               
            </div>
        </div>
    )
}

export default SignupForm;