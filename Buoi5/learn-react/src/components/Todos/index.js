import { useEffect, useReducer, useRef } from "react";

const init = [
    {
        id: 1,
        todo: "Học HTML "
    },
    {
        id: 2,
        todo: "Học  CSS"
    },
    {
        id: 3,
        todo: "Học JS"
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case "Them":
            return [
                ...state,
                {
                    id: Date.now(),
                    todo: action.todo
                }
            ];
        case "DELETE":
            const newArr = state.filter((todo) => (todo.id !== action.id));
            // console.log(newArr);
            return newArr;
        default:
            return state;
    }

}



function Todos() {

    const [todos, dispatch] = useReducer(reducer, init);
    const inputRef = useRef();

    const HandleSubmit = (e) => {
        e.preventDefault();
        const Values = e.target.Value.value;
        // console.log(e.target.Value.value);
        if(Values) {
            dispatch({
                type: "Them",
                id: Date.now(),
                todo: Values
            });
        }
        inputRef.current.value = "";
    };

    const HandleClick = (id) =>{
        // console.log(id);
        dispatch({
            type: "DELETE",
            id: id
        });
    }

    useEffect(() =>{
        inputRef.current.focus();
    },[])

    // console.log(todos);
    return (
        <>
            <form onSubmit={HandleSubmit} >
                <input name="Value" ref={inputRef}/>
                <button>Thêm</button>
            </form>
            <ul>
                {todos.length > 0 && (
                    todos.map((item) => (
                        <li key={item.id}>
                            {item.todo}
                        <button onClick={() =>HandleClick(item.id)} >Xóa</button>
                        </li>
                    ))
                )}
            </ul>
        </>
    )
}

export default Todos;