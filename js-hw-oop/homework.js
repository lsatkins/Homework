

// class Person
// {   
//     constructor(name, email, phone){
//         self.name = name
//         self.email = email
//         self.phone = phone
//     }       
//     greet(other_person){
//         print('Hello {}, I am {}!'.format(other_person.name, self.name))
//     }
// }



class Address
{
    constructor(street, city, state, zipCode){

        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
       
    }
}


class User
{
    constructor(firstName, lastName, address){

        this.address = address;
        this.address = [];
        // initialized address value as an empty array

        this.firstName = firstName;
        this.lastName = lastName;
     
    }

    addAddress(nameOfAddress){

        this.address.push(nameOfAddress);

    }
    displayAddresses(){

        console.log(this.address);

    }

}



let hunter = new User("Hunter", "Atkins")
let home = new Address("1037 Yellowhammer Lane,","Tuscaloosa, ","AL, ", "35476");
hunter.addAddress(home);
hunter.displayAddresses();

//? Person Class

// class Person {
//     constructor(name, email, phone, friends, greetingCount){
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//         this.friends = friends;

//         this.friends = [];

//         this.greetingCount = greetingCount;

//         this.greetingCount = 0;

//     }

//     greet(otherPerson){
//         console.log(`Hello ${otherPerson.name}, I am ${this.name}!`);
//         this.greetingCount ++;
//     }

//     printContactInfo(){
//         console.log(`${this.name}'s email: ${this.email}, ${this.name}'s phone number: ${this.phone}`);
//     }

//     addFriend(otherPerson){
//         this.friends.push(otherPerson.name);
//     }

//     numFriends(){
//         return this.friends.length
//     }
// }

// let sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");
// let jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456")
// // sonny.greet(jordan);
// // jordan.greet(sonny);
// // sonny.printContactInfo();
// jordan.addFriend(sonny);
// // sonny.friends.push(jordan);
// // console.log(jordan.friends.length);
// // console.log(jordan.numFriends());
// console.log(sonny.greetingCount);
// sonny.greet(jordan);
// sonny.greet(jordan);
// sonny.greet(jordan);
// console.log(sonny.greetingCount);

// //? Bank Account

// class BankAccount {
//     constructor(balance, accountNumber){
//         this.balance = balance;
//         this.accountNumber = accountNumber;
//     }

//     deposit(number, accountNumber){
//         if(accountNumber === this.accountNumber){
//             this.balance += number;
//         }
//     }

//     withdraw(number, accountNumber){
//         if(accountNumber === this.accountNumber){
//             this.balance -= number;
//         }
//     }

//     transferFunds(number, accountNumber, otherAccount){
//         if(accountNumber === this.accountNumber){
//             this.balance -= number;
//             otherAccount.balance += number;
//         }

//     }

// }

// let account1 = new BankAccount(1000, 1234);
// let account2 = new BankAccount(1000, 5678);
// // account1.withdraw(500, 1234);
// // console.log(account1.balance);
// // account2.deposit(500, 5678);
// // console.log(account2.balance);
// account1.transferFunds(750, 1234, account2);
// console.log(account1.balance);
// console.log(account2.balance);


