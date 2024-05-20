import { useDispatch, useSelector } from "react-redux";
import { down, reset, up } from "../../actions/Counter";

function Counter() {
    let Counter = useSelector(state => state.CouterReducer);
    const dispatch = useDispatch();
    // console.log(Counter);
    return(
        <>
           <h2>Couter: {Counter}</h2>
           <button onClick={() => dispatch(up(5))}>UP</button>
           <button onClick={() => dispatch(down(2))}>DOWN</button>
           <button onClick={() => dispatch(reset())}>RESET</button>
        </>
    )
}

export default Counter;