<h1 align="center">My Contacts</h1>
<p align="center">Está é uma API de CRUD de contatos, de forma que todo contato tem: id(uuid gerado pelo postgres), nome, email, telefone e categoria.</p>

<span><img src="https://img.shields.io/static/v1?label=Tech&message=NodeJS&color=8BC500&style=for-the-badge&logo=Node.js"/></span>
<span><img src="https://img.shields.io/static/v1?label=DataBase&message=Postgres&color=2F5E8D&style=for-the-badge&logo=PostgreSQL"/></span>

<h3>FEATURES</h3>

- [x] Listar todos os Contatos
- [x] Buscar um Contato
- [x] Criar Contatos
- [x] Alterar Contatos
- [x] Excluir Contatos
- [x] Listar Categorias
- [x] Criar Categorias

Acesse as rotas com <a href=""><img src="https://img.shields.io/static/v1?label=&message=Insomnia&color=5849BE&style=for-the-badge&logo=Insomnia"/></a>

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Backend (servidor)
```bash
# Clone este repositório
$ git clone <https://github.com/JoaoNeto99/myContacts-back-end>

# Acesse a pasta do projeto no terminal/cmd
$ cd myContacts-back-end

# Vá para a pasta src
$ cd src

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000> 
