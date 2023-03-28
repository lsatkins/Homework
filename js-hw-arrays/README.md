# JavaScript Array Homework Exercises

When you need to keep track of many values of the same kind (e.g, book titles, favorite movies, groceries to buy), it makes more sense to create a single variable that can hold multiple values.  In this homework, you are going to practice the basics of creating **arrays**, using JavaScript as a programming language, by completing problems that will challenge your knowledge of core princples. 

## Objectives 

- Practice writing arrays
- Use indexing to access individual locations in an array
- Update an array
- Delete an element from an array
- Iterate through arrays using for-loops
- Iterate through arrays using while-loops


## Instructions 

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-hw-arrays) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialoge box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repsository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone https://github.com/DigitalCraftsStudents/js-hw-arrays.git
```

- Navigate into the folder titled `js-hw-arrays`
- Open the file called `homework.js` and solve the lab problems 
- To run a file javascript file using node, you can run it from your terminal like this:

```bash
$ node loops.js
```

#### 1. Sum the Numbers
Find the sum of all elements in an array and print to the console.

```js
let sum = [11, 23, 34, 54, 57];

```

#### 2. Largest Number
Find the largest element in an array and print to the console. 

```js 
const largest = [5, 7, 2, 4, 9];
```
#### 3. Smallest Number
Find the smallest element in an array and print to the console.
```js 
const smallest = [5, 7, 2, 4, 9];
```

#### 4. Even Numbers
For the given array of numbers, print each number in the array that is even.

```js 
const even = [34, 56, 43, 11, 87, 67, 55, 44, 12, 6, 4, 98, 83]
```

#### 5. Positive Numbers
For the given array of numbers,  print each number in the array that is greater than zero.

```js 
const positive = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]
```

#### 6. Positive Numbers II
For the given array of numbers, **create a new array** which contains every number in the given array which is positive.

```js 

const positive2 = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]
```

#### 7. Given an array of strings, print the ones that start with the letter 'A'. 

```js 
const strings = ['Apple', 'Banana', 'Apricot', 'Cherry', 'Avocado'];
```
#### 8. Given an array of strings, print the longest one.

```js 
const strings = ['short', 'longer', 'longest', 'medium'];
```


#### 9. Multiply a array
For the given array of numbers, and a factor of 5, **create a new array** consisting of each of the numbers in the array multiplied by the factor. Print this array.

```js 
const positive2 = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]
```

#### 10. Reverse a String
Given a string, print the string reversed. For example, reverse the string "Hello World".

#### 11. Multiply Vectors
Given two arrays of numbers of the same length, create a new array by multiplying the pairs of numbers in corresponding positions in the two arrays. Example:

```js 
[2, 4, 5] x [2, 3, 6] = [4, 12, 30]
```

#### 12. Matrix Addition
Given two two-dimensional arrays of numbers of the size 2x2 two dimensional array is represented as an array of arrays:

```js 

[ [2, -2],
   [5, 3] ]
```

Calculate the result of adding the two matrices. The number in each position in the resulting matrix should be the sum of the numbers in the corresponding addend matrices. Example: to add

```text
1 3
2 4
```

and

```text
5 2 1 0 
```

results in

```text
6 5
3 4
```

#### 13. Matrix Addition II
Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, as long as they have the same size.

#### 14. De-dup
Given a array of numbers or strings, create a new array containing the same elements as the first array, except with any duplicate values removed. Print the array.


#### 15. Leetspeak

Given a paragraph of text as a String, print the paragraph in [leetspeak](https://en.wikipedia.org/wiki/Leet). 

To translate a String to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase):

| Letter | Translates To |
|:------:|:-------------:|
| A      | 4             |
| E      | 3             |
| G      | 6             |
| I      | 1             |
| O      | 0             |
| S      | 5             |
| T      | 7             |

Example: If your program is given the String `"I am a leet programmer"`, it should print `"1 4m 4 l337 pr0gr4mm3r"` as the leetspeak translation

#### 16. Long-long Vowels

Given a word as a string, print the result of extending any long vowels to the length of 5. 

Examples:

```
Good => Goooood 
Cheese => Cheeeeese 
Man => Man 
Spoon => Spooooon 
```

#### 17. Caesar Cipher

Given a string, print the Caesar Cipher (or ROT13) of that string. What is Caesar Cipher? [Learn about it here](http://practicalcryptography.com/ciphers/caesar-cipher/).

Use your solution to decipher the following text: "lbh zhfg hayrnea jung lbh unir yrnearq"