import React from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";

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
                <div className="options h-full overflow-auto">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;