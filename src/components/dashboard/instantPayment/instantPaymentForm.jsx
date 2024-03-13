import React from "react";
import {useForm} from 'react-hook-form'



const InstantPaymentForm = ()=>{
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm();
    return (
        <div className="w-full instant-payment  min-h-full flex flex-col gap-5 px-5 py-4">
            <div className="ip-heading">
                <p className="text-3xl font-bold">Instant Payment</p>
            </div>
            <div className="ip-form w-3/4 px-4 py-5 pt-20 border rounded-md">
                <form action="" className="instant-payment-form flex flex-col gap-4">
                    <div className="flex gap-3">
                        <div className="ip-username w-1/3">
                            <label htmlFor="ip-username" className="font-semibold">Username</label>
                            <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Username"
                            {...register("username",{ required: 'Username is required' })}/>
                            {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
                        </div>
                        <div className="ip-email w-2/3">
                            <label htmlFor="email" className="font-semibold">Email Address</label>
                            <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            {...register("email",{ required: 'email is required' })}/>
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="payment-amount">
                        <label htmlFor="payment-amount" className="font-semibold">Payment Amount</label>
                        <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Payment Amount"
                            {...register("amount",{ required: 'payment is required' })}/>
                            {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount.message}</p>}
                    </div>
                    <div className="customer-account-number">
                    <label htmlFor="customer-account-number" className="font-semibold">Customer Account Number</label>
                        <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Payment Amount"
                            {...register("customerAccountNumber",{ required: 'Account Number is required' })}/>
                            {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount.message}</p>}
                    </div>
                    <div className="merchant-account-number">
                        <label htmlFor="merchant-account-number" className="font-semibold">Merchant Account Number</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Payment Amount"
                            {...register("merchantAccountNumber",{ required: 'Account Number is required' })}/>
                            {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount.message}</p>}
                    </div>
                    <div className="bank-name">
                        <label htmlFor="customer-account-number" className="font-semibold">Customer Account Number</label>
                        <select  
                        {...register("bankAccountName",{ required: 'Select bank' })}
                        name="cars" id="cars" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="volvo">BAHL</option>
                            <option value="saab">Meezan</option>
                            <option value="mercedes">Islamic</option>
                            <option value="audi">AL-Habib</option>
                        </select>
                    </div>
                    <div className="merchant-account-number">
                        <label htmlFor="merchant-account-number" className="font-semibold">Payment Purpose</label>
                        <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            rows={5}
                            placeholder="Payment Purpose"
                            {...register("merchantAccountNumber",{ required: 'Account Number is required' })}/>
                            {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount.message}</p>}
                    </div>
                    <div className="flex justify-end">
                        <button className="rounded-md px-5 py-[6px] bg-[#35CE8D]">Pay</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InstantPaymentForm;