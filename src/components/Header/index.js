import React, {useEffect} from "react";
import Nav from '../Nav'

function Header() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">FOUST</a>
      </h2>
    <Nav></Nav>
    </header>
  );
}

export default Header;