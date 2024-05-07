import { createContext } from "react";
import Header from "../Header";
import Menu from "../Menu";
export const menuContext = createContext();


function Layout() {
    const menus = [
        "Trang chủ",
        "Tin Tức",
        "Giới Thiệu",
        "Liên hệ"
    ]
    return (
        <>
            <menuContext.Provider value={menus}>
            <div>
                <Header />
            </div>
            <div>
                <Menu />
            </div>
            <div>
                Footer
            </div>
            </menuContext.Provider>
        </>
    )
}

export default Layout;