import background4 from '../../assets/image/background4.jpg'
import { FaPlay } from "react-icons/fa";

function Viewaction() {
    return (
        <div className="view-action">
        <div className="container">
            <div className="box-head box-head-center">
                <h2 className="inner-title">
                    View in Action
                </h2>
            </div>
            <div className="inner-wrap">

                <img src={background4} alt=""/>
                <div className="inner-button">
                    <FaPlay />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Viewaction;