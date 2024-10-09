import React from 'react';
import logo from '../assets/logoNoBanner.png';
import { LinkUI } from './ui';

export const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 md:gap-8 px-40 py-40 mt-10 bg-gray-50'>
      {/* Sección MORE INFO */}
      <div className='flex flex-col items-center md:items-center md:col-span-2'>
        <img src={logo} className='h-10 xl:h-16 mb-4' alt="Logo" />
        <span className='font-semibold text-center md:text-left text-eco1'>
          Drive the Future, <span className='text-eco2'>Preserve the Earth. </span>
        </span>
      </div>

      {/* Sección COMPANY */}
      <div className='flex flex-col items-center lg:items-start space-y-1'>
        <span className='font-semibold tracking-wide text-lg'>COMPANY</span>
        <LinkUI href="/about">About Us</LinkUI>
        <LinkUI href="/mission">Our Mission</LinkUI>
        <LinkUI href="/careers">Careers</LinkUI>
        <LinkUI href="/press">Press</LinkUI>
      </div>

      {/* Sección SUPPORT */}
      <div className='flex flex-col items-center lg:items-start space-y-1'>
        <span className='font-semibold tracking-wide text-lg'>SUPPORT</span>
        <LinkUI href="/contact">Contact Us</LinkUI>
        <LinkUI href="/how-it-works">How it Works</LinkUI>
        <LinkUI href="/rental-policies">Rental Policies</LinkUI>
        <LinkUI href="/faqs">FAQs</LinkUI>
      </div>
      
      {/* Sección SERVICES */}
      <div className='flex flex-col items-center lg:items-start space-y-1'>
        <span className='font-semibold tracking-wide text-lg'>SERVICES</span>
        <LinkUI href="/vehicle-models">Vehicle Models</LinkUI>
        <LinkUI href="/corporate-rentals">Corporate Rentals</LinkUI>
        <LinkUI href="/long-term-leasing">Long-Term Leasing</LinkUI>
        <LinkUI href="/insurance-coverage">Insurance & Coverage</LinkUI>
      </div>

      {/* Formulario de Newsletter */}
      <form className='col-span-1 md:col-span-2 flex flex-col xl:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-4'>
        <input
          className='border-2 border-gray-300 rounded-full p-4 w-auto '
          placeholder='Enter your email address'
          type='text'
        />
        <button
          type='submit'
          className='bg-eco2 font-semibold text-white rounded-full p-4 tracking-widest border-2 hover:bg-eco2.1 w-auto'
        >
          Subscribe
        </button>
      </form>
    </footer>
  );
};
