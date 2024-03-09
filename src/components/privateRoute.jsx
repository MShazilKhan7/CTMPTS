import React from "react";
import { Route, redirect } from "react-router-dom";



const PrivateRoute = ({component, isAuthenticated, ...rest })=>{

    <Route
       { ...rest}
       element={isAuthenticated ?  (<component/>): (redirect('login'))}
    >
        <Route index element={<PaymentContent/>}></Route>
    </Route>
}

export default PrivateRoute;