import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AccountLayout from './components/account/accountLayout';
import { Routes,Route } from 'react-router-dom';
import SignupForm from './components/account/signup';
import LoginForm from './components/account/login';
import DashboardLayout from './components/dashboard/dashboardLayout';
import PaymentContent from './components/dashboard/payments/paymentsContent';
import PrivateRoute from './components/privateRoute';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
             <PrivateRoute
                        path="dashboard/"
                        component={<DashboardLayout/>}
                        isAuthenticated={isAuthenticated}>

            </PrivateRoute>
        <Routes>
            <Route path='/' element={<AccountLayout/>}> 
                <Route index element={<SignupForm/>}></Route>
                <Route path='login/' element={<LoginForm/>}></Route>
                <Route path='signup/' element={<SignupForm/>}></Route>
            </Route>
        </Routes>
     </>
  );
}

export default App;
