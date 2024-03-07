import logo from './logo.svg';
import './App.css';
import AccountLayout from './components/account/accountLayout';
import { Routes,Route } from 'react-router-dom';
import SignupForm from './components/account/signup';
import LoginForm from './components/account/login';
import DashboardLayout from './components/dashboard/dashboardLayout';
import PaymentContent from './components/dashboard/payments/paymentsContent';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
        <Routes>
            <Route path='/' element={<AccountLayout/>}> 
                <Route index element={<SignupForm/>}></Route>
                <Route path='login/' element={<LoginForm/>}></Route>
                <Route path='signup/' element={<SignupForm/>}></Route>
            </Route>
            <PrivateRoute
                        path="dashboard/"
                        component={<DashboardLayout/>}
                        isAuthenticated={isAuthenticated}>
                <Route index element={<PaymentContent/>}></Route>

            </PrivateRoute>

            
        </Routes>
  );
}

export default App;
