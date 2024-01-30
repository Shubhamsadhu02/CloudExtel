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
import CreateCareer from "./Admin/CreateCareer";
import EditPost from "./Admin/EditPost";
import EditCareer from "./Admin/EditCareer";
import { AnimatePresence } from "framer-motion";
import PageNotFound from "./Partials/PageNotFound";

function App() {
  
  return (
    <AnimatePresence>
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
        <Route path="/:id/:title" element={<NewsContainer/>} />

        <Route path="/admin" element={<Login/>} />
        <Route path="/dashboard" element={ <ProtectedRouteForAdmin> <Dashboard/> </ProtectedRouteForAdmin>} />
        <Route path="/create-post" element={<ProtectedRouteForAdmin> <CreatePost/> </ProtectedRouteForAdmin>} />
        <Route path="/create-career" element={<ProtectedRouteForAdmin> <CreateCareer/> </ProtectedRouteForAdmin>} />
        <Route path="/edit-post/:id/:title" element={<ProtectedRouteForAdmin> <EditPost/> </ProtectedRouteForAdmin>} />
        <Route path="/edit-career/:id/:title" element={<ProtectedRouteForAdmin> <EditCareer/> </ProtectedRouteForAdmin>} />

        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      <Toaster/>
    </Router>
  </MyState>
  </AnimatePresence>
  );
}

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.email === process.env.REACT_APP_ADMIN_EMAIL) {
    return children
  }
  else {
    return <Navigate to={'/admin'} />
  }
}