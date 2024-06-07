import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes(){
    const login = false;
    return (
        <>
            { login ? (<Outlet />) : (<Navigate to='/login' />) }
        </>
    )
}

export default PrivateRoutes;