import React from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import { BsArrowDown } from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'

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
import { BiSearch } from 'react-icons/bi'

export default function Career() {
  return (
    <>
      <Header isWhite={false} />

      <section className='career__TopSection'>
        <div className="container">
          <div className="hero__heading text-center">
            <h1 style={{ color: '#233852' }}>Join Our Team and Shape the Future of Networking</h1>
          </div>
          <div className="View_opportunities text-center">
            <HashLink to={"#career"} ><h4>View Opportunities <BsArrowDown /> </h4></HashLink>
          </div>

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
          <div className="row" style={{ rowGap: "40px" }}>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__image">
                <img src={Competitive} alt="Competitive" />
              </div>
              <div className="perks__header">
                <h3>Competitive Compensation</h3>
              </div>
              <div className="perks__para">
                <p>We believe in rewarding your hard work and dedication with competitive compensation packages that reflect your expertise and contribution</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__image">
                <img src={Health} alt="Health" />
              </div>
              <div className="perks__header">
                <h3>Health & Wellness</h3>
              </div>
              <div className="perks__para">
                <p>Your well-being matters. We offer health insurance plans, wellness programs, and access to fitness facilities to ensure you stay healthy and motivated</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__image">
                <img src={Flexible} alt="Flexible" />
              </div>
              <div className="perks__header">
                <h3>Flexible Work Arrangements</h3>
              </div>
              <div className="perks__para">
                <p>Embracing work-life balance, our flexible arrangements support your professional commitments and personal well-being</p>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4">
              <div className="perks__image">
                <img src={Professional} alt="Professional" />
              </div>
              <div className="perks__header">
                <h3>Professional Development</h3>
              </div>
              <div className="perks__para">
                <p>Continuous learning is encouraged. We provide opportunities for skill enhancement, training, workshops, and attending industry events to help you stay ahead</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__image">
                <img src={Inclusive} alt="Inclusive" />
              </div>
              <div className="perks__header">
                <h3>Inclusive Environment</h3>
              </div>
              <div className="perks__para">
                <p>Diversity is our strength. Our inclusive workplace ensures that everyone feels valued, respected, and has equal opportunities to thrive</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="perks__image">
                <img src={Rcognization} alt="Reward" />
              </div>
              <div className="perks__header">
                <h3>Recognition & Rewards</h3>
              </div>
              <div className="perks__para">
                <p>Your efforts don't go unnoticed. Outstanding performance is recognized through various reward programs, both monetary and non-monetary</p>
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
                  <h1>Fuelling Growth and Success</h1>
                </div>
                <div className="hero__subHeader1 mt-4">
                  <h3>Collaboration</h3>
                </div>
                <div className="hero__para mt-4">
                  <p>We encourage open communication and collaboration, believing that diverse perspectives lead to groundbreaking solutions. Teamwork is at the heart of everything we do</p>
                </div>
                <div className="hero__subHeader1 mt-4">
                  <h3>Innovation</h3>
                </div>
                <div className="hero__para mt-4">
                  <p>We thrive on innovation, empowering our employees to explore new ideas, challenge conventions, and pioneer advancements in networking technology</p>
                </div>
                <div className="hero__subHeader1 mt-4">
                  <h3>Learning & Development</h3>
                </div>
                <div className="hero__para mt-4">
                  <p>We invest in our team's growth by providing opportunities for skill enhancement, professional development, and staying up-to-date with industry trends</p>
                </div>
                <div className="View_opportunities">
                  <HashLink to={"#career"} ><h4>View Opportunities <BsArrowDown /> </h4></HashLink>
                </div>
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
            <div className="data__list">
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
            <div className="hero__para mt-4" style={{ width: '610px' }}>
              <p>At Cloudextel, we prioritize our employees' growth and well-being, fostering an environment where you can thrive both professionally and personally. Our core values are the foundation of our workplace culture</p>
            </div>
          </div>
          <div className="career__search d-flex justify-content-center mt-5">
              <div className="career__inputs">
                <input type="text" placeholder='Search by location, keyword or job title'/><BiSearch/>
              </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
