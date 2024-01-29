import React, { useEffect, useState } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import TopSection from '../TopSection'

import AboutImg from '../../Images/AboutUs/about.png';
// import Choose from '../../Images/AboutUs/choose.png';
import Customer from '../../Images/AboutUs/customer.png';
import Innovative from '../../Images/AboutUs/idea.png';
import Process from '../../Images/AboutUs/settings.png';
import Scalability from '../../Images/AboutUs/resize.png';
import Profatability from '../../Images/AboutUs/funds.png';
import Commitment from '../../Images/AboutUs/hand-shake.png';
import Union from '../../Images/AboutUs/Union.png';
import CloudInfographicVideo from '../../Images/AboutUs/Cloud_Infographic.webm';

import { BsArrowRight, BsCheck2 } from 'react-icons/bs';
import OurBoard from './OurBoard';
import OurTeam from './OurTeam';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { popUpAnimationProps, textAnimationProps } from '../../Partials/Framer';

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
                top: targetElement.offsetTop - 100,
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = () => {
        const aboutUsTabs = document.querySelector('.aboutUs__tabs');
        if (aboutUsTabs) {
            const aboutUsTabsRect = aboutUsTabs.getBoundingClientRect();
            const scrollY = window.scrollY;

            // Get the end positions of each section
            const aboutUsSectionEnd = document.getElementById('aboutUs').offsetTop + document.getElementById('aboutUs').offsetHeight;
            const whyUsSectionEnd = document.getElementById('whyUs').offsetTop + document.getElementById('whyUs').offsetHeight;
            const ourTeamSectionEnd = document.getElementById('ourTeam').offsetTop + document.getElementById('ourTeam').offsetHeight;
            const ourBoardSectionEnd = document.getElementById('ourBoard').offsetTop + document.getElementById('ourBoard').offsetHeight;
            const ourHertiageSectionEnd = document.getElementById('ourHeritage').offsetTop + document.getElementById('ourHeritage').offsetHeight;
            const joinUsSectionEnd = document.getElementById('joinUs').offsetTop + document.getElementById('joinUs').offsetHeight;

            if (scrollY >= 0 && scrollY < aboutUsSectionEnd - 200) {
                setActiveTab('aboutUs');
            } else if (scrollY >= aboutUsSectionEnd - 20 && scrollY < whyUsSectionEnd - 200) {
                setActiveTab('whyUs');
            } else if (scrollY >= whyUsSectionEnd - 20 && scrollY < ourTeamSectionEnd - 200) {
                setActiveTab('ourTeam');
            } else if (scrollY >= ourTeamSectionEnd - 20 && scrollY < ourBoardSectionEnd - 200) {
                setActiveTab('ourBoard');
            } else if (scrollY >= ourBoardSectionEnd - 20 && scrollY < ourHertiageSectionEnd - 200) {
                setActiveTab('ourHeritage');
            } else if (scrollY >= ourHertiageSectionEnd - 20 && scrollY < joinUsSectionEnd) {
                setActiveTab('joinUs');
            }

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

            <motion.section className='aboutUs__tabs'>
                <motion.div className="container">
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
                </motion.div>
            </motion.section>

            <motion.section style={{ background: '#F5FAFE' }} id='aboutUs'>
                <motion.div className="container">
                    <motion.div className="aboutUs__tabs--container" >
                        <motion.div className="networks__content">
                            <motion.div className="hero__header text-center" {...textAnimationProps}>
                                <h1>Our Guiding Principles</h1>
                            </motion.div>
                            <motion.div className="hero__list mt-5">
                                <motion.ul>
                                    <motion.li {...textAnimationProps}><motion.div className="tick"><BsCheck2 /></motion.div> <motion.div className="ms-2"><p>We enable our clients to deliver world-class networking services to their end users to facilitate the growth of telecom services in India.</p></motion.div></motion.li>
                                    <motion.li {...textAnimationProps}><motion.div className="tick"><BsCheck2 /></motion.div> <motion.div className="ms-2"><p>Grow as a full-stack NaaS provider and help deploy emerging technologies that deliver the most efficient networking services.</p></motion.div></motion.li>
                                    <motion.li {...textAnimationProps}><motion.div className="tick"><BsCheck2 /></motion.div> <motion.div className="ms-2"><p>Facilitate the expansion of heterogeneous and multi-use networks to address the challenges of data consumption explosion and emerging technological architecture.</p></motion.div></motion.li>
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section className='WhyUs' id='whyUs'>
                <motion.div className="container">
                    <motion.div className="aboutUs__tabs--container" >
                        <motion.div className="networks__content networks__content3">
                            <motion.div className="hero__header" {...textAnimationProps}>
                                <h1>Why CloudExtel?</h1>
                            </motion.div>
                            <motion.div className="hero__para mt-4" style={{ width: '610px' }} {...textAnimationProps}>
                                <p>We are driven by the aim of providing tailor-made network solutions that are highly scalable and ensure the utmost client satisfaction.</p>
                            </motion.div>
                        </motion.div>
                        <motion.div className="chooseUs__image text-center mt-4">
                            {/* <img src={Choose} alt="Why choose us" width={757} height={660} /> */}
                            <video autoPlay loop muted playsInline>
                                <source src={CloudInfographicVideo} type='video/webm' />
                            </video>
                        </motion.div>
                        <motion.div className="whyUs__list mt-5">
                            <motion.div className="row" style={{ rowGap: '3rem' }}>
                                <motion.div className="col-sm-12 col-lg-4">
                                    <motion.div className="whyus__container" {...popUpAnimationProps}>
                                        <motion.div className="why__container--image">
                                            <img src={Customer} alt="Customer Centric" />
                                        </motion.div>
                                        <motion.div className="why__container--header">
                                            <h2>Customer Centric</h2>
                                        </motion.div>
                                        <motion.div className="why__container--para">
                                            <p>Identify the client’s pain points and design bespoke quality solutions that guarantee satisfaction.</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                                <motion.div className="col-sm-12 col-lg-4">
                                    <motion.div className="whyus__container" {...popUpAnimationProps}>
                                        <motion.div className="why__container--image">
                                            <img src={Innovative} alt="Innovative" />
                                        </motion.div>
                                        <motion.div className="why__container--header">
                                            <h2>Innovative</h2>
                                        </motion.div>
                                        <motion.div className="why__container--para">
                                            <p>Stay up to date with emerging industry trends and facilitate the development of new services.</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                                <motion.div className="col-sm-12 col-lg-4">
                                    <motion.div className="whyus__container" {...popUpAnimationProps}>
                                        <motion.div className="why__container--image">
                                            <img src={Process} alt="Process & System" />
                                        </motion.div>
                                        <motion.div className="why__container--header">
                                            <h2>Process & System</h2>
                                        </motion.div>
                                        <motion.div className="why__container--para">
                                            <p>Follow guidelines and polish the best practices to grow in several other geographies. </p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="col-sm-12 col-lg-4">
                                    <motion.div className="whyus__container" {...popUpAnimationProps}>
                                        <motion.div className="why__container--image">
                                            <img src={Scalability} alt="Scalability" />
                                        </motion.div>
                                        <motion.div className="why__container--header">
                                            <h2>Scalability</h2>
                                        </motion.div>
                                        <motion.div className="why__container--para">
                                            <p>We leverage operational practices in each geography to provide additional new services to our clients.</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                                <motion.div className="col-sm-12 col-lg-4">
                                    <motion.div className="whyus__container" {...popUpAnimationProps}>
                                        <motion.div className="why__container--image">
                                            <img src={Profatability} alt="Profatability" />
                                        </motion.div>
                                        <motion.div className="why__container--header">
                                            <h2>Profitability</h2>
                                        </motion.div>
                                        <motion.div className="why__container--para">
                                            <p>Ensure profitable growth by providing cost-effective networking solutions across various business verticals.</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                                <motion.div className="col-sm-12 col-lg-4">
                                    <motion.div className="whyus__container" {...popUpAnimationProps}>
                                        <motion.div className="why__container--image">
                                            <img src={Commitment} alt="Commitment" />
                                        </motion.div>
                                        <motion.div className="why__container--header">
                                            <h2>Commitment to excellence</h2>
                                        </motion.div>
                                        <motion.div className="why__container--para">
                                            <p>We leverage advanced skills and expertise to redefine networking and NaaS solutions.</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section >

            <motion.section className='ourBoard' id='ourTeam' style={{ background: '#1456A2' }}>
                <motion.div className="container">
                    <motion.div className="aboutUs__tabs--container" >
                        <motion.div className="hero__header hero__header--white" {...textAnimationProps}>
                            <h1>Our Team</h1>
                        </motion.div>
                        <motion.div className="mt-5">
                            <OurTeam />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section className='ourBoard' id='ourBoard' style={{ background: '#F5FAFE' }}>
                <motion.div className="container">
                    <motion.div className="aboutUs__tabs--container" >
                        <motion.div className="networks__content networks__content3">
                            <motion.div className="hero__header" {...textAnimationProps}>
                                <h1>Our Board</h1>
                            </motion.div>
                        </motion.div>
                        <OurBoard />
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section className='heritage' id='ourHeritage'>
                <motion.div className="container">
                    <motion.div className="row">
                        <motion.div className="col-lg-8">
                            <motion.div className="networks__content networks__content5">
                                <motion.div className="hero__header" {...textAnimationProps}>
                                    <h1>Our Journey</h1>
                                </motion.div>
                                <motion.div className="hero__subHeader1 mt-4" {...textAnimationProps}>
                                    <h3>Evolution of CloudExtel</h3>
                                </motion.div>
                                <motion.div className="hero__para mt-4" {...textAnimationProps}>
                                    <p>Founded in 2014 as a Dark Fiber leasing company in South Mumbai, CloudExtel has witnessed rapid growth as India’s first full-stack Network as a Service(NaaS) provider with a solid presence in over <b>21 states</b> and <b>400+ cities</b> across India.</p>
                                    <p>After the launch of 3G services, the rapid expansion of the telecom industry and the demand for high-speed internet connectivity opened new avenues for <b>BGCL</b> to install its gas pipeline infrastructure to deploy Fiber optic cables inside cast-iron pipelines. CloudExtel was at the forefront of that project and undertook the task with utmost precision and expertise.</p>
                                    <p>We have worked with marquee clients including <b> Airtel, Vodafone Idea, Tata Communications, Tata Sky, RailTel, and Power Grid Corporation of India </b> and have developed strategic partnerships with leading tech giants and industry experts worldwide.</p>
                                    <p>We possess an experienced and dedicated management team with over <b> 100+ years </b> of combined experience and a proven track record of excellence and client satisfaction.</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div className="col-lg-4 heritage__image background__overflow--Left">
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section className='optic' id='joinUs' style={{ background: '#F5FAFE' }}>
                <motion.div className="container">
                    <motion.div className="row" style={{ background: '#1456A2' }}>
                        <motion.div className="col-sm-12 col-lg-6">
                            <motion.div className="optic__details" {...textAnimationProps}>
                                <motion.div className="hero__news--header2">
                                    <h4>Join us</h4>
                                </motion.div>
                                <motion.div className="hero__para--white">
                                    <p>Please reach out to us at <b>careers@cloudextel.com</b> for exciting opportunities to join our rapidly growing team</p>
                                </motion.div>
                                <motion.div className="learn__more--btn"
                                    whileTap={{ scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    viewport={{
                                        once: true,
                                    }}>
                                    <Link to={'/careers'}><button type='button'>Learn More<BsArrowRight /></button></Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div className="col-sm-12 col-lg-6 px-0 d-flex justify-content-end">
                            <motion.div className="hero__image">
                                <img src={Union} alt="Union" width={250} height={300} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
            <Footer />
        </>
    )
}
