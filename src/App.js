import './App.css';
import Header from './Components/Header';
import Booking from './Components/Booking';
import Shopping from './Components/Shopping';
import Login from './Components/Login';
import Register from './Components/Register';
import ContactUs from './Components/Contactus';
import {Router,Routes,Route} from 'react-router-dom'
import Checkout from './Components/Checkout';
import IncomeAreaChart from './Components/OrderTable';
function App() {
  return (
    <div className='aa'>
     <Header></Header>  
  <div className="App">
    <Routes>
      <Route path='/' element={<IncomeAreaChart/>}/>
      <Route path='/booking' element={<Checkout/>}/>
      <Route path='/shopping' element={<Shopping/>}/>
      <Route path='/Feedback' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    <br/><br/>
    </div>
    </div>
  );
}

export default App;
