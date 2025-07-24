import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    function login(email, password) {
        setError(null);
        return signInWithEmailAndPassword(auth, email, password).catch((err) => {
            setError(err.message);
            throw err;
        });
    }

    function signup(email, password) {
        setError(null);
        return createUserWithEmailAndPassword(auth, email, password).catch((err) => {
            setError(err.message);
            throw err;
        });
    }

    function logout() {
        return signOut(auth);
    }

    const value = {
        user,
        login,
        signup,
        logout,
        error,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
