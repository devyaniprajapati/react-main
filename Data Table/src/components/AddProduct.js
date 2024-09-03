import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newProduct = { name, price, description };
    axios.post('http://localhost:8000/products', newProduct)
      .then(response => {
        console.log('Product added!', response.data);
      })
      .catch(error => {
        console.error('There was an error adding the product!', error);
      });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
