import React from 'react'
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import TopSection from './TopSection'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'

export default function ContactUs() {
    return (
        <>
            <Header />

            <TopSection title={'Get in Touch with us'} height={'520px'} />

            <section className='contactUs'>
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-sm-12 col-lg-6">
                            <div className="contactUs__content">
                                <div className="hero__header">
                                    <h1>Contact us</h1>
                                </div>
                                <div className="hero__para mt-4">
                                    <p>Feel free to reach out to us at Cloudextel for any inquiries, collaborations, or assistance. Our dedicated team is here to provide expert guidance and solutions tailored to your networking needs. Whether you're looking to enhance your connectivity, explore Network-as-a-Service options, or discuss partnership opportunities, we're just a message away</p>
                                </div>
                                <div className="contactUs__phone mt-4">
                                    <IoIosCall/>
                                    <p>+91 98671 51303</p>
                                </div>
                                <div className="contactUs__location mt-4">
                                    <FaMapMarkerAlt />
                                    <p>The Ruby, 11th Floor, AWFIS, Dadar (West),
                                        Mumbai, Maharashtra - 400028 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 contact__position">
                            <div className="contactUs__box">
                                <div className="contactUs__inputs">
                                    <input type="text" placeholder='Full Name' required />
                                </div>
                                <div className="contactUs__inputs">
                                    <input type="email" placeholder='Email' required />
                                </div>
                                <div className="contactUs__inputs">
                                    <input type="tel" placeholder='Contact No.' required />
                                </div>
                                <div className="contactUs__inputs">
                                    <input type="tel" placeholder='Subject' required />
                                </div>
                                <div className="contactUs__inputs">
                                    <textarea type="text" placeholder='Message' required />
                                </div>
                                <div className="submit__btn text-end">
                                    <button type='submit'>Submit <BsArrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
