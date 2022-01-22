import React, {useState, useEffect} from "react";
import linkedIn from '../../assets/images/linkedin-logo.png';
import github from '../../assets/images/github-icon.png';
import stackOverflow from '../../assets/images/stackoverflow-icon.png'

function Footer() {
  return (
    <footer className="flex-row">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/rileyfoust/" className="mx-2 icon">
          <img src={linkedIn}/>
        </a>
        <a href="https://github.com/riley-foust18" className="mx-2 icon">
          <img src={github}/>
        </a>
        <a href="https://stackoverflow.com/users/16518340/riley-foust18" className="mx-2 icon">
          <img src={stackOverflow}/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;