# JavaScript Loops Homework Exercises

In this lab, you are going to practice the basics of writing **for loops and while loops**, using JavaScript as a programming language, by completing problems that will challenge your knowledge of core princples. 

## Objectives 

- constructing a `for` loop
- constructin a `while` loop
- What is the difference between a `for` loop and a `while` loop


## Instructions 

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-hw-loops) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialoge box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repsository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone https://github.com/DigitalCraftsStudents/js-hw-loops.git
```

- Navigate into the folder titled `js-hw-loops`
- Open the file called `homework.js` and solve the lab problems 
- To run a file javascript file using node, you can run it from your terminal like this:

```bash
$ node loops.js
```


## Problems

1. Write a loop the prints the even numbers from 20 - 100 

2. Write a loop that prints out the odd numbers from 1 to 15.

3. **n to m** : 
Same as the previous problem, except you will prompt the user for the number to start on and the number to end on. Example session

```bash 
$ node homework.js
Start from: 2
End on: 8
2
3
4
5
6
7
8

```


4. Write a loop that calculates the sum of the numbers from 1 to 100.

5. Write a loop that calculates the factorial of a number.

6. Write a loop that prints out the Fibonacci sequence up to a certain number of terms.

7. Print a 5x5 square of * characters. Example output:
```bash
*****
*****
*****
*****
*****
```


8. Print a NxN square of * characters. Prompt the user for N. Example output:

```bash
How big is the square? 10
**********
**********
**********
**********
**********
**********
**********
**********
**********
**********
```

9. **How many coins?**
Write a program that will prompt you for how many coins you want. Initially you have no coins. It will ask you if you want a coin? If you type "yes", it will give you one coin, and print out the current tally. If you type no, it will stop the program. Example run:

```bash 
$ node homework.js
You have 0 coins.
Do you want another? yes
You have 1 coins.
Do you want another? yes
You have 2 coins.
Do you want another? no
Bye
```


10. **Print a Box**
Given a height and width, input by the user, print a box consisting of * characters as its border. Example session:

```bash
node box.js
Width? 6
Height? 4
******
*    *
*    *
******

```

11. **Print a Triangle**
Print a triangle consisting of * characters like this:

```bash 
   *
  ***
 *****
*******
```


12. **Multiplication Table**
Print the multiplication table for numbers from 1 up to 10. Example output:

```bash 
$ node multiplication_table.js
1 X 1 = 1
1 X 2 = 2
1 X 3 = 3
1 X 4 = 4
...
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
...
10 X 8 = 80
10 X 9 = 90
10 X 10 = 100
```

