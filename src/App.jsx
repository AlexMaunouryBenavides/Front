import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuoteGenerator from "./Components/QuoteGenerator";

const API_URL = "";

function App() {
  return (
    <>
      <div>
        <h1>Your every day quote doses</h1>
      </div>
      <div>
        <QuoteGenerator />
      </div>
    </>
  );
}

export default App;
