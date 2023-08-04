import './NavBar.css';
// NavBar.js
import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Brand */}
      <a className="navbar-brand" href="/">BIENVENIDOS</a>

      {/* Lista de categorías */}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Galeria</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contacto</a>
        </li>
        {/* Agrega más categorías según sea necesario */}
      </ul>

      {/* CartWidget */}
      <CartWidget />

    </nav>
  );
};

export default NavBar;
