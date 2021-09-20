import React from 'react';
import './mainBanner.css';

function MainBanner (props) {
  return (
    <div className="main-banner">
      <div className="main-banner-item">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="main-banner-content">
                <h1>Trade your Bitcoin &amp; Redeem Giftcards</h1>
                <p>Bitcoin Doctor Exchange is trusted for the best market rates
                   at quality service delivery.
                   Instant naira payment after confirmation. Trade with the
                   source.
                </p>
                <div className="banner-btn">
                  <a
                    href="https://api.whatsapp.com/send?text=Hi Bitcoin Doctor! I want to Trade my Bitcoin and Giftcards!&phone=2348161991217"
                    className="default-btn">Exchange Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="main-banner-image">
                <img
                  src="pix2.png"
                  alt="Person" />

                <div className="banner-mobile">
                  {/*<img*/}
                  {/*  src="pix.png"*/}
                  {/*  alt="image" />*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-banner-shape">
        <div className="shape-1">
          <img src="as.png" alt="shape" />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
