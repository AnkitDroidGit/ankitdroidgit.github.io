---
layout: post
title: "100 most asked JavaScript Interview Questions and Answers - Part 2"
author: ankit
categories:
  [
    JavaScript,
    Interview,
    Questions,
    Answers,
    100 JavaScript Questions,
    100 JavaScript Interview Questions,
    100 Interview Questions,
    Web Developer Interview Questions,
    Backend Developer Interview Questions,
    Frontend Developer Interview Questions,
    Fullstack Developer Interview Questions,
  ]
tags:
  [
    JavaScript,
    Interview,
    Questions,
    Answers,
    100 JavaScript Questions,
    100 JavaScript Interview Questions,
    100 Interview Questions,
    Web Developer Interview Questions,
    Backend Developer Interview Questions,
    Frontend Developer Interview Questions,
    Fullstack Developer Interview Questions,
  ]
image: assets/images/post/JSQuestion/2.png
description: We are going to learn JavaScript, by answering the most frequently asked javascript interview questions
comments: false
rating: 5
---

We are going to learn JavaScript, by answering the most frequently asked javascript interview questions.

---

## JavaScript Interview Questions and Answers Series

<style>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}
a:active {
  color: green;
  background-color: transparent;
  text-decoration: underline;
}
</style>

<a href="https://ankitkumar.dev/100-JS-interview-question-part1/">100 most asked JavaScript Interview Questions and Answers - Part 1</a>
<a href="https://ankitkumar.dev/100-JS-interview-question-part2/" >100 most asked JavaScript Interview Questions and Answers - Part 2</a>

---
Welcome to **Tech Talks** tutorial.

>If you guys want to practice for JavaScript Interview on mock video interview, please drop me an email at [admin@ankitkumar.dev](mailto:admin@ankitkumar.dev)

