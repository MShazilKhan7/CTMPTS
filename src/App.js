import logo from './logo.svg';
import './App.css';
import AccountLayout from './components/account/accountLayout';
import { Routes,Route } from 'react-router-dom';
import SignupForm from './components/account/signup';
import LoginForm from './components/account/login';
import DashboardLayout from './components/dashboard/dashboardLayout';
import PaymentContent from './components/dashboard/payments/paymentsContent';

function App() {
  return (
        <Routes>
            <Route path='/' element={<AccountLayout/>}> 
                <Route index element={<SignupForm/>}></Route>
                <Route path='login/' element={<LoginForm/>}></Route>
                <Route path='signup/' element={<SignupForm/>}></Route>
            </Route>
            <Route path='dashboard/' element={<DashboardLayout/>}>
                <Route index element={<PaymentContent/>}></Route>
            </Route>
        </Routes>
  );
}

export default App;
