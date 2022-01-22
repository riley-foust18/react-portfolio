import React, {useState, useEffect} from "react";
import Nav from '../Nav'
import { capitalizeFirstLetter } from "../../utils/helpers";

function Header() {
  const [categories] = useState(['about', 'portfolio', 'contact', 'resume']);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">FOUST</a>
      </h2>
    <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
    ></Nav>
    </header>
  );
}

export default Header;