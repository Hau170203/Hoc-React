import { useReducer } from "react";

const reducer = (state, action) =>{
    switch(action){
        case "UP":
            return state + 1;
        
        case "DOWN":
            return state - 1;

        case "RESET":
            return 0;
        
        default:
            return state;
    }
    
}

function Reducer() {

    const [state, dispatch] = useReducer(reducer, 0);


    return (
        <>
            <div>Count: {state}</div> 
            <button onClick={() =>dispatch("UP")}>UP</button>
            <button onClick={() =>dispatch("DOWN")}>DOWN</button>
            <button onClick={() =>dispatch("RESET")}>RESET</button>

        </>
    );
}

export default Reducer;