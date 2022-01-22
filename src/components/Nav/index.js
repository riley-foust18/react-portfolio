import React, {useEffect} from "react";

function Nav() {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a data-testid="about" href="#about">
            About me
          </a>
        </li>
        <li className="mx-2">
          <a data-testid="portfolio" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="mx-2">
          <a data-testid="contact" href="#contact">
            Contact
          </a>
        </li>
        <li className="mx-2">
          <a data-testid="resume" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;