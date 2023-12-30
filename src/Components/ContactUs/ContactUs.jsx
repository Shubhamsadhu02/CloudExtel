import React, { useState } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import TopSection from '../TopSection'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'
import { RiCheckboxCircleFill } from 'react-icons/ri'

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNo: '',
        subject: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('./php/ContactUsEmail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();
            if (response.ok && responseData.success) {
                console.log('Form submitted successfully');
                setFormData({
                    fullName: '',
                    email: '',
                    contactNo: '',
                    subject: '',
                    message: '',
                });
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            } else {
                console.log('Form submission failed');
            }
        } catch (error) {
            console.log('An error occurred. Please try again later.');
        }
        console.log(formData);
    };

    return (
        <>
            <Header />

            <TopSection title={'Contact Us'} height={'520px'} className="ContactUs__top" />

            <section className='contactUs'>
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-sm-12 col-lg-6">
                            <div className="contactUs__content">
                                {/* <div className="hero__header">
                                    <h1 style={{color: "#FFF"}}>Contact us</h1>
                                </div> */}
                                <div className="hero__para mt-4">
                                    <p>Feel free to reach out to us at Cloudextel for any inquiries, collaborations, or assistance. Our dedicated team is here to provide expert guidance and solutions tailored to your networking needs. Whether you're looking to enhance your connectivity, explore Network-as-a-Service options, or discuss partnership opportunities, we're just a message away</p>
                                </div>
                                <div className="contactUs__phone mt-4">
                                    <IoIosCall />
                                    <p>+91 98671 51303</p>
                                </div>
                                <div className="contactUs__location mt-4">
                                    <FaMapMarkerAlt />
                                    <p>The Ruby, 11th Floor, AWFIS, Dadar (West),
                                        Mumbai, Maharashtra - 400028 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 contact__form--position">
                        {isSubmitted ? (
                            <div className="success__message--box">
                                <div className="success__message text-center">
                                    <RiCheckboxCircleFill/>
                                    <p>Thank you for your submission!</p>
                                </div>
                                </div>
                            ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="contactUs__box">
                                    <div className="contactUs__inputs">
                                        <input type="text" placeholder='Full Name' name='fullName' value={formData.fullName} onChange={handleChange} required />
                                    </div>
                                    <div className="contactUs__inputs">
                                        <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="contactUs__inputs">
                                        <input type="tel" placeholder='Contact No.' maxLength={10} name='contactNo' value={formData.contactNo} onChange={handleChange} required />
                                    </div>
                                    <div className="contactUs__inputs">
                                        <input type="text" placeholder='Subject' name='subject' value={formData.subject} onChange={handleChange} required />
                                    </div>
                                    <div className="contactUs__inputs">
                                        <textarea type="text" placeholder='Message' name='message' value={formData.message} onChange={handleChange} required />
                                    </div>
                                    <div className="submit__btn text-end">
                                        <button type='submit'>Submit <BsArrowRight /></button>
                                    </div>
                                </div>
                            </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
