const ReloadReducer = (state = '', action) => {
    console.log(state,action);
    switch (action.type) {
        case "RELOAD":
            return action.status
        default:
            return state;
    }
}

export default ReloadReducer;