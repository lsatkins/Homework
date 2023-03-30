# JavaScript Object Homework Exercises

In this homework, you are going to practice the basics of creating **objects**, using JavaScript as a programming language, by completing problems that will challenge your knowledge of core princples. 

## Objectives 
- Create Objects
- Store and manipulate data in the form of key/value pairs


## Instructions 

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-hw-objects) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialoge box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repsository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone https://github.com/DigitalCraftsStudents/js-hw-objects.git
```

- Navigate into the folder titled `js-hw-objects`
- Open the file called `homework.js` and solve the lab problems 
- To run a file javascript file using node, you can run it from your terminal like this:

```bash
$ node loops.js
```

## Problems 

#### 1. Letter Summary

Write a `letterHistogram` function that accepts a word and prints an object containing the tally of how many times each letter in the alphabet was used in the word. For example:

``` 
letterHistogram("banana")

// output:
{'a': 3, 'b': 1, 'n': 2} 
```

*In this exercise, are you using dynamic keys or fixed keys?* 

#### 2. Word Summary
Write a `wordHistogram` function that accepts a phrase and prints an object containing the tally of how many times each word was used. For example:

``` 
wordHistogram("To be or not to be") 

// output
{'to': 2, 'be': 2, 'or': 1, 'not': 1} 
```
*In this exercise, are you using dynamic keys or fixed keys?* 

#### Bonus Challenge: 
Given a histogram tally (one returned from either wordHistogram or wordHistogram), print the top 3 words or letters.
