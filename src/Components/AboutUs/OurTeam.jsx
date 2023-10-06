import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import { Autoplay } from 'swiper/modules';

import Kunal from '../../Images/AboutUs/OurTeam/Kunal.png';

export default function OurTeam() {

    const ourTeamData = [
        {
            Iamge: Kunal,
            Name: "Kunal Bajaj",
            Designation: "CEO & Co-Founder",
            Linkedin: "",
            Description: `22+ years of experience in the Telecom, Internet & Technology space <br/><br/>
            Versatile background: Founded AM-acquired company, Partner at Analysys Mason, TRAI Advisor, McKinsey & Jio experience, 3-time startup contributor<br/><br/>
            Education – University of Pennsylvania (Wharton & Engineering Schools); Graduated Honors with Bachelors in Computer Science, Masters in Telecommunications & Networking, Management & Finance Bachelors`
        },
        {
            Iamge: Kunal,
            Name: "Kunal Bajajssss",
            Designation: "CEO & Co-Founder",
            Linkedin: "",
            Description: `22+ years of experience in the Telecom, Internet & Technology space`
        },
        {
            Iamge: Kunal,
            Name: "Kunal Bajajsasasa",
            Designation: "CEO & Co-Founder",
            Linkedin: "",
            Description: `22+ years of experience in the Telecom, Internet & Technology space"`
        },
        {
            Iamge: Kunal,
            Name: "Kunal Bajajsasasa",
            Designation: "CEO & Co-Founder",
            Linkedin: "",
            Description: `22+ years of experience in the Telecom, Internet & Technology space"`
        },
        {
            Iamge: Kunal,
            Name: "Kunal Bajajsasasa",
            Designation: "CEO & Co-Founder",
            Linkedin: "",
            Description: `22+ years of experience in the Telecom, Internet & Technology space"`
        }
    ]
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
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
                                    <div className="col-lg-5 d-flex align-items-center justify-content-center">
                                        <div className="team__image">
                                            <img src={item.Iamge} alt="" height={446} width={263} />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="team__name">
                                            <h2>{item.Name}</h2>
                                        </div>
                                        <div className="team__desgn">
                                            <p>{item.Designation}</p>
                                        </div>
                                        <div className="team__descp">
                                            <p dangerouslySetInnerHTML={{__html:item["Description"]}}></p>
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
