import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdConnectedTv } from "react-icons/md";
import { FiTv } from "react-icons/fi";
import { LuScale } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { CiPower } from "react-icons/ci";

const Data = () => {
  return (
    <div>
     <ul>
        <li><span><FaHome /></span>Home</li>
       <li><span><FaMoneyBillTransfer /></span>Transaction</li> 
       <li><span><PiHandCoinsBold /></span>Investment</li>
       <li><span><PiHandCoinsBold /></span>Reseller</li>
       <li><span><MdConnectedTv /></span>Data Services</li>
       <li><span><FiTv /></span>Cable/Tv Bill</li>
       <li>Electricity Bill</li>
       <li><span><LuScale /></span>Airtime Purchase</li>
        <li><span><LuScale /></span>Airtime Conversion</li>
        <li><span><CiSettings /></span>Settings</li>
        <li><span><CiPower /></span></li>
        </ul> 

        <div>
            <h1></h1>
        </div>

    </div>
  )
}

export default Data