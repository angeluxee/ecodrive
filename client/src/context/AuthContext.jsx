import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                await axios.get("http://localhost:8000/users/api/token/verify/", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    // Función para manejar el login
    const login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:8000/users/api/token/", {
                email,
                password,
            });
            
            // Guardar los tokens en localStorage
            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            setIsAuthenticated(true); // Actualizar el estado de autenticación
            return true; // Indicar que el login fue exitoso
        } catch (error) {
            console.error("Login failed", error);
            return false; // Indicar que el login falló
        }
    };

    const register = async (name, surname, email, password, confPassword) => {
        if (password !== confPassword) {
            console.error("Las contraseñas no coinciden");
            return false; 
        }
        try {
            const response = await axios.post("http://localhost:8000/users/api/register/", {
                'first_name': name,
                'last_name': surname,
                email,
                password,
            });

            login(email, password); 
            return true; 
        } catch (error) {
            console.error("Register failed", error);
            return false; 
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, login, register }}>
            {children}
        </AuthContext.Provider>
    );
};
