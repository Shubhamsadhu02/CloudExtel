import React from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'

import Career1 from "../../Images/Careers/career1.png";
import Career2 from "../../Images/Careers/career2.png";
import Career3 from "../../Images/Careers/career3.png";
import Career4 from "../../Images/Careers/career4.png";
import Career5 from "../../Images/Careers/career5.png";
import Competitive from "../../Images/Careers/money.png";
import Health from "../../Images/Careers/healthcare.png";
import Flexible from "../../Images/Careers/clock.png";
import Professional from "../../Images/Careers/development.png";
import Inclusive from "../../Images/Careers/hand-shake.png";
import Rcognization from "../../Images/Careers/reward.png";
import CareerContainer from './CareerContainer';

import { motion } from 'framer-motion';
import { easeInOutAnimationProps, popUpAnimationProps, textAnimationProps } from '../../Partials/Framer';

export default function Career() {
  return (
    <>
      <Header isWhite={false} />

      <motion.section className='career__TopSection'>
        <motion.div className="container">
          <motion.div className="hero__heading text-center" {...textAnimationProps}>
            <h1 style={{ color: '#233852' }}>Revolutionalize the Networking Industry With Us</h1>
          </motion.div>
          {/* <motion.div className="View_opportunities text-center">
            <HashLink to={"#career"} ><h4>View Opportunities <BsArrowDown /> </h4></HashLink>
          </motion.div> */}

          <motion.div class="imgae__grid">
            <motion.div class="grid-item">
              <img src={Career1} alt="Career" />
            </motion.div>
            <motion.div class="grid-item">
              <img src={Career2} alt="Career" />
              <motion.div class="sub-grid">
                <motion.div>
                  <img src={Career3} alt="Career" />
                </motion.div>
                <motion.div>
                  <img src={Career4} alt="Career" />
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div class="grid-item">
              <img src={Career5} alt="Career" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="perks">
        <motion.div className="container">
          <motion.div className="hero__header" {...textAnimationProps}>
            <h1 style={{ color: '#FFF' }}>We Prioritise Employee <br />Satisfaction</h1>
          </motion.div>
          <motion.div className="row" style={{ rowGap: "40px" }}>
            <motion.div className="col-sm-12 col-lg-4">
              <motion.div className="perks__container" {...popUpAnimationProps}>
                <motion.div className="perks__image">
                  <img src={Competitive} alt="Competitive" />
                </motion.div>
                <motion.div className="perks__header">
                  <h3>Competitive Compensation</h3>
                </motion.div>
                <motion.div className="perks__para">
                  <p>We value hard work and ensure competitive compensation that reflects your skills and expertise.</p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="col-sm-12 col-lg-4">
              <motion.div className="perks__container" {...popUpAnimationProps}>
                <motion.div className="perks__image">
                  <img src={Health} alt="Health" />
                </motion.div>
                <motion.div className="perks__header">
                  <h3>Health & Wellness</h3>
                </motion.div>
                <motion.div className="perks__para">
                  <p>At CloudExtel, we prioritise employee health and wellness. We offer health insurance plans, wellness programs, and access to our state-of-the-art fitness facility to our employees to ensure they are of sound body and mind. </p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="col-sm-12 col-lg-4">
              <motion.div className="perks__container" {...popUpAnimationProps}>
                <motion.div className="perks__image">
                  <img src={Flexible} alt="Flexible" />
                </motion.div>
                <motion.div className="perks__header">
                  <h3>Flexible Hours</h3>
                </motion.div>
                <motion.div className="perks__para">
                  <p>We believe an employee does their best work with a healthy work-life balance. Our flexible working hours support your professional and personal well-being.</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="col-sm-12 col-lg-4">
              <motion.div className="perks__container" {...popUpAnimationProps}>
                <motion.div className="perks__image">
                  <img src={Professional} alt="Professional" />
                </motion.div>
                <motion.div className="perks__header">
                  <h3>Professional Development</h3>
                </motion.div>
                <motion.div className="perks__para">
                  <p>Innovation and Learning are key to an inmotion.dividual’s development. At CloudExtel, we provide opportunities for skill enhancement, training, and workshops to help you upscale and drive the growth of our employees.</p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="col-sm-12 col-lg-4">
              <motion.div className="perks__container" {...popUpAnimationProps}>
                <motion.div className="perks__image">
                  <img src={Inclusive} alt="Inclusive" />
                </motion.div>
                <motion.div className="perks__header">
                  <h3>Inclusive Environment</h3>
                </motion.div>
                <motion.div className="perks__para">
                  <p>We believe in Unity in motion.diversity. Our inclusive environment makes everyone feel welcome and respected. We reject biasedness and strive to provide equal opportunities to everyone.</p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="col-sm-12 col-lg-4">
              <motion.div className="perks__container" {...popUpAnimationProps}>
                <motion.div className="perks__image">
                  <img src={Rcognization} alt="Reward" />
                </motion.div>
                <motion.div className="perks__header">
                  <h3>Recognition & Rewards</h3>
                </motion.div>
                <motion.div className="perks__para">
                  <p>Our employees make the organisation and their efforts never go unnoticed. We recognize employee hard work and performance through various reward programs, both monetary and non-monetary.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className='fuelling'>
        <motion.div className="container">
          <motion.div className="row">
            <motion.div className="col-lg-7">
              <motion.div className="networks__content networks__content6">
                <motion.div className="hero__header" {...textAnimationProps}>
                  <h1>Leveraging Innovation and Delivering Excellence</h1>
                </motion.div>
                <motion.div className="hero__subHeader1 mt-4" {...textAnimationProps}>
                  <h3>Collaboration</h3>
                </motion.div>
                <motion.div className="hero__para mt-4" {...textAnimationProps}>
                  <p>We ensure transparent communication and collaboration to ensure a healthy exchange of ideas that drive innovation. We believe teamwork prevails where an inmotion.dividual fails. </p>
                </motion.div>
                <motion.div className="hero__subHeader1 mt-4" {...textAnimationProps}>
                  <h3>Innovation</h3>
                </motion.div>
                <motion.div className="hero__para mt-4" {...textAnimationProps}>
                  <p>Innovation is the Heart of Development. We motivate our employees to explore new challenges and conventions and pioneer the growth of the networking industry.</p>
                </motion.div>
                <motion.div className="hero__subHeader1 mt-4" {...textAnimationProps}>
                  <h3>Upscaling & Development</h3>
                </motion.div>
                <motion.div className="hero__para mt-4" {...textAnimationProps}>
                  <p>At CloudExtel, we ensure skill-building and encourage our team’s growth by providing skill enhancement opportunities, training programs, and workshops.</p>
                </motion.div>
                {/* <motion.div className="View_opportunities">
                  <HashLink to={"#career"} ><h4>View Opportunities <BsArrowDown /> </h4></HashLink>
                </motion.div> */}
              </motion.div>
            </motion.div>
            <motion.div className="col-lg-5 fuelling__image background__overflow--Left">
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className='data'>
        <motion.div className="container">
          <motion.div className="aboutUs__tabs--container" >
            <motion.div className="hero__header hero__header--white text-center" {...textAnimationProps}>
              <h1>Our locations</h1>
            </motion.div>
            <motion.div className="data__list data__list1">
              <motion.ul>
                <motion.li {...easeInOutAnimationProps}>
                  <motion.div className="data__number">
                    <h3>Mumbai</h3>
                  </motion.div>
                  <motion.div className="data__name">
                    <p>100 + Workforce</p>
                  </motion.div>
                </motion.li>
                <motion.li {...easeInOutAnimationProps}>
                  <motion.div className="data__number">
                    <h3>Bangalore</h3>
                  </motion.div>
                  <motion.div className="data__name">
                    <p>100 + Workforce</p>
                  </motion.div>
                </motion.li>
                <motion.li {...easeInOutAnimationProps}>
                  <motion.div className="data__number">
                    <h3>Indore</h3>
                  </motion.div>
                  <motion.div className="data__name">
                    <p>100 + Workforce</p>
                  </motion.div>
                </motion.li>
                <motion.li {...easeInOutAnimationProps}>
                  <motion.div className="data__number">
                    <h3>Bhubneshwar</h3>
                  </motion.div>
                  <motion.div className="data__name">
                    <p>100 + Workforce</p>
                  </motion.div>
                </motion.li>
                <motion.li {...easeInOutAnimationProps}>
                  <motion.div className="data__number">
                    <h3>Jaipur</h3>
                  </motion.div>
                  <motion.div className="data__name">
                    <p>100 + Workforce</p>
                  </motion.div>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className='career' id='career'>
        <motion.div className="container">
          <motion.div className="networks__content networks__content3">
            <motion.div className="hero__header" {...textAnimationProps}>
              <h1>Career Opportunities</h1>
            </motion.div>
            <motion.div className="hero__para mt-4" style={{ width: '660px' }} {...textAnimationProps}>
              <p>Employees are the heart and soul of an organisation. Want to contribute to the
                ever-changing networking landscape? Reach out to us. </p>
            </motion.div>
          </motion.div>

          {/* Create career list here  */}
          <CareerContainer />
        </motion.div>
      </motion.section>

      <Footer />
    </>
  )
}