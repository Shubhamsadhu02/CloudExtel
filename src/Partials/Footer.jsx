import React from 'react'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';

import Logo from '../Images/logo.png';

export default function Footer() {
  return (
    <>
      <footer style={{ background: "#1A2635", height: "auto" }}>
        <div className="container">
          <div className="footer" style={{ padding: "70px 35px 20px" }}>
            <div className="row">
              <div className="col-sm-12 col-lg-3">
                <a href='/'><img src={Logo} alt='CloudExtel Logo' height="31" width="150" /></a>
                <div className="location">
                <FaMapMarkerAlt />
                <p>The Ruby, 11th Floor, AWFIS, Dadar (West),
                  Mumbai, Maharashtra - 400028 </p>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3">
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link to={'/about-us'}>About</Link>
                    </li>
                    <li>
                      <Link to={'/our-solution'}>Solutions</Link>
                    </li>
                    <li>
                      <Link to={'#'}>Services</Link>
                    </li>
                    <li>
                      <Link to={'/careers'}>Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3">
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link to={'#'}>Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to={'#'}>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3">
                <div className="social-list">
                  <ul className='d-flex'>
                    <li><BiLogoFacebook/></li>
                    <li><BiLogoTwitter/></li>
                    <li><BiLogoInstagram/></li>
                    <li><BiLogoLinkedin/></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright text-center mt-5">
            <p>© {new Date().getFullYear()} Bombay Gas Ventures Pvt. Ltd. All rights reserved.</p>
          </div>
          </div>
        </div>
      </footer>
    </>
  )
}
