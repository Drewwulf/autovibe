import React, { useEffect } from "react";
import "./ContactPage.css";

function ContactPage() {
    useEffect(() => {
        document.title = "Контакти | AUTO VIBE";
    }, []);

    return (
        <section className="contact-page">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Зв'яжіться з нами</h2>
                    <p>Ми завжди раді допомогти! Заповніть форму або скористайтеся контактними даними нижче.</p>
                    <ul className="contact-details">
                        <li><strong>Адреса:</strong> вул. Борканюка 89, Ужгород, с. Минай</li>
                        <li><strong>Телефон:</strong> +38 (066) 372 62 30</li>
                        <li><strong>Email:</strong> savarinyuriy2001@gmail.com</li>
                        <li><strong>Години роботи:</strong> Пн-Пт: 9:00 - 18:00</li>
                    </ul>
                </div>

                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    action="/thank-you"  // необов’язково, сторінка після відправки
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <p hidden>
                        <label>
                            Не заповнювати (ботам): <input name="bot-field" />
                        </label>
                    </p>

                    <input name="name" type="text" placeholder="Ваше ім'я" required />
                    <input name="email" type="email" placeholder="Email" required />
                    <input name="subject" type="text" placeholder="Тема" required />
                    <textarea name="message" rows="5" placeholder="Ваше повідомлення" required />
                    <button type="submit">Відправити</button>
                </form>
            </div>
        </section>
    );
}

export default ContactPage;
