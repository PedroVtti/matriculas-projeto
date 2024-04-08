import React, { useState } from "react";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderTableData = () => {
    const dataOptions = {
      1: [
        ["Turno","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"],
        ["Manhã", "C. Japonesa", "Princípios da Culinária","","",""],
        ["Tarde", "", "","","",""],
      ],
      2: [
        ["Turno","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"],
        ["Manhã", "C. Japonesa", "Churrasco I","Princípios da Culinária","",""],
        ["Tarde", "Princípios da Culinária", "","","",""],
      ],
      3: [
        ["Turno","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"],
        ["Manhã", "C. Japonesa", "Churrasco I","Princípios da Culinária","",""],
        ["Tarde", "Princípios da Culinária", "Churrasco I","C. Japonesa","",""],
      ],
    };

    return dataOptions[selectedOption].map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex}>{cell}</td>
        ))}
      </tr>
    ));
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
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default App;
