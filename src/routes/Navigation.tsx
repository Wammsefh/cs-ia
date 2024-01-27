import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <div className="navigation-container">
            <div className="navigation-items">
                <Link to="/" className="navigation-item">
                    <p>Homepage</p>
                </Link>
                <Link to="/about-us" className="navigation-item">
                    <p>About Us</p>
                </Link>
                <Link to="/puzzle-page" className="navigation-item">
                    <p>Puzzle Page</p>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;