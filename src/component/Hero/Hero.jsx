import React from 'react'
import './Hero.css'
import people from '../../assets/people.svg';
import wave from '../../assets/Wave.svg'
import man from '../../assets/man with ipad.svg'
import line from '../../assets/Line 1.svg'
import badge from '../../assets/badge.svg'
import head from '../../assets/head.svg'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='hero-cont'>
         <div className='header-second'>
                        <div className='Header-second'>
                            <h1 className='Header-h1'>
                                Innovation Start here 
                            </h1>
                            {/* <form className='header-form'>
                                {/* <button className='header-button'>
                                    Services
                                </button> */}
                                {/* <input className='header-input' type='text' placeholder='Investment'/>
                                <button className='header-button'>
                                    Sign UP
                                </button> */}
                            {/* </form> */} 
                            <div className='header-form-div'>
                            <div className='header-form'>
                                <button className='hero-button'>Services</button>
                                <input className='header-input' type='text' placeholder='Investment'/>
                                <Link to ='/Signup'>
                                <button className='hero-button'>Signup</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className='header-img'>
                        <img src={people} alt='ppl' className='header-image'/>
                        </div>
                    </div>
                    
                {/* </div> */}
                <div>
                    {/* <img src={wave} alt='wave' className='header-wave'/> */}
                </div>
                <div className='big-div'>
                    <div>
                        <img src={man} alt='man with ipad' className='man-ipad'/>
                    </div>
                    <div>
                        <h6 className='h3'>
                            ABOUT OUR COMPANY
                        </h6>
                        <h2 className='h2'>
                            Our Awesome Features
                        </h2>
                        <img src={line} className='line'/>
                        <p className='p'> 
                            Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada
                        </p>    
                        <div className='div1'>
                            <img src={badge} className='badge'/>
                            <h5>We’re Secured</h5>
                            <p>Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada</p>
                        </div>
                        <div className='div1'>
                          <img src={head} className='head' />
                          <h5>We’re Reliable</h5>
                          <p>Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada</p>
        
                        </div>
                        <div className='div1'>
                            <img src={head} className='head'/>
                            <h5>Best Support</h5>
                            <p>Sed id curabitur tempus eget. Arcu rhoncus, pellentesque malesuada</p>
                        </div>

                        

                          {/* <div className='last-div'>
                            <h4>
                                Our Services
                            </h4>
                            <p>
                                Here are the  Amazing services we offer at jaysub
                            </p>
                            </div>
                             */}
                      
        
        
                    </div>
                </div>
                 <div className='l-div'>
                            <h4>
                                Our Services
                            </h4>
                            <p>
                                Here are the  Amazing services we offer at jaysub
                            </p>
                            </div>
                            
            
        
            
    
        
    </div>
  );
}

export default Hero