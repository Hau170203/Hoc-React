import React from 'react'
import { useSelector } from 'react-redux'

export default function CartMini() {
    const cart = useSelector(state => state.CartReducers);

    const total = cart.reduce((sum, item) => {
        return sum += item.quatity
    }, 0)
    // console.log(cart);
    // console.log(total);
    return (
        <>
            Cart ({ total })
        </>
    )
}
