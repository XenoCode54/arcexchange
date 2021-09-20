import React from 'react';
import './footer.css';

function Footer (props) {
  return (
    <section className="footer-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <div className="footer-logo">
                <h2><a href="index.html">BitcoinDoctorExchange</a></h2>

                <p>Is the best place to trade your digital assets. Trade with the direct source just like thousands of other Nigerians.
                   Trade with peace of mind.</p>

                <ul className="social">
                  <li>
                    <a href="https://web.facebook.com/Bitcoin-Doctor-Exchange-100891402358023/?_rdr" className="facebook"
                       target="_blank">
                      <i className="bx bxl-facebook"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/bitcoindoctor1"
                       className="instagram" target="_blank">
                      <i className="bx bxl-instagram"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter" target="_blank">
                      <i className="bx bxl-twitter"/>
                    </a>
                  </li>
                  {/*<li>*/}
                  {/*  <a href="#" className="youtube" target="_blank">*/}
                  {/*    <i className="bx bxl-youtube"></i>*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bxs-phone"/>
                  <span>Phone</span>
                  <a href="tel:+2348161991217">+2348161991217</a>
                </li>
                <li>
                  <i className="bx bx-envelope"/>
                  <span>Email</span>
                  <a
                    href="mailto:agoruafrancis@gmail.com">agoruafrancis@gmail.com</a>
                </li>

                <li>
                  <i className="bx bxl-instagram"/>
                  <a href="https://www.instagram.com/bitcoindoctor1">IG: bitcoindoctor1</a>
                </li>

                <li>
                  <i className="bx bxl-facebook"/>
                  <a href="https://web.facebook.com/Bitcoin-Doctor-Exchange-100891402358023/?_rdr">FB: Bitcoin Doctor Exchange</a>
                </li>

              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Services</h3>

              <ul className="quick-links">
                <li>
                  <a href="#">Bitcoin Exchange</a>
                </li>
                <li>
                  <a href="#">Ethereum Exchange</a>
                </li>
                <li>
                  <a href="#">Gift Card Exchange</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
