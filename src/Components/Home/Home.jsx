import React, { useEffect, useState } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';

import HeroBg from '../../Images/Home/Herobg.gif';
import Cell from '../../Images/Home/cell.png';
import Fiber from '../../Images/Home/fiber.png';
import FTTH from '../../Images/Home/ftth.png';
import Virtualize from '../../Images/Home/virtualized.png';
import India from '../../Images/Home/India.png';
import Gas from '../../Images/Home/gas.png';
import Netfra from '../../Images/Home/netfra.png';
import Orange from '../../Images/Home/orange.png';
import Optic from '../../Images/Home/optic.png';

import HomeNewsSection from './HomeNewsSection';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CountUp from 'react-countup';
import IndiaMap from './IndiaMap';

export default function Home() {

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const startCountUp = () => {
      setStartAnimation(true);
    };

    const handleScroll = () => {
      const section = document.querySelector('.data');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
          startCountUp();
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <section className='hero' style={{ backgroundImage: `url(${HeroBg})` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="hero__heading text-center">
            <h1>India’s Leading Network as a Service (NaaS) Provider</h1>
          </div>
          <div className="hero__down">
            <HashLink to={"/#network"} ><h4>Scroll Down <BsArrowDown /> </h4></HashLink>
          </div>
        </div>
      </section>

      <section className='networks' id='network'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8 background__overflow--Right">
              <div className="row our__mission">
                <div className="col-sm-6 col-lg-6">
                  <div className="networks__container">
                    <div className="networks__container--image">
                      <img src={Cell} alt="Cell" />
                    </div>
                    <div className="networks__container--header">
                      <h2>Small Cell Hosting</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>Ready-to-use implementation and management of Small Cell Sites.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="networks__container">
                    <div className="networks__container--image">
                      <img src={Fiber} alt="Fiber" />
                    </div>
                    <div className="networks__container--header">
                      <h2>Fiber</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>We lease our fiber optic network to telecom operators and Internet Service Providers with secured long-term tenures.</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-6">
                  <div className="networks__container">
                    <div className="networks__container--image">
                      <img src={FTTH} alt="FTTH" />
                    </div>
                    <div className="networks__container--header">
                      <h2>FTTH</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>High-speed internet connectivity at your doorstep. Planning, maintaining, and building FTTH networks for Telecom and ISPs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="networks__container">
                    <div className="networks__container--image">
                      <img src={Virtualize} alt="Virtualized" />
                    </div>
                    <div className="networks__container--header">
                      <h2>Virtualized Networks</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>State-of-the-art technology to address and resolve capacity and coverage problems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="networks__content networks__content1">
                <div className="hero__header">
                  <h1>Our Mission</h1>
                </div>
                <div className="hero__para mt-4">
                  <p>We aim to enable a connected
                    world and address the challenges that emerge from the growth of data consumption in India. As a leading NaaS provider, we offer the wireless infrastructure required to build a connected world and aim to bring connectivity closer to the public by addressing critical points of network stress and adopting emerging heterogeneous network technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='networks'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="networks__content networks__content2">
                <div className="hero__header">
                  <h1>About CloudExtel</h1>
                </div>
                <div className="hero__para mt-4">
                  <p>CloudExtel was incorporated with a vision to transform the way enterprises approach networking solutions. Our mission is to offer world-class solutions and empower businesses with seamless, secure, and tailor-made networking solutions.</p>
                </div>
                <div className="hero__subHeader mt-5">
                  <h4>The Spark of Innovation</h4>
                </div>
                <div className="hero__para--light">
                  <p>Our founders, seasoned veterans in the technology and networking industry, recognized the growing challenges faced by businesses in an ever-evolving digital landscape.</p>
                </div>
                <div className="next__sign mt-4">
                  <Link to={'/about-us'}><BsArrowRight /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 Story__image background__overflow--Left">
            </div>
          </div>
        </div>
      </section>

      <section className='data'>
        <div className="container">
          <div className="data__list">
            <ul>
              <li>
                <div className="data__number">
                  <h3>{startAnimation ? (<CountUp end={5600} duration={2} />) : ('0')}&nbsp;KMs+</h3>
                </div>
                <div className="data__name">
                  <p>Fiber Laid</p>
                </div>
              </li>
              <li>
                <div className="data__number">
                  <h3>{startAnimation ? (<CountUp end={4700} duration={2} />) : ('0')}&nbsp;+</h3>
                </div>
                <div className="data__name">
                  <p>Small Cells Sites</p>
                </div>
              </li>
              <li>
                <div className="data__number">
                  <h3>{startAnimation ? (<CountUp end={427} duration={2} />) : ('0')}&nbsp;+</h3>
                </div>
                <div className="data__name">
                  <p>Cities / Towns across <br /> 30 states & UTs</p>
                </div>
              </li>
              <li>
                <div className="data__number">
                  <h3>{startAnimation ? (<CountUp end={1900} duration={2} />) : ('0')}&nbsp;+</h3>
                </div>
                <div className="data__name">
                  <p>Societies</p>
                </div>
              </li>
              <li>
                <div className="data__number">
                  <h3>{startAnimation ? (<CountUp end={1.35} decimals={2} duration={2} />) : ('0')}&nbsp;lac+</h3>
                </div>
                <div className="data__name">
                  <p>Home Passed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='indiaMap'>
        <div className="container">
          <div className="India">
            {/* <img src={India} alt="India Map" /> */}
            <IndiaMap />
          </div>
          <div className="map__details">
            <div className="hero__header">
              <h1>We’re <br /> all over India</h1>
            </div>
            <div className="hero__para">
              <p>We have built a strong foundation basis the scaling of our Infrastructure as a Service business currently focused on Passive Infrastructure</p>
            </div>
            <ul className='map__points'>
              <li>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle id="Ellipse 12" cx="16" cy="16" r="10" fill="#FF9124" />
                  </g>
                </svg>
                <div className="hero__para">
                  <p>Network Presence</p>
                </div>
              </li>
              <li>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle id="Ellipse 12" cx="16" cy="16" r="10" fill="#ADF0F5" />
                  </g>
                </svg>
                <div className="hero__para">
                  <p>State presence</p>
                </div>
              </li>
              <li>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle id="Ellipse 12" cx="16" cy="16" r="10" fill="#1456A2" />
                  </g>
                </svg>
                <div className="hero__para">
                  <p>Offices</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* news trending */}
      <HomeNewsSection />

      {/* <section className='subsidiaries'>
        <div className="container position-relative">
          <div className="networks__content">
            <div className="hero__header text-center">
              <h1>Our Subsidiaries</h1>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-lg-4">
              <div className="subsidiaries__box position-relative">
                <div className="subsidiaries__box--image">
                  <img src={Gas} alt="Gas" />
                </div>
                <div className="subsidiaries__box--para">
                  <p>Bombay Gas Company Proprietary Private Limited</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="subsidiaries__box position-relative">
                <div className="subsidiaries__box--image">
                  <img src={Netfra} alt="Gas" />
                </div>
                <div className="subsidiaries__box--para">
                  <p>Netfra Solutions</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="subsidiaries__box position-relative">
                <div className="subsidiaries__box--image">
                  <img src={Orange} alt="Gas" />
                </div>
                <div className="subsidiaries__box--para">
                  <p>Orange Wave Networks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='optic'>
        <div className="container">
          <div className="row" style={{ background: '#F5FAFE' }}>
            <div className="col-sm-12 col-lg-6">
              <div className="optic__details">
                <div className="hero__news--Header">
                  <h4>Bombay Gas Ventures Expands Fiber Optic Network Coverage</h4>
                </div>
                <div className="hero__para--light">
                  <p>We are thrilled to announce the expansion of our fiber optic network coverage across multiple cities and regions</p>
                </div>
                <div className="hero__contact">
                  <Link to={'/contact-us'}>Contact us</Link><BsArrowRight />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 px-0">
              <div className="hero__image">
                <img src={Optic} alt="Union" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
