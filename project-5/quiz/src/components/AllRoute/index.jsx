import { routes } from '../../Routes';
import { useRoutes } from 'react-router-dom';

export default function AllRoute() {
    const element = useRoutes(routes);
    return (
        <>
            {element}
        </>
    )
}
