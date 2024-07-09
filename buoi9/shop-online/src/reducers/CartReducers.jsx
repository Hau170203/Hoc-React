const CartReducers = (state = [], action) => {
    // console.log(state,action);
    let newState = [...state];

    switch (action.type) {
        case 'ADD' :
            return state = [
                ...state,
                {
                    id: action.data.id,
                    data: action.data,
                    quatity: 1
                }
            ]
        
        case 'UP' :
            const quatityUp = newState.find(item => item.id === action.id);
            // console.log(quatityUp);
            quatityUp.quatity += 1;
            return newState;
        
        case 'DOWN':
            const quatityDown = newState.find(item => item.id === action.id);
            // console.log(quatityDown);
            if(quatityDown.quatity <= 1){
                console.log("Bạn có muốn xóa ")
            } else {
                quatityDown.quatity -= 1;
            }
            return newState;

        case 'DELETE':
            newState = newState.filter(item => item.id !== action.id)
            return newState;

        case 'DELETEALL':
            return newState = [];
        default :
            break;
    }
    // console.log(state);
    return state;
}

export default CartReducers;