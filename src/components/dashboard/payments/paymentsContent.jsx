import React from "react";
import PaymentItem from "./paymentItem/paymentItem";
import PaymentsTable from "./allPayments/allPaymentsTable";

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


const tabledata  = {
    headers: ['customer account no', 'merchant account no', 'status','description','time','date','amount','actions'],
    rows: [
        {
            customerAccountNumber: 294792649826,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },   
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        
        {
            customerAccountNumber: 2947926498264896,
            merchantAccountNumber: 2372947297427947,
            status: "pending",
            description: "payment purpose",
            time: "03:09 AM",
            date: "Feb 15, 2023",
            amount: 780,
            actions: "delete"
        },
        

        
    ]
}


const PaymentContent = ()=>{
    return (
        <div className="payment-content flex flex-col">
            <div className="top-section w-full flex flex-col gap-3 px-6 py-5 pb-16">
                <p className="text-3xl font-bold">Payments</p>
                <div className="flex flex-wrap gap-5 py-2">
                    {payments.map((pitem, index)=>{
                        return (
                            <PaymentItem  key={index} props={pitem} />
                        )
                    })}
                </div>
            </div>
            <div className="bottom-section">
                <PaymentsTable data={tabledata}/>
            </div>
        </div>
    )
}

export default PaymentContent;