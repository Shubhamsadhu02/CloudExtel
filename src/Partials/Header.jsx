import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { LiaGripLinesSolid } from 'react-icons/lia';
import { RxCross1 } from 'react-icons/rx';
import { BsArrowRight } from 'react-icons/bs';
import toast from "react-hot-toast";

import Logo from '../Images/logo.png';
import LogoBlue from '../Images/logoBlue.png';

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
                                    <div className={isWhite ? 'contact-nav' : 'contact-nav__blue'}>
                                        <Link to={'/contact-us'}>Contact us</Link><BsArrowRight />
                                    </div>
                                    <Link to='#' className={isWhite ? 'menu-bars' : 'menu-bars__blue'}>
                                        <LiaGripLinesSolid onClick={showSidebar} />
                                    </Link>
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
                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                            <div className='navbar-toggle'>
                                <Link to='#' className='menu-bars' onClick={showSidebar} style={{ border: 'none' }}>
                                    <RxCross1 style={{ color: "white" }} />
                                </Link>
                            </div>
                            <ul className='nav-menu-items' onClick={showSidebar}>
                                {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </IconContext.Provider>
                </div>
            </section>
        </>
    )
}
