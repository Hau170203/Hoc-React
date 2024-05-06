import { useState } from 'react';

function Lamp() {
    // let status = false;

    const [status , setStatus] = useState(false);

    const Hendlelick = () =>{
        setStatus(!status)
    }

    // console.log(status);
    return (
    <>
        <button onClick={Hendlelick}>
            {status ? 'Tắt đèn' : 'Bật đèn'}
        </button>
        <div>
            {status ? 'Đèn đang bật' : 'Đèn đang tắt'}
        </div>
    </>
    )
}

export default Lamp;