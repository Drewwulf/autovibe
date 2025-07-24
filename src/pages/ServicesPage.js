// src/pages/ServicesPage.jsx
import React, { useEffect } from "react";
import "./ServicesPage.css";

function ServicesPage() {
    useEffect(() => {
        document.title = "Послуги | AUTO VIBE";
    }, []);

    const services = [
        {
            id: 1,
            title: "Рихтовка та покраска",
            description: "Відновлення кузова та фарбування автомобіля з гарантією якості.",
        },
        {
            id: 2,
            title: "Заправлення кондиціонерів",
            description: "Професійне заправлення і обслуговування систем кондиціонування.",
        },
        {
            id: 3,
            title: "Ремонт ходової частини авто",
            description: "Якісний ремонт підвіски, амортизаторів та інших компонентів ходової.",
        },
        {
            id: 4,
            title: "Реставрація авто після ДТП",
            description: "Комплексне відновлення автомобіля після аварій та пошкоджень.",
        },
        {
            id: 5,
            title: "Предпродажні підготовки автомобіля",
            description: "Підготовка авто до продажу: діагностика, чистка, поліроль.",
        },
        {
            id: 6,
            title: "Витягнення лонжеронів",
            description: "Відновлення геометрії кузова та витягнення лонжеронів.",
        },
        {
            id: 7,
            title: "Покраска деталей салону",
            description: "Оновлення інтер’єру та фарбування деталей салону авто.",
        },
    ];

    return (
        <div className="services-page">
            <h1 className="services-title">Наші послуги</h1>
            <div className="services-cards">
                {services.map(({ id, title, description }) => (
                    <div key={id} className="service-card">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;
