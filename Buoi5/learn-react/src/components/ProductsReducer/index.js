import { useEffect, useReducer, } from 'react';

const init = {
    loading: true,
    products: []
}

const reducer = (state, action) => {

    console.log(state);
    console.log(action);
    if (action.type === "SUCCESS") {
        return {
            loading: false,
            products: action.products
        }
    }
}

function ProductsReducer() {
    // const [data, setData] = useState();
    // const [loading, setLoading] = useState(true)

    const [data, dispatch] = useReducer(reducer, init)

    useEffect(() => {
        const CallApi = () => {
            fetch("https://dummyjson.com/products")
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    dispatch({
                        type: "SUCCESS",
                        loading: false,
                        products: data.products
                    })
                    // setData(data.products);
                    // setLoading(false)
                })
        }

        setTimeout(() => {
            CallApi();
        }, 4000);

    }, []);

    // console.log(loading)
    console.log(data);
    return (
        <>
            {data.loading ?
                (
                    "Đang loading dữ liệu...."
                )
                : (
                    data.products.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                )}
        </>
    );
}

export default ProductsReducer;