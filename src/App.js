import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css';

import Home from "./Components/Home";
import OurSolution from "./Components/OurSolution";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-solution" element={<OurSolution/>} />
      </Routes>
    </Router>
  );
}

export default App;
