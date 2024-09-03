import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`)
      .then(response => {
        const product = response.data;
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
      })
      .catch(error => {
        console.error('There was an error fetching the product!', error);
      });
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();
    const updatedProduct = { name, price, description };
    axios.put(`http://localhost:8000/products/${id}`, updatedProduct)
      .then(response => {
        console.log('Product updated!', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error updating the product!', error);
      });
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
