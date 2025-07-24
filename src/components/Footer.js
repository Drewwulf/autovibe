import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-section">
                    <h4 className="footer-title">Контакти</h4>
                    <p>Телефон: <a href="tel:+380501234567" className="footer-link">+38 (066) 372 62 30</a></p>
                    <p>Email: <a href="mailto:savarinyuriy2001@gmail.com" className="footer-link">savarinyuriy2001@gmail.com</a></p>
                    <p>Адреса: вул. Борканюка 89, Ужгород, с. Минай</p>
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
                    <a href="https://www.facebook.com/profile.php?id=61578183941728" target="_blank" rel="noreferrer" className="footer-link">Facebook</a>
                    <a href="https://www.instagram.com/sto_autovibe/?fbclid=IwY2xjawLu30lleHRuA2FlbQIxMABicmlkETF6c3hjRGdBUWEwVjd3R3BEAR5P4-5CoqlbZSHPna3zlWzt3irR1V1qGDEXiCmbLUOGAohbhWewNB5gJFw_9w_aem_bokb5pFkZPGtT2f1iqvjjA#" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} AUTO VIBE. Всі права захищені.</p>
            </div>
        </footer>
    );
}

export default Footer;
