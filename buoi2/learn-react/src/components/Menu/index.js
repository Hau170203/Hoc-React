function Menu() {

const arrMenu = [
    "Trang chủ",
    "Sản phẩm",
    "Tin Tức",
    "Giới thiệu",
    "Liên hệ"
]
    return (
        <ul>
            {arrMenu.map((item, index) => {
                return <li key = {index}>{item}</li>
            })}
        </ul>
    )
}

export default Menu;