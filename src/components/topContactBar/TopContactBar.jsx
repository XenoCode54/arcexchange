import React from 'react';
import './topContactBar.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function TopContactBar (props) {
  return (
    <div className="top">
      <div className="top-contact-bar-body container">
        <div className="top-contact-bar-text-container">
          <MailOutlineIcon className="icon" />
          <p className="top-contact-bar-text">agoruafrancis@gmail.com</p>
        </div>
        <div className="top-contact-bar-text-container">
          <PhoneIcon className="icon" />
          <p className="top-contact-bar-text">234(816)1991217</p>
        </div>
        <div className="top-contact-bar-text-container">
          <FacebookIcon className="icon" />
          <p className="top-contact-bar-text">FB: Bitcoin Doctor Exchange</p>
        </div>
        <div className="top-contact-bar-text-container">
          <InstagramIcon className="icon" />
          <p className="top-contact-bar-text">IG: bitcoindoctor1</p>
        </div>
      </div>
    </div>
  );
}

export default TopContactBar;
