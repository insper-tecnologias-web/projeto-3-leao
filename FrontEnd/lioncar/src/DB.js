import axios from "axios";

const API_BASE = 'http://127.0.0.1:8000/';
const API_TOKEN = 'http://localhost:8000/api/token/';

const basicFetch = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        return null;
    }
};

const Db = {
    getUsers: async () => {
        try {
            const users = await basicFetch('api/users');

            return users;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar dados:", error);
            return null;
        }
    },

    getUser: async (username) => {
        const endpoint = 'api/getuser';

        try {
            const response = await axios.get(`${API_BASE}/${endpoint}`, {
                params: { username:username }
            });

            return response.data;
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            return null;
        }
    },

    getToken: async (formToken) => {
        const responseToken = axios.post(`${API_TOKEN}`,formToken);
        return (await responseToken).data.token;
    },

    postUser: async (formUser) => {
        const endpoint = 'api/users/';
        axios.post(`${API_BASE}${endpoint}`,formUser)
        .then((response)=>{console.log(response)})
        .catch((error)=>console.log(error))
    },

    checkUserExistence: async (email,username) => {
        const endpoint = 'api/checkuserexistence';

        try {
            const response = await axios.get(`${API_BASE}/${endpoint}`, {
                params: { email: email, username:username }
            });

            return response.data;
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            return null;
        }
    },

    postCar: async (formCar, token) => {
        try {
            const response = await axios.post(`${API_BASE}/api/cars/`, formCar, {
                headers: {
                    Authorization: `Token ${token}`, 
                }
            });
            return response.data;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar dados:", error);
            return null;
        } 
    },

    getCar: async (token) => {
        try {
            const response = await axios.get(`${API_BASE}/api/cars/`, {
                headers: {
                    Authorization: `Token ${token}`, 
                }
            });
            return response.data;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar dados:", error);
            return null;
        } 
    }


};

export default Db;
