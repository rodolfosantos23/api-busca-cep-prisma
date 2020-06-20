# API Busca de CEP's Node.js Prisma
API de Busca de CEP's utilizando base de dados própria. 
Para mais informações e o passo a passo segue artigo em meu blog: 
https://rodolfosantos.com.br/api-busca-de-cep-com-node-js-prisma-e-express/

# Linguagens e tecnologias utilizadas
- Node.js 
- Javascript
- Typescript
- Prisma
- Express

Para mais informações sobre o Prisma: https://www.prisma.io/

# Download Base de CEP's
A base de CEP em SQLite pode ser baixada nesse link: https://www.dropbox.com/s/8s6dr55te1k8jwk/base_cep.db?dl=0


Por se tratar de um arquivo grande ele não foi versionado.
A base foi montada com dados do site: https://cepaberto.com/

# Instalação
Para instalar as dependências:

<pre>
npm install
</pre>

# Utilização
Para rodar o servidor:

<pre>
ts-node ./src/index.ts
</pre>

Após isso acessar a rota **cep**. Exemplo:

**http://localhost:3333/cep/01001001**


<img src="https://rodolfosantos.com.br/wp-content/uploads/2020/06/resultado-final-consulta-cep-prisma.png" />
