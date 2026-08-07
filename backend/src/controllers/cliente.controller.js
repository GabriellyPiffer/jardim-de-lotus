const prisma = require("../data/prisma");

const login = async (req, res) => {
    const { cpf, senha } = req.body;

    const cliente = await prisma.cliente.findFirst({
        where: {
            cpf,
            senha
        }
    });

    if (!cliente) {
        return res.status(401).json({
            mensagem: "CPF ou senha inválidos."
        });
    }

    res.status(200).json(cliente);
};

const cadastrar = async (req, res) => {
    const data = req.body;

    const item = await prisma.cliente.create({
        data
    });

    res.json(item).status(201).end();
};

const listar = async (req, res) => {
    const lista = await prisma.cliente.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.cliente.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.cliente.update({
        where: { id : Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.cliente.delete({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    login,
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
