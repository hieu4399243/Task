import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const home = () => {
    return (
      <div className="home">
        <h1>List task</h1>
        <nav>
          <ul style={{ padding: "0px" }}>
            <li className="chap">
              <Link to="/zero">
                Chap Zero: Function component and Class component
              </Link>
            </li>
            <li className="chap">
              <Link to="/chap1">Chap 1: Vòng đời của component</Link>
            </li>
            <li className="chap">
              <Link to="/chap2">Chap 2: State and Props</Link>
            </li>
            <li className="chap">
              <Link to="/chap3">Chap 3: Các thẻ HTML</Link>
            </li>
            <li className="chap">
              <Link to="/chap4">Chap 4: Redux</Link>
            </li>
            <li>
              <Link to="/ref">Ref</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  return <div>{home()}</div>;
}
