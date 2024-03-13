import React, { useRef } from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = ()=>{
    const sidebarRef = useRef()

    return (
        <div className="db-layout flex flex-col w-full">
            <div className="top-navbar">
                <Navbar sidebar = {sidebarRef}/>
            </div>
            <div className="w-full db-content flex">
                <div ref={sidebarRef} className="sidebar-wrapper">
                    <Sidebar ref={sidebarRef}/>
                </div>
                <div className="options overflow-auto">
                    <Outlet/>
                </div>
            </div>
        </div> 
    )

}

export default DashboardLayout;