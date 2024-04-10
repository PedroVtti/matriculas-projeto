import React, { useState } from "react";
import TableData from "./TableData.jsx";
import './AppAluno.css';

const AppAluno = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1>Portal do Aluno</h1>
      <h2>Tabela de Horários:</h2>
      <h3>Curso de Gastronomia intensivo</h3>
      <p>Escolha a sua opção de matrícula:</p>
      <button onClick={() => handleOptionChange(1)}>2 disciplinas</button>
      <button onClick={() => handleOptionChange(2)}>4 disciplinas</button>
      <button onClick={() => handleOptionChange(3)}>6 disciplinas</button>

      <table border="1">
        <tbody><TableData selectedOption = {selectedOption} endpoint = '/turnosAlunos' > </TableData></tbody>
      </table>
    </div>
  );
};

export default AppAluno;
