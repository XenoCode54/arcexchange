import React from 'react';
import './services.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function Services (props) {

  return (
    <section className="credit-card-area bg-ffffff">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="credit-card-content">
              <span>Exchange Facility</span>
              <h3>We Buy All Cryptocurrency And Giftcards.</h3>
              <p>We accept variety of giftcards, digital assets on your convenience.
                <br/> Trade with Us !
              </p>

              <ul className="credit-card-features">
                <li>
                  <VerifiedUserIcon className="icon" />
                  Bitcoin
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  Ethereum
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  USDT
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  ITunes
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  Google
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  Amazon
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  Sephora
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  Ebay
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  Steam
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  Nordstrom
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  App Store
                </li>
                <li>
                  <VerifiedUserIcon className="icon" />
                  Vanilla
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="">
              <div className="credit-card-image">
                <img
                  src="giftcards.jpg"
                  alt="iTune" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
