import React, { useState } from "react";

const AppProfessor = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderTableData = () => {
    const dataOptions = {
      1: [
        ["Turno","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"],
        ["Manhã", "C. Japonesa", "","","",""],
        ["Tarde", "", "","C. Japonesa","",""],
      ],
      2: [
        ["Turno","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"],
        ["Manhã", "", "","Princípios da Culinária","",""],
        ["Tarde", "Princípios da Culinária", "","","",""],
      ],
      3: [
        ["Turno","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"],
        ["Manhã", "", "Churrasco I","","",""],
        ["Tarde", "", "Churrasco I","","",""],
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
      <h1>Portal do Professor</h1>
      <h2>Tabela de Horários:</h2>
      <button onClick={() => handleOptionChange(1)}>Prof. Aldo</button>
      <button onClick={() => handleOptionChange(2)}>Prof. Bento</button>
      <button onClick={() => handleOptionChange(3)}>Prof. Claudio</button>

      <table border="1">
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default AppProfessor;