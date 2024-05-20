
const init = [
    {
        id: 1,
        content: "Học HTML",
        Complete: true
    },
    {
        id: 2,
        content: "Học CSS",
        Complete: false
    },
    {
        id: 3,
        content: "Học JS",
        Complete: false
    }
];
const TodoReducer = (state = init, action) => {
    // console.log(state, action);
    switch (action.type) {
        case "CREATE":
            return state = [
                ...state,
                {
                    id: Date.now(),
                    content: action.content,
                    Complete: false
                }
            ]
        case "COMPLETE":
            const newState = [...state];
            const index = newState.findIndex((item) => {
                return item.id === action.id
            });
            // console.log(index);
            newState[index].Complete = true;
            return newState;
        case "UNDO":
            const newState2 = [...state];
            const index2 = newState2.findIndex((item) => {
                return item.id === action.id
            })

            // console.log(index2);
            newState2[index2].Complete = false;
            return newState2;
        case "DELETE":
            const newState3 = state.filter((item) => {
                return item.id !== action.id
            });
            console.log(newState3);
            return newState3;
        default:
            break;
    }
    return state;
};

export default TodoReducer;