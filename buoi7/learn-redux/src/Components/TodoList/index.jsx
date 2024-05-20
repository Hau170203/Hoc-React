import { useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoLists from "./TodoLists";

function TodoList() {
    return ( 
        <>
            <div className="Box">
                <h3 className='Name'>TODO LIST</h3>
                <TodoInput />
                <TodoLists />
            </div>
        </>
    )
}

export default TodoList;