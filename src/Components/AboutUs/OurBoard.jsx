import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import { BiLogoLinkedin } from 'react-icons/bi';

import Ashish from '../../Images/AboutUs/OurBorad/Ashish.png';
import Brandon from '../../Images/AboutUs/OurBorad/Brandon.png';
import Ivan from '../../Images/AboutUs/OurBorad/Ivan.png';
import Kunal from '../../Images/AboutUs/OurBorad/Kunal.png';
import Maheep from '../../Images/AboutUs/OurBorad/Maheep.png';
import Naveen from '../../Images/AboutUs/OurBorad/Naveen.png';
import Richard from '../../Images/AboutUs/OurBorad/Richard.png';
import Niel from '../../Images/AboutUs/OurBorad/Niel.png';
import AshishIMG from '../../Images/AboutUs/OurBorad/AshishIMG.png';
import BrandonIMG from '../../Images/AboutUs/OurBorad/Brandon PraterIMG.png';
import IvanIMG from '../../Images/AboutUs/OurBorad/Ivan VerugheseIMG.png';
import KunalIMG from '../../Images/AboutUs/OurBorad/Kunal BajajIMG.png';
import MaheepIMG from '../../Images/AboutUs/OurBorad/Mahip JainIMG.png';
import NaveenIMG from '../../Images/AboutUs/OurBorad/Naveen ChopraIMG.png';
import RichardIMG from '../../Images/AboutUs/OurBorad/RichardIMG.png';
import NielIMG from '../../Images/AboutUs/OurBorad/Niel SchoemanIMG.png';

import { motion } from 'framer-motion';