## Questions
Question 22. [How to remove duplicates from an array?](#22-how-to-remove-duplicates-from-an-array)


Question 23. [How to check if a value is an Array?](#23-how-to-check-if-a-value-is-an-array)


Question 24. [Implement the `Array.prototype.map()` method
](#24-implement-the-arrayprototypemap-method)


Question 25. [Implement the `Array.prototype.filter()` method](#25-implement-the-arrayprototypefilter-method)


Question 26. [Implement the `Array.prototype.reduce()` method](#26-implement-the-arrayprototypereduce-method)


Question 27. [What is a `name function` in JavaScript?](#27-what-is-a-name-function-in-javascript)


Question 28. [Can you assign an anonymous function to a variable and pass it as an argument to another function?](#28-can-you-assign-an-anonymous-function-to-a-variable-and-pass-it-as-an-argument-to-another-function)


Question 29. [What is the `arguments object`?](#29-what-is-the-arguments-object)


Question 30. [Can you convert arguments object into an array?](#30-can-you-convert-arguments-object-into-an-array)


Question 31. [Does arguments object work on ES6 arrow functions?](#31-does-arguments-object-work-on-es6-arrow-functions)


Question 32. [How to create an object without a prototype?](#32-how-to-create-an-object-without-a-prototype)


Question 33. [What are the scopes of a variable in JavaScript?](#33-what-are-the-scopes-of-a-variable-in-javascript)


Question 34. [What is the purpose of `this` in JavaScript?](#34-what-is-the-purpose-of-this-in-javascript)


Question 35. [What is `Callback` in JavaScript?](#35-what-is-callback-in-javascript)


Question 36. [How does `typeOf` Operator work?](#36-how-does-typeof-operator-work)


Question 37. [Explain `equality` in JavaScript](#37-explain-equality-in-javascript)


Question 38. [What is the difference between `==` and `===`?](#38-what-is-the-difference-between--and-)


Question 39. [What is `ECMAScript`?](#39-what-is-ecmascript)


Question 40. [What are the new features in `ES6` or `ECMAScript 2015`?](#40-what-are-the-new-features-in-es6-or-ecmascript-2015)


Question 41. [What does `use strict` do?](#41-what-does-use-strict-do)

---

_If you feel lazy to read more text, you can watch a video covering all questions here_

<iframe width="760" height="415" src="https://www.youtube.com/embed/3RM9Tp4PU00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## 22. How to `remove duplicates from an array`?

There can be multiple ways of removing duplicates from an array, but let me tell three the most popular ways to do it.
- **Using Filter** -  It is possible to remove duplicates from an array in JavaScript by applying a filter to the same. To call the `filter()` method, three arguments are required. These are namely array as `self`, current element as `elem`, and index of the current element as `index`.

```
let language = ['JavaScript', 'Dart', 'Kotlin', 'Java', 'Swift', 'Dart']
function unique_array(arr) {
   let unique_array = arr.filter(function (elem, index, self) {
       return index == self.indexOf(elem);
   });
   return unique_array
}
console.log(unique_array(language));

// Logs [ 'JavaScript', 'Dart', 'Kotlin', 'Java', 'Swift' ]
```


[Top ↑](#questions)


## 23. How to check if a value is an Array?

- We can check if a value is an Array by using the Array.isArray() method available from the Array global object. 
- It returns true when the parameter pass to it is an Array otherwise false.
```
console.log(Array.isArray(5));  //logs false
console.log(Array.isArray("")); //logs false
console.log(Array.isArray()); //logs false
console.log(Array.isArray(null)); //logs false
console.log(Array.isArray({ length: 5 })); //logs false
console.log(Array.isArray([])); //logs true
```

- If your environment does not support this method you can use the polyfill implementation.

```
function isArray(value){
   return Object.prototype.toString.call(value) === "[object Array]"
}
```

[Top ↑](#questions)

## 24. Implement the `Array.prototype.map()` method.

As the MDN description of the `Array.prototype.map method`, the `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

- Syntax of `map()` method is 

```
let newArray = arr.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}[, thisArg]);
```

- And here is the implementation of it 

```
function map(arr, mapCallback) {
  // Check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
    return [];
    }
    else {
      let result = [];
      // Avoid mutating the original array.
      for (let i = 0, len = arr.length; i < len; i++) {
        result.push(mapCallback(arr[i], i, arr));
        // push the result of the mapCallback in the 'result' array
        }
        return result; // return the result array
    }
}
```

[Top ↑](#questions)

## 25. Implement the `Array.prototype.filter()` method.

As the MDN description of the Array.prototype.filter method, the `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

- Syntax is 
```
let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
}[, thisArg]);
```
- Implementations is 
```
function filter(arr, filterCallback) {
  // Check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
    return [];
    }
    else {
      let result = [];
      // Avoid mutating the original array.
      for (let i = 0, len = arr.length; i < len; i++) {
        // check if the return value of the filterCallback is true or "truthy"
        if (filterCallback(arr[i], i, arr)) {
        // push the current item in the 'result' array if the condition is true
        result.push(arr[i]);
      }
    }
    return result; // return the result array
  }
}
```

[Top ↑](#questions)

## 26. Implement the `Array.prototype.reduce()` method.

- The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
- The reducer function takes four arguments:
>Accumulator, Current Value, Current Index ,Source Array

- Syntax is 
```
arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
```

- Implementation
```
function reduce(arr, reduceCallback, initialValue) {
  // Check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function'){
    return [];
  }
  else {
    // If no initialValue has been passed to the function we're gonna use the
    let hasInitialValue = initialValue !== undefined;
    let value = hasInitialValue ? initialValue : arr[0];
    // first array item as the initialValue, Start looping at index 1 if there is no
    // initialValue has been passed to the function else we start at 0 if there is an initialValue.
    for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
      // Then for every iteration we assign the result of the reduceCallback to the variable value.
      value = reduceCallback(value, arr[i], i, arr);
    }
    return value;
  }
}
```

[Top ↑](#questions)

## 27. What is a `name function` in JavaScript?

A named function declares a name as soon as it is defined. It can be defined using function keyword as :
```
function named() {
   // write code here
}
```

[Top ↑](#questions)

## 28. Can you assign an anonymous function to a variable and pass it as an argument to another function?

- Yes! An anonymous function can be assigned to a variable.

- It can also be passed as an argument to another function.

Exmample is 
```
let show = function () {
  console.log('Anonymous function');
};
show();
```

[Top ↑](#questions)

## 29. What is the `arguments object`?

- The arguments object is a collection of parameter values pass in a function.
- It's an Array-like object because it has a length property and we can access individual values using array indexing notation arguments[1]
- But it does not have the built-in methods in an array forEach, reduce, filter and map.
- It helps us know the number of arguments pass in a function.


[Top ↑](#questions)

## 30. Can you convert arguments object into an array?

- **Yes**, We can convert the arguments object into an array using the Array.prototype.slice.
```
function one() {
   return Array.prototype.slice.call(arguments);
}
```
- However, if there is a need to `automatically` execute a function at the place where it is given and not be called again, then `anonymous functions` can be used.
Such functions have no name. So the name.

[Top ↑](#questions)

## 31. Does `arguments object` work on `ES6 arrow functions`?

**No**, the arguments object does not work on ES6 arrow functions.
```
function one() {
   return arguments;
}
const two = function () {
   return arguments;
}
const three = function three() {
   return arguments;
}
const four = () => arguments;
four(); // Throws an error  - arguments is not defined
```
When we invoke the function four it throws a ReferenceError: arguments is not defined error.

We can solve this problem if your environment supports the rest syntax.
```
const four = (...args) => args;
```
This puts all parameter values in an array automatically.

[Top ↑](#questions)

## 32. How to create an `object without a prototype`?

We can create an object without a prototype using the `Object.create method`.

```
const o1 = {};
console.log(o1.toString());
// logs [object Object] get this method to the Object.prototype

const o2 = Object.create(null);
// the first parameter is the prototype of the object "o2" which in this case will be null specifying we don't want any prototype
console.log(o2.toString());
// throws an error o2.toString is not a function
```

[Top ↑](#questions)

## 33. What are the scopes of a variable in JavaScript?

The scope of a variable is the region of your program in which it is defined.
JavaScript variable will have only two scopes.
- **Global Variables** − A global variable has global scope which means it is visible everywhere in your JavaScript code.
- **Local Variables** − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

[Top ↑](#questions)

## 34. What is the purpose of `this` in JavaScript?

The JavaScript this keyword refers to the object it belongs to.

This has different values depending on where it is used.
- In a method, this refers to the owner object
- In a function, this refers to the global object.

[Top ↑](#questions)

## 35. What is `Callback` in JavaScript?

- A callback is a plain JavaScript function passed to some method as an argument or option.
- It is a function that is to be executed after another function has finished executing, hence the name ‘callback’.
- In JavaScript, functions are objects, So functions can take functions as arguments, and can be returned by other functions.

[Top ↑](#questions)

## 36. How does `typeOf` Operator work?

- The `typeof` operator is used to get the data type of its operand.
- The operand can be either a literal or a data structure such as a variable, a function, or an object.
- It is a unary operator that is placed before its single operand, which can be of any type.
- Its value is a string indicating the data type of the operand.

[Top ↑](#questions)

## 37. Explain `equality` in JavaScript.


JavaScript has both strict and type–converting comparisons:

- **Strict comparison** (e.g., ===) checks for value equality without allowing coercion
- **Abstract comparison** (e.g. ==) checks for value equality with coercion allowed.

```
var a = "42";
var b = 42;
a == b; // true
a === b; // false
```

Some simple equality rules:

- `If either value` (aka side) in a comparison `could be the true or false` value, `avoid == and use ===`.
- `If either value` in a comparison could be of these specific values `(0, "", or [] -- empty array)`, `avoid == and use ===`.
- In all other cases, you're safe to `use ==`.
  - Not only it is safe, but in many cases it simplifies your code in a way that improves readability.


[Top ↑](#questions)

## 38. What is the difference between `==` and `===`?

- `==` is the abstract equality operator while === is the strict equality operator.
- The `==` operator will compare for equality after doing any necessary type conversions.
- The `===` operator will not do type conversion, so if two values are not the same type === will simply return false.
- When using `==`, funky things can happen, such as:
```
1 == "1"; // true
1 == [1]; // true
1 == true; // true
0 == ""; // true
0 == "0"; // true
0 == false; // true
```

[Top ↑](#questions)


## 39. What is `ECMAScript`?

- ECMAScript is a standard for making scripting languages which means that JavaScript follows the specification changes in ECMAScript standard because it is the blueprint of JavaScript.
- ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications.

- Read more about ECMAScript [here](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/).


[Top ↑](#questions)


## 40. What are the new features in `ES6` or `ECMAScript 2015`?

- Arrow Functions
- Classes
- Template Strings
- Enhanced Object literals
- Object Destructuring
- Promises
- Generators
- Modules
- Symbol
- Proxies
- Sets
- Default Function parameters
- Rest and Spread Operators
- Block Scoping with `let` and `const`

[Top ↑](#questions)

## 41. What does `use strict` do?

- `use strict` is a ES5 feature in JavaScript that makes our code in Strict Mode in functions or entire scripts.
- Strict Mode helps us avoid bugs early on in our code and adds restrictions to it.

Let look on restrictions that Strict Mode gives us.

- Assigning or Accessing a variable that is not declared.
```
function returnA() {
  "use strict";
  a = 3245;
  return a;
}
```
- Assigning a value to a read-only or non-writable global variable
```
"use strict";
var NaN = NaN;
var undefined = undefined;
var Infinity = "and beyond";
```
- Deleting an undeletable property

```

"use strict";
const obj = {};
Object.defineProperty(obj, 'x', {
     value : '1'
}); 

delete obj.x;
```

- Duplicate parameter names

```

"use strict";

function someFunc(a, b, b, c){

}
```

- Creating variables with the use of the eval function

```

"use strict";

eval("var x = 1;");
console.log(x); //Throws a Reference Error x is not defined
```

- The default value of this will be undefined

```

"use strict";

function showMeThis(){
 return this;
}
showMeThis(); //returns undefined

```


[Top ↑](#questions)

## 21. How will you empty an array in JavaScript?

There are four ways to empty an array in JavaScript

- By assigning an empty array:
```
var array1 = [1, 22, 24, 46];
array1 = [ ];
```

- By assigning array length to 0:
```
var array1 = [1, 22, 24, 46];
array1.length=0;
```
- By popping the elements of the array: 
```
var array1 = [1, 22, 24, 46];
while(array1.length > 0) {
array1.pop();
}
```
- By using the splice array function:
```
var array1 = [1, 22, 24, 46];
array1.splice(0, array1.length)
```

[Top ↑](#questions)

---

>If you guys want to practice for JavaScript Interview on mock video interview, please drop me an email at [admin@ankitkumar.dev](mailto:admin@ankitkumar.dev)

---

## Further Reading

- [Top Flutter Advantages and Why You Should Try Flutter on Your Next Project](https://ankitkumar.dev/why-flutter/)
- [How to implement deep linking in React Native app with React Navigation v5](https://ankitkumar.dev/react-native-deeplink-with-react-navigation/)

---

Also, to be notified about my new articles and stories:

Subscribe to my [YouTube Channel](https://www.youtube.com/TechTalksWithAK)

Follow me on [Medium](https://ankitdeveloper.medium.com/), [Github](https://github.com/AnkitDroidGit), and [Twitter](https://twitter.com/KumarrAnkitt).

You can find me on [LinkedIn](https://www.linkedin.com/in/kumarankitkumar/) as well.

I am quite active on [Dev Community](https://dev.to/ankitkumar) as well and write small topics over there.

Cheers!!! Happy coding!!
