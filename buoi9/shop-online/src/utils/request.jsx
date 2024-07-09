export const API_DOMAIN = 'http://localhost:3000/';
export const get = async (patch) =>{
    const response = await fetch(`${API_DOMAIN}${patch}`);
    const result = await response.json();
    return result;
}