import React from "react";
import "./Investment.css";
import Logo from "../../assets/Logo.svg";
import Vector from "../../assets/Vector.svg";
import woman from "../../assets/Ellipse 9.svg";

const Investment = () => {
  return (
    <div>
        <div className="st-div">
        <img src={Logo} alt="Logo" className="invest-logo" />
        <div className="nd-div">
          <img src={Vector} alt="Vector" className="invest-vector" />
          <p className="pt">100Jcredit</p>
          <img src={woman} alt="woman" />
          <p className="ps">Kolawole Oluwatobi</p>
          <span>🔔</span>
        </div>

        </div>
        <div>
            


        </div>


    </div>
    );
};
   export default Investment