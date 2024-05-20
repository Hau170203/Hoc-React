import { useDispatch, useSelector } from "react-redux"
import { down, up } from "../../actions/Counter";

function Counter2() {
    const couter2 = useSelector(state => state.CouterReducer);
    const dispatch = useDispatch();
    return (
        <>
            <h2>Count2: {couter2}</h2>
            <button onClick={() => dispatch(up(4))}>UP</button>
            <button onClick={() => dispatch(down(3))}>DOWN</button>
        </>
    )
}

export default Counter2;