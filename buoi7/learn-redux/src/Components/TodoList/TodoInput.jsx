import { useDispatch} from 'react-redux';
import { CreateTodo } from '../../actions/Todo';
import { useEffect, useRef } from 'react';
function TodoInput() {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const HandleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.content.value
        if(value !== ''){
            dispatch(CreateTodo(value));
            inputRef.current.value = '';
            inputRef.current.focus();
        }
    };
    useEffect(() =>{
        inputRef.current.focus();
    },[]);

    return (
        <>
        <div className="todo__input">
            <form onSubmit={HandleSubmit}>
                <input ref={inputRef} type="text" name="content" className='input'/>
                <input type="submit" value="+" className='submit' />
            </form>
        </div>
        </>
    )
}

export default TodoInput;