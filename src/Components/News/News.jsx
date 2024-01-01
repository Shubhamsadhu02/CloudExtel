import React, { useContext } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// import Gas from '../../Images/News/gas.png';
import NewsCards from './NewsCards';
import { Link } from 'react-router-dom';
import reducer from '../../Context/reducer';

export default function News() {
    const naviagte = useNavigate();
    const handleBack = () => {
        naviagte(-1);
    };

    const context = useContext(reducer);
    const { getAllBlog } = context;
    return (
        <>
            <Header />

            <section className='hero__blue hero__blue--newsbg'>
                <div className="container">
                    <div className="go-back" onClick={handleBack}>
                        <BsArrowLeft />
                    </div>
                    <div className="">
                        {getAllBlog.length > 0 ? (
                            <div className="row mt-5">
                                <div className="col-sm-12 col-lg-6">
                                    <div className="news__header--image">
                                        <img src={getAllBlog[0].thumbnail} alt={getAllBlog[0].blogs.title} />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6 d-flex flex-column">
                                    <div className="news__date">
                                        <p>LATEST • {getAllBlog[0].date} </p>
                                    </div>
                                    <div className="news__header mt-4">
                                        <h1>{getAllBlog[0].blogs.title}</h1>
                                    </div>
                                    <div className="news__para mt-4">
                                        <p dangerouslySetInnerHTML={{ __html: getAllBlog[0].content }}></p>
                                    </div>
                                    <div className="read__more--btn mt-4">
                                        <Link to={`/news-container/${getAllBlog[0].id}/${getAllBlog[0].blogs.title}`} state={{ data: getAllBlog[0] }} ><button type='button'>Read More <BsArrowRight /></button></Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <h1>No News Present</h1>
                        )}
                    </div>

                </div>
            </section>

            <section className='news__container'>
                <div className="container">
                    <div className="hero__header text-center mb-5">
                        <h1>More News</h1>
                    </div>
                    <NewsCards />
                </div>
            </section>

            <Footer />
        </>
    )
}
