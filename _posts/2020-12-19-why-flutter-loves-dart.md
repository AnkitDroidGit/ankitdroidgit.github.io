---
layout: post
title: "Why Flutter loves Dart"
author: ankit
categories:
  [
    Flutter,
    Dart,
    Google,
    Advantages of Dart,
    Flutter Tutorial 2021,
    What is Dart,
    Why Dart,
  ]
tags:
  [
    Flutter,
    Dart,
    Google,
    Advantages of Flutter,
    Flutter Tutorial 2021,
    What is Flutter,
    Why Flutter,
    Advantages of Flutter,
    Benefits of Flutter,
    Disadvantages of Flutter,
    Flutter,Flutter App Development,
    Android and iOS App,
    Dart and Flutter,
    Flutter for Web,
    Flutter for Desktop apps,
    Flutter for mobile apps,
    Android development with Flutter,
    iOS app development with Flutter,
    Why Flutter,
    What is Flutter,
    Dart language,
    Flutter tutorial for beginners,
    Flutter course,
    flutter app,
    flutter android studio,
    dart tutorial,
    flutter,
    dart,
    Flutter for beginners
  ]
image: assets/images/post/flutter/dart.png
description: What is Dart | Why Flutter uses Dart | How Dart enable fast development | Dart Tutorial 2021
comments: false
rating: 5
---

Dart is a simple and powerful language, which is, in its nature, complies to be efficient with everybody’s own javascript.

---

Welcome to **Tech Talks** tutorial.


### Table of Contents
- What Is Dart?
- Why Flutter uses Dart?
- How Dart enables developers to develop a Flutter app quickly and deploy it to multiple platforms?
- Dart SDK - Libraries, Tools, Dart VM, Dart Compiler to JS

---

## What is Dart?

**Dart** is a
- `client-optimized` programming language for fast apps on any platform,
- After lots of experiments, the Google team found dart to be `faster`, `smoother`, and `pretty efficient` to be used for developing applications, including client-side and also server-side applications
- `Object oriented` & `Class defined`
- `C Styled syntax`

## What makes Dart so versatile?

What makes Dart so versatile is the fact that it compiles to its own format but also trans-compiles into javascript, which is readable by most of the devices today.

So Dart can be used cross-platform mobile applications, web applications using Angular Dart, and command-line applications or server-side applications

--- 

_If you feel lazy to read more text, you can watch a video on the topic below_

<iframe width="760" height="415" src="https://www.youtube.com/embed/4PstaG3YdRs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### Why Dart? / Why Flutter uses Dart? / Why Flutter loves Dart?


In today's world, you need to build from many platforms to reach all your users, while maintaining quality to keep them happy.
Flutter enables you to ship an application for Android, iOS,
and the web from a single codebase. To do this, Flutter needs a programming language that works on all these platforms and gives you a fast development experience.

That's why Flutter chose Dart.


## How Dart enables developers to develop a Flutter app quickly and deploy it to multiple platforms?

If you're developing for mobile, you might be used to slow compile and debug cycles.

Dart changes this by enabling one of Flutter's most loved features, `hot reload`, which injects updated Dart source code into your running app and rebuilds your UI in less than a second, so you can see your changes instantly.

To have high-quality experiences of apps on both platforms, traditionally, you might have worked in separate teams to build performant apps for each platform. Dart enables you to build high fidelity Flutter apps for all platforms with one team.

Dart's production quality compilers compile to ARM and x64 machine code for mobile or optimized JavaScript for the web, enabling quick app startup times and smooth animations.

Finally, Dart is easy to learn.

You'll pick up Dart quickly if you're familiar with languages such as Java, Swift, and JavaScript.

Together, Dart and Flutter help you create amazing experiences across Android, iOS, and the web.

