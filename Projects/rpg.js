//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

class Character {

    constructor(health = 10, hp, strength = 3, defence = 0,evasion = 1, mana = 1, mp = 1, level = 1, exp = 0
        ,coins = 0, sp = 0, bag = {}, equipment = {}, spell = false, critical = false){
        this.health = health;
        this.hp = hp;
        this.hp = health;
        this.strength = strength;
        this.defence = defence;
        this.evasion = evasion;
        this.mana = mana;
        this.mp = mp;
        this.mp = mana;
        this.level = level;
        this.exp = exp;
        this.coins = coins;
        this.sp = sp;
        this.sp = 0;
        this.bag = bag
        this.bag = {healthPot: 0, manaPot: 0};
        this.equipment = equipment;
        this.equipment = {};
        this.spell = spell;
        this.spell = false;
        this.critical = critical;
        this.critical = false;

    }

    alive(){
        if(this.hp > 0){
            return true;
        }
    }

    attack(enemy){

        this.damage(enemy);

        if(this.spell === true){

            enemy.hp -= (this.damage(enemy));
            // enemy.hp -= (this.strength * 2);
            console.log(`You have ignored the enemy's defence and dealt 
            ${this.damage(enemy)} fire damage to the ${enemy.name}!`);
            // ${this.strength * 2} fire damage to the ${enemy.name}!`);
            this.spell = false; //this.spell used to tell if I want to use fireball and have mana for it


        } else if(this.damage(enemy) > this.strength){
            enemy.hp -= (this.strength * 2);
            console.log(`You have dealt a critical hit to the ${enemy.name}!`);
            console.log(`You do ${this.strength * 2} damage to the ${enemy.name}.`);
            this.critical = false;
            // console.log(`You do ${this.strength * 2} damage to the ${enemy.name}.`);
        }else {
            enemy.hp -= this.strength;
            console.log(`You do ${this.strength} damage to the ${enemy.name}`);
            // enemy.hp -= this.strength;
            // console.log(`You do ${this.strength} damage to the ${enemy.name}`);
        }
    }

    damage(enemy){// took out enemy as a parameter

        let luck = Math.random() * 100;

        let damageNum = this.strength - enemy.defence; //took out enemy.defence to allow code to work

        if(this.spell === true){

            damageNum = (this.strength * 2);

        } else{

            

            if (damageNum <= 0){
                damageNum = 0;
            }
            if (luck <= 20){
                damageNum *= 2;
                this.critical = true;
            }

        }
        
        return damageNum;
    }

    printStatus(){
        console.log(`You have ${this.hp} health and ${this.mana} mana remaining.`);
    }

    levelUp(){

        this.sp += 3;
        console.log(`Congratulations! You leveled up to level ${this.level}!`);
        console.log(`You have ${this.sp} skill points to spend!`);
    }

    gainExp(){

        let gainedExp = this.level * 5; // Default value is * 5
        
        let min = 0;

        let max = ((this.level)** 2)/2 +10;

        if(this.exp + gainedExp >= max){
            let remainder = this.exp + gainedExp - max;
            this.level +=1;
            this.levelUp();
            gainedExp = min + remainder;
            this.exp += gainedExp;
            console.log(`You gained ${this.exp} exp points!`);

        } else {
            this.exp += gainedExp;
            console.log(`You gained ${this.exp} exp points!
            You have ${max - this.exp} exp points remaining
            until you level up.`);
        }


    }

    getRewards(){
        let luck = Math.random()*100;
        this.coins += 100; // Comment out if not checking items
        if (luck > 90){
            this.coins += 10;
            this.bag.manaPot += 1;
            this.bag.healthPot += 1;
            console.log(`You have gained 10 coins, a health potion, and a mana potion.`);
        } else if ( luck > 70){
            this.coins += 8;
            this.bag.manaPot += 1;
            console.log("You have gained 8 coins and a mana potion.");
        } else if (luck > 50){
            this.coins += 5;
            this.bag.healthPot += 1;
            console.log("You have gained 5 coins and a health potion.");
        } else if (luck > 30){
            this.coins += 3;
            this.bag.healthPot += 1;
            console.log(`You have gained 3 coins and a health potion.`)
        } else if (luck >15){
            this.coins += 1;
            console.log("You have gained 1 coin.");
        } else if (this.coins - 1 >= 0){
            this.coins --;
            console.log(`An enemy has stolen a coin from you!!`);
        } else {
            console.log("You are flat broke...");
        }

        console.log(`You have ${this.hp} out of ${this.health} health remaining.`);
    }

