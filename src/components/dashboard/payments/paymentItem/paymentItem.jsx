import React from "react";

const PaymentItem = ({props}) =>{
    return (
        <div className="payment-item px-3 py-2 min-w-[200px] h-[150px] rounded-md border-2 border-[#6096BA] bg-[rgb(170,205,228)]">
            <div className="flex flex-col gap-[20px]">
                <div>
                    <p>{props.heading}</p>
                </div>
                <div className="rounded-r-full rounded-l-full px-7 w-fit flex items-center justify-center leading-tight border border-[#6096BA]">
                    <p>{props.record}</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentItem;