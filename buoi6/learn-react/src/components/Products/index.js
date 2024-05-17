import { useState } from "react";
import CreateProduct from "./CreateProduct";
import ProductList from "./ProductList";
import './style.scss';

function Product() {
    const [load, setLoad]  = useState(false)

    const HandleLoad = () =>{
        setLoad(!load);
    }

    return (
        <>
            <h2>Danh mục sản phẩm</h2>
            <CreateProduct onReLoad={HandleLoad}/>
            <ProductList onReLoad={load} onLoad= {HandleLoad} />
        </>
    )
}

export default Product;