    openBag(){
        console.log(`You have ${this.coins} coins and the following items:`);
        console.log(`What would you like to do?
        1. Use health potion: ${this.bag.healthPot}
        2. Use mana potion: ${this.bag.manaPot}
        3. Exit
        (Choose 1, 2, or 3)`);
        
        let stay = true;
        while(stay === true){
            let bagChoice = Number(prompt());
            if(bagChoice === 1){
                if(this.bag.healthPot > 0){
                    this.hp = this.health;
                    this.bag.healthPot -= 1;
                    console.log("You are back to full health!");
                } else{
                    console.log("You don't have any health potions!");
                }
            } else if(bagChoice === 2){
                if(this.bag.manaPot > 0){
                    this.mp = this.mana;
                    this.bag.manaPot -= 1;
                    console.log("You are back to full mana!");
                } else{
                    console.log("You don't have any mana potions!");
                }
            } else if(bagChoice === 3){
                stay = false;
            }
        }

    }

    shop(){

        console.log(`You have ${this.coins} coins to spend.
        What do you want to buy?
        1. Health Potion
        2. Mana Potion
        3. Fireball Spell
        5. Heal Spell
        6. Basic Armor
        7. Evasive Boots
        8. Regen Belt
        9. Leave
        (Please choose a number
        1, 2, 3, etc)`);
        
        let stay = true;
        while(stay === true){
            let shopChoice = Number(prompt());
            if (shopChoice === 1 && this.coins >= 5){
                this.bag.healthPot += 1;
                console.log("You have purchased a health potion.");
            } else if(shopChoice === 3){
                this.equipment.fireBall = true;
                console.log("You have purchased the fireball spell.");
            }
            
            else if (shopChoice === 6 && this.coins >= 30){
                this.equipment.basicArmor = true;
                console.log("You have purchased basic armor.");
                this.defence += 10;
            } else if (shopChoice === 7 && this.coins >= 40){
                this.equipment.evasiveBoots = true;
                console.log("You have purchased evasive boots.");
                this.evasion += 20;
            } else if(shopChoice === 8 & this.coins >= 50){
                this.equipment.regenBelt = true;
                console.log("You have purchased regeneration belt");
            } else {
                stay = false;
            }

        }

    }
    addSp(){
        console.log(`You have ${this.sp} skill points available
            Which stat do you want to improve?
            1. Health
            2. Strength
            3. Defence
            4. Evasion
            5. Mana
            (Choose 1, 2, 3, 4, or 5)`);
            let spChoice = Number(prompt());
            console.log(`How many skill points do you wish to use?`);
            let spAmount = Number(prompt());
            if(spAmount <= this.sp){

                this.sp -= spAmount; //subtracting skill points to be allocated

                if(spChoice === 1){
                    this.health += spAmount;
                    console.log(`Your health has risen to ${this.health}!`);
                }
                else if(spChoice === 2){
                    this.strength += spAmount;
                    console.log(`Your strength has risen to ${this.strength}!`);
                }
                else if(spChoice === 3){
                    this.defence += spAmount;
                    console.log(`Your defence has risen to ${this.defence}!`);
                }
                else if(spChoice === 4){
                    this.evasion += spAmount;
                    console.log(`Your evasion has risen to ${this.evasion}!`);
                }
                else if(spChoice === 5){
                    this.mana += spAmount;
                    console.log(`Your mana has risen to ${this.mana}!`);
                } else {
                    console.log("Invalid Option");
                }


            } else {
                console.log("You do not have enough available skill points to do that.");
            }  
    }
    dodge(){
        let luck = Math.random() * 100;
        let dodgeChance = this.evasion * (1.25/(.5+(this.evasion * .02)))
        if(dodgeChance > luck){
            return true;
        } else{
            return false;
        }
    }

    useFireball(enemy){
        if(this.mp > 0){
            enemy.defence = 0;
            this.mp -= 1;
            this.spell = true;
        } else{
            console.log("You don't have enough mana to use this spell.");
        }
    }
}

// class Warrior extends Character{

//     constructor(health, hp, strength, defence, evasion, mana, level, exp, coins, sp, bag){

//         super(health, hp, strength, defence, evasion, mana, level, exp, coins, sp, bag);

//     }
// }

class Opponent {

    constructor(name = "goblin", health = 7, hp, strength = 2, defence = 0){
        this.name = name;
        this.health = health;
        this.hp = hp;
        this.hp = health;
        this.strength = strength;
        this.defence = defence;
    }

    alive(){
        if(this.hp > 0){
            return true;
        }
    }

    attack(player){
        
        player.hp -= this.damage(player);
        console.log(`The ${this.name} does ${this.damage(player)} damage to you.`);
        
    }

    printStatus(){
        console.log(`The ${this.name} has ${this.hp} health remaining`);
    }

