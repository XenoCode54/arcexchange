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
                <p>ARC Exchange is known for providing the best market prices while providing high-quality service. After confirmation, you will get an instant naira payment. <br /> Deal directly with the source.
                </p>
                <div className="banner-btn">
                  <a
                    href="https://api.whatsapp.com/send?text=Hi ARC Exchange! I want to Trade my Bitcoin and Giftcards!&phone=2348185180776"
                    className="default-btn">Exchange Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="main-banner-image">
                <img
                  src="heron.png"
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
          <img src="and.png" alt="shape" />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
