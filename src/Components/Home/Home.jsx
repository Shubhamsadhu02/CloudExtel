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
          <div className="hero__heading">
            <h1>India’s First Full Stack Network as a Service (NaaS) Provider</h1>
          </div>
          <div className="hero__down">
          <HashLink to={"/#network"} ><h4>Scroll Down <BsArrowDown /> </h4></HashLink>
          </div>
        </div>
      </section>

      <section className='networks' id='network'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 background__overflow--Right">
              <div className="row" style={{ rowGap: '4rem' }}>
                <div className="col-lg-6">
                  <div className="networks__container">
                    <div className="networks__container--image">
                      <img src={Cell} alt="Cell" />
                    </div>
                    <div className="networks__container--header">
                      <h2>Small Cell Hosting</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>Turnkey execution & management of Small Cell Sites along with connectivity</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="networks__container">
                    <div className="networks__container--image">
                      <img src={Fiber} alt="Fiber" />
                    </div>
                    <div className="networks__container--header">
                      <h2>Fiber</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>Leasing of Dark Fiber to Telcos/ISP’s on lease model with secured long-term</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="networks__container">
                    <div className="networks__container--image">
                      <img src={FTTH} alt="FTTH" />
                    </div>
                    <div className="networks__container--header">
                      <h2>FTTH</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>End to end passive offering (plan, build & maintain) for Telco’s/ISP’s targeting</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="networks__container">
                    <div className="networks__container--image">
                      <img src={Virtualize} alt="Virtualized" />
                    </div>
                    <div className="networks__container--header">
                      <h2>Virtualized Networks</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>Virtualized Networks are at the cutting edge of network evolution. They solve capacity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="networks__content networks__content1">
                <div className="hero__header">
                  <h1>What<br /> we do</h1>
                </div>
                <div className="hero__para mt-4">
                  <p>We own & operate networks that address critical points of network stress, leverage sharing and adopt emerging heterogenous network technologies</p>
                  <p>We have built a strong foundation basis the scaling of our Infrastructure as a Service business currently focused on Passive Infrastructure</p>
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
                  <h1>Our Story</h1>
                </div>
                <div className="hero__para mt-4">
                  <p>At Cloudextel, our journey began with a vision to transform the way businesses approach networking. We set out on a mission to empower organizations with seamless, scalable, and secure networking solutions.</p>
                </div>
                <div className="hero__subHeader mt-5">
                  <h4>The Spark of Innovation</h4>
                </div>
                <div className="hero__para--light">
                  <p>Our founders, seasoned veterans in the technology and networking industry, recognized the growing challenges faced by businesses in an ever-evolving digital landscape.</p>
                </div>
                <div className="next__sign mt-4">
                  <Link to={'/our-solution'}><BsArrowRight /></Link>
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

      <section style={{ background: '#F5FAFE' }}>
        <div className="container">
          <div className="India">
            <img src={India} alt="India Map" />
          </div>
        </div>
      </section>

      {/* news trending */}
      <HomeNewsSection />

      <section className='subsidiaries'>
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
      </section>

      <section className='optic'>
        <div className="container">
          <div className="row" style={{ background: '#F5FAFE' }}>
            <div className="col-sm-12 col-lg-6">
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
            <div className="col-sm-12 col-lg-6" style={{background: `url(${Optic})`, backgroundSize: 'contain', backgroundPosition: 'right', backgroundRepeat: 'no-repeat'}}>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
