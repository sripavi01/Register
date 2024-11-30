
import './App.css';
import Login from "./companent/login/Login"
// import Home1 from "./components/home1/Home1"
import Home1 from "./companent/home1/Home1"
 

 
 
import Navbar from './companent/navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>

<Router>
 

 
  <Routes>
    {/* <Route path="/home1" element={<Home1/>} /> */}
    <Route path="/home" element={< Home1 />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</Router>
          
    </div>
  );
}

export default App;
