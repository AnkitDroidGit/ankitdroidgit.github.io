---
layout: post
title: "100 most asked JavaScript Interview Questions and Answers - Part 1"
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
image: assets/images/post/JSQuestion/1.png
description: We are going to learn JavaScript, by answering the most frequently asked javascript interview questions
featured: true
hidden: true
comments: false
rating: 5
---

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

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
  color: yellow;
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
Question 1. [What is `JavaScript`?](#1-what-is-javascript)

Question 2. [What are the `primitive types` in JavaScript?
`or`
Explain the various JavaScript `data types`?](#2-what-are-the-primitive-types-in-javascript)

Question 3. [What's the difference between `undefined` and `null` in JavaScript?](#3-whats-the-difference-between-undefined-and-null-in-javascript)

Question 4. [What are the escape characters in JavaScript?](#4-what-are-the-escape-characters-in-javascript)

Question 5. [What does the `Logical AND (&&)` operator do?](#5-what-does-the-logical-and-operator-do)

Question 6. [What does the `Logical OR (||)` operator do?](#6-what-does-the-logical-or-operator-do)

Question 7. [What is the fastest way converting a string to a number?](#7-what-is-the-fastest-way-converting-a-string-to-a-number)

Question 8. [What are the different types of Error Name values in JavaScript?](#8-what-are-the-different-types-of-error-name-values-in-javascript)

Question 9. [Please explain `Self Invoking Function`](#9-please-explain-self-invoking-function)

Question 10. [Explain difference between function declaration and function expression.]
(#10-explain-difference-between-function-declaration-and-function-expression)

Question 11. [What is the DOM?](#11-what-is-the-dom)

Question 12. [Please explain difference between `attributes` and `property`?](#12-please-explain-difference-between-attributes-and-property)

Question 13. [What are `cookies`? How will you `create`, `read`, and `delete` a cookie using JavaScript?](#13-what-are-cookies-how-will-you-create-read-and-delete-a-cookie-using-javascript)

Question 14. [What is `Event Propagation`?](#14-what-is-event-propagation)

Question 15. [What is Event Bubbling?](#15-what-is-event-bubbling)

Question 16. [What is Event Capturing?](#16-what-is-event-capturing)

Question 17. [Explain difference between `event.preventDefault()` and `event.stopPropagation()` methods?](#17-explain-difference-between-eventpreventdefault-and-eventstoppropagation-methods)

Question 18. [How to know if the `event.preventDefault()` method was used in an element?](#18-how-to-know-if-the-eventpreventdefault-method-was-used-in-an-element)

Question 19. [What is Closure?](#19-what-is-closure)

Question 20. [How many ways can you create an array in JavaScript?](#20-how-many-ways-can-you-create-an-array-in-javascript)

Question 21. [How will you empty an array in JavaScript?](#21-how-will-you-empty-an-array-in-javascript)

---

_If you feel lazy to read more text, you can watch a video covering all questions here_

<iframe width="760" height="415" src="https://www.youtube.com/embed/kkKpgNNsB_8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## 1. What is `JavaScript`?

**High level definition of JavaScript is:**

- JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
- JavaScript is the most popular web scripting language, used for both client-side and server-side development. 
- Supporting object-oriented programming abilities.
- JavaScript code can be inserted into HTML pages that can be understood
and executed by web browsers.

[Top ↑](#questions)


## 2. What are the `primitive types` in JavaScript?

The data types supported by JavaScript are:
- String
- Number
- Boolean
- Symbol
- BigInt
- Null
- Undefined

[Top ↑](#questions)

## 3. What's the difference between `undefined` and `null` in JavaScript?

**`undefined` is the default value of**
- a variable that has not been assigned a specific value.
- a function that has no explicit return value. for example
```
console.log(12);
```
- a property that does not exist in an object.
The JavaScript engine does this for us the assigning of undefined value.

```
  let _undefinedVar;
  const doNothing = () => {};
  const someObj = {
    ab : “Tech Talks”,
    bc : “With AK”,
    cd : “Subscribe, Link in Bio”,
  };
  console.log(_undefinedVar); // undefined
  console.log(doNothing()); // undefined
  console.log(someObj[“d”]); // undefined

```

**`null` is** 
- a value that represents no value.
- value that has been explicitly defined to a variable.
- Example we get a value of null when the fs.readFile method does not throw an error.
```
fs.readFile('path/to/file', (err,data) => {
     console.log(e); //prints null when no error occurred
     if(e){
       console.log(e);
     }
     console.log(data);
   }
);
```

**comparing `null` and `undefined`**
- When comparing `null` and `undefined` we get `true` when using `==` and `false` when using `===`.
```
console.log(null == undefined); // logs true
console.log(null === undefined); // logs false
```



[Top ↑](#questions)

## 4. What are the `escape characters` in JavaScript?

- We use escape characters `backslash (\)` while working with special characters, such as `ampersands (&)`, `apostrophes (‘)`, `double quotes (“ ”)`, and `single quotes (‘ ’)`.
- Whatever enclosed within the escape characters get displayed by the JavaScript.
- Six additional escape characters are also available in JavaScript:
  - \b – Backspace
  - \f – Form feed
  - \n – Newline
  - \r – Carriage return
  - \t – Horizontal tabulator
  - \v – Vertical tabulator
- These aren’t in anyway executed in the HTML or JS code.
- These were originally designed for controlling fax machines, teletypes, and typewriters.


[Top ↑](#questions)

## 5. What does the `Logical AND` operator do?

- The `&&` or `Logical AND` operator finds the first false expression in its operands and returns it.
- If it does not find any false expression it returns the last expression.
- It employs short-circuiting to prevent unnecessary work.

```
   console.log(false && 10 && []); // false
   console.log(" " && true && 10); // 10
```

[Top ↑](#questions)

## 6. What does the `Logical OR` operator do?

- The `||` or `Logical OR` operator finds the first truthy expression in its operands and returns it.
- This too employs short-circuiting to prevent unnecessary work.

```
console.log(null || 10 || undefined); //prints 10

function printChannelName(name) {
  var n = name || "Tech Talks With AK";
  console.log(n);
}

printChannelName(); //prints "Tech Talks With AK"
```

[Top ↑](#questions)

## 7. What is the fastest way converting a string to a number?

According to [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Unary_plus) the `Unary Plus (+)` is the fastest way of converting a string to a number because it does not perform any operations on the value if it is already a number.


[Top ↑](#questions)

## 8. What are the different types of `Error Name values` in JavaScript?

There are 6 Error Name values in JavaScript.

- **Eval Error** – Thrown when coming across an error in eval() (Newer JS releases don’t have it)
- **Range Error** – Generated when a number outside the specified range is used
- **Reference Error** – It comes into play when an undeclared variable is used.
- **Syntax Error** – When the incorrect syntax is used, we get this error
- **Type Error** – This error is thrown when a value outside the range of data types is tried to be used.
- **URI Error** – Generated due to the use of illegal characters

[Top ↑](#questions)

## 9. Please explain `Self Invoking Function`.

- Functions that are automatically invoked are termed as `Self Invoking Functions`.
- These are also known as `Immediately Invoked Function Expressions` and `Self Executing Anonymous Functions`.
- The general syntax of a `Self Invoking Function` is:

```
// A function is defined and then invoked
(function_name () {
    return ()
}) ();
```
- However, if there is a need to `automatically` execute a function at the place where it is given and not be called again, then `anonymous functions` can be used.
Such functions have no name. So the name.

[Top ↑](#questions)

## 10. Explain difference between `function declaration` and `function expression`.

**`function declaration` and `function expression`** can be differenciated on basis of
- Definition
- Strict Mode
- Time of Use
- When to Use

**Definition**
  - A function declared as a separate statement in the main code flow is termed the `function declaration`.
  - When a function is created inside an expression or another syntax construct, it is called a `function expression`.

**Strict Mode**
  - When a function declaration is `within a code block in the Strict mode`, it is visible everywhere inside that block but not outside of it.
  - This isn’t the case for a function expression.

**Time of Use**
  - A function expression is created `when the execution reaches it`. The function expression is usable from that moment onwards.
  - A function declaration, on the other hand, `can be called before the same is defined`.

**When to Use**
  - Function declaration offers `better readability` and offers `more freedom in organizing the code`.
  - Function expressions are typically `restricted to be used when there is a need for a conditional declaration`.

[Top ↑](#questions)

## 11. What is the `DOM`?

- DOM stands for Document Object Model is an interface (API) for HTML and XML documents.
- When the browser first reads (parses) HTML document it creates a big object, a really big object based on the HTML document this is the DOM.
- It is a tree-like structure that is modeled from the HTML document.
- The DOM is used for interacting and modifying the DOM structure or specific Elements or Nodes.

```
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document Object Model</title>
</head>
<body>
   <div>
  	<p>
     	<span></span>
  	</p>
  	<label></label>
  	<input>   // other elements
   </div>
</body>
</html>
```
The graphical representation of the DOM of code above looks like

![](../../assets/images/post/JSQuestion/dom.png)

**The document object in JavaScript represents the DOM.**

It provides us many methods that we can use to selecting elements to update element contents and many more.
- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page



[Top ↑](#questions)

## 12. Please explain difference between `attributes` and `property`?

- JS DOM objects have properties that are like instance variables for particular elements.
- A property can be of various data types.
- Properties are accessible by interacting with the object in Vanilla JS or using jQuery’s prop() method.

- Rather than in the DOM, attributes are in the HTML.
- They are similar to properties but not as capable.
- It’s recommended to work with properties rather than attributes if the former is available. Unlike a property, an attribute is of the string data type

[Top ↑](#questions)

## 13. What are `cookies`? How will you `create`, `read`, and `delete` a cookie using JavaScript?

- A cookie is simply data, usually small, sent from a website and stored on the user’s computer by the web browser used to access the website.
- It is a reliable way for websites to remember stateful information and record the user's browsing activity.

**Creatting a Cookie:**

The most basic way of creating a cookie using JS is to assign a string value to the document.
```
document.cookie = “key1 = value1; key2 = value2; … ; keyN= valueN; expires = date”;

```

**Reading a Cookie:**
- Reading a cookie using JS is as simple as creating.
- Cookie object is the cookie, use this string whenever you wish to access the cookie.
- The `document.cookie` string keeps a list of `name = value` pairs, where a `semicolon separates each pair`.
- The `name` represents a cookie's name, and the `value` represents the respective cookie’s string value.
- For breaking the string into key and value, you can use the `split()` method.

**Deleting a Cookie:**

- Simply `setting the expiration date` (expires) to a time that’s already past.
- Some web browsers don’t let you delete a cookie unless you don’t specify the cookie's path.
- Hence, defining the `cookie path` is important to ensure that the right cookie is `deleted.assign` a string value to the document.

[Top ↑](#questions)

## 14. What is `Event Propagation`?

- When an event occurs on a DOM element, that event does not entirely occur on that just one element.
- In the Bubbling Phase, the event bubbles up or it goes to its parent, to its grandparents, to its grandparent's parent until it reaches all the way to the window while in the Capturing Phase the event starts from the window down to the element that triggered the event or the event.target.
- This process is called Event Propagation.
- It has 3 phases.
  - `Capturing Phase` – The event starts from window then goes down to every element until it reaches the target element.
  - `Target Phase` – The event has reached the target element.
  - `Bubbling Phase` – The event bubbles up from the target element then goes up every element until it reaches the window.

![](../../assets/images/post/JSQuestion/event.png)

[Top ↑](#questions)

## 15. What is `Event Bubbling`?

When an event occurs on a DOM element, that event does not entirely occur on that just one element.

In the `Bubbling Phase`, the event bubbles up or it goes to its parent, to its grandparents, to its grandparent's parent until it reaches all the way to the window.

If we have an example markup like this

```
<div class="grandparent">
    <div class="parent">
          <div class="child">1</div>
    </div>
</div>

```

And javascript code.

```
function addEvent(el, event, callback, isCapture = false) {
       if (!el || !event || !callback || typeof callback !== 'function') return;
       if (typeof el === 'string') {
      	el = document.querySelector(el);
       }; 
       el.addEventListener(event, callback, isCapture);
}
addEvent(document, 'DOMContentLoaded', () => {

       const child = document.querySelector('.child');
       const parent = document.querySelector('.parent');
       const grandparent = document.querySelector('.grandparent');
  
     addEvent(child, 'click', function (e) {
	console.log('child');
       });
      addEvent(parent, 'click', function (e) {
	console.log('parent');
      });
     addEvent(grandparent, 'click', function (e) {
	console.log('grandparent');
     });
     addEvent(document, 'click', function (e) {
	console.log('document');
     });
     addEvent('html', 'click', function (e) {
	console.log('html');
     });
     addEvent(window, 'click', function (e) {
	console.log('window');
     });
});
```

- The `addEventListener()` method has a third optional parameter useCapture with a default value of false the event will occur in the `Bubbling phase`.
- If `useCapture` is `true`, the event will occur in the `Capturing Phase`.
- If we click on the child element it logs `child, parent, grandparent, html, document and window` respectively on the console.
- This  whole event is Event Bubbling.

[Top ↑](#questions)

## 16. What is `Event Capturing`?

When an event occurs on a DOM element, that event does not entirely occur on that just one element.
In Capturing Phase, the event starts from the window all the way down to the element that triggered the event.

If we have an example markup like this

```
<div class="grandparent">
    <div class="parent">
          <div class="child">1</div>
    </div>
</div>
```

And javascript code is

```
function addEvent(el, event, callback, isCapture = false) {
     if (!el || !event || !callback || typeof callback !== 'function') return;
     if (typeof el === 'string') {
	el = document.querySelector(el);
     };
     el.addEventListener(event, callback, isCapture);
}
addEvent(document, 'DOMContentLoaded', () => {
     const child = document.querySelector('.child');
     const parent = document.querySelector('.parent');
     const grandparent = document.querySelector('.grandparent');

     addEvent(child, 'click', function (e) {
	console.log('child');
     }, true);
     addEvent(parent, 'click', function (e) {
	console.log('parent');
     }, true);
  addEvent(grandparent, 'click', function (e) {
	console.log('grandparent');
  }, true);

  addEvent(document, 'click', function (e) {
	console.log('document');
  }, true);

  addEvent('html', 'click', function (e) {
	console.log('html');
  }, true)

  addEvent(window, 'click', function (e) {
	console.log('window');
  }, true)

});
```

- The `addEventListener()` method has a third optional parameter useCapture with a default value of false the event will occur in the `Bubbling phase`.
- If `useCapture` is `true`, the event will occur in the `Capturing Phase`.
- If we click on the child element it logs `window, document, html, grandparent, parent and child` respectively on the console.
- This is Event Capturing


[Top ↑](#questions)

## 17. Explain difference between `event.preventDefault()` and `event.stopPropagation()` methods?

- The event.preventDefault() method prevents the default behavior of an element.
- If used in a form element it prevents it from submitting.
- If used in an anchor element it prevents it from navigating.
- If used in a context menu it prevents it from showing or displaying.

- While the event.stopPropagation() method stops the propagation of an event.
- It stops the event from occurring in the bubbling or capturing phase.


[Top ↑](#questions)


## 18. How to know if the `event.preventDefault()` method was used in an element?

- We can use the event.defaultPrevented property in the event object.
- It returns a boolean indicating if the event.preventDefault() was called in a particular element.


[Top ↑](#questions)


## 19. What is `Closure`?

- `Closures` are created whenever a variable, defined outside the current scope, is accessed from within some inner scope.
- It gives us access to an outer function’s scope from an inner function.
- In other words, a closure is a locally declared variable that is related to a function and stays in the memory when the related function has returned.
- The closure contains all local variables that were in-scope at the time of the closure creation.

- In JavaScript, closures are created every time a function is created.
To use a closure, simply define a function inside another function and expose it.

Lets look at example

- Without Closure

```
function greet(message) {
  console.log(message);
}
function greeter(name, number) {
  return name + " says Hey!! He has " + age + " subscribers";
}
var message = greeter("Tech Talks", 1026);
greet(message);
```

- With Closure

```
function greeter(name, age) {
  var message = name + " says Hey!! He has " + age + " subscribers";
  return function greet() {
    console.log(message);
  };
}
// Generate the closure
var TechTalksGreeter = greeter("Tech Talks", 1026);
// Use the closure
TechTalksGreeter();
```



[Top ↑](#questions)

## 20. How many ways can you `create an array` in JavaScript?

There are three different ways of creating an array in JavaScript, namely:
- By creating instance of an array:
```
var someArray = new Array();
```
-	By array constructor:
```
var someArray = new Array(‘value1’, ‘value2’,…, ‘valueN’)
```
- By using an array literal:
```
var someArray = [value1, value2,…., valueN];
```


[Top ↑](#questions)

## 21. How will you `empty an array` in JavaScript?

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
