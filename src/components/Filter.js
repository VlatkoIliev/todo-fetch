import React from 'react';

const Filter = ({ handleFilter, type }) => {
  return (
    <div>
      <select value={type} onChange={handleFilter}>
        <option value=''>All Fruits</option>
        <option value='sweet'>Sweet Fruits</option>
        <option value='bitter'>Bitter Fruits</option>
      </select>
    </div>
  );
};

export default Filter;
