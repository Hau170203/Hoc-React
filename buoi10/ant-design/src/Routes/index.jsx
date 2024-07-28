import LayoutDefault from '../Layout/LayoutDefault/LayoutDefault'
import BookRoom from '../Page/BookRoom'
import CreateRoom from '../Page/CreateRoom'
import Dashboard from '../Page/Dashboard'
import ListRoom from '../Page/ListRoom'

export const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children : [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: 'book-room',
                element: <BookRoom />
            },
            {
                path: 'create-room',
                element: <CreateRoom />
            },
            {
                path: 'list-room',
                element: <ListRoom />
            }
        ]
    }
]