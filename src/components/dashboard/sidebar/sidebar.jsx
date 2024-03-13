import React, { useRef } from "react";
import { MdPayment } from "react-icons/md";
import Item from "./sidebarItem/item";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsQrCodeScan } from "react-icons/bs";
import { Link } from "react-router-dom";


const Items = [
    {
        name:  "payments",
        icon:  <BsCurrencyDollar/>,
        path: 'payments'
    },
    {
        name:  "instant payments",
        icon:  <MdPayment/>,
        path: 'instant-payments'

    },
    {
        name:  "Qr Scan",
        icon:  <BsQrCodeScan/>,
        path: 'qrscan'

    }
]


function Sidebar(){
    const sidebarRef = useRef()
    const closeSidebar = ()=>{
        if(sidebarRef.current){
            sidebarRef.current.classList.remove('sidebar-toggle')
        }
    }
    return (
        <div ref={sidebarRef} className="w-[240px] sidebar h-full bg-[#E7ECEF] px-3 py-2">
            <div className="w-full h-full sidebar-items flex flex-col gap-2 ">
                {Items.map((item,index)=>{
                    return (
                        <Link onClick={closeSidebar} to={item.path}><Item key={index} props={item}/></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar;