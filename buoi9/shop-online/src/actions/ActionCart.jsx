export const AddCart = (item) => {
    return {
        type: "ADD",
        data: item
    }
}

export const UpCart = (id) => {
    return {
        type: 'UP',
        id: id
    }
}

export const DownCart = (id) => {
    return {
        type: 'DOWN',
        id: id
    }
}

export const DeleteItem = (id) => {
    return {
        type: 'DELETE',
        id: id
    }
}

export const DeleteAll = () => {
    return {
        type : 'DELETEALL'
    }
}