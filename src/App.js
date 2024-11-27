
import './App.css';
import Login from "./companent/login/Login"
import Home1 from "./components/Home1/Home1"

 

 
 
import Navbar from './companent/navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>

<Router>
  {/* <Navbar/> */}

 
  <Routes>
    <Route path="/" element={<Home1/>} />
    <Route path="/login" element={<Login />} />
  </Routes>
</Router>
          
    </div>
  );
}

export default App;
