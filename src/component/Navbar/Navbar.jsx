import React from 'react'
import Boy from '../../assets/boy.svg'
import './Navbar.css'
import wifi from '../../assets/wifi.svg'
import laptop from '../../assets/laptop.svg'
import pay from '../../assets/pay.svg'
import money from '../../assets/money.svg'
import bitcoin from '../../assets/bitcoin.svg'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    <div className='nav-container'>
      <section className='nav-section'>
        <div>
          <img src={Boy} alt="boy" className='nav-image'/>
        </div>
        <div>
            <h5 className='nav-h5'>Investment</h5>
            <p className='nav-p'>
                Data is oxygen (does that ring a bell? Probably!). With our automated data purchase process, you can be assured to resume your online activities almost immediately you run out of data. </p>
            <p className='nav-p'>
Plus, all our data packages come at affordable prices.Get started with us today.
            </p>
            <Link to ='/Investment'>
            <button className='nav-button'>Proceed</button>
            </Link>
        </div>
        </section>  
        <section className='nav-section'>
            <div>
                <h5 className='nav-h5'>Data Purchase</h5>
                <p className='nav-p'>
                    Data is oxygen (does that ring a bell? Probably!). With our automated data purchase process, you can be assured to resume your online activities almost immediately you run out of data. </p>
                <p className='nav-p'>
Plus, all our data packages come at affordable prices.Get started with us today.
                </p>
                <button className='nav-button'>Proceed</button>
            </div>
            <div>
              <img src={wifi} alt="wifi" className='nav-image'/>  
            </div>
        </section>
        <section className='nav-section'>
            <div>
               <img src={laptop} alt='laptop' className='nav-image'/> 
            </div>
            <div>
                <h5 className='nav-h5'>Tv/Cable Subcription</h5>
                <p className='nav-p'>
                    Data is oxygen (does that ring a bell? Probably!). With our automated data purchase process, you can be assured to resume your online activities almost immediately you run out of data. </p>
                <p className='nav-p'>
Plus, all our data packages come at affordable prices.Get started with us today.
                </p>
                <button className='nav-button'>Proceed</button>
            </div>
            </section>
            <section className='nav-section'>
                <div>
                    <h5 className='nav-h5'>Electricity Bill</h5>
                    <p className='nav-p'>
                        Data is oxygen (does that ring a bell? Probably!). With our automated data purchase process, you can be assured to resume your online activities almost immediately you run out of data. </p>
                    <p className='nav-p'>
Plus, all our data packages come at affordable prices.Get started with us today.
                    </p>
                    <button className='nav-button'>Proceed</button>
                </div>
                <div>
                  <img src={pay}  alt='pay' className='nav-image'/>
                </div>
            </section>
            <section className='nav-section'>
                <div>
                  < img src={money} alt='money' className='nav-image'/>  
                </div>
                <div>
                    <h5 className='nav-h5'>Convertion of Airtime to Cash</h5>
                    <p className='nav-p'>
                    Data is oxygen (does that ring a bell? Probably!). With our automated data purchase process, you can be assured to resume your online activities almost immediately you run out of data. </p>
                    <p className='nav-p'>
Plus, all our data packages come at affordable prices.Get started with us today.
                    </p>
                    <button className='nav-button'>Proceed</button>
                      
                </div>
            </section>
            <section className='nav-section'>
                <div>
                    <h5 className='nav-h5'>Cryptocurrency Exchange</h5>
                    <p className='nav-p'>
                        Data is oxygen (does that ring a bell? Probably!). With our automated data purchase process, you can be assured to resume your online activities almost immediately you run out of data. </p>
                    <p className='nav-p'>
Plus, all our data packages come at affordable prices.Get started with us today.
                    </p>
                    <button className='nav-button'>Proceed</button>
                </div>
                <div>
                 <img src={bitcoin} alt='bitcoin' className='nav-image'/>   
                </div>
                </section>
    </div>
  )
}

export default Navbar