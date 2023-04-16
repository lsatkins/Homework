
# Build a Phone Boook

In this homework assignment, you will test your knowledge of working with objects by buidling a  `Phone Book` app.

## Objectives 
- Create Objects
- Store and manipulate data in the form of key/value pairs


## Instructions 

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-hw-phonebook) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialoge box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repsository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone https://github.com/DigitalCraftsStudents/js-hw-phonebook.git
```

- Navigate into the folder titled `js-hw-phonebook`
- Open the file called `phonebook.js` and solve the lab problems 
- To run a file javascript file using node, you can run it from your terminal like this:

```bash
$ node loops.js
```


## Description

You will write a command line program to manage a phone book. When you start the phonebook.py program, it will print out a menu and ask the user to enter a choice:

```
Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit

What do you want to do (1-5)?

```

- If they choose to look up an entry, you will ask them for the person's name, and then look up the person's phone number by the given name and print it to the screen.
- If they choose to set an entry, you will prompt them for the person's name and the person's phone number,
- If they choose to delete an entry, you will prompt them for the person's name and delete the given person's entry.
- If they choose to list all entries, you will go through all entries in the dictionary and print each out to the terminal.
- If they choose to quit, end the program.


```
Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
What do you want to do (1-5)? 2

Name: Melissa
Phone Number: 584-394-5857
Entry stored for Melissa.

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 2

Name: Igor
Phone Number: 857-485-2935
Entry stored for Igor.

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 2

Name: Jazz
Phone Number: 334-584-2345
Entry stored for Jazz.

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
What do you want to do (1-5)? 1

Name: Melissa
Found entry for Melissa: 584-394-5857

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 3

Name: Melissa
Deleted entry for Melissa

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 4

Found entry for Igor: 857-485-2935
Found entry for Jazz: 334-584-2345

Electronic Phone Book =====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 5

Bye.

```