import { useNavigate } from "react-router-dom";

function Goback() {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate(-1);
    }
    return (
        <>
            <button onClick={HandleClick}>Trở lại</button>
        </>
    )
}

export default Goback;