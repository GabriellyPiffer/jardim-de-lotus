const form = document.getElementById("formCadastro");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const cliente = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };

    const resposta = await fetch("http://localhost:3000/cliente/cadastrar", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(cliente)

    });

    if (resposta.ok) {

        alert("Cadastro realizado com sucesso!");

        window.location.href = "flores.html";

    } else {

        alert("Erro ao cadastrar.");

    }

});