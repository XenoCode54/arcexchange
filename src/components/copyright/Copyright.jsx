import React from 'react';
import './copyright.css';

function Copyright (props) {
  return (
    <div className="copyright-area">
      <div className="container">
        <div className="copyright-area-content">
          <p>
            <i className="bx bx-copyright"/>
            Copyright @2021 BitcoinDoctorExchange. Developed by
            <a className='mac' href="https://www.linkedin.com/in/macmanuel-odumeru-7712a980/" target="_blank"> Mac Xenon</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
