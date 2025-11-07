import { useState } from 'react'
import Homepage from './Pages/Homepage/Homepage';
import SignupPG from './Pages/Homepage/SignupPG/SignupPG';
import LogPG from './Pages/LogPG/LogPG';
import InvestmentPg from './Pages/InvestmentPG/InvestmentPg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvestmentPG from './Pages/InvestmentPG/InvestmentPg';
import DataPG from './Pages/DataPG/DataPG';


function App() {
    return (
        
        <Router>
        <Routes>
            <Route path ='/' element ={<Homepage />} />
            <Route path ='/signup' element ={<SignupPG />} />
            <Route path ='/Login' element ={<LogPG />} />
            <Route path ='/Investment' element ={<InvestmentPg />} />
            <Route path ='/Data' element={<DataPG />} />
        </Routes>
       </Router> 
            
            

    )
  
}

export default App;
