import { useState } from "react";
import './Modal.scss';


function Modal() {
    const [showModal, setShowModal] = useState(false);

    const HendleShow = () => {
        setShowModal(true);
    }

    const HendleClose = () => {
        setShowModal(false);
    }
    return (
        <>
            <button onClick={HendleShow} style={{ cursor:"pointer" }}>Click</button>

            {showModal && (
                <div className="Modal">
                    <div className="Modal__body">
                        <button onClick={HendleClose} className="Modal__Close">X</button>
                        <div className="Modal__box">
                            <div className="Modal__content">
                                Nội dung...
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;