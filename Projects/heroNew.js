//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);
  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

class Character {
    constructor(name = "", health = 10, hp = health, power = 3, defence = 0,
     evasion = 0, critChance = 0, critDamage = 2, coins = 0, regen = 0, regenChance = 0){
        this.name = name;
        this.health = health;
        this.hp = hp;
        this.hp = health;
        this.power = power;
        this.defence = defence;
        this.evasion = evasion;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.coins = coins;
        this.regen = regen;
        this.regenChance = regenChance;
    }

    attack(enemy){

        enemy.hp -= this.damage(enemy)
        if(enemy.hp <= 0){
            enemy.hp == 0;
        }
        console.log(`The ${this.name} attacks the ${enemy.name} and deals ${this.damage(enemy)} damage.`);

    }

    damage(enemy){
        let damage = (this.power - enemy.defence) * this.crit() * enemy.dodge()
        return damage;
    }

    alive(){

        if (this.hp > 0){
            return true;
        } else {
            return false;
        }

    }

    printStatus(){

        console.log(`The ${this.name} has ${this.hp} health remaining and ${this.power} power.`);

    }

    dodge(){

        let luck = Math.random();
        let evasionChance = this.evasion * (1.25/(.5+(this.evasion * .02)));
        if(evasionChance >= luck){
            return 0; // returning 0 if dodge happens so that damage * 0 will be 0
        } else return 1;

    }

    crit(){

        let luck = Math.random();
        if(luck <= this.critChance){
            return this.critDamage; //returning critDamage multiplier if there is a crit
        }else {
            return 1; //returning 1 if no crit
        }

    }
}

class Goblin extends Character {
    constructor(name = "goblin"){
        super(name)
    }
    printStatus(){

    }
}

class Medic extends Character {

}

class Shadow extends Character {

}

class Zombie extends Character {

}

const main = () => {

    let play = true;
    while(play === true){
        console.log(`
        What do you want to do?
        1. Play
        2. Status
        3. Shop
        4. Items
        5. Leave
        (Select 1, 2, 3, 4, or 5)`);

        let choice = Number(prompt())

        if (choice === 1){

        } else if (choice === 5){
            play = false;
            break;
        }
        else {
            console.log("Invalid Input");
        }

        let player = new Character("hero");

        let enemy;

        let whichEnemy = Math.floor(Math.random()) * 5;

        if (whichEnemy >= 0){

            enemy = new Goblin("goblin");
            
        }


        while (enemy.hp > 0 && player.hp > 0) {
            player.printStatus();
            enemy.printStatus();
            console.log()
            console.log("What do you want to do?")
            console.log(`1. fight ${enemy.name}`)
            console.log("2. do nothing")
            console.log("3. flee")
            console.log("> ")

            let rawInput = prompt()

            if (rawInput == "1"){
                //Hero attacks goblin
                player.attack(enemy);
                console.log("");
                if (enemy.hp <= 0){
                    console.log(`The ${enemy.name} is dead.`)
                }

            }
            else if (rawInput == "2"){
                
            }
            else if (rawInput == "3"){
                console.log("Goodbye.")
                break;  //break out of loop
                
            }
            else{
                console.log(`Invalid input ${rawInput}`)
            }//end of if statement

            if (enemy.hp > 0){
                // Goblin attacks hero
                enemy.attack(player);
                if (player.hp <= 0){
                    console.log("You are dead.")
                }
            }// end of if statement

        }// end of while loop
    
    }// end of while loop
  
} //end of main

main() // runs the game by calling the main driving function