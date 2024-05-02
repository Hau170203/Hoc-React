import { FaFacebookSquare, FaBitcoin } from "react-icons/fa";

function MainContent() {
    let fullname = "Ngô Văn Hậu";
    return (
        <>
            <div className="box">
                <div className="test" >
                    Xin chào {fullname}
                </div>
                <div className="test" >
                <FaFacebookSquare /> {fullname}
                <FaBitcoin />
                </div>
            </div>
        </>
    )
}

export default MainContent;