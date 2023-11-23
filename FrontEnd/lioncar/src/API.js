import axios from "axios";

const API_BASE = 'https://parallelum.com.br/fipe/api/v1';

const API = {
    getMarcas: async (tipoveiculo) => {
        try {
            const response = await axios.get(`${API_BASE}/${tipoveiculo}/marcas`);
            return response.data;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar dados:", error);
            return null;
        }
    },

    getModelos: async (tipoveiculo, marcaId) => {
        try {
            const response = await axios.get(`${API_BASE}/${tipoveiculo}/marcas/${marcaId}/modelos`);
            return response.data;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar dados:", error);
            return null;
        } 
    },

    getAnos: async (tipoveiculo, marcaId, modeloId) => {
        try {
            const response = await axios.get(`${API_BASE}/${tipoveiculo}/marcas/${marcaId}/modelos/${modeloId}/anos`);
            return response.data;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar dados:", error);
            return null;
        } 
    },

    getValor: async (tipoveiculo, marcaId, modeloId, anoId) => {
        try {
            const response = await axios.get(`${API_BASE}/${tipoveiculo}/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`);
            return response.data;
        } catch (error) {
            console.log('[ERROR]');
            console.error("Erro ao buscar dados:", error);
            return null;
        } 
    }
};

export default API;