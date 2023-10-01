import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css';

import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
