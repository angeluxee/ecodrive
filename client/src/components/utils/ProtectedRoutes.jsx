import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Importa useState y useEffect
import axios from 'axios'; // Asegúrate de importar axios si lo estás usando
import toast, { Toaster } from 'react-hot-toast';

const ProtectedRoutes = () => {
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
                // Verificar si el token es válido
                const response = await axios.get("http://localhost:8000/users/api/token/verify/", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setIsAuthenticated(true); // Usuario autenticado
            } catch (error) {
                setIsAuthenticated(false); // Token inválido o caducado
                toast.error('Your session has expired')
            } finally {
                setLoading(false); // Terminamos de cargar
            }
        };

        checkAuthentication();
    }, []);

    // Muestra un "cargando" mientras se verifica la autenticación
    if (loading) {
        return <div>Loading...</div>; 
    }

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoutes;
