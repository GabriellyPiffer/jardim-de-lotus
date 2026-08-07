const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    try {
        const data = req.body;

        const pedido = await prisma.pedido.create({
            data: {
                clienteId: data.clienteId,
                valorTotal: data.valorTotal,

                flores: {
                    create: {
                        florId: data.florId,
                        quantidade: data.quantidade
                    }
                }
            },
            include: {
                flores: true
            }
        });

        res.json(pedido);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            erro: error.message
        });
    }
};

const listar = async (req, res) => {

    try {

        const pedidos = await prisma.pedido.findMany({

            include: {

                flores: {

                    include: {

                        flor: true

                    }

                }

            }

        });


        res.json(pedidos);


    } catch(error) {

        console.log(error);

        res.status(500).json({
            erro: error.message
        });

    }

};
const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.pedido.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req,res)=>{

    const {id}=req.params;

    const {quantidade}=req.body;


    try{


        const pedidoFlor = await prisma.pedidoFlor.findFirst({

            where:{
                pedidoId:Number(id)
            },

            include:{
                flor:true
            }

        });



        const novoValor =
        pedidoFlor.flor.preco * quantidade;



        await prisma.pedidoFlor.update({

            where:{
                id:pedidoFlor.id
            },

            data:{
                quantidade
            }

        });



        const pedido = await prisma.pedido.update({

            where:{
                id:Number(id)
            },

            data:{
                valorTotal:novoValor
            }

        });



        res.json(pedido);



    }catch(error){

        console.error(error);

        res.status(500).json({
            erro:"Erro ao atualizar pedido"
        });

    }

}
const excluir = async (req, res) => {

    const { id } = req.params;

    try {

        
        await prisma.pedidoFlor.deleteMany({
            where:{
                pedidoId: Number(id)
            }
        });


        const pedido = await prisma.pedido.delete({
            where:{
                id:Number(id)
            }
        });


        res.json({
            mensagem:"Pedido excluído com sucesso",
            pedido
        });


    } catch(error) {

        console.error(error);

        res.status(500).json({
            erro:"Erro ao excluir pedido"
        });

    }

}

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
