import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalles del Item {id}</h2>
      {/* Muestra los detalles del item */}
    </div>
  );
};

export default ItemDetailContainer;

