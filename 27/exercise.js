const franData = {
    name: 'Fran',
    role: 'full stack developer',
    hobbies: ['music', 'programming'],
    favoriteFoodByCountry: {
        Italy: ['Pizza🍕', 'Pasta🍝'],
        Japan: ['Sushi🍣']
    }
}

// 👀 Añade el código necesario para cambiar 'Pasta🍝' en el array de Italy por 'Spaghetti🍝'
// 📝

// Añadir código para cambiar el valor de la propiedad 'role'
franData.favoriteFoodByCountry.Italy[1] = "Spaghetti🍝";

// Do not edit below this line
module.exports = franData;
