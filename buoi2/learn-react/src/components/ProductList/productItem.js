function ProductItem(pros) {
    const {item} = pros;
    return (
        <>
            <div className="product__item">
                <img src={item.image} alt={item.name} className="product__image"/>
                <div className="product__name">{item.name}</div>
                <div className="product__gia">{item.Gia}</div>
            </div>
        </>
    )
}

export default ProductItem;