import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import '../styles/Navigation.css'; // Importa tu archivo CSS
import { AuthContext } from '../context/AuthContext';
import { LinkUI } from "./ui";
export function Navigation() {
  const { isAuthenticated } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú desplegable

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna el menú
  };
  // localStorage.removeItem("accessToken");
  // window.location.reload(); // Para forzar la actualización y reflejar el logout
  return (
    <div>
      {isAuthenticated ? (
          <nav className="bg-white shadow-sm px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} className="h-16 sm:h-20 md:h-24 " alt="EcoDrive Logo" />
            </Link>
          </div>

            <div className="flex items-center lg:order-2 ">
              <Link to="/profile">
                <span className="px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-50 rounded-full font-semibold border-2 shadow-sm transition duration-150">Profile</span>
              </Link>             
            <button
                onClick={toggleMenu} 
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className={`${isMenuOpen ? "block" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 xl:space-x-12">
              <li>
                <LinkUI href="#">
                  Home
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Company
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Marketplace
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Features
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Team
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Contact
                </LinkUI>
              </li>
            </ul>

            </div>
          </div>
        </nav>
      ) : (
        <nav className="bg-white shadow-sm px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} className="h-16 sm:h-20 md:h-24 " alt="EcoDrive Logo" />
            </Link>
          </div>
          <div className="flex items-center lg:order-2 ">
          <Link to="/login" className="px-4 lg:px-5 py-2 lg:py-2.5 mr-2 rounded-full hover:bg-gray-100 text-eco1 font-semibold border-2 border-eco1 shadow-md hover:scale-105 transform duration-300">
            Log in
          </Link>
          <Link to="/register" className="px-4 lg:px-5 py-2 lg:py-2.5 mr-2 rounded-full hover:bg-gray-100 text-eco2 font-semibold border-2 border-eco2 shadow-md hover:scale-105 transform duration-300">
            Get started
          </Link>
            <button
              onClick={toggleMenu} 
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>
          </div>
          <div className={`${isMenuOpen ? "block" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 xl:space-x-12">
              <li>
                <LinkUI href="#">
                  Home
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Company
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Marketplace
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Features
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Team
                </LinkUI>
              </li>
              <li>
                <LinkUI href="#">
                  Contact
                </LinkUI>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )}
    </div>
  );
}
