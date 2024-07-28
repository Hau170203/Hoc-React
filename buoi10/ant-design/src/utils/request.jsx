export const API_DOMAIN = 'http://localhost:3000/';

export const post = async (patch, option) =>{
    const response = await fetch(API_DOMAIN + patch, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)
    });
    const result = await response.json();
    return result;
}

export const get = async (patch) => {
    const response = await fetch(API_DOMAIN + patch);
    const result = await response.json();
    return result;
}

export const del = async (patch, id) => {
    const response = await fetch(`${API_DOMAIN + patch}/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const result = await response.json();
    return result;
}


export const patch = async (patch, option) => {
    const response = await fetch(`${API_DOMAIN}${patch}`,{
        method:'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)
    });
    const result = await response.json();
    return result;

}