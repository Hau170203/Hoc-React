import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { AddCart, UpCart } from '../../actions/ActionCart';


export default function Product(pros) {
    const {item} = pros;
    const dispatch = useDispatch();
    const products = useSelector(state => state.CartReducers)
    
    // console.log(products);
    const HandleAddCart = (e) => {
        // console.log(item.id);

        if(products.some(itempro =>(itempro.id === item.id))){
            dispatch(UpCart(item.id));
        }else{
            dispatch(AddCart(item));
        }
        // console.log(products);
    }

  return (
    <>
    <div className='product__list' key={item.id}>
              <div className='product__image'>
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className='product__content'>
                <h4 className='product__title'>{item.title}</h4>
                <div className='product__pricenew'>{Math.round((item.price) - ((item.price * item.discountPercentage) / 100))} $</div>
                <div className='product__priceold'>{item.price}$</div>
                <div className='product__dis'>{item.discountPercentage}%</div>
                <button className='btn' onClick={HandleAddCart}>Thêm vào giỏ hàng</button>
              </div>
            </div>
    
    </>
  )
}