function TeamDescription({ data }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="read__more">
                <p onClick={openModal} >Read More</p>
            </div>

            <Modal show={showModal} onHide={closeModal} className='d-flex justify-content-center align-items-center'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-5 col-lg-5">
                            <div className="team__image team__image--modal position-relative overflow-hidden mt-4 d-flex justify-content-center">
                                <img src={data.image} alt={data.name} />
                                {/* <div className="team__linkedin">
                                    <a href={data.linkedin} target='__blank'><BiLogoLinkedin /></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                            <div className="team__name">
                                <h2>{data.name}</h2>
                            </div>
                            {/* <div className="team__desgn">
                                <p>{data.designation}</p>
                            </div> */}
                            <div className="team__descp mt-5">
                                {/* <p dangerouslySetInnerHTML={{ __html: data.description }} /> */}
                                <ul>
                                    {data.description.split('<br/><br/>').map((item, index) => (
                                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default function OurBoard() {
    const ourBoardTeam = [
        {
            Image: Ashish,
            ImageModal: AshishIMG,
            Name: "Mr. Ashish Jalan",
            Designation: "4th Generation entrepreneur",
            Linkedin: "https://www.linkedin.com/in/ashishsjalan/",
            Description: `4th Generation entrepreneur <br/><br/>
            Set up leading process automation co based out of Calcutta <br/><br/>
            Acquired and runs an Electrical businesses in Chennai and in the UK <br/><br/>
            Acquired from the TVS Group, turned around and sold a Railway Signalling Business <br/><br/>
            Founded the telecom business using the groups redundant assets <br/><br/>
            All businesses run with high corporate governance and no external debt`
        },
        {
            Image: Brandon,
            ImageModal: BrandonIMG,
            Name: "Mr. Brandon Prater",
            Designation: "8 years of experience in financing and investing",
            Linkedin: "https://www.linkedin.com/in/brandon-prater-0541063/",
            Description: `Brandon has over 28 years of experience in financing and investing in infrastructure, primarily in the European energy and telecom sector. Brandon is an advisor to Macquarie Capital. Previously he was the Co-Head of Partners Group Infrastructure where he helped grow the business into a USD 10bn AUM global investment platform. He chaired the Infrastructure Investment Committee and represented Infrastructure on the Global Investment Committee.<br/><br/>
            Prior to that, Brandon was an Investment Director and member of the investment committee at Infracapital inaugural fund. While at Infracapital he worked with the team successfully invest GBP 900m, focusing on the European telecom and energy sectors. Prior to Infracapital Brandon was a Senior Investment Officer for the AIG-backed USD 550m Emerging Europe Infrastructure Fund, where he focused on the energy, materials and telecom sectors.<br/><br/>
            In addition to equity investment, Brandon’s earlier career experience includes project finance and overseas development/assistance.<br/><br/>
            Brandon holds a Bachelor of Science in Business Administration from the University of Colorado, Boulder and a Masters of Business Administration from the University of Chicago.`
        },
        {
            Image: Ivan,
            ImageModal: IvanIMG,
            Name: "Mr. Ivan Verughese",
            Designation: "Head of Infrastructure & Energy Capital Asia Pacific",
            Linkedin: "https://www.linkedin.com/in/ivan-varughese-91634b20/",
            Description: `Ivan Varughese is the Head of Infrastructure & Energy Capital, Asia Pacific and Senior Managing Director, Infrastructure and Energy Capital Macquarie Capital. Ivan joined Macquarie Capital in 2006 as part of the Australian infrastructure team and led the Infrastructure & Energy Group in Australia and New Zealand from 2017. In 2020, he moved to Singapore to be the Head of the Green Investment Group, Asia Pacific.<br/><br/>
            At Macquarie Capital, Ivan has been involved in several transactions in a financial advisory capacity such as the sale of their Australian renewables portfolio, ANZ Terminals on the acquisition of Graincorp’s bulk liquid terminals, UniSuper on its potential acquisition in Hobart Airport, MIRA-led consortium on its winning bid for the long term lease of Endeavour Energy from the State of NSW for proceeds of $7.6 billion (2017) and many more.<br/><br/>
            His experience extends across both principal investing and financial advisory. Ivan was appointed to his current role in April 2022. Infrastructure & Energy Capital (IEC) is one of Macquarie Capital’s principal investment businesses and is focused on economic and social infrastructure, digital infrastructure, as well as energy transition infrastructure.<br/><br/>
            Ivan holds a Master of Finance from INSEAD, a Bachelor of Law and a Bachelor of Commerce, from the University of Melbourne.`
        },
        {
            Image: Kunal,
            ImageModal: KunalIMG,
            Name: "Mr. Kunal Bajaj",
            Designation: "CEO & Co-Founder",
            Linkedin: "https://www.linkedin.com/in/bajajkunal/",
            Description: `22+ years of experience in the Telecom, Internet & Technology space <br/><br/>
            Versatile background: Founded AM-acquired company, Partner at Analysys Mason, TRAI Advisor, McKinsey & Jio experience, 3-time startup contributor<br/><br/>
            Education – University of Pennsylvania (Wharton & Engineering Schools); Graduated Honors with Bachelors in Computer Science, Masters in Telecommunications & Networking, Management & Finance Bachelors.`
        },
        {
            Image: Maheep,
            ImageModal: MaheepIMG,
            Name: "Mr. Maheep Jain",
            Designation: "Promoter",
            Linkedin: "https://www.linkedin.com/in/maheepjain/",
            Description: `Maheep has over 16 years of experience in minority, build-out and buy-out investments across infrastructure sectors, with a strong focus on energy transition. Maheep joined Macquarie Capital in 2022 as Managing Director, Infrastructure & Energy Capital in India. He has been responsible for the full lifecycle of deals from origination and execution to portfolio management with cumulative equity investments of ~ $1bn.<br/><br/>
            Maheep has Led several marquee investments, viz. $140m in Ayana Power, $85m in Greencell Mobility along with co-leading an acquisition of a 70% stake in Globeleq, the largest IPP in Africa, in a $530m equity deal. He has also served as a board member of several companies.<br/><br/>
            Prior to joining Macquarie Capital, Maheep was an MD at EverSource Capital (US$750m energy transition fund in India) where he invested across renewable, e-mobility and resource efficiency sectors. Prior to EverSource, he was an investment director with CDC Group in London where he led transactions across emerging markets. Maheep started his career with Bechtel Corporation in Houston where he worked on large oil and gas infrastructure projects globally.<br/><br/>
            Maheep holds an MBA from London Business School and a Bachelor of Engineering from IIT Guwahati.`
        },
        {
            Image: Naveen,
            ImageModal: NaveenIMG,
            Name: "Mr. Naveen Chopra",
            Designation: "30+ years of work experience in Telecom & FMCG",
            Linkedin: "https://www.linkedin.com/in/naveen-chopra/",
            Description: `30+ years of work experience in Telecom & FMCG<br/><br/>
            Joined Hutch/ Vodafone in 2004 as CMO and then was the Business Head of the largest circle (Mumbai) while also overseeing Rajasthan; post Vodafone acquisition of Hutch was instrumental in establishing VF's Enterprise Business in India - drove it to become a US$ 1Bn business in 5 years<br/><br/>
            Was COO of the company for 2 years till the company announced its merger with Idea in 2017<br/><br/>
            Exec Committee Member of Vodafone India, and Global Senior Leadership Team of Vodafone Group<br/><br/>
            Prior to Vodafone worked at Britannia Industries in various roles in Sales and Marketing for 16 years. His last role was Head of Marketing for the core Bakery business<br/><br/>
            Worked with TPG as Senior Advisor, and currently on the Advisory Board of mid sized companies`
        },
        {
            Image: Richard,
            ImageModal: RichardIMG,
            Name: "Mr. Richard Tunstall",
            Designation: "",
            Linkedin: "",
            Description: `Richard is a Partner at Advencap, an early-stage digital infrastructure investment firm, broadly operating out of the UK. Having come from 14 years of investment banking in South Africa and the UK, Richard led various transactions in the telecom and IT sectors.<br/><br/>
            Richard is an Alumni of Harvard Business School, a Chartered Accountant and CFA.`
        },
        {
            Image: Niel,
            ImageModal: NielIMG,
            Name: "Mr. Niel Schoeman",
            Designation: "",
            Linkedin: "",
            Description: `Niel is a Partner at Advencap, an early-stage digital infrastructure investment firm, where he brings more than 25 years of experience in the telecommunications and IT industry.<br/><br/>
            In the past, Niel founded and played key leadership roles in South African fixed-line fiber businesses such as Vumatel and Conduct Telecoms, serving as Chairman and CEO.<br/><br/>
            Prior to venturing into telecoms he also established The Birchman Group, a global IT services firm, where he held the positions of Chairman and CEO.<br/><br/>
            Niel holds a Bachelor of Engineering degree from the University of Stellenbosch.`
        }
    ];

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 250,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        })
    };

    return (
        <>
            <motion.div className="row" style={{ rowGap: '30px' }}>
                {
                    ourBoardTeam
                    .sort((a, b) => a.Name.localeCompare(b.Name))
                    .map((item, index) => (
                      <motion.div className="col-sm-12 col-md-6 col-lg-4" key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, }}
                        custom={index}>
                        <motion.div className="board__container">
                          <motion.div className="board__image">
                            <img src={item.Image} alt={item.Name} />
                          </motion.div>
                          <motion.div className="board__name">
                            <h2>{item.Name}</h2>
                          </motion.div>
                          {/* <motion.div className="board__desgn">
                              <p>{item.Designation}</p>
                          </motion.div> */}
                          <motion.div className="d-flex justify-content-between align-items-center mt-5">
                            <motion.div className="board__linkdln">
                              <Link to={item.Linkedin} target='__blank' rel="noopener noreferrer"><BiLogoLinkedin /></Link>
                            </motion.div>
                            {/* <motion.div className="read__more">
                                <p onClick={() => openModal(item)}>Read More</p>
                            </motion.div> */}
                            <TeamDescription data={{ image: item.ImageModal, linkedin: item.Linkedin, name: item.Name, designation: item.Designation, description: item.Description }} />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    ))                  
                }
            </motion.div>
        </>
    )
}
