import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function TopSection({ title, image, height }) {
    const naviagte = useNavigate();
    const handleBack = () => {
        naviagte(-1);
    };

    return (
        <>
            <section className='hero__blue' style={{ background: '#1456A2', height: `${height}`, position: 'relative' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-7">
                            <div className="go-back" onClick={handleBack}>
                                <BsArrowLeft />
                            </div>
                            <div className="hero__heading">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-5" style={{ position: 'absolute', right: '0', bottom: '0' }}>
                            <div className="hero__blue--image">
                                {image ? ( <img src={image} alt={title} /> ) : null }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
