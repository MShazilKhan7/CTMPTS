// table 
import React from "react";


const PaymentsTable = ({data})=>{
    console.log(data);
    return(
        <div className="overflow-auto">
        <table className="min-w-full table">
            <thead>
                <tr>
                    {data.headers.map((heading, index)=>{
                        return (
                            <th key={index}>{heading}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {/* [{}{}{}] */}
                {data.rows.map((row,index)=>{
                   return ( 
                        <tr key={index}>
                        {Object.values(row).map((col,index)=>{
                            return <td key={index}>{col}</td>
                        })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default PaymentsTable;