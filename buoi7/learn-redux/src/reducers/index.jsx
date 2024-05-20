import { combineReducers } from 'redux';
import CouterReducer from "./CounterReducer";
import TodoReducer from './TodoReducer';


const allReducers = combineReducers({
    CouterReducer,
    TodoReducer
    // Thêm nhiều reducer ở đây
})


export default allReducers;