const main = document.getElementById('principal');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Criando um objeto
const myItem = {
    color: 'blue',
    text: 'Primeiro item'
}

const myItems = [

    {
        color: 'blue',
        text: 'Primeiro item'
    },
    {
        color: 'red',
        text: 'Segundo item'
    },
    {
        color: 'yellow',
        text: 'Terceiro item'
    },
    {
        color: 'brown',
        text: 'Quarto item'
    },
    {
        color: 'green',
        text: 'Quinto item'
    },

];


numbers.forEach(number => {
    const meuH1 = document.createElement('h1');
    meuH1.innerText = document.createElement('h1')
    meuH1.innerText = number;

    meuH1.className = 'color';
    meuH1.style.color = 'blue';




    main.appendChild(meuH1);
});