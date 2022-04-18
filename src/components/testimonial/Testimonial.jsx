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
              <h2 className="section-title "> What Others Have to Say About Us</h2>
              <p className="section-sub-title">
                We are a driven currency exchange business that specializes in providing high-quality service
                <br /> at the best market rates and with immediate naira payment.
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
                  <div className="profile">M</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar1.png" />*/}
                </div>
                <div className="testimonial-content">
                  <p>
                    ARC Exchange is quick and dependable. Amazing speed.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Mark Ola</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">I</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar2.png" />*/}
                </div>

                <div className="testimonial-content">
                  <p>
                    The rapidity of the interaction piques my interest. I didn't have to call anyone to receive reimbursed for my gift cards. It's when I'm first finishing a trade in under 4 minutes. Because of ARC Exchange
                  </p>
                </div>

                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Ify Omoha</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">A</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar3.png" />*/}
                </div>
                <div className="testimonial-content">
                  <p>
                    ARC Exchange is a great platform to trade in your items. I am very satisfied with the service.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Amudat Shehu</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">Q</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar4.png" />*/}
                </div>

                <div className="testimonial-content">
                  <p>
                    Wow! You are a specific associate.... You're lightning fast! and at a reasonable rate. It has been a pleasure working with you, Sir.
                  </p>
                </div>

                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Qeebah Odetola</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">R</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar5.png" />*/}
                </div>
                <div className="testimonial-content">
                  <p>
                    It's a breeze to work with ARC Exchange. I always return because of their quickness and dependability; it's just fantastic... I wholeheartedly endorse.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Richard Okorafo</strong>
                  {/*<span className="testimonial-job-title"*/}
                  {/*      itemProp="jobTitle">CEO</span> – <a*/}
                  {/*className="testimonial-link" href="#">Media Wiki</a>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
              <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                  <div className="profile">K</div>
                  {/*<img width="180" height="180"*/}
                  {/*     src="https://bootdey.com/img/Content/avatar/avatar6.png" />*/}
                </div>

                <div className="testimonial-content">
                  <p>
                    I have been using ARC Exchange for the last two years and I am very satisfied with their service. I have been able to get the best rates and the best service.
                  </p>
                </div>

                <div className="testimonial-meta">
                  <strong className="testimonial-name" itemProp="name">Kanyisola Adebayo</strong>
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
