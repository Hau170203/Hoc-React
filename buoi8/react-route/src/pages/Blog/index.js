import { Outlet } from "react-router-dom";

function Blog() {
    return (
        <>
            <h1>Trang tin tức:</h1>
            <Outlet />
        </>
    )
}

export default Blog;