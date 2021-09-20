import React from 'react';
import './testimonial.css';

function Testimonial (props) {

  return (
    <div>
      <section
        className="section-medium section-arrow--bottom-center section-arrow-primary-color bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-white text-center">
              <h2 className="section-title "> What Others Say About Us</h2>
              <p className="section-sub-title">
                We are a passionate Currency exchange agency that specializes in quality service delivery
                <br /> with the best market rates &amp; instant naira payment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-primary t-bordered">
        <div className="container">
          <div className="row testimonial-three testimonial-three--col-three">
            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">N</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar1.png" />*/}
                </div>
                <div className="testimonial-content">
                  <p>
                    Bitcoin Doctor Exchange is fast and reliable. Awesome speed.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Nnenna Nwoke</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">V</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar2.png" />*/}
                </div>

                <div className="testimonial-content">
                  <p>
                    I'm intrigued with the speed of the exchange. I didn't need to call anybody around to get compensated for my gift vouchers. Its whenever I'm initially finishing an exchange inside 3 minutes. Thanks to Bitcoin Doctor Exchange
                  </p>
                </div>

                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Victor
                                                                       Ajayi</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">F</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar3.png" />*/}
                </div>
                <div className="testimonial-content">
                  <p>
                    You are a certain associate ....You're quick! and With sweet Rate Nice working with you Sir
                  </p>
                </div>
                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Fatima
                                                                      Shehu</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">J</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar4.png" />*/}
                </div>

                <div className="testimonial-content">
                  <p>
                    Woaw! The speed was amazing and the rates are really good. It was awesome doing business with you bro.
                  </p>
                </div>

                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">James
                                                                       Odimegwu</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">O</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar5.png" />*/}
                </div>
                <div className="testimonial-content">
                  <p>
                    Omo! Bitcoin doctor exchange na your surest plug! Sweet rates and very fast. Great job brother.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Opeyemi
                                                                       Ade</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">S</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar6.png" />*/}
                </div>

                <div className="testimonial-content">
                  <p>
                    Working with Bitcoin Doctor Exchange is blitz. I always come back due to their speed and reliability, it's just good... I definitely recommend.
                  </p>
                </div>

                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Samuel
                                                                       Ogah</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
