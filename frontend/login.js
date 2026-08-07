const form = document.getElementById("formLogin");


form.addEventListener("submit", async (e) => {

    e.preventDefault();


    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;



    try {


        const resposta = await fetch(
            "http://localhost:3000/cliente/login",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    cpf: cpf,

                    senha: senha

                })

            }
        );



        const dados = await resposta.json();



        if (resposta.ok) {


            alert("Login realizado com sucesso! 🌸");



            // salva cliente logado
            localStorage.setItem(
                "cliente",
                JSON.stringify(dados)
            );



            // vai para página das flores
            window.location.href = "flores.html";



        } else {


            alert(
                dados.mensagem ||
                "CPF ou senha incorretos"
            );


        }



    } catch (error) {


        console.log(error);


        alert(
            "Não foi possível conectar ao servidor"
        );


    }


});