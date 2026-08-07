const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {

    try {

        const {
            nome,
            cor,
            preco,
            estoque,
            imagem
        } = req.body;


        const flor = await prisma.flor.create({

            data: {

                nome,
                cor,
                preco: Number(preco),
                estoque: Number(estoque),
                imagem

            }

        });


        res.status(201).json({

            mensagem: "Flor cadastrada com sucesso!",
            flor

        });


    } catch(error) {

        console.log(error);


        res.status(500).json({

            mensagem:"Erro ao cadastrar flor",
            erro:error.message

        });

    }

};

const listar = async(req,res)=>{

    try {


        const flores = await prisma.flor.findMany();


        res.json(flores);



    } catch(error){


        res.status(500).json({

            mensagem:"Erro ao listar flores"

        });


    }

};
const buscar = async(req,res)=>{


    try{


        const id = Number(req.params.id);



        const flor = await prisma.flor.findUnique({

            where:{
                id:id
            }

        });



        if(!flor){

            return res.status(404).json({

                mensagem:"Flor não encontrada"

            });

        }



        res.json(flor);



    }catch(error){

        res.status(500).json({

            erro:error.message

        });

    }

};


const atualizar = async(req,res)=>{


    try{


        const id = Number(req.params.id);



        const flor = await prisma.flor.update({

            where:{
                id:id
            },

            data:req.body

        });



        res.json({

            mensagem:"Flor atualizada",

            flor

        });



    }catch(error){


        res.status(500).json({

            erro:error.message

        });

    }

};


const excluir = async(req,res)=>{


    try{


        const id = Number(req.params.id);



        await prisma.flor.delete({

            where:{
                id:id
            }

        });



        res.json({

            mensagem:"Flor excluída"

        });



    }catch(error){


        res.status(500).json({

            erro:error.message

        });


    }

};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
