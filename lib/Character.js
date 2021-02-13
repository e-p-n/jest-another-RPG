const randomNumber = require("./random");

class Character {
    constructor(name = '') {
        this.name = name;

        this.health = randomNumber(10, 95);
        this.strength = randomNumber(5, 7);
        this.agility = randomNumber(5, 7);
    }

    // returns health level
    getHealth() {
        return `${this.name}’s health is now ${this.health}`;
    }

    // checks if player is still alive
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    }

    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };


    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random()*(max-min) + min);
    }



}






 module.exports = Character;