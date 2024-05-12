import {  useState, useMemo } from "react";
import { Pow } from "../Helpes/Pow";
// import Box from "../Box";


function Count() {

    const [Count, setCount] = useState(0);

    const HandleClick = () => {
            setCount(Count => Count + 1);
    };
    const resultPow = useMemo(() =>{
         return Pow();
    },[]);
    // console.log(resultPow);
    console.log("Count");
    return (
        <>
            
            <div>
                <h3>Số lần Click: {Count}</h3>
            </div>
            <button onClick={HandleClick}>Click me</button>
            <div>{resultPow}</div>
        </>
    );
}

export default Count;