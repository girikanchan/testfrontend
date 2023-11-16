// Footer.js

import React from 'react';
import './Footer.css';  // Assuming you have a separate CSS file

function Footer() {
  return (
    <div className='sb_footer_below'>
      <div className='sb_footer_below_left'>
        <p>
          Designed by <b>Elegant Themes</b> | Powered by <b>WordPress</b>
        </p>
      </div>

      <div className='sb_footer_below_right'>
        <i className="fab fa-facebook-f" style={{ color: "#474d57" }}></i>
        <i className="fab fa-twitter" style={{ color: "#474d57" }}></i>
        <i className="fab fa-google-plus-g" style={{ color: "#474d57" }}></i>
        <i className="fas fa-wifi" style={{ color: "#474d57", transform: "rotate(45deg)" }}></i>
      </div>
    </div>
  );
}

export default Footer;
