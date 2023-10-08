import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css';

import Home from "./Components/Home/Home";
import OurSolution from "./Components/OurSolutions/OurSolution";
import AboutUs from "./Components/AboutUs/AboutUs";
import ScrollToTop from "./Partials/ScrollToTop";
import ContactUs from "./Components/ContactUs/ContactUs";
import Career from "./Components/Careers/Career";
import News from "./Components/News/News";
import NewsContainer from "./Components/News/NewsContainer";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-solution" element={<OurSolution/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/careers" element={<Career/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/news-container" element={<NewsContainer/>} />
      </Routes>
    </Router>
  );
}

export default App;
