import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom";
import './Styles/global.css';
import './Styles/responsive.css';

import Home from "./Components/Home/Home";
import OurSolution from "./Components/OurSolutions/OurSolution";
import AboutUs from "./Components/AboutUs/AboutUs";
import ScrollToTop from "./Partials/ScrollToTop";
import ContactUs from "./Components/ContactUs/ContactUs";
import Career from "./Components/Careers/Career";
import News from "./Components/News/News";
import NewsContainer from "./Components/News/NewsContainer";
import Login from "./Admin/Login";

import Dashboard from "./Admin/Dashboard";
import CreatePost from "./Admin/CreatePost";
import MyState from "./Context/StateProvider";
import { Toaster } from "react-hot-toast";

function App() {

  
  return (
    <MyState>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-solution" element={<OurSolution/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/careers" element={<Career/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/news-container/:id/:title" element={<NewsContainer/>} />

        <Route path="/admin" element={<Login/>} />
        <Route path="/dashboard" element={  <Dashboard/> } />
        <Route path="/create-post" element={<CreatePost/>} />
      </Routes>
      <Toaster/>
    </Router>
  </MyState>
  );
}

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "shubhamsadhu02@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/admin'} />
  }
}