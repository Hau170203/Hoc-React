import { useEffect, useState } from 'react'
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import { getProductList } from '../../services/servicesProduct';
// import './style.scss';

function ProductList(pros) {
    const { onReLoad, onLoad } = pros;
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);

    const HandleLoad = () => {
        setLoad(!load);
    }

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setData(result.reverse());
            // console.log(result);
        };
        fetchApi()
    }, [onReLoad, load])

    // console.log(data)
    return (
        <>
            <div className='product'>

                {data.map((item) => (
                    <div className='product__item' key={item.id}>
                        <img src={item.thumbnail} alt={item.title} className='product__image' />
                        <div className='product__content' >
                            <h3 className='product__title'>{item.title}</h3>
                            <p className='product__price'>{item.price}$</p>
                            <p className='product__sale'>{item.discountPercentage}%</p>
                            <EditProduct item={item} onLoad={HandleLoad} />
                            <DeleteProduct item={item.id} onLoad={onLoad} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductList;