import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // додаємо useNavigate для редіректу
import { useAuth } from '../context/AuthContext'; // імпорт контексту авторизації
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useAuth();  // отримуємо користувача і функцію виходу
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout();
            navigate('/login'); // редірект після виходу
        } catch (error) {
            console.error("Помилка виходу:", error);
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="/logo.jpg" alt="AUTO VIBE Logo" className="logo-icon" />
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


                    {!user && (
                        <>
                            <NavLink to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Вхід</NavLink>
                            <NavLink to="/register" className="nav-link" onClick={() => setMenuOpen(false)}>Реєстрація</NavLink>
                        </>
                    )}

                    {user && (
                        <div className="nav-user-info" style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '1rem' }}>
                            <span>Привіт, {user.email}</span>
                            <button
                                onClick={handleLogout}
                                style={{
                                    backgroundColor: '#d42c2c',
                                    border: 'none',
                                    padding: '6px 12px',
                                    borderRadius: '4px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontWeight: '700',
                                }}
                            >
                                Вийти
                            </button>
                        </div>
                    )}
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
