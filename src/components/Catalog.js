import React from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <div>
      <h2>Catálogo de Categorías</h2>
      <ul>
        <li>
          <Link to="/category/1">Categoría 1</Link>
        </li>
        <li>
          <Link to="/category/2">Categoría 2</Link>
        </li>
        {/* Agrega más categorías y enlaces */}
      </ul>
    </div>
  );
};

export default Catalog;