Try Dart in your browser today at [dart.dev](https://dart.dev/#try-dart).

## Dart is not just a programming language

Dart holds much more than that, It includes
- Libraries
- Tools
- A standalone Dart VM
- Compilers to JS

One does not need anything extra to support it, it includes all in one in its SDK.

Dart VM allows code to run in CLI env as language tools included in the Dart SDK are written mostly in Dart itself.

The standalone Dart VM is the critical part of Dart SDK.

#### Libraries

Dart Ships with the complete standard libraries, allowing developers to write fully functional system apps such as `custom web servers, custom mobile apps`.

Some of the default libraries provided by Dart are, but other third-party libraries are available too.

**dart:core**

- Provides a small but critical set of built-in complete functionality to dart
- Built-in types, collections, and other core functionality.
- This library is automatically imported into every Dart program.

**dart:async**

- Support for asynchronous programming with callbacks
- Dart also provides other options for asynchronous programming by the support of classes such as Future and Stream.

**dart:math**

- Provides common mathematical and trigonometry functionality within darts such as sine and cosine
- Mathematical constants and functions, plus a random number generator.
- Most of the functionality in the math library is implemented as a top-level function.

**dart:convert**

- Encoders and decoders for converting between different data representations, including JSON and UTF-8.
- As well as support for additional customized converters

**dart:html**

- DOM and other APIs for browser-based apps.
- Allows manipulation of OBJECT and DOM
- Give access to HTML5 APIs.

**dart:io**

- I/O for programs that can use the Dart VM, including Flutter apps, servers, and command-line scripts.
- Provides the support to deal with files, directories, processes, sockets and WebSockets and HTTP Clients and Servers

**dart:ui**
- Exposes the lowest-level services that Flutter use to bootstrap the application
- Such as classes for driving the input, graphic text, layouts, and rendering subsystems.

#### Tools

**Dart SDK**
- Dart SDK is a necessity for web developers, Script developers as well as Server-Side Developers.
- For Mobile Developers dart comes as a package within Flutter SDK.
- It means setting up Flutter SDK is good enough to start with Dart for Mobile Development.

**IDEs and Code Editor**

- Android Studio, VS Code, and IntelliJ idea - officially supported
- Atom, Vim, and Emacs are not supported officially by the Dart team but open-source plugins are available 

**Dart Pad**

- Online dart compiler which allows us to play around with dart without installing any dependency,
- The link is in the description below, so please go ahead and check it out.

**CLI Tools** - There are also certain command-line tools in DART

***1. Pub Package Manager***

- A package manager that makes it easy for you to install, use, and share Dart libraries, command-line tools, and other assets.

***2. Dartanalyzer***

- A static analyzer that evaluates and reports any errors or warnings in your code.
- The Dart plugin for your IDE should make use of Dart’s analysis engine, but you can also run the analyzer from the command line.

***3. Dartdoc***

- A documentation generator.

***4. Dartfmt***

- An opinionated code formater that follows the recommendations of the Dart style guide
- IDEs that support Dart generally allow you to format the code within the IDE.
- Or you can run the formater from the command line.

***5. Build Runner***

- A building package that’s used behind-the-scenes by the web dev command.

***6. Dartfix***
- A tool for migrating Dart source code and fixing common issues.

**Debugging Tools**

***1. Dart DevTools***

- A suite of debugging and performance tools.



#### Dart VM

To run command-line apps, such as server-side scripts, programs, and servers, Dart VM borrows many Ideas from JavaScript VM used by Chrome called V8. But browsers actively rejected it, the reasons being size and concern similar to Javascript VM.

It is important to know that DART VM works in the background during the process of application building.

It runs in 2 basics forms

**JIT**
- Which is an acronym for Just In Time.
- It is a mode that is used for dynamically loading dart source, parsing it, and compiling it to native machine code on the fly to execute this.
- This mode is used when you develop your app
- It provides features such as debugging, hot reload, etc

**AOT**
- Which is an acronym for Ahead Of Time
- It is the mode used to support loading and executing pre-compiled machine code
- It does not support dynamic loading, parsing, or compilation
- It is mainly used in deployed applications.

Dart VM is included in Dart SDK itself

It also includes observatory options like enable assert which is an assert statement that checks a boolean condition and raises an exception if the condition is false.

An important point to note about dart VM is that it can not be used for mobile applications or web applications 

#### Compiler to JavaScript

Dart code is compiled into javascript using DART2JS or DARTDEVC compiler which are already included in DART

- **dart2js** - User can compiled dart file by converting into javascript file

- **dartdevc** - let you run and debug your web app in any modern browser

- And it is for in development by dart
- Note that the DartDevC compiler is only for the development
- And dart2js is used only for deployment 


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
