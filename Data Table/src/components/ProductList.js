import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const handleSort = event => {
    setSort(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  });

  const filteredProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Products</h1>
      <input type="text" placeholder="Search products..." value={search} onChange={handleSearch} />
      <select value={sort} onChange={handleSort}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <ul>
        {currentProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
