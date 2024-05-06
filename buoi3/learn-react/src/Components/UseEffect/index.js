import { useEffect, useState } from "react";
import './useEffect.scss';


function UseEffect1() {

    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data.products);
                setData(data.products);
            })

    }, []);

    console.log(Data);
    return (
        <>
            <div className="product">
                {Data.map((item) => (
                    <div className="product__Item" key={item.id}>
                        <img src={item.thumbnail} alt={item.category} className="product__Img" />
                        <div className="product__Content">
                            <h4 className="product__Name">{item.title}</h4>
                            <p className="product__Brand">{item.brand}</p>
                            <p className="product__Price" >{item.price}$</p>
                            <p className="product__Des">{item.description}</p>
                            <button className="product__Buy">Mua</button>
                            <button className="product__Cart">Giỏ hàng</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UseEffect1;