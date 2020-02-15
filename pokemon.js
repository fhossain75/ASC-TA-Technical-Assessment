// Your code here!
class Pokemon {
	constructor(name,attack,defense,health,type) {
		this.name = name;
		this.attack = attack;
		this.defense = defense;
		this.health = health;
		window.initHealth = this.health; //gobal variable of initial health
		this.type = type;
	}
	//method to reduce the health of the Pokemon by damage amount
	takeDamage(damage) {
		this.health = this.health - damage;
		if (this.health < 0) {
			return this.health = 0;
		} else {
			return this.health;			
		}
	}
	//method to reduce the health of the opponent Pokemon by attack-defense amonut
	attackOpponent(opponent) {
		var damage = this.attack - opponent.defense;
		if (damage <= 0) {
			opponent.takeDamage(1);
		} else {
			opponent.takeDamage(damage);
		}
	}
	//method to display Pokemon's name, type, and health
	display() {
		return(String(
			this.name.toUpperCase() + 
			" (" + this.type.toUpperCase() + ") " + 
			this.health + "/" + initHealth
			));
	}
}

// Don't edit this line!
module.exports = Pokemon;
