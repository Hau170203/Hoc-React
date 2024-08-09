import Layout from "../layout";
import Home from "../pages/Home";
import Topic from '../pages/Topic';
import Answers from '../pages/Answers';
import Login from '../pages/Login';
import PrivateRoutes from "../components/PrivateRoutes";
import Quiz from '../pages/Quiz';
import Result from '../pages/Result'



export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'topic',
                element: <Topic />,
                children: [
                    {
                        path: 'topic/:search',
                        element: <Topic/>
                    }
                ]
            },
            {
                path: 'answers',
                element: <Answers />
            },
            {
                path: 'login',
                element: <Login />
            },
            
            {

                element: <PrivateRoutes />,
                children: [
                    {
                        path: 'quiz/:id',
                        element: <Quiz />
                    },
                    {
                        path: 'result/:id',
                        element: <Result />
                    }
                ]
            }
        ]
    }
];