import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/ProcessStyles/CleanHeader.css'; // Ensure this CSS file is updated

const Header = () => {
    return (
        <header className="hero">
            <div className="header-content">
                <h1>Your final impact statement goes here. Make it memorable!</h1>
                <Link>
                <button>Your paragraph text here.</button>
                </Link>
            </div>
            <img src="/assets/bathroom-hero.jpg" alt="Decorative Background" className="background-image"/>
        </header>
    );
};

export default Header;
