import React from "react";
import "./Sidebar.css";
import hand1 from "../../assets/hand1.svg";
import handa from "../../assets/handa.svg";
import hand2 from "../../assets/hand2.svg";
import foot from "../../assets/Rectangle 65.svg";

const Sidebar = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Home</h2>
        <ul>
          <li>Transactions</li>
          <li className="active">Investment</li>
          <li>Reseller</li>
          <li>Data Services</li>
          <li>Cable/TV Bill</li>
          <li>Electric Bill</li>
          <li>Airtime Purchase</li>
          <li>Airtime Conversion</li>
          <li>Settings</li>
          <li>Log out</li>
        </ul>
      </aside>

      <main className="content">
        <h1 className="title">INVESTMENT.</h1>

        <div className="plan-box">
         <div className="plan-item">
            
            <img src={hand1} alt="hand1" className="plan-image" />
            <p>Regular Plan | 01 <a href="#">Proceed</a></p>
            </div>
            <div className="plan-item">
                <img src={handa} alt="hand2" className="plan-image" />
                <p>Savings Plan | 02 <a href="#">Proceed</a></p>
                </div>
            <div className="plan-item">
                <img src={hand2} alt="hand3" className="plan-image" />
                <p>Ultimate Saving Plan | 03 <a href="#"> Proceed</a></p>
            </div>

        </div>
           {/* <button className="btn">My Investment</button> */}
           <section className="sect">
        <div className="balance-section">
            <button className="btn">My Investment</button>
          <h3>YOUR JAYSUB BALANCE</h3>
          <p className="balance">₦0.00</p>
          <div className="btn-row">
            <button className="fund-btn">Fund</button>
            <button className="withdraw-btn">Withdraw</button>
          </div>
        </div>

        <div className="history">
          <h3>Transaction History</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2020-05-21</td>
                <td>Deposit</td>
                <td className="success">Success</td>
              </tr>
              <tr>
                <td>2020-05-21</td>
                <td>Withdrawal</td>
                <td className="pending">Pending</td>
              </tr>
              <tr>
                <td>2020-05-21</td>
                <td>Deposit</td>
                <td className="success">Success</td>
              </tr>
              <tr>
                <td>2020-05-21</td>
                <td>Withdrawal</td>
                <td className="cancelled">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
        </section>
        {/* <img src={foot} alt="footer" className="footer-image" />
         */}
      </main>
    </div>
  );
};

export default Sidebar;