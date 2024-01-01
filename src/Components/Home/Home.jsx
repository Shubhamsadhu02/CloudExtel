import React, { useRef } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';

import HeroBg from '../../Images/Home/Herobg.gif';
import Cell from '../../Images/Home/cell.png';
import Fiber from '../../Images/Home/fiber.png';
import FTTH from '../../Images/Home/ftth.png';
import Virtualize from '../../Images/Home/virtualized.png';
// import India from '../../Images/Home/India.png';
// import Gas from '../../Images/Home/gas.png';
// import Netfra from '../../Images/Home/netfra.png';
// import Orange from '../../Images/Home/orange.png';
import Optic from '../../Images/Home/optic.png';

import HomeNewsSection from './HomeNewsSection';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, useInView } from 'framer-motion';
import IndiaMap from './IndiaMap';
import {easeInOutAnimationVariants, popUpAnimationVariants, textAnimationvariants} from '../../Partials/Framer';

export default function Home() {

  return (
    <>
      <Header />
      <motion.section
        className='hero'
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <motion.div
            className="hero__heading text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 3, ease: "easeIn" }}
          >
            <h1>India’s Leading Network as a Service (NaaS) Provider</h1>
          </motion.div>
          <motion.div
            className="hero__down"
            variants={easeInOutAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <HashLink to={"/#network"}>
              <h4>Scroll Down <BsArrowDown /> </h4>
            </HashLink>
          </motion.div>
        </div>
      </motion.section>

      <section className='networks' id='network'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8 background__overflow--Right">
              <div className="row our__mission">
                <div className="col-sm-6 col-lg-6">
                  <motion.div className="networks__container"
                    variants={popUpAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}>
                    <div className="networks__container--image">
                      <img src={Cell} alt="Cell" />
                    </div>
                    <div className="networks__container--header">
                      <h2>Small Cell Hosting</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>Ready-to-use implementation and management of Small Cell Sites.</p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <motion.div className="networks__container"
                    variants={popUpAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}>
                    <div className="networks__container--image">
                      <img src={Fiber} alt="Fiber" />
                    </div>
                    <div className="networks__container--header">
                      <h2>Fiber</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>We lease our fiber optic network to telecom operators and Internet Service Providers with secured long-term tenures.</p>
                    </div>
                  </motion.div>
                </div>

                <div className="col-sm-6 col-lg-6">
                  <motion.div className="networks__container"
                    variants={popUpAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}>
                    <div className="networks__container--image">
                      <img src={FTTH} alt="FTTH" />
                    </div>
                    <div className="networks__container--header">
                      <h2>FTTH</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>High-speed internet connectivity at your doorstep. Planning, maintaining, and building FTTH networks for Telecom and ISPs.</p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <motion.div className="networks__container"
                    variants={popUpAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}>
                    <div className="networks__container--image">
                      <img src={Virtualize} alt="Virtualized" />
                    </div>
                    <div className="networks__container--header">
                      <h2>Virtualized Networks</h2>
                    </div>
                    <div className="networks__container--para">
                      <p>State-of-the-art technology to address and resolve capacity and coverage problems.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="networks__content networks__content1">
                <motion.div className="hero__header"
                  variants={textAnimationvariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}>
                  <h1>Our Mission</h1>
                </motion.div>
                <motion.div className="hero__para mt-4"
                  variants={textAnimationvariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}>
                  <p>We aim to enable a connected
                    world and address the challenges that emerge from the growth of data consumption in India. As a leading NaaS provider, we offer the wireless infrastructure required to build a connected world and aim to bring connectivity closer to the public by addressing critical points of network stress and adopting emerging heterogeneous network technologies.</p>
                </motion.div>
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
                <motion.div className="hero__header"
                  variants={textAnimationvariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}>
                  <h1>About CloudExtel</h1>
                </motion.div>
                <motion.div className="hero__para mt-4"
                  variants={textAnimationvariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}>
                  <p>CloudExtel was incorporated with a vision to transform the way enterprises approach networking solutions. Our mission is to offer world-class solutions and empower businesses with seamless, secure, and tailor-made networking solutions.</p>
                </motion.div>
                <motion.div className=""
                  variants={textAnimationvariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}>
                  <div className="hero__subHeader mt-5">
                    <h4>The Spark of Innovation</h4>
                  </div>
                  <div className="hero__para--light">
                    <p>Our founders, seasoned veterans in the technology and networking industry, recognized the growing challenges faced by businesses in an ever-evolving digital landscape.</p>
                  </div>
                  <div className="next__sign mt-4">
                    <Link to={'/about-us'}><BsArrowRight /></Link>
                  </div>
                </motion.div>
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
              <motion.li
                variants={easeInOutAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}>
                <div className="data__number">
                  {/* <h3>{startAnimation ? (<CountUp end={5600} duration={2} />) : ('0')}&nbsp;KMs+</h3> */}
                  <h3>5,205</h3>
                </div>
                <div className="data__name">
                  <p>SC Cites</p>
                </div>
              </motion.li>
              <motion.li
                variants={easeInOutAnimationVariants}
                initial="initial"
                whileInView="animate">
                <div className="data__number"
                viewport={{
                  once: true,
                }}>
                  {/* <h3>{startAnimation ? (<CountUp end={4700} duration={2} />) : ('0')}&nbsp;+</h3> */}
                  <h3>177,491</h3>
                </div>
                <div className="data__name">
                  <p>HP</p>
                </div>
              </motion.li>
              <motion.li
                variants={easeInOutAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}>
                <div className="data__number">
                  {/* <h3>{startAnimation ? (<CountUp end={427} duration={2} />) : ('0')}&nbsp;+</h3> */}
                  <h3>8,000+</h3>
                </div>
                <div className="data__name">
                  <p>Total Fiber laid</p>
                </div>
              </motion.li>
              <motion.li
                variants={easeInOutAnimationVariants}
                initial="initial"
                whileInView="animate">
                <div className="data__number"
                viewport={{
                  once: true,
                }}>
                  {/* <h3>{startAnimation ? (<CountUp end={1900} duration={2} />) : ('0')}&nbsp;+</h3> */}
                  <h3>1,900+</h3>
                </div>
                <div className="data__name">
                  <p>No. of Societies</p>
                </div>
              </motion.li>
              <motion.li
                variants={easeInOutAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}>
                <div className="data__number">
                  {/* <h3>{startAnimation ? (<CountUp end={1.35} decimals={2} duration={2} />) : ('0')}&nbsp;lac+</h3> */}
                  <h3>340+</h3>
                </div>
                <div className="data__name">
                  <p>No of cities</p>
                </div>
              </motion.li>
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
          <motion.div className="map__details"
          variants={textAnimationvariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          >
            <motion.div className="hero__header">
              <h1>We’re <br /> all over India</h1>
            </motion.div>
            <motion.div className="hero__para">
              <p>We have built a strong foundation basis the scaling of our Infrastructure as a Service business currently focused on Passive Infrastructure</p>
            </motion.div>
            <motion.ul className='map__points'>
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
            </motion.ul>
          </motion.div>
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
              <motion.div className="optic__details"
                variants={textAnimationvariants}
                initial="initial"
                whileInView="animate">
                <motion.div className="hero__news--Header">
                  <h4>Bombay Gas Ventures Expands Fiber Optic Network Coverage</h4>
                </motion.div>
                <motion.div className="hero__para--light">
                  <p>We are thrilled to announce the expansion of our fiber optic network coverage across multiple cities and regions</p>
                </motion.div>
                <motion.div className="hero__contact"
                  whileTap={{ scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  viewport={{
                    once: true,
                  }}>
                  <Link to={'/contact-us'}>Contact us</Link><BsArrowRight />
                </motion.div>
              </motion.div>
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
