import React from "react";
import './App.css';
import { Navbar } from './components/Navbar';
import { Presentation } from "./components/Presentation";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Presentation />
    </React.Fragment>
  );
}

export default App;
