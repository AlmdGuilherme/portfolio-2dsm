const express = require('express');
const cors = require('cors')
const path = require('path')
const app = express();
const port = 3000;


app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/habilidades', (req, res) => {
  const habilidades = [
    { id: 1, rgba: 'rgba(255, 255, 255, 0.5)', iconClass: 'devicon-github-original',  nome: 'Github' },
    { id: 2, rgba: 'rgba(243, 79, 41, 1)', iconClass: 'devicon-git-plain',  nome: 'Git' },
    { id: 3, rgba: 'rgba(35, 168, 241, 1)', iconClass: 'devicon-vscode-plain',  nome: 'VS Code' },
    { id: 4, rgba: 'rgba(1, 83, 206, 1)', iconClass: 'devicon-jira-plain',  nome: 'Jira' },
    { id: 5, rgba: 'rgba(10, 207, 131, 1)', iconClass: 'devicon-figma-plain',  nome: 'Figma' },
    { id: 6, rgba: 'rgba(0, 97, 138, 1)', iconClass: 'devicon-mysql-original',  nome: 'MySql' },
    { id: 7, rgba: 'rgba(1, 155, 198, 1)', iconClass: 'devicon-docker-plain',  nome: 'Docker' },
    { id: 8, rgba: 'rgba(241, 101, 41, 1)', iconClass: 'devicon-html5-plain',  nome: 'HTML5' },
    { id: 9, rgba: 'rgba(240, 219, 79, 1)', iconClass: 'devicon-javascript-plain',  nome: 'JavaScript' },
    { id: 10, rgba: 'rgba(0, 122, 204, 1)', iconClass: 'devicon-typescript-original',  nome: 'TypeScript' },
    { id: 11, rgba: 'rgba(255, 216, 71, 1)', iconClass: 'devicon-python-plain',  nome: 'Python' },
    { id: 12, rgba: 'rgba(203, 102, 153, 1)', iconClass: 'devicon-sass-original',  nome: 'Sass' },
    { id: 13, rgba: 'rgba(97, 218, 251, 1)', iconClass: 'devicon-react-original',  nome: 'React' },
    { id: 14, rgba: 'rgba(69, 197, 37, 1)', iconClass: 'devicon-nodejs-plain',  nome: 'Node JS' },
    { id: 15, rgba: 'rgba(80, 80, 80, 1)', iconClass: 'devicon-flask-original',  nome: 'Flask' },
    { id: 16, rgba: 'rgba(155, 17, 246, 1)', iconClass: 'devicon-bootstrap-plain',  nome: 'Bootstrap' },
    { id: 17, rgba: 'rgba(56, 189, 248, 1)', iconClass: 'devicon-tailwindcss-original',  nome: 'Tailwind' }

  ];
  res.json(habilidades); // Envia um array de objetos como resposta
});

app.get('/api/formacao-academica', (req, res) => {
  const formacoes = [
    {id: 1, nome: 'Ensino Médio - Técnico em Informática', local: 'Colégio Joseense', periodo: '2020 - 2022', descricao: 'Introdução a programção (HTML, CSS e JavaScript), noção de hardware e programação de jogos (Unreal).'},
    {id: 2, nome: 'Inglês', local: 'Wizard', periodo: '2017 - 2022', descricao: 'Curso voltado para aprendizagem de lingua estrangeira.'},
    {id: 3, nome: 'Desenvolvedor Full Stack', local: 'One Bit Code', periodo: '2022 - Presente', descricao: 'Cuso voltado para as principais tecnologias utilizadas para desenvolvimento web, do básico ao avançado.'},
    {id: 4, nome: 'Desenvolvedor Python', local: 'One Bit Code', periodo: '2023 - Presente', descricao: 'Curso voltado para a linguagem python, do básico ao avançado (automações, banco de dados e IA)'},
    {id: 5, nome: 'Ensino Superior', local: 'Fatec - SJC', periodo: '2024 - Presente', descricao: 'Atualmente, estou cursando Desenvolvimento de Software Multiplataforma na Fatec-SJC'}
  ];

  res.json(formacoes)
})

app.get('/api/certificados', (req, res) => {
  const certificados = [
    { id: 1, image: '/assets/HTML5.jpg', area: 'HTML', descricao: 'HTML básico' },
    { id: 2, image: '/assets/CSSI.jpg', area: 'CSS', descricao: 'CSS básico' },
    { id: 3, image: '/assets/CSSII.jpg', area: 'CSS', descricao: 'CSS avançado, displays e responsividade' },
    { id: 4, image: '/assets/JSI.png', area: 'JS', descricao: 'Variáveis, operadores lógicos, condição e repetição' },
    { id: 5, image: '/assets/JSII.png', area: 'JS', descricao: 'Tipos de dados e função' },
    { id: 6, image: '/assets/JSIII.png', area: 'JS', descricao: 'Manipulação de arquivos com o DOM' },
    { id: 7, image: '/assets/PythonI.png', area: 'TS', descricao: 'Programação Orientada a Objetos' },
    { id: 8, image: '/assets/PythonII.png', area: 'Python', descricao: 'Variáveis, operadores lógicos, dados, condição, repetição e função' },
    { id: 9, image: '/assets/PythonIII.png', area: 'Python', descricao: 'Usando/Instalando módulos (PIP)' },
    { id: 10, image: '/assets/Sass.png', area: 'Python', descricao: 'Programação Orientada a Objetos' },
    { id: 11, image: '/assets/TS.jfif', area: 'Sass', descricao: 'Estilização, função e reutilização de componentes' }
  ];
  res.json(certificados);
});

app.get('/api/projetos', (req, res) => {
  const projetos = [
    {id: 1, situacao: 'Concluído', nome:'API - Vereadores', devTeam: 'The Devs Department', 
      descricao: 'Projeto desenvolvido com o objetivo de facilitar a visualização de dados dos vereadores de São José dos Campos. Trazendo mais transparência ao usuários sobre os cadidatos da região, dando a oportunidade de comparar os vereadores',
      tecnologias: ['devicon-html5-plain' ,'devicon-css3-plain', 'devicon-python-plain', 'devicon-flask-original', 'devicon-mysql-original'], image: '/assets/DSM1API.png'},
    {id: 2, situacao: 'Em Desenvolvimento', nome:'API - Helpnei', devTeam: 'The Devs Department', 
      descricao: 'Projeto desenvolvido com o objetivo de aumentar o engajamento de uma empresa na plataforma Helpnei, através de Dashboard que facilitam ao usuário a leitura de informações importantes sobre a empresa patrocinadora.',
      tecnologias: ['devicon-html5-plain' ,'devicon-css3-plain', 'devicon-typescript-original', 'devicon-react-original', 'devicon-nodejs-plain', 'devicon-tailwindcss-original'], image: '/assets/DSM2API(2).png'},
    {id: 2, situacao: 'Concluído', nome:'TCC - The History of a Nation', devTeam: 'Educa Games', 
      descricao: 'Trabalho de Conclusão de Curso desenvolido com o intuito de tornar a aprendizagem infantil mais fácil e divertida através de jogos. The History of a Nation conta a história do Brasil, por meio de um robô que viaja no tempo, passando por momentos importantes da história brasileira.',
      tecnologias: ['devicon-unrealengine-original'], image:'/assets/THN.webp'},
    ];
  res.json(projetos)
})

app.listen(port, () => {
  console.log(`Servidor Node.js rodando na porta ${port}`);
});