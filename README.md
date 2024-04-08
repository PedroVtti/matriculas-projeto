# Descrição da funcionalidade;
## Proposta menu aluno: 
O aluno entra na plataforma e tem uma grade de horários, ele têm disponibilidade de horários entre manhã (08 - 12) e tarde (13 - 17). O menu funciona do seguinte modo: serão 3 disponibilidades de cadeiras, cada disponibilidade terá um número de par de cadeiras; exemplo: 2 cadeiras, 4 cadeiras e 6 cadeiras predefinidas pela universidade, cada disciplina terá aula em um dia e horario especifico por 4h. O aluno irá abrir o site e ao selecionar a quantidade de cadeiras, aparecerá as respectivas predefinições de dia e turno. 
O menu seria: GRADE > PREDEFINIÇÃO ALTERNAVEL (3)

# Proposta menu professor: 
## Professor: 
O professor entraria na plataforma e como não podemos ter um acesso a banco de dados refinado, teria que disponibilizar os horários que o próprio aluno já têm acesso, ou seja, o menu alterna entre professores, cada professor é uma pré-seleção de disciplinas e horários. Exemplo: Professor A da disciplina A, ao selecionar ele acima da grade de horarios, mostra que os horários dele seriam respectivamente Segunda manhã e quarta a tarde. E assim sucessivamente seria a mexma exibição do sistema: Botão para mudar entre os professores > GRADE >
 PREENCHIMENTO PRÉ-SELECIONADO > POR PROFESSOR (3)

# Como Rodar:
## Rode o backend
Em um terminal, rode o comando Abaixo:

npm run backend 

Caso ocorra algum problema com o nodemon, rode antes a configuração abaixo:

Sistemas 32 bit:
npm config set script-shell "C:\\Program Files (x86)\\git\\bin\\bash.exe"  

Sistemas 64bit:

npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"

## Rode o frontend
Em um novo terminal, rode o seguinte comando

npm run dev

Clique no link que aparece indicando que o vite foi iniciado para abrir a página em seu navegador