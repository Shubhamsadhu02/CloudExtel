import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import News from '../../Images/Home/news.png';

export default function HomeNewsSection() {
  return (
    <>
    <section className='news'>
        <div className="container">
          <div className="networks__content networks__content3">
            <div className="hero__header">
              <h1>In News</h1>
            </div>
            <div className="hero__para mt-4" style={{ width: '610px' }}>
              <p>Stay updated with the latest news and developments from Bombay Gas Ventures Pvt. Ltd.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <img src={News} alt="News" />
            </div>
            <div className="col-lg-6" style={{paddingLeft: '80px'}}>
              <div className="latest">
                <div className="hero__latest">
                  <p>Latest</p>
                </div>
                <div className="hero__news--Header">
                  <h4>Bombay Gas Ventures Expands Fiber Optic Network Coverage</h4>
                </div>
                <div className="hero__para--light">
                  <p>We are thrilled to announce the expansion of our fiber optic network coverage across multiple cities and regions</p>
                </div>
              </div>
              <div className="latest">
                <div className="hero__latest">
                  <p>Latest</p>
                </div>
                <div className="hero__news--Header">
                  <h4>Bombay Gas Ventures Expands Fiber Optic Network Coverage</h4>
                </div>
                <div className="hero__para--light">
                  <p>We are thrilled to announce the expansion of our fiber optic network coverage across multiple cities and regions</p>
                </div>
              </div>
              <div className="view__btn">
                <button type='button'>VIEW ALL <BsArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
