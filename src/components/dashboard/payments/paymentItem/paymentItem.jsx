import React from "react";

const PaymentItem = () =>{
    return (
        <div className="payment-item px-2 py-2 w-1/4 h-[230px] rounded-md border border-[#6096BA]">
            <div className="flex flex-col gap-[20px]">
                <div>
                    <p>Total Pending Records</p>
                </div>
                <div className="rounded-r-full rounded-l-full border border-[#6096BA]">
                    <p>234 records</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentItem;