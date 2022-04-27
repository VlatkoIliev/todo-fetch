import React, { useState } from 'react';

const DropMenu = ({ fruit }) => {
  //   const handleChange = (e) => {
  //     filterFruits();
  //   };

  //   const filterFruits = () => {
  //     const filtered = fruit.filter((item) => item.sweet === false);
  //     setFruit(filtered);
  //   };

  //   const handleSubmit = (e) => {
  //     alert('your favorite friut is: ' + fruit);
  //     e.preventDefault();
  //   };
  return (
    <div>
      <ul>
        {fruit.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropMenu;
