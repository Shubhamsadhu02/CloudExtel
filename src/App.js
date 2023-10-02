import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css';

import Home from "./Components/Home";
import OurSolution from "./Components/OurSolution";
import AboutUs from "./Components/AboutUs";
import ScrollToTop from "./Partials/ScrollToTop";
import ContactUs from "./Components/ContactUs";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-solution" element={<OurSolution/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
