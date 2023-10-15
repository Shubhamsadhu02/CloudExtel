import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Modal } from 'react-bootstrap';

import "swiper/css";
import { Autoplay } from 'swiper/modules';

import Kunal from '../../Images/AboutUs/OurTeam/Kunal.png';
import Tajinde from '../../Images/AboutUs/OurTeam/Tajinde.png';

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
        <div className="team__descp">
            {visibleParagraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            {paragraphs.length > 2 && !showMore && (
                <div className="read__more">
                    <p onClick={openModal} >Read More</p>
                </div>
            )}

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="team__image">
                                <img src={data.image} alt={data.name} />
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
            Name: "Kunal Bajaj",
            Designation: "CEO & Co-Founder",
            Linkedin: "",
            Description: `22+ years of experience in the Telecom, Internet & Technology space <br/><br/><br/>
            Versatile background: Founded AM-acquired company, Partner at Analysys Mason, TRAI Advisor, McKinsey & Jio experience, 3-time startup contributor<br/><br/><br/>
            Education – University of Pennsylvania (Wharton & Engineering Schools); Graduated Honors with Bachelors in Computer Science, Masters in Telecommunications & Networking, Management & Finance Bachelors`
        },
        {
            Image: Tajinde,
            Name: "Tajinder Pal Singh Jaggis",
            Designation: "Senior Vice President - Wireless Operations",
            Linkedin: "",
            Description: `25 years of work experience in Wireless and Wireline Planning, Rollout, Operations, Automation, Transformation and Cost Optimization<br/><br/><br/>
            Past Experience – Bharti Airtel, Circle CTO for Tata Docomo and Director-Fiber, Infra and Enterprise in Ericsson India Ericsson India<br/><br/><br/>
            Past Experience – Bharti Airtel, Circle CTO for Tata Docomo and Director-Fiber, Infra and Enterprise in Ericsson India Ericsson India<br/>
            `
        },
        {
            Image: Kunal,
            Name: "Kunal Bajajsasasa",
            Designation: "CEO & Co-Founder",
            Linkedin: "",
            Description: `22+ years of experience in the Telecom, Internet & Technology space"`
        },
        {
            Image: Tajinde,
            Name: "Tajinder Pal Singh Jaggisssssssssss",
            Designation: "Senior Vice President - Wireless Operations",
            Linkedin: "",
            Description: `25 years of work experience in Wireless and Wireline Planning, Rollout, Operations, Automation, Transformation and Cost Optimization<br/><br/><br/>
            Past Experience – Bharti Airtel, Circle CTO for Tata Docomo and Director-Fiber, Infra and Enterprise in Ericsson India Ericsson India<br/><br/><br/>
            Past Experience – Bharti Airtel, Circle CTO for Tata Docomo and Director-Fiber, Infra and Enterprise in Ericsson India Ericsson India<br/>
            `
        },
    ]
    return (
        <>
            <Swiper
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
                                        <div className="team__image">
                                            <img src={item.Image} alt={item.Name} height={446} width={263} />
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
                                            <TeamDescription data={{ image: item.Image, name: item.Name, designation:item.Designation, description: item.Description }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    })
                }
            </Swiper>
        </>
    )
}
