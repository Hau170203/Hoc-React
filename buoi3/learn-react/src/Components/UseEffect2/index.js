import { useEffect, useState } from "react";
import './useEffect.scss';


function UseEffect2() {

    const limit = 10;
    const [Page , setPage] = useState(0);
    const [Data, setData] = useState([]);
    const [quantityPage, setQuantityPage] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${Page*limit}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const total = Math.ceil(data.total / limit);
                setQuantityPage(total);
                // console.log(total);
                setData(data.products);
            })

    }, [Page]);

    const newArr = [...Array(quantityPage)];
    // console.log(newArr);
    
    const HandleClick = (e) => {
        // console.log(e);
        setPage(e);
    }


    // console.log(Data);
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
            <div className="Pagination">
                <ul>
                    {newArr.map((_,index) => (
                        <li onClick={() => HandleClick(index)} key={index}>{index + 1}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default UseEffect2;