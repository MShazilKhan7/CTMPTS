import React from "react";




const Item = ({props})=>{
    return(
        <div className="w-full px-3 py-2 rounded-md text-[#000]  hover:bg-[#d8d9d5]">
            <div className="w-full h-full flex gap-2 items-center">
                <div>{props.icon}</div>
                <p className="text-sm">{props.name}</p>
            </div>
        </div>
    )
}

export default Item;