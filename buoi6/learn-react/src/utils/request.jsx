export const API_DOMAIN = 'http://localhost:3000/'
export const get = async (patch) => {
    const response = await fetch(API_DOMAIN + patch)
    const result = await response.json();
    return result;
}


export const post = async (patch, option) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(option)
    });
    const result = await response.json();
    return result;
}

export const edit = async (patch, id, data) =>{
    const response = await fetch(`${API_DOMAIN}${patch}/${id}`,{
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

export const del = async (patch, item) =>{
    const response = await fetch(`${API_DOMAIN}${patch}/${item}`,{
        method: "DELETE"
    });
    const result = await response.json();
    return result;
}


export const getCate = async (patch) =>{
    const response = await fetch(API_DOMAIN+patch);
    const result = await response.json();
    return result
}