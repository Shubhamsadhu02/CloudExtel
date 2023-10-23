import React, { useContext } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Gas from '../../Images/News/gas.png';
import NewdCards from './NewdCards';
import { Link } from 'react-router-dom';
import reducer from '../../Context/reducer';

export default function News() {
    const naviagte = useNavigate();
    const handleBack = () => {
        naviagte(-1);
    };

    // const context = useContext(reducer);
    // const { getAllBlog } = context;
    // const sortedData = getAllBlog.slice().sort((a, b) => b.time - a.time);
    // const latestItem = sortedData[0];
    return (
        <>
            <Header />

            <section className='hero__blue hero__blue--newsbg'>
                <div className="container">
                    <div className="go-back" onClick={handleBack}>
                        <BsArrowLeft />
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-lg-6">
                            <div className="news__header--image">
                                <img src={Gas} alt="Gas" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                            <div className="news__date">
                                <p>LATEST • </p>
                            </div>
                            <div className="news__header mt-4">
                                <h1>Bombay Gas Ventures Expands Fiber Optic Network Coverage</h1>
                            </div>
                            <div className="news__para mt-4">
                                <p>We are thrilled to announce the expansion of our fiber optic network coverage across multiple cities and regions</p>
                            </div>
                            <div className="read__more--btn mt-4">
                                <Link to={"#"} ><button type='button'>Read More <BsArrowRight /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='news__container'>
                <div className="container">
                    <div className="hero__header text-center mb-5">
                        <h1>More News</h1>
                    </div>
                    <NewdCards />
                </div>
            </section>

            <Footer />
        </>
    )
}
