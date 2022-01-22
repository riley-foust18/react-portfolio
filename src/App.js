import React, {useState} from "react";
import Header from './components/Header';
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Resume></Resume>
    </div>
  )
}

export default App;
