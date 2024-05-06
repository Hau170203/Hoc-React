import { useState } from 'react';
import './Cart.scss';

function Cart() {
    const donGia = 1200000;
    let thanhTien = 1200000;
    const [soLuong , setSoLuong] = useState(1);
    
    const HendleChange = (e) =>{
        console.log(e.target.value);
        const updateSoLuong = parseInt(e.target.value);
        setSoLuong(updateSoLuong);
    }
    return (
        <>
            <table className="Cart">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Giầy nam cao cấp</td>
                        <td>
                            <input type="number" min={1} defaultValue={soLuong} onChange={HendleChange} />
                        </td>
                        <td>{donGia} đ</td>
                        <td>{thanhTien * soLuong} đ</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


export default Cart;