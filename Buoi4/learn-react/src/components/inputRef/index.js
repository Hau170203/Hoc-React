import { useEffect, useRef, useState } from "react";

function Input() {
    const [inputValue, setinputValue] = useState(1);
    const inputRef = useRef();

    // console.log(inputRef.current);

    useEffect(() =>{
        inputRef.current.focus();
    },[])
    const HandleChange = (e) =>{
        setinputValue(e.target.value);

    }
    console.log(inputValue);
    return (
        <>
            <input type="text" ref={inputRef} onChange={HandleChange}/>
        </>
    );
}

export default Input;