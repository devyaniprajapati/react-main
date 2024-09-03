import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/products/${id}`)
      .then(response => {
        console.log('Product deleted!', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error deleting the product!', error);
      });
  };

  return (
    <div>
      <h1>Are you sure you want to delete this product?</h1>
      <button onClick={handleDelete}>Yes, delete</button>
      <button onClick={() => navigate('/')}>No, go back</button>
    </div>
  );
};

export default DeleteProduct;
