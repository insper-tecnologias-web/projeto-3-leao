import React, { useState } from 'react';
import './publish.css';
import API from '../../API';
import Db from '../../DB'
import { useSelector } from "react-redux";

const Publish = (props) => {

    const user = useSelector(state => state.user);

    const tipos = ['carros', 'motos', 'caminhoes'];
    const [tipoSelecionado, setTipoSelecionado] = useState(null);

    const [marcas, setMarcas] = useState(null);
    const [marcaSelecionada, setMarcaSelecionada] = useState(null);

    const [modelos, setModelos] = useState(null);
    const [modeloSelecionado, setModeloSelecionado] = useState(null);

    const [anos, setAnos] = useState(null);
    const [valor, setValor] = useState(null);

    const [warning, setWarning] = useState(null);
    const [warningColor, setWarningColor] = useState('red');

    const checkForm = (formDic) => {
        for (const chave in formDic) {
            const valor = formDic[chave];
            if (valor.length === 0) {
                setWarning(`Preencha o campo de ${chave}`)
                return false
            }
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        setWarningColor('red');
        if (checkForm(formDataObject)) {
            formDataObject.price = parseInt(formDataObject.price, 10);
            console.log(formDataObject);

            const post_feedback = await Db.postCar(formDataObject, user.token)

            console.log('\n\n\n\n\n')
            console.log('AAAAAAAA')
            console.log(post_feedback)
            console.log('\n\n\n\n\n')

            if (post_feedback.published === 'Carro publicado com sucesso!') {
                setWarningColor('green');
                setWarning('Veículo postado!')

            } else {
                setWarningColor('red');
                setWarning('Erro ao postar veículo :(');
            }

        }
    };

    const handleMudancaTipo = async (e) => {
        const tipo = e.target.value;
        if (tipo) {
            setTipoSelecionado(tipo);
            const marcas = await API.getMarcas(tipo);
            setMarcas(marcas)
        } else {
            setTipoSelecionado(null);
            setMarcas(null);
        }
        setMarcaSelecionada(null);
        setModelos(null);
        setModeloSelecionado(null)
        setAnos(null);
        setValor(null);
    };

    const handleMudancaMarca = async (e) => {
        const marca = e.target.value;
        if (marca) {
            setMarcaSelecionada(marca);
            const modelos = await API.getModelos(tipoSelecionado, marca);
            setModelos(modelos.modelos);
        } else {
            setMarcaSelecionada(null);
            setModelos(null);
        }
        setModeloSelecionado(null);
        setAnos(null);
        setValor(null);
    };

    const handleMudancaModelo = async (e) => {
        const modelo = e.target.value;
        if (modelo) {
            setModeloSelecionado(modelo);
            const anos = await API.getAnos(tipoSelecionado, marcaSelecionada, modelo);
            setAnos(anos);
        } else {
            setAnos(null);
            setModeloSelecionado(null);
        }
        setValor(null);
    };

    const handleMudancaAno = async (e) => {
        const ano = e.target.value;
        if (ano) {
            const v = await API.getValor(tipoSelecionado, marcaSelecionada, modeloSelecionado, ano);
            setValor(v.Valor);
        } else {
            setValor(null);
        }
    };

    return (

        <div className='main'>
            <img className="publisher-img" src='images/login.png' alt="Logo Lion Car" />
            <form className='from-publisher' encType="multipart/form-data" onSubmit={handleSubmit}>

                <p className='form-section-title'>Publique um veículo!</p>

                <div className='input-section'>
                    <label htmlFor="tipo">Tipo do veículo:</label>
                    <select className='inputOption' name="type" onChange={handleMudancaTipo}>
                        <option value={''}>
                            {'---'}
                        </option>
                        {tipos.map((tipo, index) => (
                            <option key={`node_id_${index}`} value={tipo}>
                                {tipo}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='input-section'>
                    <label htmlFor="marca">Marca do veículo:</label>
                    <select className='inputOption' name="brand" onChange={handleMudancaMarca}>
                        <option value={''}>
                            {'---'}
                        </option>
                        {marcas ? (
                            marcas.map((marca) => (
                                <option key={`node_id_${marca.codigo}`} value={marca.codigo}>
                                    {marca.nome}
                                </option>
                            ))
                        ) : null}
                    </select>
                </div>


                <div className='input-section'>
                    <label htmlFor="modelo">Modelo do veículo:</label>
                    <select className='inputOption' name="model" onChange={handleMudancaModelo}>
                        <option value={''}>
                            {'---'}
                        </option>
                        {modelos ? (
                            modelos.map((modelo) => (
                                <option key={`node_id_${modelo.codigo}`} value={modelo.codigo}>
                                    {modelo.nome}
                                </option>
                            ))
                        ) : null}
                    </select>
                </div>

                <div className='input-section'>
                    <label htmlFor="ano">Ano do veículo:</label>
                    <select className='inputOption' name="year" onChange={handleMudancaAno}>
                        <option value={''}>
                            {'---'}
                        </option>
                        {anos ? (
                            anos.map((ano) => (
                                <option key={`node_id_${ano.codigo}`} value={ano.codigo}>
                                    {ano.nome}
                                </option>
                            ))
                        ) : null}
                    </select>
                </div>

                {valor ? (
                    <div>
                        <p>Preço FIPE: {valor}</p>
                    </div>
                ) : null}

                <div className='input-section'>
                    <label className="label" htmlFor="preco">Preço do vendedor em reais (R$):</label>
                    <input
                        className='inputField'
                        type="number"
                        placeholder="Preço a venda"
                        name="price"
                    />
                </div>

                <div className='input-section'>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id='descricao'
                        className='inputField'
                        type="text"
                        maxLength="1000"
                        placeholder="Descrição"
                        name="description"
                    />
                </div>

                <div>
                    <button className="btn-submit-form" type="submit">
                        PUBLICAR VEÍCULO
                    </button>
                    <p className='warning' style={{ color: warningColor }}>{warning}</p>
                </div>

            </form>


        </div>
    );
};

export default Publish;

