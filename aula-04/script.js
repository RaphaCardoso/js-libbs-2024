// Vou pegar os dados do formulário

const fname = document.getElementById("fname");

// Para "ouvir" o click do botão, usamos o addEventListener

const lname = document.getElementById("lname");

const Mail = document.getElementById("Mail");

const fone = document.getElementById("fone");

const end = document.getElementById("end");

const btnSubmit = document.getElementById("btn");

//criar uma lista vazia
const data = [];


btnSubmit.addEventListener('click', function (event) {

    // Não deixa o formulário se comportar como padrão, ou seja,
    // enviar os dados para próxima página / requisição
    event.preventDefault();


    // criando objeto
    const pessoa = {
        nome: fname.value,
        endereco: end.value,
        email: Mail.value,
        fone: fone.value,


        favoritos: [
            {
                título: "A nova casa",
                autor: "Juca Bala",
                ano: 2025,
                genero: "Aventura"
            }
        ]
    }

    // adicionar pessoa na lista

    data.push(pessoa);
    console.log(pessoa.favoritos);
    console.log(data);

});






