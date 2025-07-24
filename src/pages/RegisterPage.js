import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const { signup, error } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [loading, setLoading] = useState(false);
    const [passError, setPassError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setPassError("");
        if (password !== passwordConfirm) {
            setPassError("Паролі не співпадають");
            return;
        }
        setLoading(true);
        try {
            await signup(email, password);
            navigate("/");
        } catch {
            // Помилка вже в error
        }
        setLoading(false);
    }

    return (
        <div style={{ maxWidth: 400, margin: "40px auto", padding: 20 }}>
            <h2>Реєстрація</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ width: "100%", marginBottom: 12, padding: 8 }}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{ width: "100%", marginBottom: 12, padding: 8 }}
                />
                <input
                    type="password"
                    placeholder="Підтвердження паролю"
                    required
                    value={passwordConfirm}
                    onChange={e => setPasswordConfirm(e.target.value)}
                    style={{ width: "100%", marginBottom: 12, padding: 8 }}
                />
                <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
                    Зареєструватися
                </button>
            </form>
            {passError && <p style={{ color: "red", marginTop: 12 }}>{passError}</p>}
            {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
        </div>
    );
}

export default RegisterPage;
