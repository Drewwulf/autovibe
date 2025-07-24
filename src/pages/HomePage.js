import React from "react";
import "./HomePage.css";
import { useEffect } from 'react';



function HomePage() {
    useEffect(() => {
        document.title = "Головна | AUTO VIBE";
    }, []);
    const services = [
        { id: 1, title: "Рихтовка та покраска" },
        { id: 2, title: "Заправлення кондиціонерів" },
        { id: 3, title: "Ремонт ходової частини авто" },
        { id: 4, title: "Реставрація авто після ДТП" },
        { id: 5, title: "Предпродажні підготовки автомобіля" },
        { id: 6, title: "Витягнення лонжеронів" },
        { id: 7, title: "Покраска деталей салону" },

    ];
    return (
        <div>
            <section
                className="hero-section"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 100%), url(${process.env.PUBLIC_URL + '/main2.jpg'})`
                }}
            >
                <div className="hero-text">
                    <h1>Ваш надійний автосервіс в Ужгороді</h1>
                    <p>Комплексне обслуговування та ремонт будь-яких марок авто з гарантією якості.</p>
                    <button className="hero-button">Записатися на ремонт</button>
                </div>

            </section>
            <section className="services-section" id="services">
                <h2 className="services-title">Наші Послуги</h2>
                <ul className="services-list">
                    {services.map(({ id, title }) => (
                        <li key={id} className="service-item">{title}</li>
                    ))}
                </ul>

            </section>
        </div>
    );
}

export default HomePage;