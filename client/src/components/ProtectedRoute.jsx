import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

export const ProtectedRoute = ({ element: Element, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Estado para manejar la autenticación
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get("http://localhost:8000/users/api/token/verify/", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setIsAuthenticated(response.status === 200); // Devuelve true si la respuesta es exitosa
            } catch (error) {
                setIsAuthenticated(false); // Devuelve false si hay un error
            } finally {
                setLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    // Si aún se está cargando, muestra un loader o null
    if (loading) {
        return null; // O un componente de carga
    }

    return (
        <Route
            {...rest}
            element={isAuthenticated ? Element : <Navigate to="/login" />} // Redirige si no está autenticado
        />
    );
};
