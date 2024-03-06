import React from "react";
import { Outlet } from "react-router-dom";


const AccountLayout = ()=>{
    return (
       <div className="accountlayout w-full h-screen py-3 px-3">
            <div className="wrapper flex w-full h-full">
                <div className="left-form w-1/2 h-full py-6 px-5">
                    <Outlet/>
                </div>
                <div className="right-image w-1/2  py-2 px-5 h-full">
                    <img id="displayImage" src="/displayimage.jpg" alt="" />
                </div>
            </div>
       </div>
    )
}

export default AccountLayout;