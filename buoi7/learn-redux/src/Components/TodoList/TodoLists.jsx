import { useDispatch, useSelector } from 'react-redux';
import './Todo.css';
import { CompletedTodo, DeleteTodo, Undo } from '../../actions/Todo';
function TodoLists() {
    const todos = useSelector(state => state.TodoReducer);
    const dispatch = useDispatch()
    // console.log(todos);
    const HandleComplete = (id) => {
        // console.log(id);
        dispatch(CompletedTodo(id))
    }
    const HandleUndo = (id) => {
        dispatch(Undo(id))
    }

    const HandleDelete = (id) => {
        dispatch(DeleteTodo(id))
    }

    return (

        <>
            {todos && (
                <div className="todo__list">
                    {todos.map((item) => (
                        <div className='todo__item' key={item.id}>
                            <span className={'todo__content ' + (item.Complete && 'todo__content--complete')}>{item.content}</span>
                            <span className='todo__action'>
                                {item.Complete ? (
                                    <button onClick={() => { HandleUndo(item.id) }}>U</button>
                                ) : (
                                    <button onClick={() => { HandleComplete(item.id) }}>V</button>
                                )}
                                <button onClick={() => { HandleDelete(item.id) }}>X</button>
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default TodoLists;
