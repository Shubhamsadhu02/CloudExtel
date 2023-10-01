import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { LiaGripLinesSolid } from 'react-icons/lia';
import { RxCross1 } from 'react-icons/rx';
import { BsArrowRight } from 'react-icons/bs'

import Logo from '../Images/logo.png';

export default function Header() {
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
            path: '/portfolio',
            cName: 'nav-text'
        },
        {
            title: 'About us',
            path: '/investment',
            cName: 'nav-text'
        },
        {
            title: 'Careers',
            path: '/community',
            cName: 'nav-text'
        },
        {
            title: 'Contact us',
            path: '/ourteam',
            cName: 'nav-text'
        },
        {
            title: 'News',
            path: '/blogs',
            cName: 'nav-text'
        }
    ];

    return (
        <>
            <section style={{ position: 'absolute', width: '100%', padding: '35px 100px' }}>
                <div className="container">
                    <IconContext.Provider value={{ color: '#fff' }}>
                        <div className='navbar'>
                            <div className="navbar__right">
                                <div className="logo">
                                    <a href="/" className="navbar-brand"><img src={Logo} alt='CloudExtel Logo' height="31" width="150" /></a>
                                </div>
                            </div>
                            <div className="navbar__left">
                                <div className="contact-nav">
                                    <Link to={'/contact'}>Contact us</Link><BsArrowRight />
                                </div>
                                <Link to='#' className='menu-bars'>
                                    <LiaGripLinesSolid onClick={showSidebar} />
                                </Link>
                            </div>
                        </div>
                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                            <div className='navbar-toggle'>
                                <Link to='#' className='menu-bars' onClick={showSidebar} style={{border: 'none'}}>
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
