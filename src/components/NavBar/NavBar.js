import React from 'react';
import { FaBars } from 'react-icons/fa';
import './style.css';

const Navbar = ({ toggle }) => {
    return (
        <>
            <nav className="Navbar">
                <div className="NavContainer">
                    <h1 className="NavHeader">Shortly</h1>
                    <div className="MobileIcon" onClick={toggle}>
                        <FaBars />
                    </div>
                    <div className="NavOptions">
                        <a href="#" className="navLink">Features</a>
                        <a href="#" className="navLink">Pricing</a>
                        <a href="#" className="navLink">Resources</a>
                    </div>
                    <div className="Sign">
                        <div className="NavItem">
                            <a href="#" className="navLink">Login</a>
                        </div>
                        <div className="NavBtn">
                            <a href="#" className="BtnLink">Signup</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar


{/* <>
<nav className="Navbar">
    <div className="NavContainer">
        <h1 className="NavHeader">Shortly</h1>
        <div className="MobileIcon" onClick={toggle}>
            <FaBars />
        </div>
        <div className="NavOptions">
            <div className="NavItem">
                <a href="#" className="navLink">Features</a>
            </div>
            <div className="NavItem">
                <a href="#" className="navLink">Pricing</a>
            </div>
            <div className="NavItem">
                <a href="#" className="navLink">Resources</a>
            </div>
        </div>
        <div className="Sign">
            <div className="NavItem">
                <a href="#" className="navLink">Login</a>
            </div>
            <div className="NavBtn">
                <a href="#" className="BtnLink">Signup</a>
            </div>
        </div>
    </div>
</nav>

</> */}