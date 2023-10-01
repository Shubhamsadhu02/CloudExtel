import React from 'react'
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

import Solutionhead from '../Images/Solutions/solutionhead.png';

export default function OurSolution() {
    const naviagte= useNavigate();
    const handleBack = () =>  {
        naviagte(-1);
    }
    return (
        <>
            <Header />
            <section className='hero__blue' style={{ background: '#1456A2', height: '520px', position: 'relative' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-7">
                            <div className="go-back" onClick={handleBack}>
                                <BsArrowLeft/>
                            </div>
                            <div className="hero__heading">
                                <h1>Innovative telecom Solutions</h1>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-5" style={{position: 'absolute', right: '0', bottom: '0'}}>
                            <div className="hero__blue--image">
                                <img src={Solutionhead} alt="Solution" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
