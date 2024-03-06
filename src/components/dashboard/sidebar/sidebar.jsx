import React from "react";
import { CgDollar } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import Item from "./sidebarItem/item";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsQrCodeScan } from "react-icons/bs";

const Items = [
    {
        name:  "payments",
        icon:  <BsCurrencyDollar/>
    },
    {
        name:  "instant payments",
        icon:  <MdPayment/>
    },
    {
        name:  "Qr Scan",
        icon:  <BsQrCodeScan/>
    }
]


function Sidebar(){
    return (
        <div className="w-[240px] sidebar bg-[#E7ECEF] px-3 py-2">
            <div className="w-full sidebar-items flex flex-col gap-2 ">
                {Items.map((item,index)=>{
                    return (
                        <Item ket={index} props={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar;