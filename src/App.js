import './App.css';
// import './Login';
// import './Singup';
import Signup from './singup/Singup';
import Loginform from './login/Login';
import { BrowserRouter, Routes, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Navebar from './navbar/navbar';

function App() {
  return (
    <div className='page1'> 
      {/* <Loginform /> */}
      <BrowserRouter>
      <Navebar/>
        <Routes>
          <Route path='/singup' element={<Signup />} />
          <Route path='/login' element={<Loginform />} />
          <Route index path='/' element={<Loginform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
