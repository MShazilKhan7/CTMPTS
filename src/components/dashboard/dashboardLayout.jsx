import React from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";


const DashboardLayout = ()=>{
    return (
        <div className="db-layout flex flex-col w-full">
            <div className="top-navbar">
                <Navbar/>
            </div>
            <div className="w-full db-content flex">
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="options h-full bg-purple-500 overflow-auto">

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;