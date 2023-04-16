# JavaScript Object Oriented Programming Homework Exercises

In this homework, you are going to practice the basics of creating **Object Oriented Programming**, using JavaScript as a programming language, by completing problems that will challenge your knowledge of core princples. 

## Objectives 
- Create classes.
- Instantiate objects with constructors.
- Customize classes with properties and methods.
- Extend base classes and overrides method in subclasses.

## Instructions 

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-hw-oop) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialoge box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repsository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone https://github.com/DigitalCraftsStudents/js-hw-oop.git
```

- Navigate into the folder titled `js-hw-oop`
- Open the file called `homework.js` and solve the lab problems 
- To run a file javascript file using node, you can run it from your terminal like this:

```bash
$ node homework.js
```

## Problems 


#### User & Address

- Create a class called `User` which consists of (`firstName`, `lastName`) properties. 
- Create a class name `Address` which consists of (`street`, `city`, `state`, `zip_code`) properties.

- Create a relationship between `User` and `Address` in a way a single user can have multiple addresses.
- Add a new method/function to `User` class called `addAddress(address)` which would take an address as an argument and add it to a list/array of addresses.
- Add another method to the `User` class called `displayAddresses(self)` which would display all the address of that user.

#### Person class 

Given the following Person class:

```js
class Person {   
    constructor(name, email, phone){
        this.name = name
        this.email = email
        this.phone = phone
    }       
    greet(otherPerson){
        print(`Hello ${otherPerson.name}, I am ${this.name}!`)
    }
}

``` 

Write code to

- Instantiate an instance object of `Person` with 
    - name of 'Sonny', 
    - email of 'sonny@hotmail.com', and 
    - phone of '483-485-4948', 
store the information in the variable `sonny`.

- Instantiate another person with the 
    - name of 'Jordan', 
    - email of 'jordan@aol.com', and 
    -  phone of '495-586-3456', 
store it in the variable  `jordan`.

- Have `sonny` greet `jordan` using the `greet` method.
- Have `jordan` greet `sonny` using the `greet` method.
- Write a print statement to print the contact info (email and phone) of `Sonny`.
- Write another print statement to print the contact info of `Jordan`.
- Add a `printContactInfo` method to the `Person` class that will print out the contact info for a object instance of `Person`. You will use it thus:

```
>>> sonny.printContactInfo()
Sonny's email: sonny@hotmail.com, Sonny's phone number: 483-485-4948
```

#### Friend Instance
Add a `friends` instance variable (attribute) to the `Person` class. You will initialize it to an empty array within the constructor. Once you've done this you should be able to add a friend to a person using list's append method:

```js
jordan.friends.push(sonny)
sonny.friends.push(jordan)
```

You should also be able to get the number of friends a person has by using the `length` property on his friends:

```js
jordan.friends.length // 1
```

#### Add a addFriend method

The fact that a person's friends attribute is an array is an implementation detail of the `Person` class. It is often desired to hide implementation details from the users of your object/class. Implement an `addFriend` method to `Person`, so that in order to add a friend, you'd only have to do:

```js 
jordan.addFriend(sonny) 
```

Instead of 

```js 
jordan.friends.push(sonny)
```
#### Add a numFriends method

Similarly, to get the number of friends a person has, we'd like to hide the implementation detail that there is a friends attribute which is a list. Implement a `numFriends` method which returns the number of friends the person currently has:

```js
jordan.numFriends() //1
```

#### Count number of greetings

We want to count the number of times a person has greeted someone. To do this, we'll add another attribute, call it say greetingCount, and initialize it to 0. Then each time the greet method is called, we'll increment greetingCount by 1.

```
>>> sonny.greetingCount
0
>>> sonny.greet(jordan)
>>> sonny.greeting_count
1
>>> sonny.greet(jordan)
>>> sonny.greeting_count
2
```


####  Bank Account
- Create a class called `BankAccount`.
- Add properties for balance and `accountNumber`
- Allow the user to deposit funds to the account. This can be accomplished by adding a deposit method to the `BankAccount` class.
- Allow the user to withdraw funds from the account. This can be accomplished by adding a withdraw method to the `BankAccount` class.
- Allow the user to transfer funds between two accounts. This can be accomplished by adding a `transferFunds` method to the BankAccount class.
- After creating the `BankAccount` class, along with all the methods make sure to create instance of `BankAccount` and perform actions.

Example 

```js 
let checkingAccount = new BankAccount("FD332", 100)
checkingAccount.deposit(50) 
console.log(checking_account.balance) // $150

```
