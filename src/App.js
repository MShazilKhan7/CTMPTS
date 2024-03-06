import logo from './logo.svg';
import './App.css';
import AccountLayout from './components/account/accountLayout';
import { Routes,Route } from 'react-router-dom';
import SignupForm from './components/account/signup';

function App() {
  return (
    <>
        <Routes>
            <Route path='' element={<AccountLayout/>}> 
                <Route index element={<SignupForm/>}></Route>
                {/* <Route path='login/' element={<SignupForm/>}></Route> */}
            </Route>
        </Routes>
    </>
  )
}

export default App;
