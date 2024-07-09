import React, { useState, useEffect } from 'react'
import { getProductList } from '../../services/servicesProducts';
import './Products.scss';
import Product from './Product';

export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await getProductList();
      setProducts(result);
    }
    fetchAPI();
  }, [])
  return (
    <>
      <div className='product'>
        {products && (
          products.map(item => (
            <Product item={item} key={item.id}/>
          ))
        )}
      </div>
    </>
  )
}
