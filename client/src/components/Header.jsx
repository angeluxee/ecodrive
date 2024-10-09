import React, { useContext } from 'react';
import { Navigation } from './Navigation';

export const Header = () => {
  // Acceder al contexto de autenticación

  return (
    <header>
      <Navigation />
    </header>
  );
};
