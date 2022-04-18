import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './topServices.css';

function TopServices (props) {
  return (
    <section className="top-services-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="top-services-item">
              <div className="icon">
                {/*<AccountBalanceIcon fontSize="large" className="icons" />*/}
                <SpeedIcon fontSize="large" className="icons" />
              </div>
              <h3>
                <a href="#">FAST</a>
              </h3>
              <p>E-Currency and Gift card conversions takes less than 5 minutes
                 on average.</p>
              <a
                href="https://api.whatsapp.com/send?text=Hi ARC Exchange! I want to Trade my Bitcoin and Giftcards!&phone=2348185180776"
                className="link-btn">Exchange
                                     Now
                <ArrowRightAltIcon />
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="top-services-item">
              <div className="icon">
                <AccountBalanceIcon fontSize="large" className="icons" />
              </div>
              <h3>
                <a href="#">RELIABLE</a>
              </h3>
              <p>E-Currency and Gift card conversions takes less than 5 minutes
                 on average</p>
              <a
                href="https://api.whatsapp.com/send?text=Hi ARC Exchange! I want to Trade my Bitcoin and Giftcards!&phone=2348185180776"
                className="link-btn">Exchange
                                     Now
                <ArrowRightAltIcon />
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default TopServices;
