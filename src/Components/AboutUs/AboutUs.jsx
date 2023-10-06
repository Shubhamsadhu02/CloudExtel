import React, { useEffect, useState } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import TopSection from '../TopSection'

import AboutImg from '../../Images/AboutUs/about.png';
import Choose from '../../Images/AboutUs/choose.png';
import Customer from '../../Images/AboutUs/customer.png';
import Innovative from '../../Images/AboutUs/idea.png';
import Process from '../../Images/AboutUs/settings.png';
import Scalability from '../../Images/AboutUs/resize.png';
import Profatability from '../../Images/AboutUs/funds.png';
import Commitment from '../../Images/AboutUs/hand-shake.png';
import Union from '../../Images/AboutUs/Union.png';
import { BsArrowRight, BsCheck2 } from 'react-icons/bs';
import OurBoard from './OurBoard';
import OurTeam from './OurTeam';

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState('aboutUs');
    const [isTabsSticky, setIsTabsSticky] = useState(false);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        scrollToContent(tabId);
    };

    const scrollToContent = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = () => {
        const aboutUsTabs = document.querySelector('.aboutUs__tabs');
        if (aboutUsTabs) {
            const aboutUsTabsRect = aboutUsTabs.getBoundingClientRect();
            const scrollY = window.scrollY;
            setIsTabsSticky(scrollY >= 700 && scrollY > aboutUsTabsRect.top);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header />

            <TopSection title={"India's Pioneer in Network as a Service Solutions"} image={AboutImg} height={'720px'} />

            <section className='aboutUs__tabs'>
                <div className="container">
                    <ul className={`tabs tabs-list ${isTabsSticky ? 'sticky' : ''}`}>
                        <li className={`tab ${activeTab === 'aboutUs' ? 'active' : ''}`}
                            onClick={() => handleTabClick('aboutUs')}>About Us</li>
                        <li className={`tab ${activeTab === 'whyUs' ? 'active' : ''}`}
                            onClick={() => handleTabClick('whyUs')}>Why us</li>
                        <li className={`tab ${activeTab === 'ourTeam' ? 'active' : ''}`}
                            onClick={() => handleTabClick('ourTeam')}>Our Team</li>
                        <li className={`tab ${activeTab === 'ourBoard' ? 'active' : ''}`}
                            onClick={() => handleTabClick('ourBoard')}>Our Board</li>
                        <li className={`tab ${activeTab === 'ourHeritage' ? 'active' : ''}`}
                            onClick={() => handleTabClick('ourHeritage')}>Our Heritage</li>
                        <li className={`tab ${activeTab === 'joinUs' ? 'active' : ''}`}
                            onClick={() => handleTabClick('joinUs')}>Join Us</li>
                    </ul>
                </div>
            </section>

            <section style={{ background: '#F5FAFE' }} id='aboutUs'>
                <div className="container">
                    <div className="aboutUs__tabs--container" >
                        <div className="networks__content">
                            <div className="hero__header text-center">
                                <h1>Principles That Guide Our Business</h1>
                            </div>
                            <div className="hero__list mt-5">
                                <ul>
                                    <li><BsCheck2 /> <p>Enable our customers to deliver services to their end users at the most critical points of network stress</p></li>
                                    <li><BsCheck2 /> <p>Scale as a neutral specialist offering full stack sharing to address points where self-deployment economics are not feasible</p></li>
                                    <li><BsCheck2 /> <p>Drive adoption of heterogenous and multi-use networks based on principals & technologies from software and cloud platforms for combatting data consumption explosion and emerging 5G architecture</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='WhyUs' id='whyUs'>
                <div className="container">
                    <div className="aboutUs__tabs--container" >
                        <div className="networks__content networks__content3">
                            <div className="hero__header">
                                <h1>What Choose us</h1>
                            </div>
                            <div className="hero__para mt-4" style={{ width: '610px' }}>
                                <p>CloudExtel’s focus on excellence, customer centricity & innovation have led us to build processes that are highly scalable and deliver the best services to our customers</p>
                            </div>
                        </div>
                        <div className="chooseUs__image text-center mt-4">
                            <img src={Choose} alt="Why choose us" width={757} height={660} />
                        </div>
                        <div className="whyUs__list mt-5">
                            <div className="row" style={{ rowGap: '3rem' }}>
                                <div className="col-sm-12 col-lg-4">
                                    <div className="whyus__container">
                                        <div className="why__container--image">
                                            <img src={Customer} alt="Customer Centric" />
                                        </div>
                                        <div className="why__container--header">
                                            <h2>Customer Centric</h2>
                                        </div>
                                        <div className="why__container--para">
                                            <p>Identify customers’ challenge areas in network expansion & QoS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                    <div className="whyus__container">
                                        <div className="why__container--image">
                                            <img src={Innovative} alt="Innovative" />
                                        </div>
                                        <div className="why__container--header">
                                            <h2>Innovative</h2>
                                        </div>
                                        <div className="why__container--para">
                                            <p>Develop and launch new services, leading to new opportunities</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                    <div className="whyus__container">
                                        <div className="why__container--image">
                                            <img src={Process} alt="Process & System" />
                                        </div>
                                        <div className="why__container--header">
                                            <h2>Process & System</h2>
                                        </div>
                                        <div className="why__container--para">
                                            <p>Refine best practices & systems to replicate and scale in other geographies</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-lg-4">
                                    <div className="whyus__container">
                                        <div className="why__container--image">
                                            <img src={Scalability} alt="Scalability" />
                                        </div>
                                        <div className="why__container--header">
                                            <h2>Scalability</h2>
                                        </div>
                                        <div className="why__container--para">
                                            <p>In each geography, leverage operational setup for additional new services</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                    <div className="whyus__container">
                                        <div className="why__container--image">
                                            <img src={Profatability} alt="Profatability" />
                                        </div>
                                        <div className="why__container--header">
                                            <h2>Profatability</h2>
                                        </div>
                                        <div className="why__container--para">
                                            <p>profitable growth through service synergy, optimizing costs across diverse businesses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                    <div className="whyus__container">
                                        <div className="why__container--image">
                                            <img src={Commitment} alt="Commitment" />
                                        </div>
                                        <div className="why__container--header">
                                            <h2>Commitment to excellence</h2>
                                        </div>
                                        <div className="why__container--para">
                                            <p>Committed to excellence, we redefine networking with exceptional NaaS solutions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className='ourBoard' id='ourTeam' style={{ background: '#1456A2' }}>
                <div className="container">
                    <div className="aboutUs__tabs--container" >
                        <div className="hero__header hero__header--white">
                            <h1>Our Team</h1>
                        </div>
                        <div className="mt-5">
                        <OurTeam/>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ourBoard' id='ourBoard' style={{ background: '#F5FAFE' }}>
                <div className="container">
                    <div className="aboutUs__tabs--container" >
                        <div className="networks__content networks__content3">
                            <div className="hero__header">
                                <h1>Our Board</h1>
                            </div>
                        </div>
                        <OurBoard />
                    </div>
                </div>
            </section>

            <section className='heritage' id='ourHeritage'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="networks__content networks__content5">
                                <div className="hero__header">
                                    <h1>Our Heritage</h1>
                                </div>
                                <div className="hero__subHeader1 mt-4">
                                    <h3>A reputed business house</h3>
                                </div>
                                <div className="hero__para mt-4">
                                    <p>The growth of <b>telecom</b> and high demand for high-speed internet connectivity post the launch of 3G data services in India, provided an opportunity for <b>BGCL</b> to leverage its gas pipeline infrastructure to deploy <b>Fibre Optic cables</b> inside the cast-iron pipes.</p>
                                    <p>CloudExtel, started operations in 2014 as a <b>dark fiber</b> leasing company in South Mumbai, however, has rapidly grown to be India’s first full stack <b>Network as a Service (NaaS)</b> company with presence in over <b>21 States</b> and Union Territories & <b>400+ cities</b> and <b>towns</b>.</p>
                                    <p>CloudExtel has marquee customers such as <b>Airtel, Vodafone Idea, Tata Communications, Tata Sky, RailTel, Power Grid Corporation of India,</b> and strategic partnerships with leading global tech companies.</p>
                                    <p>CloudExtel has experienced management team with a <b>100+ years</b> of combined experience and track record for successful delivery.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 heritage__image background__overflow--Left">
                        </div>
                    </div>
                </div>
            </section>

            <section className='optic' id='joinUs'>
                <div className="container">
                    <div className="row" style={{ background: '#1456A2' }}>
                        <div className="col-sm-12 col-lg-6">
                            <div className="hero__news--header2">
                                <h4>Join us</h4>
                            </div>
                            <div className="hero__para--white">
                                <p>Please reach out to us at <b>careers@cloudextel.com</b> forexciting opportunities to join our rapidly growing team</p>
                            </div>
                            <div className="learn__more--btn">
                                <button type='button'>Learn More<BsArrowRight /></button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6" style={{ background: `url(${Union})`, backgroundSize: 'contain', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
