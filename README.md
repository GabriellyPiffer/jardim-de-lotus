# 🌸 Jardim de Lótus

Bem-vindo ao **Jardim de Lótus**, uma aplicação web desenvolvida para uma floricultura, permitindo apresentar flores, realizar cadastros e gerenciar pedidos de forma simples e organizada.

## 🌷 Sobre o Projeto

O **Jardim de Lótus** é um sistema desenvolvido com o objetivo de criar uma experiência agradável para o gerenciamento de uma floricultura.

A aplicação permite visualizar flores disponíveis, cadastrar novos produtos, realizar pedidos e acompanhar as informações dos pedidos realizados.

O projeto combina uma interface delicada e moderna com uma estrutura de backend responsável pelo gerenciamento dos dados da aplicação.

## ✨ Funcionalidades

- 🌸 Cadastro de flores
- 🖼️ Exibição das imagens das flores
- 💰 Cadastro e visualização de preços
- 📦 Controle de estoque
- 🛒 Criação de pedidos
- 📋 Visualização dos pedidos realizados
- ✏️ Edição de pedidos
- 🗑️ Exclusão de pedidos
- 👤 Cadastro de clientes
- 🔐 Login de clientes
- 💾 Integração com banco de dados
- 🌷 Interface temática inspirada em uma floricultura

## 🛠️ Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript

### Back-end

- Node.js
- Express
- Prisma ORM

### Banco de Dados

- MySQL

### Ferramentas

- Git
- GitHub
- Visual Studio Code
- Insomnia

## 📁 Estrutura do Projeto

```text
Jardim de Lótus/
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
│   ├── package.json
│   ├── prisma.config.ts
│   └── server.js
│
├── frontend/
│   ├── assets/
│   ├── cadastro.html
│   ├── cadastro.js
│   ├── flores.html
│   ├── flores.js
│   ├── login.html
│   ├── login.js
│   ├── pedidos.html
│   ├── pedidos.js
│   └── style.css
│
└── .gitignore

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

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/GabriellyPiffer/jardim-de-lotus.git

### 2. Entre na pasta do projeto

```bash
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
