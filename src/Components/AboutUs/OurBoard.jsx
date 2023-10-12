import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';

import Ashish from '../../Images/AboutUs/OurBorad/Ashish.png';
import Brandon from '../../Images/AboutUs/OurBorad/Brandon.png';
import Ivan from '../../Images/AboutUs/OurBorad/Ivan.png';
import Kunal from '../../Images/AboutUs/OurBorad/Kunal.png';
import Maheep from '../../Images/AboutUs/OurBorad/Maheep.png';
import Naveen from '../../Images/AboutUs/OurBorad/Naveen.png';
import Oliver from '../../Images/AboutUs/OurBorad/Oliver.png';
import Sol from '../../Images/AboutUs/OurBorad/Sol.png';
import { BiLogoLinkedin } from 'react-icons/bi';

export default function OurBoard() {
    const ourBoardTeam = [
        {
            Image: Ashish,
            Name: "Ashish Jalan",
            Designation: "4th Generation entrepreneur",
            Linkedin: ""
        },
        {
            Image: Brandon,
            Name: "Brandon Prater",
            Designation: "8 years of experience in financing and investing",
            Linkedin: ""
        },
        {
            Image: Ivan,
            Name: "Ivan Verughese",
            Designation: "Head of Infrastructure & Energy Capital Asia Pacific",
            Linkedin: ""
        },
        {
            Image: Kunal,
            Name: "Kunal Bajaj",
            Designation: "CEO & Co-Founder",
            Linkedin: ""
        },
        {
            Image: Maheep,
            Name: "Maheep Jain",
            Designation: "Promoter",
            Linkedin: ""
        },
        {
            Image: Naveen,
            Name: "Naveen Chopra",
            Designation: "30+ years of work experience in Telecom & FMCG",
            Linkedin: ""
        },
        {
            Image: Oliver,
            Name: "Oliver Bradley",
            Designation: "Senior Managing Director",
            Linkedin: ""
        },
        {
            Image: Sol,
            Name: "Sol Proops",
            Designation: "Infrastructure and energy business project leader with 2 decades of experience",
            Linkedin: ""
        }
    ]

    const [showModal, setShowModal] = useState(false);
    const [selectedBoardMember, setSelectedBoardMember] = useState(null);

    const openModal = (boardMember) => {
        setSelectedBoardMember(boardMember);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="row" style={{ rowGap: '30px' }}>
                {
                    ourBoardTeam.map((item, index) => {
                        return (<>
                            <div className="col-sm-12 col-lg-4" key={index}>
                                <div className="board__container">
                                    <div className="board__image">
                                        <img src={item.Image} alt={item.Name} />
                                    </div>
                                    <div className="board__name">
                                        <h2>{item.Name}</h2>
                                    </div>
                                    <div className="board__desgn">
                                        <p>{item.Designation}</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="board__linkdln">
                                            <Link to={item.Linkedin} target='__blank'><BiLogoLinkedin /></Link>
                                        </div>
                                        <div className="read__more">
                                            <p onClick={() => openModal(item)}>Read More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Modal show={showModal} onHide={closeModal}>
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="team__image">
                                                <img src={selectedBoardMember?.Image} alt={selectedBoardMember?.Name} />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="team__name">
                                                <h2>{selectedBoardMember?.Name}</h2>
                                            </div>
                                            <div className="team__desgn">
                                                <p>{selectedBoardMember?.Designation}</p>
                                            </div>
                                            <div className="team__descp mt-5">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </>
                        )
                    })
                }
            </div>
        </>
    )
}
