import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        <div className="f-icons">
        <a href="https://instagram.com/7okeshprajapati23_">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/people/Lokesh-Prajapati/100008222173507/" >        
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/7okesh">
          <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://twitter.com/7okesh23">
          <Twitter color="white" size={"3rem"} />
          </a>
            
          <a href="https://linkedin.com/in/7okesh">
          <LinkedIn color="white" size={"3rem"} />
          </a>
          
         
        </div>
        <span>" &copy; 2022 @7okeSH, All rights reserved. "</span>
      </div>
      
    </div>
  );
};

export default Footer;
