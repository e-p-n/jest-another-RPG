const randomNumber = require("./random");
const Potion = require('../lib/Potion');

function Player (name = '') {
    this.name = name;

    this.health = randomNumber(10, 95);
    this.strength = randomNumber(5, 7);
    this.agility = randomNumber(5, 7);
    this.inventory = [new Potion('health'), new Potion()];
}

module.exports = Player;