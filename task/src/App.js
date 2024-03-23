import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,

} from "react-router-dom";
import Home from './pages/Home';
import Chap1 from './pages/chap1/chap1';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/chap1' element={<Chap1/>}>
      <Route path='/chap2' element={<Chap1/>}></Route>
      <Route path='/chap3' element={<Chap1/>}></Route>
      <Route path='/chap4' element={<Chap1/>}></Route>
      </Route>
    </Routes>
  </div>
  );
}

export default App;
