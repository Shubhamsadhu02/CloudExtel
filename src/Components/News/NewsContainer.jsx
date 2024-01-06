import React, { useState, useEffect } from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Kite from '../../Images/News/kite.png';
import { firestoreDB } from '../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { Circles } from 'react-loader-spinner';

export default function NewsContainer() {
    const { id } = useParams();
    const location = useLocation();
    const { state } = location;
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        if (state && state.data) {
            // If data is available in the location state, set it to state
            setBlogData(state.data);
        } else {
            // Fetch data based on the ID from Firebase
            const fetchBlogData = async () => {
                try {
                    const docRef = doc(firestoreDB, 'BlogPost', id);
                    const snapshot = await getDoc(docRef);
                    if (snapshot.exists()) {
                        // Set the blog data to state if the document exists
                        setBlogData(snapshot.data());
                    } else {
                        // Handle if document doesn't exist for the provided ID
                        console.log('No such document!');
                    }
                } catch (error) {
                    console.error('Error getting document:', error);
                }
            };

            fetchBlogData();
        }
    }, [id, state]);


    const naviagte = useNavigate();
    const handleBack = () => {
        naviagte(-1);
    };

    return (
        <>
            <Header />


            <section className='hero__blue hero__blue--newsbg' key={id}>
                <div className="container">
                    <div className="go-back" onClick={handleBack}>
                        <BsArrowLeft />
                    </div>
                    {blogData ? (
                        <>
                            <div className="blog__top mt-4">
                                <div className="news__date">
                                    <p>LATEST • {blogData.date}</p>
                                </div>
                                <div className="news__header mt-4 text-break">
                                    <h1>{blogData.blogs.title}</h1>
                                </div>
                            </div>
                        </>
                    ) : (<>
                        <div className='d-flex justify-content-center'>
                            <Circles
                                height="80"
                                width="80"
                                color="#FFF"
                                ariaLabel="circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                    </>
                    )}
                </div>
            </section>

            {blogData ? (
                <>
                    <section className='blog__content'>
                        <div className="container">
                            <div className="blog__image">
                                <img src={blogData.thumbnail} alt="thumbnail" width={820} height={570} />
                            </div>
                            <div className="blog__details">
                                <p dangerouslySetInnerHTML={{ __html: blogData.content }}></p>
                                {/* <p>
                            We are proud to announce Macquarie Capital, the advisory, capital markets and principal investment arm of Macquarie Group, has acquired a majority stake in CloudExtel.In India, the demand for mobile internet data has grown by 20 times since 2015.
                            <br />
                            <br />
                            However, the infrastructure to decongest networks and enhance connectivity is not in tandem with the demand. Compared to mature global markets at ~70%, India's tower fiberisation stands at a mere 33%, with even lower penetration of enterprise and household fiber.
                            <br />
                            <br />
                            CloudExtel sees these gaps as opportunities for growth. Our partnership with Macquarie Capital will allow us to scale our Network as a Service (NaaS)offerings significantly. Moreover, by combining their global best practices with our local expertise, we can create superior networks for telecom operators and their end-users.
                        </p> */}
                            </div>
                        </div>
                    </section>
                </>
            ) : (<>
                <div className='d-flex justify-content-center'>
                    <p>No Content Present</p>
                </div>
            </>
            )}

            <section className='optic' id='joinUs'>
                <div className="container">
                    <div className="row" style={{ background: '#1456A2' }}>
                        <div className="col-sm-12 col-lg-6">
                            <div className="optic__details">
                                <div className="hero__news--header2">
                                    <h4>Subscribe to our news letter</h4>
                                </div>
                                <form>
                                    <div className="contactUs__inputs">
                                        <input type="email" style={{ background: "none", "::placeholder": { color: "#FFF" } }} placeholder='Enter Email' name='email' required />
                                    </div>
                                    <div className="learn__more--btn">
                                        <button type='submit'>Subscribe Now<BsArrowRight /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 d-flex justify-content-center align-items-end">
                            <div className="kite__image">
                                <img src={Kite} alt="Kite" width={301} height={227} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
