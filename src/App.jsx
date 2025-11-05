import { useState } from 'react'
import Homepage from './Pages/Homepage/Homepage';
import SignupPG from './Pages/Homepage/SignupPG/SignupPG';
import LogPG from './Pages/LogPG/LogPG';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        
        <Router>
        <Routes>
            <Route path ='/' element ={<Homepage />} />
            <Route path ='/signup' element ={<SignupPG />} />
            <Route path ='/Login' element ={<LogPG />} />
        </Routes>
       </Router> 
            
            

    )
  
}

export default App;
