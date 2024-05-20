export const CreateTodo = (content) =>{
    return {
        type: "CREATE",
        content: content
    }
};

export const CompletedTodo = (id) => {
    return {
        type: "COMPLETE",
        id: id
    }
}

export const Undo = (id) => {
    return {
        type: "UNDO",
        id: id
    }
}

export const DeleteTodo = (id) => {
    return {
        type: "DELETE",
        id: id
    }
}