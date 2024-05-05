import { productList } from "../../data/ProductList";
import ProductItem from "./productItem";
import './products.css';
function ProductList() {
    console.log(productList);
    return (
        <>
            <div className="product__List">
                {productList.map((item) => (
                    <ProductItem item={item} key={item.id}/>
                ))}
            </div>
        </>
    )
}

export default ProductList;