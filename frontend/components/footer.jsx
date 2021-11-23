import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        <div className='favicon'>
          <SocialIcon url="https://www.linkedin.com" bgColor="#D8D9DB" />
        </div>
        <div className='favicon'>
          <SocialIcon url="https://github.com/cjc473" bgColor="#D8D9DB" />
        </div>
        <div className='favicon'>
          <SocialIcon url="https://angel.co/" bgColor="#D8D9DB" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
