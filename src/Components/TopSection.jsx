import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function TopSection({ title, image, height, className }) {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <section className={`hero__blue ${className}`} style={{ background: '#1456A2', height: `${height}`, position: 'relative' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-7">
                            <div className="go-back" onClick={handleBack}>
                                <BsArrowLeft />
                            </div>
                            <motion.div className="hero__heading"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <h1>{title}</h1>
                            </motion.div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-5" style={{ position: 'absolute', right: '0', bottom: '0' }}>
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
