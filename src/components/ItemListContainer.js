import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Lista de Items de la Categoría {id}</h2>
      <ul>
        <li>
          <Link to={`/item/${id}`}>Item 1</Link>
        </li>
        <li>
          <Link to={`/item/${id}`}>Item 2</Link>
        </li>
        {/* Agrega más items y enlaces */}
      </ul>
    </div>
  );
};

export default ItemListContainer;
