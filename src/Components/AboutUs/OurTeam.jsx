import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Modal } from 'react-bootstrap';

import "swiper/css";
// import { Autoplay } from 'swiper/modules';

import Kunal from '../../Images/AboutUs/OurTeam/Kunal.png';
import Deepak from '../../Images/AboutUs/OurTeam/Deepak.png';
import Balkishan from '../../Images/AboutUs/OurTeam/Balakishan.png';
import Rashmin from '../../Images/AboutUs/OurTeam/Rashmin.png';
import Yash from '../../Images/AboutUs/OurTeam/Yash.png';
import Shashank from '../../Images/AboutUs/OurTeam/ShaShank.png';
import KunalImg from '../../Images/AboutUs/OurTeam/Kunal-Bajaj.png';
import DeepakImg from '../../Images/AboutUs/OurTeam/Deepak-Saxena.png';
import BalkishanImg from '../../Images/AboutUs/OurTeam/Balkishan-Chandak.png';
import RashminImg from '../../Images/AboutUs/OurTeam/Rashmin-Vyawahare.png';
import YashImg from '../../Images/AboutUs/OurTeam/Yash-Upadhay.png';
import ShashankImg from '../../Images/AboutUs/OurTeam/Shashank-Goenka.png';

import { BiLogoLinkedin } from 'react-icons/bi';

function TeamDescription({ data }) {
    const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const paragraphs = data.description.split('<br/><br/>');
    const visibleParagraphs = showMore ? paragraphs : paragraphs.slice(0, 2);

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

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="team__image position-relative overflow-hidden mt-4">
                                <img src={data.image} alt={data.name} />
                                {/* <div className="team__linkedin">
                                    <a href={data.linkedin} target='__blank'><BiLogoLinkedin /></a>
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
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                ))}
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
            Image1: KunalImg,
            Name: "Kunal Bajaj",
            Designation: "CEO & Co-Founder",
            Linkedin: "",
            Description: `22+ years of experience in the Telecom, Internet & Technology space <br/><br/><br/>
            Versatile background: Founded AM-acquired company, Partner at Analysys Mason, TRAI Advisor, McKinsey & Jio experience, 3-time startup contributor<br/><br/><br/>
            Education – University of Pennsylvania (Wharton & Engineering Schools); Graduated Honors with Bachelors in Computer Science, Masters in Telecommunications & Networking, Management & Finance Bachelors.`
        },
        {
            Image: Deepak,
            Image1: DeepakImg,
            Name: "Mr. Deepak Saxena",
            Designation: "Senior Vice President - Wireless Op.",
            Linkedin: "",
            Description: `Over 28 Years of experience and thought leadership in Transport Networks, especially optical communications systems with leadership stints across large Indian operators. In the most recent roles at Idea and then Vodafone Idea, engineered the optical and IP transport network for 4G/Enterprise from conceptualization to operationalization for Pan India Network. Headed the automation process of networks in building integrated NOC and initiated the movement to NFV platform. Managed Planning, Project and Operations in rolling out Pan India Optical Fiber Network.<br/><br/><br/>
            Past Experience – Started career in Indian Telecomm services (ITS) from Department of Telecom (DoT), and in past worked in Bharat Sanchar Nigam Limited (BSNL), Reliance Infocomm, Idea Cellular Ltd and Vodafone Idea Ltd.<br/><br/><br/>
            Educational Qualifications – Bachelor’s Degree in Electronics and Communication and MBA in Marketing, certified business course from IIM Kolkata and Stanford University.`
        },
        {
            Image: Balkishan,
            Image1: BalkishanImg,
            Name: "Mr. Balkishan Chandak",
            Designation: "Chief Financial Officer",
            Linkedin: "",
            Description: `23+ years experience in Corporate Finance, Strategic Planning, Financial Analysis, System Development, Supply Chain, Legal & Secretarial<br/><br/><br/>
            Past Experience – Founder of SMART CFO Services, Country CFO & CS in ARAMARK India. Worked in various capacities in Future Group (Retail), Shoppers Stop (Retail), Goldshield International (Pharma), Coca Cola India (FMCG & Mfg.) and HINDALCO (Mfg.)<br/><br/><br/>
            Education – Chartered Accountant, Company Secretary, B. Com (H)`
        },
        {
            Image: Rashmin,
            Image1: RashminImg,
            Name: "Mr. Rashmin Vyawahare",
            Designation: "VP - Strategy and BIS",
            Linkedin: "",
            Description: `17+ years of experience in business strategy, product management and VC investments<br/><br/><br/>
            Past Experience - Jio, Aircel, Reliance Capital, Cambridge Broadband Networks and Tata Communications<br/><br/><br/>
            Education - Post Graduate Diploma in Wireless Telecommunications from Humber College, Toronto, Canada; University of Mumbai (Electronics)`
        },
        {
            Image: Yash,
            Image1: YashImg,
            Name: "Mr. Yash Upadhyay",
            Designation: "VP - Network Planning and Technology",
            Linkedin: "",
            Description: `21 years of work experience in Planning, Rollout, NOC Operations, Network Transformation<br/><br/><br/>
            Past Experience – Ericsson as Expert Solution Architect, Regional Head in Tata Docomo for Planning and RAN Network Operation<br/><br/><br/>
            Education – Bachelor’s of Technology degree from JRN University`
        },
        {
            Image: Shashank,
            Image1: ShashankImg,
            Name: "Mr. Shashank Goenka",
            Designation: "VP - Buisness Development & Sales",
            Linkedin: "",
            Description: `13+ years of experience in Key Account Management, Strategic Alliance, Sales & Marketing, Product Management, Business Planning & Strategy<br/><br/><br/>
            Past Experience - Jio, Sterlite, Reliance Globalcom<br/><br/><br/>
            Education - MBA in International Business & Marketing from ITM (Mumbai), EDHEC (France) and ESSCA (Hungary)`
        }
    ]
    return (
        <>
            <div className="row" style={{rowGap: "25px"}}>
                {
                    ourTeamData.map((item, index) => {
                        return (<>
                            <div className="col-sm-12 col-lg-4">
                                <div className="team__container">
                                    <div className="team__image">
                                        <img src={item.Image} alt={item.Name} height={263} width={263} />
                                    </div>
                                    <div className="team__name">
                                        <h2>{item.Name}</h2>
                                    </div>
                                    <div className="team__desgn">
                                        <p>{item.Designation}</p>
                                    </div>
                                    <div className="">
                                        <TeamDescription data={{ image: item.Image1, linkedin: item.Linkedin, name: item.Name, designation: item.Designation, description: item.Description }} />
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
