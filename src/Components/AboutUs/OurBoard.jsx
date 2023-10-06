import React from 'react'
import { Link } from 'react-router-dom'

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
            Iamge: Ashish,
            Name: "Ashish Jalan",
            Designation: "4th Generation entrepreneur",
            Linkedin: ""
        },
        {
            Iamge: Brandon,
            Name: "Brandon Prater",
            Designation: "8 years of experience in financing and investing",
            Linkedin: ""
        },
        {
            Iamge: Ivan,
            Name: "Ivan Verughese",
            Designation: "Head of Infrastructure & Energy Capital Asia Pacific",
            Linkedin: ""
        },
        {
            Iamge: Kunal,
            Name: "Kunal Bajaj",
            Designation: "CEO & Co-Founder",
            Linkedin: ""
        },
        {
            Iamge: Maheep,
            Name: "Maheep Jain",
            Designation: "Promoter",
            Linkedin: ""
        },
        {
            Iamge: Naveen,
            Name: "Naveen Chopra",
            Designation: "30+ years of work experience in Telecom & FMCG",
            Linkedin: ""
        },
        {
            Iamge: Oliver,
            Name: "Oliver Bradley",
            Designation: "Senior Managing Director",
            Linkedin: ""
        },
        {
            Iamge: Sol,
            Name: "Sol Proops",
            Designation: "Infrastructure and energy business project leader with 2 decades of experience",
            Linkedin: ""
        }
    ]

    return (
        <>
            <div className="row" style={{rowGap: '30px'}}>
                {
                    ourBoardTeam.map((item, index) => {
                        return (<>
                            <div className="col-sm-12 col-lg-4" key={index}>
                                <div className="board__container">
                                    <div className="board__image">
                                        <img src={item.Iamge} alt={item.Name} />
                                    </div>
                                    <div className="board__name">
                                        <h2>{item.Name}</h2>
                                    </div>
                                    <div className="board__desgn">
                                        <p>{item.Designation}</p>
                                    </div>
                                    <div className="board__linkdln">
                                        <Link to={item.Linkedin}><BiLogoLinkedin/></Link>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    })
                }
            </div>
        </>
    )
}
