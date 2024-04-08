import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProfessor from './AppProfessor.jsx'
import AppAluno from './AppAluno.jsx'
import './AppProfessor.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //deixando os dois apps na primeira tela para facilitar visualização ao longo do desenvolvimento
  //substituir quando o index for desenvolvido
  <React.StrictMode>
    <AppProfessor />
    <AppAluno />
  </React.StrictMode>,
)
