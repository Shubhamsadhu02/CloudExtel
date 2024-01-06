import React, { useEffect, useState } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import { BsArrowRight } from 'react-icons/bs'

import Solutionhead from '../../Images/Solutions/solutionhead.png';
import Cell from '../../Images/Solutions/cell.png';
import Fiber from '../../Images/Solutions/fiber.png';
import FTTH from '../../Images/Solutions/FTTH.png';
import Virtualized from '../../Images/Solutions/Virtualized.png';
import Optic from '../../Images/Home/optic.png';
import { motion } from 'framer-motion';
import TopSection from '../TopSection';
import { textAnimationProps } from '../../Partials/Framer';

export default function OurSolution() {
    const [activeTab, setActiveTab] = useState('cell');
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
        const solutionTabs = document.querySelector('.solution__tabs');
        if (solutionTabs) {
            const scrollY = window.scrollY;

            // Get the end positions of each motion.section
            const cellSectionEnd = document.getElementById('cell').offsetTop + document.getElementById('cell').offsetHeight;
            const fiberSectionEnd = document.getElementById('fiber').offsetTop + document.getElementById('fiber').offsetHeight;
            const ftthSectionEnd = document.getElementById('ftth').offsetTop + document.getElementById('ftth').offsetHeight;
            const virtualizedSectionEnd = document.getElementById('virtualized').offsetTop + document.getElementById('virtualized').offsetHeight;

            if (scrollY >= 0 && scrollY < cellSectionEnd - 200) {
                setActiveTab('cell');
            } else if (scrollY >= cellSectionEnd - 30 && scrollY < fiberSectionEnd - 200) {
                setActiveTab('fiber');
            } else if (scrollY >= fiberSectionEnd - 30 && scrollY < ftthSectionEnd - 200) {
                setActiveTab('ftth');
            } else if (scrollY >= ftthSectionEnd - 30 && scrollY < virtualizedSectionEnd) {
                setActiveTab('virtualized');
            }

            // Update isTabsSticky based on your requirements
            setIsTabsSticky(scrollY >= 500); // You may adjust this condition for sticky behavior
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const [isExpanded, setIsExpanded] = useState({
    //     cell: false,
    //     fiber: false,
    //     ftth: false,
    //     virtualized: false,
    // });

    // const toggleDescription = (tabId) => {
    //     setIsExpanded((prevState) => ({
    //         ...prevState,
    //         [tabId]: !prevState[tabId],
    //     }));
    // };

    return (
        <>
            <Header />

            <TopSection title={"Cutting-edge Telecom Solutions"} image={Solutionhead} height={'520px'} />

            <motion.section className='solution__tabs'>
                <motion.div className="container">
                    <ul className={`tabs tabs-list ${isTabsSticky ? 'sticky' : ''}`}>
                        <li className={`tab ${activeTab === 'cell' ? 'active' : ''}`}
                            onClick={() => handleTabClick('cell')}>Small Cells Hosting</li>
                        <li className={`tab ${activeTab === 'fiber' ? 'active' : ''}`}
                            onClick={() => handleTabClick('fiber')}>Fiber</li>
                        <li className={`tab ${activeTab === 'ftth' ? 'active' : ''}`}
                            onClick={() => handleTabClick('ftth')}>FTTH</li>
                        <li className={`tab ${activeTab === 'virtualized' ? 'active' : ''}`}
                            onClick={() => handleTabClick('virtualized')}>Virtualized Networks</li>
                    </ul>
                </motion.div>
            </motion.section>

            <motion.section>
                <motion.div className="container">
                    <motion.div className="solution__tabs--container" id='cell'>
                        <motion.div className="row">
                            <motion.div className="col-sm-12 col-lg-6">
                                <motion.div className="solution__image">
                                    <img src={Cell} alt="Small Cell Hosting" />
                                </motion.div>
                            </motion.div>
                            <motion.div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                                <motion.div className="networks__content networks__content4">
                                    <motion.div className="hero__header" {...textAnimationProps}>
                                        <h1>Small cells hosting</h1>
                                    </motion.div>
                                    <motion.div className="hero__para mt-4" {...textAnimationProps}>
                                        <p>CloudExtel provides small-cell hosting services to aid telecom operators in expanding their networks by increasing data capacity offload to improve network quality. We ensure a high-quality customer experience in high-density locations such as urban centres or areas where network signal density requires bolstering. </p>
                                    </motion.div>
                                    {/* {isExpanded.cell && (<> */}
                                    <motion.div className="hero__para mt-4" {...textAnimationProps}>
                                        <p>Small Cells are miniaturized base stations that aid in improving 4G signals. They are installed and operated on sites where the end-user needs improved network signals. </p>
                                    </motion.div>
                                    <motion.div className="hero__subHeader" {...textAnimationProps}>
                                        <h4>Our USP</h4>
                                    </motion.div>
                                    <motion.div className="hero__list--light" {...textAnimationProps}>
                                        <ul>
                                            <li>India’s largest small cell host and preferred choice for Telecom companies</li>
                                            <li>Operations in 21+ states and 180+ towns.</li>
                                            <li>Management of small cell sites including Site Acquisition, Transmission Planning, Site Building and Operations.</li>
                                            <li>Turnkey Small Cell solutions that are ready-to-install</li>
                                            <li>2,000+ kilometres of aerial fibre deployed.</li>
                                            <li>Quick Execution- 7 days from site approval to full implementation.</li>
                                            <li>Our services are available in prime locations like Varanasi Ghats, Somnath Temple, Ajmer Dargah, Gateway of India, and Jallianwala Bagh.</li>
                                        </ul>
                                    </motion.div>
                                    {/* </>)} */}
                                    {/* <motion.div className="read__more" onClick={() => toggleDescription('cell')}>
                                        <p>{isExpanded.cell ? (<>Read Less <BsArrowUp /> </>) : (<>Read More <BsArrowDown /> </>)}</p>
                                    </motion.div> */}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="solution__tabs--container" id='fiber'>
                        <motion.div className="row">
                            <motion.div className="col-sm-12 col-md-12 col-lg-6 order-sm-2 order-2">
                                <motion.div className="networks__content networks__content4 d-flex flex-column justify-content-center">
                                    <motion.div className="hero__header" {...textAnimationProps}>
                                        <h1>Fiber</h1>
                                    </motion.div>
                                    <motion.div className="hero__subHeader1 mt-4" {...textAnimationProps}>
                                        <h3>Underground Fiber</h3>
                                    </motion.div>
                                    <motion.div className="hero__para mt-4" {...textAnimationProps}>
                                        <p>Optical Fiber is one of the most frequently applied and future-proof Black-haul technology that delivers high-speed network connectivity. We offer Fiber Leasing services to telecom operators to grant them full control of their network at cost-effective rates. Dark Fiber also provides high levels of security as it is bespoke and tailored to each telecom operator’s use. Our multi-tenanted and dense underground fiber optic network offers connectivity to the telecom operator’s endpoints. </p>
                                    </motion.div>
                                    {/* {isExpanded.fiber && (<> */}
                                    <motion.div className="hero__subHeader" {...textAnimationProps}>
                                        <h4>Our USP</h4>
                                    </motion.div>
                                    <motion.div className="hero__list--light" {...textAnimationProps}>
                                        <ul>
                                            <li>We have deployed a network of more than 200+ kilometres of underground fiber cables across South Mumbai by using BGCL’s cast-iron pipelines. Fiber cables laid inside cast-iron pipelines under footpaths and bridges are robust and provide high security. We are also working on expanding our underground fiber network in other areas across India.</li>
                                            <li>We build the underground fiber cable with high fiber counts (fiber pairs). With increasing demand due to growing digitization, we lease our underground fiber cables to our clients at affordable rates.</li>
                                            <li>CloudExtel is the first and only provider of underground fiber cables with a high-density network in South Mumbai.</li>
                                            <li>Our Fiber Optic services cater to SME clients, Data Center Connectivity, Enterprises, and an increasing demand for Tower Fiberisation.</li>
                                            <li>We offer state-of-the-art SLAs and boast the highest tenancies in the industry.</li>
                                            <li>Our clients include many tech giants including Airtel, Railtel, SIFY, Vodafone Idea, Tata Communications, PGCIL, and TTSL.</li>
                                        </ul>
                                    </motion.div>
                                    <motion.div className="hero__subHeader1 mt-4" {...textAnimationProps}>
                                        <h3>Overhead Fiber Connectivity (OHFC)</h3>
                                    </motion.div>
                                    <motion.div className="hero__subHeader" {...textAnimationProps}>
                                        <h4>Our USP</h4>
                                    </motion.div>
                                    <motion.div className="hero__list--light" {...textAnimationProps}>
                                        <ul>
                                            <li>Low latency and high-speed fiber links between data centres.</li>
                                            <li>Last-mile connectivity to clients of telecom operators and internet service providers. </li>
                                            <li>Over 1000+ kilometres of OHFC network installed in metropolitan cities like Mumbai and Pune. </li>
                                            <li>Cost-effective rates and the fastest market time in the industry.</li>
                                            <li>Clients include tech giants like Airtel, SIFY, and Vodafone Idea.</li>
                                        </ul>
                                    </motion.div>
                                    {/* </>)} */}
                                    {/* <motion.div className="read__more" onClick={() => toggleDescription('fiber')}>
                                        <p>{isExpanded.fiber ? (<>Read Less <BsArrowUp /> </>) : (<>Read More <BsArrowDown /> </>)}</p>
                                    </motion.div> */}
                                </motion.div>
                            </motion.div>
                            <motion.div className="col-sm-12 col-md-12 col-lg-6 order-sm-1 order-1">
                                <motion.div className="solution__image">
                                    <img src={Fiber} alt="Fiber" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="solution__tabs--container" id='ftth'>
                        <motion.div className="row">
                            <motion.div className="col-sm-12 col-lg-6">
                                <motion.div className="solution__image">
                                    <img src={FTTH} alt="Fiber to the home (FTTH)" />
                                </motion.div>
                            </motion.div>
                            <motion.div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                                <motion.div className="networks__content networks__content4">
                                    <motion.div className="hero__header" {...textAnimationProps}>
                                        <h1>Fiber to the home (FTTH)</h1>
                                    </motion.div>
                                    <motion.div className="hero__para mt-4" {...textAnimationProps}>
                                        <p>CloudExtel brings ultra-high-speed connectivity to your doorstep through cutting-edge Fiber-to-the-home technology. We provide a single platform in commercial and residential areas to bring services from multiple telecom operators and internet service providers.</p>
                                    </motion.div>
                                    {/* {isExpanded.ftth && (<> */}
                                    <motion.div className="hero__para mt-4" {...textAnimationProps}>
                                        <p>Leverage the benefits of increased network performance through our state-of-the-art FTTH solutions. We aim to provide higher speeds over long distances.</p>
                                    </motion.div>
                                    <motion.div className="hero__subHeader" {...textAnimationProps}>
                                        <h4>Our USP</h4>
                                    </motion.div>
                                    <motion.div className="hero__list--light" {...textAnimationProps}>
                                        <ul>
                                            <li>End-to-end services for telecom operators and ISPs targeting homes and residential areas. We take care of the entire process from planning, building, and maintaining the equipment. </li>
                                            <li>Our cluster-based topology ensures a lower cost per HP. </li>
                                            <li>Expanding FTTH services to other metro and non-metro cities.</li>
                                            <li>45,000+ Home Passed delivered.</li>
                                            <li>Our clients include tech giants like Airtel and Tata Sky Broadband.</li>
                                        </ul>
                                    </motion.div>
                                    {/* </>)} */}
                                    {/* <motion.div className="read__more" onClick={() => toggleDescription('ftth')}>
                                        <p>{isExpanded.ftth ? (<>Read Less <BsArrowUp /> </>) : (<>Read More <BsArrowDown /> </>)}</p>
                                    </motion.div> */}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="solution__tabs--container" id='virtualized'>
                        <motion.div className="row">
                            <motion.div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center order-sm-2 order-2">
                                <motion.div className="networks__content networks__content4">
                                    <motion.div className="hero__header" {...textAnimationProps}>
                                        <h1>Virtualized Networks</h1>
                                    </motion.div>
                                    <motion.div className="hero__para mt-4" {...textAnimationProps}>
                                        <p>The telecom industry is growing rapidly and virtualized networks are at the forefront of innovation. We at CloudExtel help enterprises solve complex network capacity and coverage problems through our end-to-end virtualized network solutions. </p>
                                    </motion.div>
                                    {/* {isExpanded.virtualized && (<> */}
                                    <motion.div className="hero__para mt-4" {...textAnimationProps}>
                                        <p>Our service offers reliable and robust networking solutions including the passive network infrastructure with active technology layers on top. We decouple the network services from the physical hardware, allowing them to function independently and making them perfect for any network device. </p>
                                        <p>Our services simplify the efforts of network administrators, making it easier to modify policies, move workloads, and avoid complex and time-consuming configurations.</p>
                                    </motion.div>
                                    {/* </>)} */}
                                    {/* <motion.div className="read__more" onClick={() => toggleDescription('virtualized')}>
                                        <p>{isExpanded.virtualized ? (<>Read Less <BsArrowUp /> </>) : (<>Read More <BsArrowDown /> </>)}</p>
                                    </motion.div> */}
                                </motion.div>
                            </motion.div>
                            <motion.div className="col-sm-12 col-lg-6 order-sm-1 order-1">
                                <motion.div className="solution__image">
                                    <img src={Virtualized} alt="Virtualized Networks" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section className='optic'>
                <motion.div className="container">
                    <motion.div className="row" style={{ background: '#1456A2' }}>
                        <motion.div className="col-sm-12 col-lg-6 d-flex align-items-center">
                            <motion.div className="optic__details" {...textAnimationProps}>
                                <motion.div className="hero__news--header2">
                                    <h4>Discover how we can transform your communication experience</h4>
                                </motion.div>
                                <motion.div className="hero__para--white mt-4">
                                    <p>Take your connectivity to new heights. Connect, communicate, and thrive with Bombay Gas Ventures Pvt. Ltd.</p>
                                </motion.div>
                                <motion.div className="learn__more--btn mt-3"
                                    whileTap={{ scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    viewport={{
                                        once: true,
                                    }}>
                                    <button type='button'>Learn More<BsArrowRight /></button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div className="col-sm-12 col-lg-6 px-0">
                            <motion.div className="hero__image">
                                <img src={Optic} alt="Union" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            <Footer />
        </>
    )
}
