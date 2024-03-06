import React from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";


const DashboardLayout = ()=>{
    return (
        <div className="db-layout flex flex-col w-full">
            <div className="top-navbar">
                <Navbar/>
            </div>
            <div className="db-content h-[calc(100% - 50px)] flex ">
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="options bg-yellow-700">

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;