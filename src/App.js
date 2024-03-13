import './App.css';
import AccountLayout from './components/account/accountLayout';
import { Routes,Route } from 'react-router-dom';
import SignupForm from './components/account/signup';
import LoginForm from './components/account/login';
import DashboardLayout from './components/dashboard/dashboardLayout';
import AuthProvider from './components/authProvider/authProvider';
import AuthContextProvider from './context/ContextProvider';
import PaymentContent from './components/dashboard/payments/paymentsContent';
import InstantPaymentForm from './components/dashboard/instantPayment/instantPaymentForm';
import QrScan from './components/dashboard/qrScan/qrScan';

  function App() {
    return (
        <AuthContextProvider>
          <Routes>
              <Route path='/' element={<AccountLayout/>}> 
                  <Route index element={<SignupForm/>}></Route>
                  <Route path='login/' element={<LoginForm/>}></Route>
                  <Route path='signup/' element={<SignupForm/>}></Route>
              </Route>

              <Route path='dashboard/' element={<AuthProvider Component={<DashboardLayout/>}/>}>
                  <Route index element={<PaymentContent/>}></Route>
                  <Route path='payments/' element={<PaymentContent/>}></Route>
                  <Route path='instant-payments/' element={<InstantPaymentForm/>}></Route>
                  <Route path='qrscan/' element={<QrScan/>}></Route>
              </Route>
          </Routes>
        </AuthContextProvider>
    );
  }

  export default App;
