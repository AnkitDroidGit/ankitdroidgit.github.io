---
layout: post
title: "Building your own Google Chrome Extension"
author: ankit
categories:
  [Chrome, Google Chrome, Chrome Extension, JavaScript, TypeScript, HTML, CSS]
tags:
  [Chrome, Google Chrome, Chrome Extension, JavaScript, TypeScript, HTML, CSS]
image: assets/images/post/chrome/build_chrome_extension.png
description: how you can write and build your own extension for the Google Chrome browser
comments: false
rating: 4.5
---

Probably you are reading this article on the Google Chrome browser. Right?

If yes, you would have used extensions on your browser to customize your experience.

Today I am here to describe how you can write and build your own extension for the Google Chrome browser.

## Lets Start !!!!

If you feel lazy in reading articles, you should watch a video tutorial below

<iframe width="1192" height="670" src="https://www.youtube.com/embed/CqdUGhzIddA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Let's start reading finally.

By this time you have got to know that we are going an extension for Google Chrome.

So the question comes what this extension will do for us?

The answer is We are will build an extension that will open a new tab on the browser with a predefined URL, in this example it is my YouTube Channel URL.

---

### What is the Google Chrome extension?

- Chrome Extension helps to add some functionality to Chrome through some of the JavaScript APIs Chrome exposes.
- It is basically a webpage hosted within Chrome.
- It can access some additional APIs.

---

Let's do some code now!

#### Setting up the project

Create a directory called ChromeExtension and Open this in your favorite code editor

#### Create the manifest

Extensions start with their [manifest](https://developer.chrome.com/extensions/extensions/manifest).

Create a file called manifest.json and include the following code.

<script src="https://gist.github.com/AnkitDroidGit/f858af50d5e8679d3ece5db765175096.js"></script>

- **name** is the name of the extension.
- **version** is the current version of the extension.

#### Introduce a User Interface and Logo

Create a file called `test.html` and add the following code.

<script src="https://gist.github.com/AnkitDroidGit/14d4e07421368b047e530b731a531a5f.js"></script>

Add **logo** to project, I have added a file called `logo.png`.

These files need to be designated as a popup in the manifest under `browser_action`

The updated manifest.json will look like this

<script src="https://gist.github.com/AnkitDroidGit/82b1205f19df9c94fe8218c9ec911a72.js"></script>

#### Override Pages

As I mentioned above, we are building an extension that will open a new tab with a predefined URL. We have to add a page for it.

Create a file called `newtab.html` and add the following code to it.

<script src="https://gist.github.com/AnkitDroidGit/3f0339250c08c27984a4d14b9d52894a.js"></script>

These files need to be designated as a popup in the manifest under [chrome_url_overrides](https://developer.chrome.com/extensions/override).

The updated manifest file shown is below

<script src="https://gist.github.com/AnkitDroidGit/f3992d4b244986a09a7c60ecc561ed74.js"></script>

We are done with the coding part.

It was easy, wasn't it?

---

### Adding an extension to Chrome

- Open the Extension Management page by navigating to `chrome://extensions`

or

![](../../assets/images/post/chrome/open_extension.png)

- The Extension Management page can also be opened by clicking on the **Chrome menu**, hovering over **More Tools** then select **Extensions**
- Enable **Developer Mode** by clicking the toggle switch next to **Developer mode**
- Click the **LOAD UNPACKED** button and select the extension directory

![](../../assets/images/post/chrome/deve_mode.png)

![](../../assets/images/post/chrome/extension_loaded.png)

The extension has been successfully installed !!!

You should pin it to make visible on the extension bar of Google Chrome.

![](../../assets/images/post/chrome/test.png)

---

### Testing extension

![](../../assets/images/post/chrome/test2.gif)

---

Also, to be notified about my new articles and stories, follow me on [Medium](https://ankitdeveloper.medium.com/), [Github](https://github.com/AnkitDroidGit), and [Twitter](https://twitter.com/KumarrAnkitt). You can find me on [LinkedIn](https://www.linkedin.com/in/kumarankitkumar/) as well. I am quite active on [Dev Community](https://dev.to/ankitkumar) as well and write small topics over there.

Cheers!!
