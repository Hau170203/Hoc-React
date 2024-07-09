import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import './Cart.scss';
import { DeleteAll } from '../../actions/ActionCart';

export default function Cart() {
  const products = useSelector(state => state.CartReducers)
  const dispatch = useDispatch()

  const total = products.reduce((sum, item) => {
        return sum += ((((item.data.price) * ((100 - item.data.discountPercentage) / 100))).toFixed(0) * (item.quatity));
  }, 0);
  // console.log(total);

  const HandleDeleteAll = () => {
    dispatch(DeleteAll());
  }

  return (
    <>
      <div className='cart'>
        <div className='cart__title'>
          <h3>Giỏ hàng</h3>
          <button type="button" className='cart__btn cart__btn--Alldelete' onClick={HandleDeleteAll}>Xóa tất cả</button>
        </div>
        <div className='cart__list'>
          {products.length > 0 ? (
            products.map(item => (
              <CartItem item={item} key={item.data.id} />
            ))
          ) : (<h3>Không có sản phẩm nào</h3>)}
        </div>
        {products.length > 0 &&
          <div className='cart__total'>
            Tổng tiền: <span>{total} $</span>
          </div>
        }
      </div>

    </>
  )
}
