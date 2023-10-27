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
import { Link } from 'react-router-dom';

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

            <TopSection title={"Pioneer in Network as a Service Solutions"} image={AboutImg} height={'600px'} />

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
                                <h1>Our Guiding Principles</h1>
                            </div>
                            <div className="hero__list mt-5">
                                <ul>
                                    <li><div className="tick"><BsCheck2 /></div> <div className="ms-2"><p>We strive to enable our clients and help them deliver world-class networking services to their end users to facilitate the growth of telecom services in India.</p></div></li>
                                    <li><div className="tick"><BsCheck2 /></div> <div className="ms-2"><p>Grow as a full-stack NaaS provider and help deploy emerging technologies that deliver the most efficient networking services.</p></div></li>
                                    <li><div className="tick"><BsCheck2 /></div> <div className="ms-2"><p>Facilitate the expansion of heterogeneous and multi-use networks to address the challenges of data consumption explosion and emerging technological architecture.</p></div></li>
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
                                <h1>Why CloudExtel?</h1>
                            </div>
                            <div className="hero__para mt-4" style={{ width: '610px' }}>
                                <p>We are driven by the aim of providing tailor-made network solutions that are highly scalable and ensure the utmost client satisfaction.</p>
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
                                            <p>Identify the client’s pain points and design bespoke quality solutions that guarantee satisfaction.</p>
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
                                            <p>Stay up to date with emerging industry trends and facilitate the development of new services.</p>
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
                                            <p>Follow guidelines and polish the best practices to grow in several other geographies. </p>
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
                                            <p>We leverage operational practices in each geography to provide additional new services to our clients.</p>
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
                                            <p>Ensure profitable growth by providing cost-effective networking solutions across various business verticals.</p>
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
                                            <p>We leverage advanced skills and expertise to redefine networking and NaaS solutions.</p>
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
                            <OurTeam />
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
                            <div className="optic__details">
                                <div className="hero__news--header2">
                                    <h4>Join us</h4>
                                </div>
                                <div className="hero__para--white">
                                    <p>Please reach out to us at <b>careers@cloudextel.com</b> for exciting opportunities to join our rapidly growing team</p>
                                </div>
                                <div className="learn__more--btn">
                                    <Link to={'/contact-us'}><button type='button'>Learn More<BsArrowRight /></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 px-0 d-flex justify-content-end">
                            <div className="hero__image">
                                <img src={Union} alt="Union" width={250} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
