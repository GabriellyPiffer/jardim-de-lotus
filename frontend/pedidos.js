const API = "http://localhost:3000/pedido";

const listaPedidos = document.getElementById("listaPedidos");


window.onload = listarPedidos;



async function listarPedidos() {

    try {

        const resposta = await fetch(`${API}/listar`);

        const pedidos = await resposta.json();

        console.log(pedidos);


        listaPedidos.innerHTML = "";


        pedidos.forEach(pedido => {

            listaPedidos.innerHTML += `
                <div class="pedido">

                    <h3>🌸 Pedido #${pedido.id}</h3>

                    <p>
                        Data:
                        ${new Date(pedido.dataPedido).toLocaleDateString()}
                    </p>

                    <p>
                        Total:
                        R$ ${pedido.valorTotal.toFixed(2)}
                    </p>


                    <h4>Flores:</h4>


                    ${(pedido.flores || []).map(item => `

        <div class="flor-pedido">


            <div>

                <h4>${item.flor.nome}</h4>

                <p>
                    Quantidade:
                    ${item.quantidade}
                </p>

                <p>
                    Preço:
                    R$ ${item.flor.preco.toFixed(2)}
                </p>

            </div>

        </div>

    `).join("")
                }


                    <button onclick="editarPedido(${pedido.id})">
                        Editar
                    </button>


                    <button onclick="excluirPedido(${pedido.id})">
                        Excluir
                    </button>


                </div>
            `;

        });


    } catch (error) {

        console.error("Erro ao listar pedidos:", error);

        listaPedidos.innerHTML = `
            <p>
                Erro ao carregar pedidos.
            </p>
        `;

    }

}





async function excluirPedido(id) {


    const confirmar = confirm(
        "Deseja excluir este pedido?"
    );


    if (!confirmar) return;



    try {

        await fetch(
            `${API}/excluir/${id}`,
            {
                method: "DELETE"
            }
        );


        alert("Pedido excluído 🌸");


        listarPedidos();


    } catch (error) {

        console.error(error);

        alert("Erro ao excluir pedido");

    }

}





async function editarPedido(id) {

    try {

        const resposta = await fetch(`${API}/buscar/${id}`);

        const pedido = await resposta.json();


        console.log("Pedido para editar:", pedido);


        let quantidadeAtual = 1;


        if (pedido.flores && pedido.flores.length > 0) {

            quantidadeAtual = pedido.flores[0].quantidade;

        }


        const novaQuantidade = prompt(
            "Digite a nova quantidade:",
            quantidadeAtual
        );


        if (!novaQuantidade) return;



        const atualizar = await fetch(
            `${API}/atualizar/${id}`,
            {
                method:"PUT",

                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify({
                    quantidade:Number(novaQuantidade)
                })
            }
        );


        const resultado = await atualizar.json();


        if(atualizar.ok){

            alert("Pedido atualizado 🌸");

            listarPedidos();

        } else {

            console.log(resultado);

            alert("Erro ao atualizar");

        }


    } catch(error){

        console.error(
            "Erro ao editar pedido:",
            error
        );

    }

}

const novaQuantidade = prompt(
    "Digite a nova quantidade:",
    quantidadeAtual
);