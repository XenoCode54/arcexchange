import { Twitter } from '@mui/icons-material';
import React from 'react';
import './topContactBar.css';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function TopContactBar (props) {
  return (
    <div className="top">
      <div className="top-contact-bar-body container">
        <div className="mob">
          <div className="top-contact-bar-text-container">
            <Twitter className="icon" />
            <p onClick={() => window.open('https://www.twitter.com/robb_arc', '_blank')} className="top-contact-bar-text">robb_arc</p>
          </div>
          <div className="top-contact-bar-text-container">
            <InstagramIcon className="icon" />
            <p  onClick={() => window.open('https://www.instagram.com/robb_arc', '_blank')} className="top-contact-bar-text">IG: robb_arc</p>
          </div>
        </div>
        <div className="mob">
          <div className="top-contact-bar-text-container">
            <PhoneIcon className="icon" />
            <p onClick={() => window.open('tel:+2348185180776', '_blank')}  className="top-contact-bar-text">234(818)5180776</p>
          </div>
          <div className="top-contact-bar-text-container">
            <FacebookIcon className="icon" />
            <p  onClick={() => window.open('https://www.facebook.com/arcexchange', '_blank')} className="top-contact-bar-text">FB: ARC Exchange</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContactBar;
