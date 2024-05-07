import { useContext } from "react";
import { menuContext } from "../layout";

function Menu() {
    const menus = useContext(menuContext);
    // console.log(menus);
    return (
        <>
            <ul>
                {menus.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Menu;
