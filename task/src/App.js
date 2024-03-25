import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chap1 from "./pages/chap1/chap1";
import Chap2 from "./pages/chap2/chap2";
import Chap3 from "./pages/chap3/chap3";
import Chap4 from "./pages/chap4/chap4";
import Zero from "./pages/zero/zero";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/zero" element={<Zero />}></Route>
        <Route path="/chap1" element={<Chap1 />}></Route>
        <Route path="/chap2" element={<Chap2 />}></Route>
        <Route path="/chap3" element={<Chap3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
