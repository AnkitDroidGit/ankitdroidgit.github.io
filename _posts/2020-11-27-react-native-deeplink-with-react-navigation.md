---
layout: post
title: "How to implement deep linking in React Native app with React Navigation v5"
author: ankit
categories:
  [
    React Native,
    React Navigation,
    React,
    JavaScript,
    TypeScript,
    Deeplink,
    Custum URI Schemes,
    App Links,
    Universal Links,
  ]
tags:
  [
    React Native,
    React Navigation,
    React,
    JavaScript,
    TypeScript,
    Deeplink,
    Custum URI Schemes,
    App Links,
    Universal Links,
  ]
image: assets/images/post/react-native/deeplink/deeplink.png
description: Deep linking is when a link sends users directly into a specific point in the app experience, rather than an external website or app homepage.
featured: true
hidden: true
comments: false
rating: 5
---

Deep linking is when a link sends users directly into a specific point in the app experience, rather than an external website or app homepage

### Whats is Deeplink

- A deep link is a link that takes you to content.
- Deep linking is when a link sends users directly into a specific point in the app experience, rather than an external website or app homepage.
- Most web links are deep links.

---

### Types of Deep Linking

- Custom URI Schemes
- iOS Universal Links
- Android App Links

---

### URI Schemes

- Custom URI schemes were the original form of deep linking for mobile apps.
- They are like creating a “private internet” for your app, with links that look like `demo://path/to/content`
- The advantage of custom URI schemes is they are easy to set up.
- The disadvantage is a user’s device only knows about this `private internet` if the corresponding app is already installed, and there is no graceful fallback option by default.

### Universal Links

- Apple introduced Universal Links in iOS 9 as a solution to the lack of graceful fallback functionality in custom URI scheme deep links.
- Universal Links are standard web links (`https://ankitkumar.dev`) that point to both a web page and a piece of content inside an app.
- When a Universal Link is opened, iOS checks to see if any installed app on the device is registered for that domain.
  - If so, the app is launched immediately without ever loading the web page.
  - If not, the web URL (which can be a simple redirect to the App Store) is loaded in Safari.

### Android App Links

- Google built App Links as the Android equivalent to iOS Universal Links.
- They operate in a very similar way:
  - a standard web link that points to both a web page and a piece of content inside an app.
- This results in a smoother user experience.
- Since custom URI schemes are still fully supported by every version of Android, App Links have seen very low adoption.

---

### What are we building?

I am declaring deep link URLs for our application, which will open our app from anywhere in the os on Android and iOS devices.

- `demo://app/home/:id` - This deep link will open the home screen of the app and will pass id as param/props to the home screen
- `demo://app/profile/:id` - This deep link will open the profile screen of the app and will pass id as param/props to the profile screen
- `demo://app/notifications` - This deep link will open the notifications screen of the app
- `demo://app/settings` - This deep link will open the notifications screen of the app

After the implementation of the deep-link, the app will behave as shown here.

<iframe width="860" height="515"  src="https://www.youtube.com/embed/s8YaclRknYw?start=55" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Let's do some code now!

### Setting up the project

I am assuming that you already have a project in which deep links need to be integrated.

If you don't have any project, I have created a small app with four screens and explained here.

<iframe width="860" height="515" src="https://www.youtube.com/embed/s8YaclRknYw?start=05" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### Setting up custom uri scheme for iOS in Xcode

1. Open your `react-native`(`deeplinkreactnavigation`) project and go to the ios folder.
2. Open the file with extension `.xcworkspace` by double-clicking on it. In this project `deeplinkreactnavigation.xcworkspace` is the file.
3. After opening in Xcode, follow the steps from the screenshot below and add `demo` to `URL Schemes` and target name(`deeplinkreactnavigation`) to the `Identifier`.

<img src="../../assets/images/post/react-native/deeplink/ios_setup.png" width="860" height="515"/>

### Setting up custom URI scheme for Android in Android Studio

1. Open your `react-native`(`deeplinkreactnavigation`) project and go to the `android` folder.
2. Open file `build.gradle` with `Android Studio`.
3. After opening in `Android Studio`, open `Androidmanifest.xml` and add intent-filter as shown below.

<script src="https://gist.github.com/AnkitDroidGit/1db942dfd800427a889dda8bf667ccfa.js"></script>

---

### Handling deep link in react native

1. Create a new file `linking.js`
2. Add `prefixes` as an array of `demo://app` and all deep link URLs as described above to the file as shown below

<script src="https://gist.github.com/AnkitDroidGit/0e9f548c75bacf8859c45fc343914712.js"></script>

### Using `linking.js` in `App.js`

1. import `linking` in `App.js`
2. Add it to `NavigationContainer` as shown below

<script src="https://gist.github.com/AnkitDroidGit/3d303f3af0757c7b7377c158dd9cd06c.js"></script>

---

**We are done with the coding part**

It was easy, wasn't it?

---

### Testing deeplink

**Its always easy and better to test deep link on physical devices, so**

- Install the app on devices(`Android` or `iOS` or `both`)
- Have the deep link URL in any other app
- Tap on deep link URL as a normal URL
- Its should take you our app's respective screen

**If you want to test deep link on virtual devices, then**

- Install the app on virtual devices(`Android` or `iOS` or `both`)
- Type command `npx uri-scheme open demo://app/notifications --android` for `android` to deeplink to `notifications` screen
- Type command `npx uri-scheme open demo://app/notifications --ios` for `ios` to deeplink to `notifications` screen
- And see the magic

Testing Video

<iframe width="860" height="515"  src="https://www.youtube.com/embed/s8YaclRknYw?start=573" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

---

Also, to be notified about my new articles and stories:

Subscribe to my [YouTube Channel](https://www.youtube.com/c/TechTalksByAnkitKumar)

Follow me on [Medium](https://ankitdeveloper.medium.com/), [Github](https://github.com/AnkitDroidGit), and [Twitter](https://twitter.com/KumarrAnkitt).

You can find me on [LinkedIn](https://www.linkedin.com/in/kumarankitkumar/) as well.

I am quite active on [Dev Community](https://dev.to/ankitkumar) as well and write small topics over there.

Cheers!!
