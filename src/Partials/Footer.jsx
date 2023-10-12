import React from 'react'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';

import Logo from '../Images/logo.png';
import { BsArrowUpRight } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
      <footer style={{ background: "#1A2635", padding: "70px 35px 20px" }}>
        <div className="container">
          <div className="footer__top">
            <div className="logo__div">
              <Link to={"/"}><img src={Logo} alt='CloudExtel Logo' height={31} width={150} /></Link>
              <div className="location">
                <FaMapMarkerAlt />
                <p>The Ruby, 11th Floor, AWFIS, Dadar (West), Mumbai, Maharashtra - 400028</p>
              </div>
              <div className="our__subsidiaries">
                <p>Our Subsidiaries</p>
                <div className='our__subsidiaries--list'>
                  <div className="our__subsidiaries--header">
                    <Link><h6>Bombay Gas Company Proprietary Private Limited</h6><BsArrowUpRight /></Link>
                  </div>
                  <div className="our__subsidiaries--header">
                    <Link><h6>Orange wave Networks</h6><BsArrowUpRight /></Link>
                  </div>
                  <div className="our__subsidiaries--header">
                    <Link><h6>Netfra Solutions</h6><BsArrowUpRight /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex'>
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
              <div className="social-list">
                <ul className='d-flex'>
                  <li><BiLogoFacebook style={{ color: "#fff" }} /></li>
                  <li><BiLogoTwitter style={{ color: "#fff" }} /></li>
                  <li><BiLogoInstagram style={{ color: "#fff" }} /></li>
                  <li><BiLogoLinkedin style={{ color: "#fff" }} /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="copyright text-center mt-5">
              <p>© {new Date().getFullYear()} Bombay Gas Ventures Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
