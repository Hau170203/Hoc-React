import PrivateRoutes from "../Components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogAll from "../pages/BlogAll";
import BlogDetail from "../pages/BlogDetail";
import BlogNew from "../pages/BlogNew";
import BlogRelated from "../pages/BlogRelated";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import InfoUser from "../pages/InfoUser";
import Login from "../pages/Login";

export const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'blog',
                element: <Blog />,
                children: [
                    {
                        index: true,
                        element: <BlogAll />
                    },
                    {
                        path: ':id',
                        element: <BlogDetail />
                    },
                    {
                        path: 'new',
                        element: <BlogNew />
                    },
                    {
                        path:'related',
                        element: <BlogRelated />
                    }
                ]
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '*',
                element: <Error404 />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: 'info-user',
                        element: <InfoUser />
                    }
                ]
            }
        ]
    }
]
