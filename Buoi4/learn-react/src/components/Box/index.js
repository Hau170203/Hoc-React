import { memo } from "react";

function Box(pros) {
    const { onCount, onReset } = pros;
    console.log(onCount);
    const HandleClick = () =>{
        onCount();
    };
    const HandleReset = () =>{
        onReset();
    };
    console.log("Box");
    return (
        <>
            <button onClick={HandleClick}>Click me</button>
            <button onClick={HandleReset}>Reset</button>
        </>
    );
}

export default memo(Box);