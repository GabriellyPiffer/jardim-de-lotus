Sim. Para o **README.md**, copie **exatamente o conteúdo abaixo**. Ele está inteiro dentro de um único bloco de código, sem quebrar no meio:

# 🌸 Jardim de Lótus

Sistema web desenvolvido para uma floricultura, permitindo o gerenciamento de flores, clientes e pedidos.

## 🌺 Principais Páginas

### 🔐 Login

Área destinada ao acesso dos clientes ao sistema.

### 🌸 Flores

Página principal para visualização das flores disponíveis na floricultura.

### 🌷 Cadastro de Flores

Permite adicionar novas flores ao catálogo, incluindo informações como nome, preço, estoque e imagem.

### 🛒 Pedidos

Página destinada ao gerenciamento dos pedidos, permitindo visualizar, editar e excluir pedidos.

### 👤 Cadastro

Área destinada ao cadastro de novos clientes.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- Prisma ORM
- Banco de dados
- Git e GitHub

## 📁 Estrutura do Projeto

    jardim-de-lotus/
    │
    ├── backend/
    │   ├── prisma/
    │   │   ├── migrations/
    │   │   └── schema.prisma
    │   │
    │   ├── src/
    │   │   ├── controllers/
    │   │   ├── data/
    │   │   └── routes/
    │   │
    │   ├── .env
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── prisma.config.ts
    │   └── server.js
    │
    └── frontend/
        ├── assets/
        ├── cadastro.html
        ├── cadastro.js
        ├── flores.html
        ├── flores.js
        ├── login.html
        ├── login.js
        ├── pedidos.html
        ├── pedidos.js
        └── style.css

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

    git clone https://github.com/GabriellyPiffer/jardim-de-lotus.git

### 2. Entre na pasta do projeto

    cd jardim-de-lotus

### 3. Instale as dependências do backend

    cd backend
    npm install

### 4. Configure o banco de dados

Crie o arquivo `.env` dentro da pasta `backend` e configure a conexão com o banco de dados.

Exemplo:

    DATABASE_URL="sua_conexao_com_o_banco"

### 5. Gere o Prisma Client

    npx prisma generate

### 6. Inicie o servidor

    node server.js

### 7. Abra o Front-end

Abra os arquivos HTML da pasta `frontend` no navegador ou utilize o **Live Server** no Visual Studio Code.

## 🌿 Objetivo

O projeto foi desenvolvido com o objetivo de aplicar conhecimentos de **desenvolvimento web, JavaScript, Node.js, APIs, banco de dados e Git**, criando uma aplicação completa para uma floricultura.

## 👩‍💻 Desenvolvedores

**Gabrielly Piffer**


**Thomas Batoni**

---

🌸 **Jardim de Lótus** — Flores que transformam momentos em memórias. 🌷
