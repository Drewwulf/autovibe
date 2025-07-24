import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-section">
                    <h4 className="footer-title">Контакти</h4>
                    <p>Телефон: <a href="tel:+380501234567" className="footer-link">+38 (050) 123 45 67</a></p>
                    <p>Email: <a href="mailto:autovibe@gmail.com" className="footer-link">autovibe@gmail.com</a></p>
                    <p>Адреса: вул. Автомобільна, 10, Київ</p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Навігація</h4>
                    <a href="#home" className="footer-link">Головна</a>
                    <a href="#services" className="footer-link">Послуги</a>
                    <a href="#about" className="footer-link">Про нас</a>
                    <a href="#contact" className="footer-link">Контакти</a>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Ми в соцмережах</h4>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-link">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
                    <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" className="footer-link">Telegram</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} AUTO VIBE. Всі права захищені.</p>
            </div>
        </footer>
    );
}

export default Footer;
