import React, { useEffect, useState } from "react";
import "./ContactPage.css";


function ContactPage() {
    useEffect(() => {
        document.title = "Контакти | AUTO VIBE";
    }, []);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Відправлені дані:", formData);  // Вивід у консоль

        setStatus("success");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section className="contact-page">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Зв'яжіться з нами</h2>
                    <p>Ми завжди раді допомогти! Заповніть форму або скористайтеся контактними даними нижче.</p>
                    <ul className="contact-details">
                        <li><strong>Адреса:</strong>                  <p> вул. Борканюка 89, Ужгород, с. Минай</p>
                        </li>
                        <li><strong>Телефон:</strong>+38 (066) 372 62 30</li>
                        <li><strong>Email:</strong>savarinyuriy2001@gmail.com</li>
                        <li><strong>Години роботи:</strong> Пн-Пт: 9:00 - 18:00</li>
                    </ul>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Ваше ім'я"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="subject"
                        type="text"
                        placeholder="Тема"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Ваше повідомлення"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Відправити</button>
                    {status === "success" && (
                        <p className="success-message">Дякуємо! Ваше повідомлення відправлено.</p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default ContactPage;
