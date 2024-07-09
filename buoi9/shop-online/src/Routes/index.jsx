import LayoutDefault from "../Layout/LayoutDefault";
import Cart from "../Page/Cart";
import Home from '../Page/Home';

export const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }
]