import axios from "axios";

const API_BASE = 'http://127.0.0.1:8000/';

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
            const db = {
                events: await basicFetch('api/users/'),
            };

            return db;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar dados:", error);
            return null;
        }
    },
};

export default Db;
