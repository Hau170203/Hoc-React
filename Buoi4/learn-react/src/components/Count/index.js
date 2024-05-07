import { useCallback, useState } from "react";
import Box from "../Box";


function Count() {

    const [Count, setCount] = useState(0);

    const HandleClick = useCallback(() => {
            setCount(Count => Count + 1);
    },[]);

    const HandleReset = useCallback(() =>{
        setCount(0);
    },[])
    return (
        <>
            
            <div>
                <h3>Số lần Click: {Count}</h3>
            </div>
            <Box  onCount={HandleClick} onReset={HandleReset}/>
        </>
    );
}

export default Count;