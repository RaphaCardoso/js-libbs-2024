
// Pegando o id do html
/*const main = document.getElementById('principal');

// Criando objetos
=======
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

// Para ler o objeto e dar comandos para aparecer no browser

myItems.forEach(item => {
    const meuH1 = document.createElement('h1');
    meuH1.innerText = item.text;
    meuH1.style.color = item.color;
    main.appendChild(meuH1);

}); */


/*
const cardImage = document.getElementById('cardImage');
const image = document.getElementById('image');
const nome = document.getElementById('nome')
const linha = document.getElementById('linha');
const diaIcone = document.getElementById('diaIcone');
const dia = document.getElementById('dia');
const icone = document.getElementById('icone');*/


/*

const myCard = [
    {
        cardImage: [image = ['londres', 'Madrid', 'Paris', 'rio', 'Salvador', 'Veneza'], nome = ['LONDON 60&deg; F', 'MADRID 50&deg; F', 'PARIS 40&deg; F', 'RIO DE JANEIRO 80&deg; F', 'SALVADOR 90&deg; F', 'VENEZA 50&deg; F']],
        linha: [diaIcone = [dia = ['SEG', 'TER', 'QUA'], icone = ['Sol', 'Chuva', 'nuvens']]]

    },
    {
        cardImage: [image = 'Madrid', nome = 'MADRID 50&deg; F'],
        linha: [diaIcone = [dia = ['SEG', 'TER', 'QUA'], icone = ['SEG', 'TER', 'QUA']]]
    }
]

myCard.forEach(card => {
    const weather = document.createElement('div.w3-card-4');


})*/


/*const main = document.getElementById('card');

const cardData = [
    { city: 'Londres', temperature: '15°C', forecast: ['Seg', 'Ter', 'Qua'] },
    { city: 'Paris', temperature: '18°C', forecast: ['Qua', 'Qui', 'Sex'] },


];*/

const card = document.getElementById('card');

const cities = [
    {
        city: ['londres', 'Madrid', 'Paris', 'rio', 'Salvador', 'Veneza'],
        weather: 10,
        icone: ['image/icons/chuva.png', 'image/icons/sol.png', 'image/icons/nuvens.png'],
        dia: ['SEG', 'TER', 'QUA']
    },

    {
        city: ['londres', 'Madrid', 'Paris', 'rio', 'Salvador', 'Veneza'],
        weather: 10,
        icone: ['image/icons/chuva.png', 'image/icons/sol.png', 'image/icons/nuvens.png'],
        dia: ['SEG', 'TER', 'QUA']
    },

    {
        city: ['londres', 'Madrid', 'Paris', 'rio', 'Salvador', 'Veneza'],
        weather: 10,
        icone: ['image/icons/chuva.png', 'image/icons/sol.png', 'image/icons/nuvens.png'],
        dia: ['SEG', 'TER', 'QUA']
    },

    {
        city: ['londres', 'Madrid', 'Paris', 'rio', 'Salvador', 'Veneza'],
        weather: 10,
        icone: ['image/icons/chuva.png', 'image/icons/sol.png', 'image/icons/nuvens.png'],
        dia: ['SEG', 'TER', 'QUA']
    },

    {
        city: ['londres', 'Madrid', 'Paris', 'rio', 'Salvador', 'Veneza'],
        weather: 10,
        icone: ['image/icons/chuva.png', 'image/icons/sol.png', 'image/icons/nuvens.png'],
        dia: ['SEG', 'TER', 'QUA']
    },

    {
        city: ['londres', 'Madrid', 'Paris', 'rio', 'Salvador', 'Veneza'],
        weather: 10,
        icone: ['image/icons/chuva.png', 'image/icons/sol.png', 'image/icons/nuvens.png'],
        dia: ['SEG', 'TER', 'QUA']
    },
];



cities.forEach(cidade => {
    const cardImage = document.createElement('div');
    cardImage.className = "cardImage";

    for (i = 0; 0 < cities.length; i++) {
        r = Math.floor(Math.random() * 2);

        const weatherCard = `<div id="cardImage" class="cardImage">
            <img id="image" class="cidade" src="image/${cidade.city[i]}.png" alt="">
            <div id="nome" class="nameCity">${cidade.city[i].toUpperCase()} ${cidade.weather}&deg; C</div>
        </div>
        <div id="linha" class="w3-row">
            <div id="diaIcone" class="cardClima">
                <h3 id="dia" class="text">${cidade.dia[0]}</h3>
                <img id="icone" class="icone" src="${cidade.icone[r]}" alt="sun">
            </div>
            <div id="diaIcone" class="cardClima">
                <h3 id="dia" class="text">${cidade.dia[1]}</h3>
                <img id="icone" class="icone" src="${cidade.icone[r]}" alt="cloud">
            </div>
            <div id="diaIcone" class="cardClima">
                <h3 id="dia" class="text">${cidade.dia[2]}</h3>
                <img id="icone" class="icone" src="${cidade.icone[r]}" alt="clouds">
            </div>
        </div>`

    }

    cardImage.innerHTML = weatherCard;
    card.appendChild(cardImage);

});

