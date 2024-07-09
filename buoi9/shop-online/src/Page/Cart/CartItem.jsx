import React, { useRef } from 'react'
import { useDispatch  } from 'react-redux';
import { DeleteItem, DownCart, UpCart } from '../../actions/ActionCart';

export default function CartItem(pros) {
    const RefInput = useRef();
    const { item } = pros;
    const dispatch = useDispatch();
    const HandleUp = (e) => {
        // console.log(item.data.id);
        dispatch(UpCart(item.data.id));
        RefInput.current.value = parseInt(RefInput.current.value) + 1;
    }

    const HandleDown = (e) => {
        // console.log(item.data.id);
        if (item.quatity > 1) {
            dispatch(DownCart(item.data.id));
            RefInput.current.value = parseInt(RefInput.current.value) - 1;
        }
    }

    const HandleDelete = () => {
        // console.log(item.data.id);
        dispatch(DeleteItem(item.data.id));
    }
    return (
        <>
            <div className='cart__item' key={item.data.id}>
                <div className='cart__image' >
                    <img src={item.data.thumbnail} alt={item.data.title} />
                </div>
                <div className='cart__content'>
                    <h4>{item.data.title}</h4>
                    <p className='cart__price--new'>{(item.data.price) - ((item.data.price * item.data.discountPercentage) / 100).toFixed(0)} $</p>
                    <p className='cart__price--old'>{item.data.price} $</p>
                </div>
                <div className='cart__quatity'>
                    <button type="button" className='cart__btn cart__btn--down' onClick={HandleDown}>-</button>
                    <input ref={RefInput} defaultValue={item.quatity} />
                    <button type="button" className='cart__btn cart__btn--up' onClick={HandleUp}>+</button>
                </div>
                <button type="button" className='cart__btn cart__btn--delete' onClick={HandleDelete}>Xóa</button>
            </div>
        </>
    )
}