    levelUp(player){

        this.strength = this.strength + (player.level -1);
        this.health = this.health + ((player.level - 1) * 2);

    }

    damage(player){
        let damage = this.strength - player.defence;
        if(damage > 0){
            return damage;
        } else{
            return 0;
        }
    }

    createStats(player){
        this.health += ((player.level - 1) * 2);
        this.strength += (player.level - 1);
        this.hp = this.health;
    }

}

class Zombie extends Opponent{
    constructor(name = "zombie", health = 5, hp, strength = 1, defence = 100){
        super(name, health, hp, strength, defence);
        this.name = name;
        this.health = health;
        this.hp = hp;
        this.strength = strength;
        this.defence = defence;
    }

    createStats(player){
        this.health += ((player.level - 1) * 2);
        this.strength += (player.level - 1);
        this.hp = this.health;
    }
}

const main = () => {

    //Choosing Character

    let player = new Character();

    console.log(`
    Choose your character:
    1: Warrior
    `);

    let charSel = Number(prompt());
    
    if (charSel === 1){
        console.log("You have chosen the Warrior class.");
    } 

    let play = true;

    let initialLevel = player.level;

    

  while(play === true){ 

    if(player.level >= 5){
        let whichEnemy = Math.random();
        if(whichEnemy > .5){
            let enemy = new Zombie();
            enemy.createStats(player);
            console.log(enemy);
        } else { enemy = new Opponent();
                if(initialLevel < player.level){
                enemy.levelUp(player);
                } else {
                    enemy.createStats(player);
                }
        }
    } else {
        enemy = new Opponent();
        if(initialLevel < player.level){
         enemy.levelUp(player);
         }
    }

    console.log(`
    What do you want to do? 
    1: Play Game
    2: Attribute Page
    3: Open Bag
    4: Go to Shop
    5: Quit Game
    Choose (1, 2, 3, 4, or 5)`);

    let choice = Number(prompt());

    

    if(choice === 1){

    }else if(choice === 2){
        console.log(player);
        console.log(`Do you want to spend skill points?
        1. Yes
        2. No
        (Choose 1 or 2)`);
        let wantToAdd = Number(prompt());
        if(wantToAdd === 1 && player.sp > 0){
            player.addSp();
        } else if(wantToAdd === 1 && player.sp === 0){

            console.log("You do not have any skill points to spend.");
            continue;

        } else {
            continue;
        }

    } else if(choice === 3){

        player.openBag();
        continue;

    } else if(choice === 4) {

        player.shop();
        continue;
        
    } else if(choice === 5){
        play = false;

    }
    
    else {

        console.log("Invalid Option");

    }

        while (enemy.alive() && player.alive() && play === true) {
            player.printStatus();
            enemy.printStatus();
            console.log()
            console.log("What do you want to do?")
            console.log(`1. fight ${enemy.name}`)
            console.log("2. use fireball");
            console.log("3. use items")
            console.log("4. flee")
            console.log("> ")

            let rawInput = prompt()
            

            if (rawInput == "1"){
                //Hero attacks goblin
                console.log("");
                player.attack(enemy);
                let regenAmount = (player.health * .05);
                if(player.equipment.regenBelt === true && (player.hp + regenAmount) <= player.health ){
                    player.hp += regenAmount;
                    console.log(`You have regenerated ${regenAmount} health points`);
                }
                if (enemy.hp <= 0){
                    console.log(`The ${enemy.name} is dead.`)
                    player.gainExp();
                    player.getRewards();
                }

            } else if (rawInput == "2"){

                player.useFireball(enemy)
                player.attack(enemy);
                if(player.equipment.regenBelt === true){
                    player.hp += (player.health * .05);
                    console.log(`You have regenerated ${player.health * .05} health points`);
                }
                if (enemy.hp <= 0){
                    console.log(`The ${enemy.name} is dead.`)
                    player.gainExp();
                    player.getRewards();
                }

            } else if (rawInput == "3"){

                player.openBag();
                
            }
            else if (rawInput == "4"){
                console.log("You ran away.")
                break;  //break out of loop
                
            }
            else{
                console.log(`Invalid input ${rawInput}`)
            }//end of if statement

            if (enemy.alive()){
                // Goblin attacks hero
                if(player.dodge() === true){
                    console.log(`You have evaded the ${enemy.name}'s attack!`);
                }else {
                    enemy.attack(player);
                if (player.hp <= 0){
                    console.log("You are dead.")
                    play = false;
                }
                }
            }// end of if statement

        }// end of while loop
    
    }// end of while loop
  
} //end of main

main() //runs the game by calling the main driving function
