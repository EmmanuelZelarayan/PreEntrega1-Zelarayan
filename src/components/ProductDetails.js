import React from 'react';
import { useParams } from 'react-router-dom';
import products from './Data';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto {product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
