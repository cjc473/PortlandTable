import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        <div className='favicons'>
          <SocialIcon url="https://www.linkedin.com" bgColor="#414141" />
        </div>
        <div className='favicons'>
          <SocialIcon url="https://github.com/cjc473" bgColor="#414141" />
        </div>
        <div className='favicons'>
          <SocialIcon url="https://angel.co/" bgColor="#414141" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
