import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { LiaGripLinesSolid } from 'react-icons/lia';
import { RxCross1 } from 'react-icons/rx';
import { BsArrowRight } from 'react-icons/bs';
import toast from "react-hot-toast";

import Logo from '../Images/logo.png';
import LogoBlue from '../Images/logoBlue.png';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header(props) {
    const isWhite = props.isWhite ?? true;
    const isLogin = props.isLogin ?? false;
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const SidebarData = [
        {
            title: 'Home',
            path: '/',
            cName: 'nav-text'
        },
        {
            title: 'Our Solutions',
            path: '/our-solution',
            cName: 'nav-text'
        },
        {
            title: 'About us',
            path: '/about-us',
            cName: 'nav-text'
        },
        {
            title: 'Careers',
            path: '/careers',
            cName: 'nav-text'
        },
        {
            title: 'Contact us',
            path: '/contact-us',
            cName: 'nav-text'
        },
        {
            title: 'News',
            path: '/news',
            cName: 'nav-text'
        }
    ];

    const logout = () => {
        localStorage.clear();
        toast.success('Logout Success');
        <Navigate to={'/admin'} />
    }

    const sidebarVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.3,
                duration: 1.5,
                ease: 'easeInOut',
                staggerChildren: 1,
            },
        },
        hidden: {
            opacity: 0,
            x: -50,
        },
    };

    return (
        <>
            <section className='header'>
                <div className="container">
                    <IconContext.Provider value={{ color: '#fff' }}>
                        <div className='navbar'>
                            <div className="navbar__right">
                                <div className="logo">
                                    <a href="/" className="navbar-brand"><img src={isWhite ? Logo : LogoBlue} alt='CloudExtel Logo' /></a>
                                </div>
                            </div>
                            <div className="navbar__left">
                                {isLogin ? "" : <>
                                    <motion.div className={isWhite ? 'contact-nav' : 'contact-nav__blue'}
                                        whileTap={{ scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.6 }}
                                    >
                                        <Link to={'/contact-us'}>Contact us</Link><BsArrowRight />
                                    </motion.div>
                                    <motion.div
                                        whileTap={{ scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.6 }}
                                    >
                                        <Link to='#' className={isWhite ? 'menu-bars' : 'menu-bars__blue'}>
                                            <LiaGripLinesSolid onClick={showSidebar} />
                                        </Link>
                                    </motion.div>
                                </>
                                }
                                {isLogin ?
                                    <div className="logout__btn ms-3">
                                        <form onSubmit={logout}>
                                            <button type='submit'>Log Out</button>
                                        </form>
                                    </div>
                                    : ""}
                            </div>
                        </div>
                        <motion.nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                            <motion.div className='navbar-toggle'>
                                <Link to='#' className='menu-bars' onClick={showSidebar} style={{ border: 'none' }}>
                                    <RxCross1 style={{ color: "white" }} />
                                </Link>
                            </motion.div>
                            <motion.ul className='nav-menu-items' onClick={showSidebar}
                                initial='hidden'
                                animate={sidebar ? 'visible' : 'hidden'}
                                variants={sidebarVariants}
                            >
                                <AnimatePresence>
                                {SidebarData.map((item, index) => {
                                    return (
                                        <motion.li key={index} className={item.cName}
                                            variants={sidebarVariants}
                                        >
                                            <Link to={item.path}>
                                                <span>{item.title}</span>
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                                </AnimatePresence>
                            </motion.ul>
                        </motion.nav>
                    </IconContext.Provider>
                </div>
            </section>
        </>
    )
}
