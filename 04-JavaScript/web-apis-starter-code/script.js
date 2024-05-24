const BASE_API_URL = "http://regres.in/api";
let endpoint = '/users?page=2';

const makeRequest = async (endpoint) => {
    const response = await axios.get(`${BASE_API_URL}/${endpoint}`);
    return response.data;
}

makeRequest(endpoint);


