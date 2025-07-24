import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // додаємо useNavigate для редіректу
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)} end>
                        <img src="/logo.jpg" alt="AUTO VIBE Logo" className="logo-icon" />
                    </NavLink>

                    <span style={{ fontWeight: 800, fontSize: '2.0rem', color: '#fff' }}>AUTO VIBE</span>
                </div>

                <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                    <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)} end>
                        Головна
                    </NavLink>
                    <NavLink to="/service" className="nav-link" onClick={() => setMenuOpen(false)}>
                        Послуги
                    </NavLink>
                    <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                        Контакти
                    </NavLink>

                </nav>

                <div
                    className={`burger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header;
