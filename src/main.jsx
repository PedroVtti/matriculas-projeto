import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHome from './AppHome.jsx';
import AppProfessor from './AppProfessor.jsx';
import AppAluno from './AppAluno.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/professor" element={<AppProfessor />} />
        <Route path="/aluno" element={<AppAluno />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);