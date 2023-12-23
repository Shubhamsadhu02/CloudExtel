import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Modal } from 'react-bootstrap';

import "swiper/css";
// import { Autoplay } from 'swiper/modules';

import Kunal from '../../Images/AboutUs/OurTeam/Kunal.png';
import Deepak from '../../Images/AboutUs/OurTeam/Deepak.png';
import Balkishan from '../../Images/AboutUs/OurTeam/Balkishan.png';
import Rashmin from '../../Images/AboutUs/OurTeam/Rashmin.png';
import Yash from '../../Images/AboutUs/OurTeam/Yash.png';
import Shashank from '../../Images/AboutUs/OurTeam/Shashank.png';
import Shubha from '../../Images/AboutUs/OurTeam/Shubha.png';
import Kunmoon from '../../Images/AboutUs/OurTeam/Kunmoon.png';

import { BiLogoLinkedin } from 'react-icons/bi';

function TeamDescription({ data }) {
    // const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // const paragraphs = data.description.split('<br/><br/>');
    // const visibleParagraphs = showMore ? paragraphs : paragraphs.slice(0, 2);

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
                        <div className="col-lg-5">
                            <div className="team__image position-relative overflow-hidden mt-4 d-flex justify-content-center">
                                <img src={data.image} alt={data.name} />
                                {/* <div className="team__linkedin">
                                    <a href={data.linkedin} target='__blank' rel="noopener noreferrer"><BiLogoLinkedin /></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="team__name">
                                <h2>{data.name}</h2>
                            </div>
                            <div className="team__desgn">
                                <p>{data.designation}</p>
                            </div>
                            <div className="team__descp mt-5">
                                <p dangerouslySetInnerHTML={{ __html: data.description }} />
                                {/* {paragraphs.map((paragraph, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                ))} */}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default function OurTeam() {

    const ourTeamData = [
        {
            Image: Kunal,
            Name: "Kunal Bajaj",
            Designation: "CEO & Co-Founder",
            Linkedin: "https://www.linkedin.com/in/bajajkunal/",
            Description: `22+ years of experience in the Telecom, Internet & Technology space <br/><br/>
            Versatile background: Founded AM-acquired company, Partner at Analysys Mason, TRAI Advisor, McKinsey & Jio experience, 3-time startup contributor<br/><br/>
            Education – University of Pennsylvania (Wharton & Engineering Schools); Graduated Honors with Bachelors in Computer Science, Masters in Telecommunications & Networking, Management & Finance Bachelors.`
        },
        {
            Image: Deepak,
            Name: "Mr. Deepak Saxena",
            Designation: "Senior Vice President - Wireless Op.",
            Linkedin: "https://www.linkedin.com/in/deepak-saxena-a949072/",
            Description: `Over 28 Years of experience and thought leadership in Transport Networks, especially optical communications systems with leadership stints across large Indian operators. In the most recent roles at Idea and then Vodafone Idea, engineered the optical and IP transport network for 4G/Enterprise from conceptualization to operationalization for Pan India Network. Headed the automation process of networks in building integrated NOC and initiated the movement to NFV platform. Managed Planning, Project and Operations in rolling out Pan India Optical Fiber Network.<br/><br/>
            Past Experience – Started career in Indian Telecomm services (ITS) from Department of Telecom (DoT), and in past worked in Bharat Sanchar Nigam Limited (BSNL), Reliance Infocomm, Idea Cellular Ltd and Vodafone Idea Ltd.<br/><br/>
            Educational Qualifications – Bachelor’s Degree in Electronics and Communication and MBA in Marketing, certified business course from IIM Kolkata and Stanford University.`
        },
        {
            Image: Balkishan,
            Name: "Mr. Balkishan Chandak",
            Designation: "Chief Financial Officer",
            Linkedin: "https://www.linkedin.com/in/balkishanchandak/",
            Description: `23+ years experience in Corporate Finance, Strategic Planning, Financial Analysis, System Development, Supply Chain, Legal & Secretarial<br/><br/>
            Past Experience – Founder of SMART CFO Services, Country CFO & CS in ARAMARK India. Worked in various capacities in Future Group (Retail), Shoppers Stop (Retail), Goldshield International (Pharma), Coca Cola India (FMCG & Mfg.) and HINDALCO (Mfg.)<br/><br/>
            Education – Chartered Accountant, Company Secretary, B. Com (H)`
        },
        {
            Image: Rashmin,
            Name: "Mr. Rashmin Vyawahare",
            Designation: "VP - Strategy and BIS",
            Linkedin: "https://www.linkedin.com/in/rashmin1980/",
            Description: `17+ years of experience in business strategy, product management and VC investments<br/><br/>
            Past Experience - Jio, Aircel, Reliance Capital, Cambridge Broadband Networks and Tata Communications<br/><br/>
            Education - Post Graduate Diploma in Wireless Telecommunications from Humber College, Toronto, Canada; University of Mumbai (Electronics)`
        },
        {
            Image: Yash,
            Name: "Mr. Yash Upadhyay",
            Designation: "VP - Network Planning and Technology",
            Linkedin: "https://www.linkedin.com/in/yash-upadhyay-3b6247159/",
            Description: `21 years of work experience in Planning, Rollout, NOC Operations, Network Transformation<br/><br/>
            Past Experience – Ericsson as Expert Solution Architect, Regional Head in Tata Docomo for Planning and RAN Network Operation<br/><br/>
            Education – Bachelor’s of Technology degree from JRN University`
        },
        {
            Image: Shashank,
            Name: "Mr. Shashank Goenka",
            Designation: "VP - Buisness Development & Sales",
            Linkedin: "https://www.linkedin.com/in/shashank-goenka-94037914/",
            Description: `13+ years of experience in Key Account Management, Strategic Alliance, Sales & Marketing, Product Management, Business Planning & Strategy<br/><br/>
            Past Experience - Jio, Sterlite, Reliance Globalcom<br/><br/>
            Education - MBA in International Business & Marketing from ITM (Mumbai), EDHEC (France) and ESSCA (Hungary)`
        },
        {
            Image: Shubha,
            Name: "Shubha S. Karra",
            Designation: "Vice President - General Counsel and Head of Risk",
            Linkedin: "https://www.linkedin.com/in/shubha-karra/",
            Description: `We are delighted to welcome Shubha S. Karra as Vice President - General Counsel and Head of Risk.<br/><br/>
            She will be a part of the core leadership team of CloudExtel and will head Legal, Regulatory, Compliance and Risk. Shubha is a corporate lawyer with 15 years of corporate advisory experience in premier Indian law firms and conglomerates.<br/><br/>
            Prior to that she was working in Aditya Birla Group as GM- Legal handling strategic acquisitions and other legal issues in telecom, viscose staple fibre, chemicals and microfinance businesses of the group. Apart from that she has advised clients in IT, hospitality and infrastructure (roads) sectors in the past during her stint in law firms.`
        },
        {
            Image: Kunmoon,
            Name: "Kunmoon Panda",
            Designation: "Assistant Vice President – HR Head ",
            Linkedin: "https://www.linkedin.com/in/kunmoon-panda-8b5a1418/",
            Description: `She has joined us in the position of Assistant Vice President – HR Head based in Mumbai.<br/><br/>
            Kunmoon comes with over 17 years of experience in the various Industries and her last assignment was with Axis Bank as HR Business Partner for Corporate Centre.<br/><br/>
            We are excited to have her on board and we know she will be a valuable asset to the team.<br/><br/>
            Kunmoon will be heading the Human Resources & Admin department and will be reporting to Kunal Bajaj.<br/><br/>
            She likes travelling, reading & is into fitness.`
        }
    ]
    return (
        <>
            <div className="row" style={{ rowGap: "30px" }}>
                {
                    ourTeamData.map((item, index) => {
                        return (<>
                            <div className="col-sm-12 col-lg-4" key={index}>
                                <div className="team__container">
                                    <div className="team__image">
                                        <img src={item.Image} alt={item.Name} height={263} width={263} className='rounded-circle' />
                                    </div>
                                    <div className="team__name">
                                        <h2>{item.Name}</h2>
                                    </div>
                                    <div className="team__desgn text-center">
                                        <p>{item.Designation}</p>
                                    </div>
                                    <div className="">
                                        <TeamDescription data={{ image: item.Image, linkedin: item.Linkedin, name: item.Name, designation: item.Designation, description: item.Description }} />
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    })
                }
            </div>
            {/* <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                    infinite: true,
                }}
                className="mySwiper"
            >
                {
                    ourTeamData.map((item, index) => {
                        return (<SwiperSlide key={index}>
                            <div className="team__container">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="team__image position-relative overflow-hidden">
                                            <img src={item.Image} alt={item.Name} />
                                            <div className="team__linkedin">
                                                <a href={item.Linkedin} target='__blank'><BiLogoLinkedin /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="team__name">
                                            <h2>{item.Name}</h2>
                                        </div>
                                        <div className="team__desgn">
                                            <p>{item.Designation}</p>
                                        </div>
                                        <div className="team__descp mt-5">
                                            <TeamDescription data={{ image: item.Image, linkedin:item.Linkedin, name: item.Name, designation: item.Designation, description: item.Description }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    })
                }
            </Swiper> */}
        </>
    )
}
