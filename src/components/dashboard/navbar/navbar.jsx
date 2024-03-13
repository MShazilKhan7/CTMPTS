import React from "react";
import { FaWallet } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RxQuestionMark } from "react-icons/rx";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({sidebar})=>{

    const handleHamburg = ()=>{
        console.log(sidebar.current);
        console.log("called!");
        if(sidebar.current){
            sidebar.current.firstChild.classList.toggle('sidebar-toggle');
        }
    }

    return(
        <div className="navbar max-w-full px-5 h-[50px] border-b">
            <nav className="h-full max-w-full flex justify-between items-center">
                <div className="left-heading">
                    <div className="flex gap-2 items-center">
                        <RxHamburgerMenu className="hamburg" onClick={handleHamburg}/>
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
                </div>
            </nav> 
        </div>
    )
}

export default Navbar;