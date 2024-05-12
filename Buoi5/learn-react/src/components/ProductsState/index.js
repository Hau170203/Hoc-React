import { useEffect, useState } from 'react';
import './ProductsState.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ProductsState() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const CallApi = () => {
            fetch("https://dummyjson.com/products")
                .then(res => res.json())
                .then(data => {
                    setData(data.products);
                    setLoading(false)
                })
        }

        setTimeout(() => {
            CallApi();
        }, 3000);
    }, []);

    // console.log(loading)
    // console.log(data);
    return (
        <>
            {loading ?
                (
                    <div className='product__List'>
                        {[...Array(6)].map((_, index) => (
                            <div className='product__Item' key={index}>
                                <Skeleton  className='product__image' />
                                <Skeleton className="product__Title" />
                            </div>
                        ))}
                    </div>
                )
                : (
                    <div className='product__List'>
                        {data.map((item, index) => (
                            // <li key={item.id}>{item.title}</li>
                            <div className='product__Item' key={index}>
                                <img src={item.thumbnail} alt={item.title} className='product__image' />
                                <h3 className="product__Title">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
        </>
    );
}

export default ProductsState;