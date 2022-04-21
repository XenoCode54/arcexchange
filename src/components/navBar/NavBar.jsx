import React, { useEffect, useState } from 'react';
import './navBar.css';

function NavBar (props) {
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    const toggleNavbar = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('links')[0];

    toggleNavbar.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  }, []);

  const stick = () => {
    setNavBar(window.scrollY >= 200);
  };

  window.addEventListener('scroll', stick);

  return (
    <div className={navBar && 'sticky'}>
      <div className="contain">
        <div className="navbar container">
          {/*logo*/}
          {/*<div>BrandName</div>*/}
          <a className="navbar-brand" href="/">
            <img src="logoo.png" alt="logo" />
            <p className={'nav-title'}>ARC Exchange</p>
          </a>

            <div onClick={() => window.open('https://api.whatsapp.com/send?text=Hi ARC Exchange! I want to Trade my Bitcoin and GiftCards!&phone=2348185180776', '_blank')} className="button2">Trade Now</div>
          <a href="#.." className="toggle-button">
            <span className="bar" /><span className="bar" /><span
            className="bar" />
          </a>
          {/*links*/}
          <div className="nav-links">
            <ul className="links">
              <li><a href="#" style={{ color: '#AE759F' }}
                     className="active">Home</a></li>
              <li>
                {/*<a href="#">Exchange</a>*/}
                {/*<a href="whatsapp://send?text=I want Exchange!&phone=+2348161991217">Exchange</a>*/}
                <a
                  href="https://api.whatsapp.com/send?text=Hi ARC Exchange! I want to Trade my Bitcoin and GiftCards!&phone=2348185180776">Trade</a>
              </li>
              {/*<li><a href="#testimonial">Testimonial</a></li>*/}
            </ul>
          </div>
          {/*button*/}
          <a
            href="https://api.whatsapp.com/send?text=Hi ARC Exchange! I want to Trade my Bitcoin and GiftCards!&phone=2348185180776">
          <div className="button">Trade Now</div>
          </a>

        </div>
      </div>
    </div>
  );
}

export default NavBar;
