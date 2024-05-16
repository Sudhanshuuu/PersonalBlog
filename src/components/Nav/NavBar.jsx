import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [nav, setNav] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navScroll = () => {
        if (window.scrollY === 0) {
            setNav(false)
        }
        else {
            setNav(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navScroll)
  
    }, [])

    return (
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''} ${nav ? 'nav-scroll' : ''}`}>
            <div className='menu-name'>
                <p>Through The Hours</p>
                <p>A piece of my life</p>
            </div>
            <div className="menu-items">
                <div onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}><Link to="/">Home</Link></div>
                <div onClick={() => { window.scrollTo({ top: 3850, behavior: "smooth" }); }}>About Me</div>
                <div onClick={() => { window.scrollTo({ top: 950, behavior: "smooth" }); }}>Blog</div>
            </div>
            <div className="hamburger-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

        </div>
    );
}

export default HamburgerMenu;
