# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Descrição da funcionalidade:
Proposta menu aluno:
O aluno entra na plataforma e tem uma grade de horários, ele têm disponibilidade de horários entre manhã (08 - 12) e tarde (13 - 17). O menu funciona do seguinte modo: serão 3 disciplinas, cada disciplina terá aula em um dia e horario especifico por 4h. O aluno irá abrir o site e ao selecionar a disciplina, aparecerá duas sugestões de dia e horário. 
Observe uma simulação onde A B e C são disciplinas ;1 / 2 são seus respectivos turnos e se te qa qi sx são dias da semana. 
O menu seria: (GRADE COM PREENCHIMENTO AUTOMATICO) 
Selecionar disciplina onde apareceria automaticamente o nome do professor e encaixaria o dia na tabela
disponibilidades:
A 1 se / 2 qa
B 1 qa / 2 se
C 1 sx /  2 sx

Proposta menu professor:
Professor: 
O professor entraria na plataforma e como não podemos ter um acesso a banco de dados refinado, teria que disponibilizar os horários que o próprio aluno já têm acesso, ou seja, o menu alterna entre professores, cada professor é uma pré-seleção de disciplinas e horários. 
Exemplo:
Professor A da disciplina A, ao selecionar ele acima da grade de horarios, mostra que os horários dele seriam respectivamente Segunda manhã e quarta a tarde. 
E assim sucessivamente 
seria a mexma exibição do sistema: 
Botão para mudar entre os professores >
GRADE COM PREENCHIMENTO PRÉ-SELECIONADO POR PROFESSOR
