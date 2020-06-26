import React from "react";
import { Adsense } from "react-adsense";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="text-center adsbygoogle mt-2">
        <Adsense client="ca-pub-7640562161899788" slot="7259870550" />
      </div>
    </div>
  );
}

export default App;
