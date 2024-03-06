import React from "react";
import PaymentItem from "./paymentItem/paymentItem";

const payments = [
    {
        heading: "Total Pending Records",
        record: 234
    },
    {
        heading: "Total Paid Records",
        record: 300
    },
    {
        heading: "Total Rejected Records",
        record: 4
    }
]
const PaymentContent = ()=>{

    return (
        <div className="payment-content flex flex-col w-full h-full">
            <div className="top-section w-full flex flex-col gap-3 px-6 py-5">
                <p className="text-3xl font-bold">Payments</p>
                <div className="flex flex-wrap gap-5 py-2">
                    {payments.map((pitem, index)=>{
                        return (
                            <PaymentItem  key={index} props={pitem} />
                        )
                    })}
                </div>
            </div>
            <div className="table">
                    {/* table to be placed here */}
            </div>
        </div>
    )
}

export default PaymentContent;