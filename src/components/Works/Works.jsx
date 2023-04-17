import React, { useContext } from "react";
import "./Works.css";
import react from "../../img/react.png";
import mongo from "../../img/mongo.png";
import js from "../../img/js.png";
import ex from "../../img/ex.png";
import node from "../../img/node.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import code from "../../img/code.jpg";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
             <img src={code}alt=""/>
          </span>
          <span>MERN stack Developer
          </span>
          <spane>
           A developer who writes clean, elegant and efficient code!<br/><br/>
           </spane>
          <h7>I've to work with MEAN stack Because is <br/> 
          a free and open-source JavaScript software stack <br/>
          for building dynamic web sites and web applications.</h7> 
          <h1> MERN stack Developer with Freshr experience in <br/> 
          web designing and development, producting the Quality work.</h1>
          
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mongo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={ex} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={node} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
