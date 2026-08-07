const API = "http://localhost:3000/flor";

let florAtual = null;


const cadastro = document.getElementById("cadastro");
const detalhes = document.getElementById("detalhes");
const formCad = document.getElementById("formCad");

const main = document.querySelector("main");


window.onload = listarFlores;

async function listarFlores() {

    const resposta = await fetch(`${API}/listar`);

    const flores = await resposta.json();


    main.innerHTML = "";


    flores.forEach(flor => {


        main.innerHTML += `

        <div class="card">


            <img src="${flor.imagem || 'https://via.placeholder.com/200'}">


            <h3>${flor.nome}</h3>


            <p>Cor: ${flor.cor}</p>


            <p>
                Preço: R$ ${flor.preco}
            </p>


            <p>
                Estoque: ${flor.estoque}
            </p>


            <button onclick="abrirDetalhes(${flor.id})">
                Editar
            </button>
            <button onclick='adicionarPedido(${JSON.stringify(flor)})'>
                🛒 Pedir
            </button>


        </div>


        `;


    });

}

async function adicionarPedido(flor) {

    const pedido = {
        clienteId: 1,
        florId: flor.id,
        quantidade: 1,
        valorTotal: flor.preco
    };

    fetch("http://localhost:3000/pedido/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert("Pedido realizado com sucesso!");
    })
    .catch(error => {
        console.error(error);
    });

}

async function fazerPedido(florId) {


    const cliente = JSON.parse(
        localStorage.getItem("cliente")
    );


    if (!cliente) {

        alert("Faça login primeiro!");

        window.location.href = "login.html";

        return;

    }



    const pedido = {

        clienteId: cliente.id,

        florId: florId,

        quantidade: 1

    };



    const resposta = await fetch(
        "http://localhost:3000/pedido/cadastrar",
        {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(pedido)

        }
    );


    const dados = await resposta.json();



    if (resposta.ok) {

        alert("Pedido realizado 🌸");

        window.location.href = "pedidos.html";

    } else {

        alert(dados.mensagem);

    }


}

formCad.addEventListener("submit", async (e) => {

    e.preventDefault();


    const flor = {

        nome: document.getElementById("nome").value,

        cor: document.getElementById("cor").value,

        preco: Number(document.getElementById("preco").value),

        estoque: Number(document.getElementById("estoque").value),

        imagem: document.getElementById("imagem").value

    };



    await fetch(`${API}/cadastrar`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(flor)

    });



    alert("Flor cadastrada!");

    cadastro.classList.add("oculto");

    formCad.reset();

    listarFlores();

});


async function abrirDetalhes(id) {


    const resposta = await fetch(`${API}/buscar/${id}`);


    const flor = await resposta.json();


    florAtual = flor;



    document.getElementById("tituloFlor").innerHTML = flor.nome;


    document.getElementById("imgFlor").src = flor.imagem;



    document.getElementById("nomeEdit").value = flor.nome;

    document.getElementById("corEdit").value = flor.cor;

    document.getElementById("precoEdit").value = flor.preco;

    document.getElementById("estoqueEdit").value = flor.estoque;

    document.getElementById("imgEdit").value = flor.imagem;



    detalhes.classList.remove("oculto");


}


async function salvarEdicao() {


    const florEditada = {


        nome:
            document.getElementById("nomeEdit").value,


        cor:
            document.getElementById("corEdit").value,


        preco:
            Number(document.getElementById("precoEdit").value),


        estoque:
            Number(document.getElementById("estoqueEdit").value),


        imagem:
            document.getElementById("imgEdit").value

    };



    await fetch(`${API}/atualizar/${florAtual.id}`, {


        method: "PUT",


        headers: {
            "Content-Type": "application/json"
        },


        body: JSON.stringify(florEditada)

    });



    alert("Flor atualizada!");


    detalhes.classList.add("oculto");


    listarFlores();

}



async function excluirFlorAtual() {


    const confirmar = confirm(
        "Deseja realmente excluir esta flor?"
    );


    if (!confirmar) return;



    await fetch(`${API}/excluir/${florAtual.id}`, {


        method: "DELETE"

    });



    alert("Flor excluída!");


    detalhes.classList.add("oculto");


    listarFlores();

}