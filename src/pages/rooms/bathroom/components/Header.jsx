import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/ProcessStyles/CleanHeader.css'; // Ensure this CSS file is updated

const Header = () => {
    return (
        <header className="hero">
            <div className="header-content">
                <h1>Experience the Sparkle!</h1>
                    <h3>Our expert cleaning services ensure your space is not just clean, it's Ultra Clean!</h3>
                <Link to={'/contact'}>
                    <button>Get an Estimate Today</button>
                </Link>
            </div>
            <video autoPlay loop muted className="background-image">
                <source src="/assets/bathroom-hero.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

        </header>
    );
};

export default Header;
