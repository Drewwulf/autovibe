import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const { login, error } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            navigate("/");
        } catch {
            // Помилка вже в error
        }
        setLoading(false);
    }

    return (
        <div style={{ maxWidth: 400, margin: "40px auto", padding: 20 }}>
            <h2>Вхід</h2>
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
                <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
                    Увійти
                </button>
            </form>
            {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
        </div>
    );
}

export default LoginPage;
