import React, { useState } from "react";
import TableData from "./TableData.jsx";

const AppProfessor = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1>Portal do Professor</h1>
      <h2>Tabela de Horários:</h2>
      <button onClick={() => handleOptionChange(1)}>Prof. Aldo</button>
      <button onClick={() => handleOptionChange(2)}>Prof. Bento</button>
      <button onClick={() => handleOptionChange(3)}>Prof. Claudio</button>

      <table border="1">
        <tbody><TableData selectedOption = {selectedOption}  > </TableData></tbody>
      </table>
    </div>
  );
};

export default AppProfessor;