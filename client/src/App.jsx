import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RentPage } from './pages/RentPage';
import { UploadCarPage } from './pages/UploadCarPage'; 
import { Header } from './components/Header';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import './styles/Navigation.css';
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './components/utils/ProtectedRoutes'
import { AuthProvider } from './context/AuthContext'; // Asegúrate de importar el AuthProvider
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path='/rent' element={<RentPage />} />
            <Route path='/upload-car' element={<UploadCarPage />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
