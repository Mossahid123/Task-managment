
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
