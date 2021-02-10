const randomNumber = require("./random");

function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        this.value = randomNumber(10, 30);
    } else {
        this.value = randomNumber(5, 7);
    }
}

module.exports = Potion;