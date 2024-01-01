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
import CareerContainer from './CareerContainer'

export default function Career() {
  return (
    <>
      <Header isWhite={false} />

      <section className='career__TopSection'>
        <div className="container">
          <div className="hero__heading text-center">
            <h1 style={{ color: '#233852' }}>Revolutionalize the Networking Industry With Us</h1>
          </div>
          {/* <div className="View_opportunities text-center">
            <HashLink to={"#career"} ><h4>View Opportunities <BsArrowDown /> </h4></HashLink>
          </div> */}

          <div class="imgae__grid">
            <div class="grid-item">
              <img src={Career1} alt="Career" />
            </div>
            <div class="grid-item">
              <img src={Career2} alt="Career" />
              <div class="sub-grid">
                <div>
                  <img src={Career3} alt="Career" />
                </div>
                <div>
                  <img src={Career4} alt="Career" />
                </div>
              </div>
            </div>
            <div class="grid-item">
              <img src={Career5} alt="Career" />
            </div>
          </div>
        </div>
      </section>

      <section className="perks">
        <div className="container">
          <div className="hero__header">
            <h1 style={{ color: '#FFF' }}>We Prioritise Employee <br />Satisfaction</h1>
          </div>
          <div className="row" style={{ rowGap: "40px" }}>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__container">
                <div className="perks__image">
                  <img src={Competitive} alt="Competitive" />
                </div>
                <div className="perks__header">
                  <h3>Competitive Compensation</h3>
                </div>
                <div className="perks__para">
                  <p>We value hard work and ensure competitive compensation that reflects your skills and expertise.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__container">
                <div className="perks__image">
                  <img src={Health} alt="Health" />
                </div>
                <div className="perks__header">
                  <h3>Health & Wellness</h3>
                </div>
                <div className="perks__para">
                  <p>At CloudExtel, we prioritise employee health and wellness. We offer health insurance plans, wellness programs, and access to our state-of-the-art fitness facility to our employees to ensure they are of sound body and mind. </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__container">
                <div className="perks__image">
                  <img src={Flexible} alt="Flexible" />
                </div>
                <div className="perks__header">
                  <h3>Flexible Hours</h3>
                </div>
                <div className="perks__para">
                  <p>We believe an employee does their best work with a healthy work-life balance. Our flexible working hours support your professional and personal well-being.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4">
              <div className="perks__container">
                <div className="perks__image">
                  <img src={Professional} alt="Professional" />
                </div>
                <div className="perks__header">
                  <h3>Professional Development</h3>
                </div>
                <div className="perks__para">
                  <p>Innovation and Learning are key to an individual’s development. At CloudExtel, we provide opportunities for skill enhancement, training, and workshops to help you upscale and drive the growth of our employees.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__container">
                <div className="perks__image">
                  <img src={Inclusive} alt="Inclusive" />
                </div>
                <div className="perks__header">
                  <h3>Inclusive Environment</h3>
                </div>
                <div className="perks__para">
                  <p>We believe in Unity in Diversity. Our inclusive environment makes everyone feel welcome and respected. We reject biasedness and strive to provide equal opportunities to everyone.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__container">
                <div className="perks__image">
                  <img src={Rcognization} alt="Reward" />
                </div>
                <div className="perks__header">
                  <h3>Recognition & Rewards</h3>
                </div>
                <div className="perks__para">
                  <p>Our employees make the organisation and their efforts never go unnoticed. We recognize employee hard work and performance through various reward programs, both monetary and non-monetary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='fuelling'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="networks__content networks__content6">
                <div className="hero__header">
                  <h1>Leveraging Innovation and Delivering Excellence</h1>
                </div>
                <div className="hero__subHeader1 mt-4">
                  <h3>Collaboration</h3>
                </div>
                <div className="hero__para mt-4">
                  <p>We ensure transparent communication and collaboration to ensure a healthy exchange of ideas that drive innovation. We believe teamwork prevails where an individual fails. </p>
                </div>
                <div className="hero__subHeader1 mt-4">
                  <h3>Innovation</h3>
                </div>
                <div className="hero__para mt-4">
                  <p>Innovation is the Heart of Development. We motivate our employees to explore new challenges and conventions and pioneer the growth of the networking industry.</p>
                </div>
                <div className="hero__subHeader1 mt-4">
                  <h3>Upscaling & Development</h3>
                </div>
                <div className="hero__para mt-4">
                  <p>At CloudExtel, we ensure skill-building and encourage our team’s growth by providing skill enhancement opportunities, training programs, and workshops.</p>
                </div>
                {/* <div className="View_opportunities">
                  <HashLink to={"#career"} ><h4>View Opportunities <BsArrowDown /> </h4></HashLink>
                </div> */}
              </div>
            </div>
            <div className="col-lg-5 fuelling__image background__overflow--Left">
            </div>
          </div>
        </div>
      </section>

      <section className='data'>
        <div className="container">
          <div className="aboutUs__tabs--container" >
            <div className="hero__header hero__header--white text-center">
              <h1>Our locations</h1>
            </div>
            <div className="data__list data__list1">
              <ul>
                <li>
                  <div className="data__number">
                    <h3>Mumbai</h3>
                  </div>
                  <div className="data__name">
                    <p>100 + Workforce</p>
                  </div>
                </li>
                <li>
                  <div className="data__number">
                    <h3>Bangalore</h3>
                  </div>
                  <div className="data__name">
                    <p>100 + Workforce</p>
                  </div>
                </li>
                <li>
                  <div className="data__number">
                    <h3>Indore</h3>
                  </div>
                  <div className="data__name">
                    <p>100 + Workforce</p>
                  </div>
                </li>
                <li>
                  <div className="data__number">
                    <h3>Bhubneshwar</h3>
                  </div>
                  <div className="data__name">
                    <p>100 + Workforce</p>
                  </div>
                </li>
                <li>
                  <div className="data__number">
                    <h3>Jaipur</h3>
                  </div>
                  <div className="data__name">
                    <p>100 + Workforce</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='career' id='career'>
        <div className="container">
          <div className="networks__content networks__content3">
            <div className="hero__header">
              <h1>Career Opportunities</h1>
            </div>
            <div className="hero__para mt-4" style={{ width: '660px' }}>
              <p>Employees are the heart and soul of an organisation. Want to contribute to the
                ever-changing networking landscape? Reach out to us. </p>
            </div>
          </div>

          {/* Create career list here  */}
          <CareerContainer />
        </div>
      </section>

      <Footer />
    </>
  )
}