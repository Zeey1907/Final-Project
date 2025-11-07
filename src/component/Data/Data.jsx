import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdConnectedTv } from "react-icons/md";
import { FiTv } from "react-icons/fi";
import { LuScale } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { CiPower } from "react-icons/ci";
import vector from '../../assets/Vector.svg'
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import {useState} from 'react';
import './Data.css'
const Data = () => {
  const [formData , setFormData] = useState({
    PhomeNumber: "",
    network: "MTN",
    data:'1GB',
    paymentMode: "Paystack",
  });
   const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Buying ${formData.data} on ${formData.network} for ${formData.phoneNumber} via ${formData.paymentMode}"
    );
  };


  return (
    <>
    <div className='overall'>
     <ul className='ul'>
        <li className='li'><span><FaHome /></span>Home</li>
       <li className='li'><span><FaMoneyBillTransfer /></span>Transaction</li> 
       <li className='li'><span><PiHandCoinsBold /></span>Investment</li>
       <li className='li'><span><PiHandCoinsBold /></span>Reseller</li>
       <li className='li'><span><MdConnectedTv /></span>Data Services</li>
       <li className='li'><span><FiTv /></span>Cable/Tv Bill</li>
       <li className='li'> Electricity Bill</li>
       <li className='li'><span><LuScale /></span>Airtime Purchase</li>
        <li className='li'><span><LuScale /></span>Airtime Conversion</li>
        <li className='li'><span><CiSettings /></span>Settings</li>
        <li className='li'><span><CiPower /></span> Log Out</li>
        </ul>
         <div>
        <h1 className='hh1'>Data Services.</h1>
         <div className='data-sect'>
        <div>
           
             <form onSubmit={handleSubmit} className="data-form">
        {/* Phone Number */}
        <label className="label">Phone Number</label>
        {/* <input className='field'
          type="text"
          placeholder="+2343528915"
          value={formData.phoneNumber}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
        ></input> */}
        <div className='input'>
        <input 
        type='number'
        placeholder='+2343528915'
        >
        </input>
        </div>
        </form>
        
        
          
        </div>
        <div className='section'>
              <p className="section-title">Network</p>
          <div className="options">
            {["MTN", "Airtel", "9mobile", "Glo"].map((network) => (
              <button
                type="button"
                key={network}
                className={`option ${
                  formData.network === network ? "selected" : ""
                }`}
                onClick={() => handleChange("network", network)}
              >
                {network}
              </button>
            ))}

        </div>
        </div>
        <div className='section'>
            <p className="section-title">Data</p>
          <div className="options">
            {[
              { size: "1GB" },
              { size: "2GB"},
              { size: "3GB" },
              { size: "5GB" },
              { size: "10GB"},
              // <div>
              //   # 550, # 1000 , # 1200 ,# 1550, # 3250
              // </div>

            ].map(({ size, price }) => (
              <button
                type="button"
                key={size}
                className={`option ${
                  formData.data === size ? "selected" : ""
                }`}
                onClick={() => handleChange("data", size)}
              >
                <div className="data-item">
                  <span>{size}</span>
                  <span className="price">{price}</span>
                </div>
              </button>
            ))}

        </div>
        </div>
        
             <div className="section">
          <p className="section-title">Select Payment Mode</p>
          <div className="options">
            {["Paystack", "Wallet", "Coupon", "BankTransfer"].map((mode) => (
              <button
                type="button"
                key={mode}
                className={`optionk ${
                  formData.paymentMode === mode ? "selected" : ""
                }`}
                onClick={() => handleChange("paymentMode", mode)}
              >
                {mode}
              </button>
            ))}
          </div>

      
      </div>
       <button type="submit" className="buy-button">
          Buy Data
        </button>
        {/* </form> */}
        {/* </div> */}
        </div>
        
      </div>
      <div className='last'>
        <button className='last-b'>Reseller</button>
        <div className='last-div'>

          <h6>YOUR JAYSUB BALANCE</h6>
          <img src={vector} />
          <h4># 0.00</h4>
          <button className='butt'>Fund</button>
          <button className='butt'>Withdraw</button>
        </div>
        </div>
      </div>
      <div className='icon'>
        <p className='pc'>
          <span><FaRegCopyright /></span>
          2019 All Right Reserved
        </p>
        <p className='span'>
          <span><FaFacebookF /></span>
          <span><FaSquareInstagram /></span>
          <span><IoLogoTwitter /></span>
        </p>
      </div>
</>
    // </div>
  );
};

export default Data