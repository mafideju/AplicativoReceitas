MVC - Design Pattern
Usado para facilitar a construção de códigos, separando em três partes.



>> Modelo 
Trata dos dados básicos do aplicativo e do controle sobre esses dados.
Relacionado à lógica, interage com a base de dados (onde vai a chamada para o API por exemplo), se comunica com o Controle

>> Visão 
Trata da interface da aplicação. Renderiza os dados do Modelo afim de melhorar a experiência de navegação.
Comunica-se com o controle. É por onde passa a manipulaçao do HTML e do CSS. Onde se encaixam os templates engines. Dados dinâmicos como ids vão aqui.


>> Controle 
Recebe os dados modelando objetos de acordo com as ações do usuário. Neste projeto (Aplicativo de Receitas) seria o **index.js**. É uma espécie de documento de processamento central da aplicação. O **Modelo** e a  **Visão** convergem para o **Controle**.
