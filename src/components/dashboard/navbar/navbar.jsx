import React from "react";
import { FaWallet } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RxQuestionMark } from "react-icons/rx";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";


const Navbar = ()=>{
    return(
        <div className="navbar w-full px-5 h-[50px] border-b">
            <nav className="h-full flex justify-between items-center">
                <div className="left-heading">
                    <div className="flex gap-2 items-center">
                        <FaWallet className="text-[#274C77]"/>
                        <p>Customer Portal</p>
                    </div>  
                </div>
                <div className="right-icons flex gap-3 items-center ">
                    <div className="search">
                        <IoIosSearch/>
                    </div>
                    <div className="mark">
                        <RxQuestionMark/>
                    </div>
                    <div className="chat">
                        <MdOutlineMessage/>
                    </div>
                    <div className="bell">
                        <IoIosNotificationsOutline/>
                    </div>
                    <div className="create-btn">
                        <button className="px-2 py-1 text-center bg-white rounded-md border border-[#274C77]">create</button>
                    </div>
                    <div className="profile flex gap-3 items-center">
                        <div className="profile-icon w-[20px] h-[20px] rounded-full bg-black"></div>
                        <p>Shazil Khan</p>
                    </div>
                </div>
            </nav> 
        </div>
    )
}

export default Navbar;