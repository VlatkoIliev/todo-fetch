import React from 'react';

// const obj = {
//   id: 44,
//   plussize: false,
//   gender: 'mans',
// };

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.id}</h3>
      <h3>{product.plussize}</h3>
      <h3>{product.gender}</h3>
    </div>
  );
};

export default Product;
