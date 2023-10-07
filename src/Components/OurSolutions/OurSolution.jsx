import React, { useEffect, useState } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import { BsArrowDown, BsArrowRight, BsArrowUp } from 'react-icons/bs'

import Solutionhead from '../../Images/Solutions/solutionhead.png';
import Cell from '../../Images/Solutions/cell.png';
import Fiber from '../../Images/Solutions/fiber.png';
import FTTH from '../../Images/Solutions/FTTH.png';
import Virtualized from '../../Images/Solutions/Virtualized.png';
import Optic from '../../Images/Home/optic.png';
import TopSection from '../TopSection';

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
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = () => {
        const solutionTabs = document.querySelector('.solution__tabs');
        if (solutionTabs) {
            const solutionTabsRect = solutionTabs.getBoundingClientRect();
            const scrollY = window.scrollY;
            setIsTabsSticky(scrollY >= 500 && scrollY > solutionTabsRect.top);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isExpanded, setIsExpanded] = useState({
        cell: false,
        fiber: false,
        ftth: false,
        virtualized: false,
      });

      const toggleDescription = (tabId) => {
        setIsExpanded((prevState) => ({
          ...prevState,
          [tabId]: !prevState[tabId],
        }));
      };

    return (
        <>
            <Header />

            <TopSection title={"Innovative telecom Solutions"} image={Solutionhead} height={'520px'} />

            <section className='solution__tabs'>
                <div className="container">
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
                    <div className="solution__tabs--container" id='cell'>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div className="solution__image">
                                    <img src={Cell} alt="Small Cell Hosting" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                                <div className="networks__content networks__content4">
                                    <div className="hero__header">
                                        <h1>Small cells hosting</h1>
                                    </div>
                                    <div className="hero__para mt-4">
                                        <p>Small Cells Hosting is a service which assists telecom operators in augmenting their 4G networks for data capacity offload, network quality improvement and enhanced customer experience in high traffic density locations in urban centers, or those towns where 4G signal density requires enhancement.</p>
                                        {isExpanded.cell && (<>
                                        <p>Small Cells, which are miniaturized base stations, are able to be installed and operated closer to where end consumers need improved 4G signals by being installed on the sites which we build, own and operate.</p>
                                        </>
                                        )}
                                        </div>
                                    <div className="read__more" onClick={() => toggleDescription('cell')}>
                                        <p>{isExpanded.cell? ( <>Read Less <BsArrowUp /> </>) : ( <>Read More <BsArrowDown /> </>)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="solution__tabs--container" id='fiber'>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div className="networks__content networks__content4 d-flex flex-column justify-content-center">
                                    <div className="hero__header">
                                        <h1>Fiber</h1>
                                    </div>
                                    <div className="hero__subHeader1 mt-4">
                                        <h3>The Spark of Innovation</h3>
                                    </div>
                                    <div className="hero__para mt-4">
                                        <p>Dark Fiber Leasing Services allow telecom operators with limitless scalability and network control at a fraction of the cost of self-building. Benefit from unparalleled security as each operator gets dedicated usage. </p>
                                    </div>
                                    {isExpanded.fiber && (<>
                                    <div className="hero__subHeader1 mt-4">
                                        <h3>Overhead Fiber Connectivity </h3>
                                    </div>
                                    <div className="hero__para mt-4">
                                        <p>At CloudExtel, we tailor fiber connectivity solutions for Telecom operators. Whether linking high-capacity nodes in networks, powering Data Centers with DC-DC links, connecting businesses, or driving Smart City initiatives, we've got you covered</p>
                                    </div>
                                    </>
                                    )}
                                    <div className="read__more" onClick={() => toggleDescription('fiber')}>
                                        <p>{isExpanded.fiber ? ( <>Read Less <BsArrowUp /> </>) : ( <>Read More <BsArrowDown /> </>)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <div className="solution__image">
                                    <img src={Fiber} alt="Fiber" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="solution__tabs--container" id='ftth'>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div className="solution__image">
                                    <img src={FTTH} alt="Fiber to the home (FTTH)" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                                <div className="networks__content networks__content4">
                                    <div className="hero__header">
                                        <h1>Fiber to the home (FTTH)</h1>
                                    </div>
                                    <div className="hero__para mt-4">
                                        <p>CloudExtel brings next generation Fiber-To-The-Home (FTTH) technology that carries ultra high-speed connectivity right into your home for multi-faceted data and voice offerings. CloudExtel provides a single platform to bring services from multiple telecom operators & content providers</p>
                                    </div>
                                    <div className="read__more" onClick={() => toggleDescription('ftth')}>
                                        <p>{isExpanded.ftth? ( <>Read Less <BsArrowUp /> </>) : ( <>Read More <BsArrowDown /> </>)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="solution__tabs--container" id='virtualized'>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                                <div className="networks__content networks__content4">
                                    <div className="hero__header">
                                        <h1>Virtualized Networks</h1>
                                    </div>
                                    <div className="hero__para mt-4">
                                        <p>Virtualized Networks are at the cutting edge of network evolution. They solve capacity and coverage problems in telecom networks which are the most challenging to address. This service offers end to end network solutions, which include the underlying passive network infrastructure along with the active technology layers on top, in a shared and scalable architecture.</p>
                                    </div>
                                    <div className="read__more" onClick={() => toggleDescription('virtualized')}>
                                        <p>{isExpanded.virtualized ? ( <>Read Less <BsArrowUp /> </>) : ( <>Read More <BsArrowDown /> </>)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <div className="solution__image">
                                    <img src={Virtualized} alt="Virtualized Networks" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='optic'>
                <div className="container">
                    <div className="row" style={{ background: '#1456A2' }}>
                        <div className="col-sm-12 col-lg-6">
                            <div className="hero__news--header2">
                                <h4>Discover how we can transform your communication experience</h4>
                            </div>
                            <div className="hero__para--white">
                                <p>Take your connectivity to new heights. Connect, communicate, and thrive with Bombay Gas Ventures Pvt. Ltd.</p>
                            </div>
                            <div className="learn__more--btn">
                                <button type='button'>Learn More<BsArrowRight /></button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6" style={{ background: `url(${Optic})`, backgroundSize: 'contain', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
