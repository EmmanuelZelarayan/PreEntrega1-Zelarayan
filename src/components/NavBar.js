import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Brand */}
      <Link className="navbar-brand" to="/">Brand</Link>

      {/* Lista de categorías */}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/category/1">Categoría 1</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/2">Categoría 2</Link>
        </li>
        {/* Agrega más categorías según sea necesario */}
      </ul>
    </nav>
  );
};

export default NavBar;
