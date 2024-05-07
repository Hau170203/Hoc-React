import {useRef, useState} from 'react';

function Random() {
    const list = [
        "Xe máy",
        "Ô tô",
        "Điện thoại",
        "Máy tính bảng",
        "Thẻ cào đt"
    ];
    let length = list.length;
    const [data, setData] = useState("");
    const cout = useRef(0);

    const HandleClick = (e) =>{
        // console.log(e.target.value)
        if(cout.current < 3){
            let newValue = Math.floor(Math.random()* length)
            console.log(newValue);
            setData(list[newValue]);
            cout.current += 1;
        }
        else {
            alert("Bạn đã hết lượt!");
        }
       
        // console.log(cout);
    }
    return (
        <>
            <button onClick={HandleClick} >Click me</button>
            <h3>Bạn đã trúng thưởng: {data}</h3>
        </>
    )
}

export default Random;