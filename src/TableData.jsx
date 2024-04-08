import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TableData(props) {
    const [dataOptions, setDataOptions] = useState([])
    const [carregando, setCarregando] = useState(true);
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000'
    });
    //professor: usei um hook aqui por própria recomendação do React ao tentar obter os dados com uma promessa assíncrona (ver mensagem abaixo).
    //ComponentDidMount só poderia ser usado no caso de classes, correto? Ao longo do curso não ficou claro quando devemos definir um componente como classe ou função
    //Para evitar inconsistências, segui com o modelo de função.

    //Warning: Can't perform a React state update on a component that hasn't mounted yet. 
    //This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.
    useEffect(() => {
        axiosInstance.get('/turnos').then(
            (res) => {
                setDataOptions(res.data);
                setCarregando(false);
            });
    }, [props.selectedOption]);
    if (carregando) return <div>Carregando...</div>
    return dataOptions[props.selectedOption].map((row, rowIndex) => (
        <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));
}