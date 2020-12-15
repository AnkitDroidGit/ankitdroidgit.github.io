---
layout: post
title: "How to deep link from notification in react native app"
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
image: assets/images/post/react-native/deeplink/deeplink-notification.png
description: Deep linking is when a link sends users directly into a specific point in the app experience, rather than an external website or app homepage.
featured: true
hidden: true
comments: false
rating: 5
---

Deep linking is when a link sends users directly into a specific point in the app experience, rather than an external website or app homepage.

[How to implement deep linking in React Native app with React Navigation v5](https://ankitkumar.dev/react-native-deeplink-with-react-navigation)

---

### What are we building?

In last article we learned about how to implement deeplink in react native app with react navigation v5.

In this article we will look on how to **deeplink content in app from notitifcation**

We will use below deeplinks and see how app behaves when these deeplink are received in notification and user tap on notification.
- `demo://app/home/:id` - This deep link will open the home screen of the app and will pass id as param/props to the home screen
- `demo://app/profile/:id` - This deep link will open the profile screen of the app and will pass id as param/props to the profile screen
- `demo://app/notifications` - This deep link will open the notifications screen of the app
- `demo://app/settings` - This deep link will open the notifications screen of the app

After the implementation of the deep link with notification, the app will behave as shown here.

<iframe width="860" height="515" src="https://www.youtube.com/embed/W4800s7HiOU?start=262" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Let's do some code now!

### Setting up the project

I am assuming that you already have a project in which deep links need to be integrated.

If you don't have any project, I have created a small app with four screens and explained here.

<iframe width="860" height="515" src="https://www.youtube.com/embed/s8YaclRknYw?start=05" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### Setting up the notification in the project

Project is already created in [previous article](https://ankitkumar.dev/react-native-deeplink-with-react-navigation)

**I have setup four kinds of local notification in the app**

- Schedule local notification without deep link

```
  const scheduleLocalNotification = () => {
    PushNotificationIOS.scheduleLocalNotification({
      alertBody: "Scheduled Local Notification",
      fireDate: new Date(new Date().valueOf() + 2000).toISOString(),
    });
  };

```
- Local notification that deeplink to profile
```
  const sendProfilNotification = () => {
    PushNotificationIOS.presentLocalNotification({
      alertTitle: "Deep link to profile",
      alertBody: "demo://app/profile/234",
      applicationIconBadgeNumber: 1,
    });
  };
```

- Local notification that deeplink to setting
```
  const sendSettingsNotificationWithSound = () => {
    PushNotificationIOS.addNotificationRequest({
      id: "notificationWithSound",
      title: "Notification Deep link",
      subtitle: "Received Deep link",
      body: "demo://app/settings",
      sound: "customSound.wav",
      badge: 1,
    });
  };
```
- Local Notification Request that deeplink to notifications screen
```
  const addNotificationRequest = () => {
    PushNotificationIOS.addNotificationRequest({
      id: "test",
      title: "deep link",
      subtitle: "Open notifications",
      body: "demo://app/notifications",
      category: "test",
      threadId: "thread-id",
      fireDate: new Date(new Date().valueOf() + 2000),
      repeats: true,
    });
  };
```

**Lets now write functions to handle on registering to and unregistering from notification**

We will just console log devide token on successful registeration
```
  const onRegistered = (deviceToken) => {
    console.log("Registered For Remote Push", `Device Token: ${deviceToken}`);
  };
```
and console log error message on registeration error, if any
```

  const onRegistrationError = (error) => {
    console.log(`Error (${error.code}): ${error.message}`);
  };
```

### Adding/Removing event listeners on useEffect Hook

Add below code to your app for adding and removing event listeners
```
  useEffect(() => {
    PushNotificationIOS.addEventListener("register", onRegistered);
    PushNotificationIOS.addEventListener(
      "registrationError",
      onRegistrationError
    );
    
    PushNotificationIOS.requestPermissions().then(
      (data) => {
        console.log("PushNotificationIOS.requestPermissions", data);
      },
      (data) => {
        console.log("PushNotificationIOS.requestPermissions failed", data);
      }
    );

    return () => {
      PushNotificationIOS.removeEventListener("register");
      PushNotificationIOS.removeEventListener("registrationError");
      PushNotificationIOS.removeEventListener("notification");
      PushNotificationIOS.removeEventListener("localNotification");
    };
  }, []);
```
### Handling onClick of notifcation

Lets now create a function to handle onclick event of notification

```
  const onLocalNotification = (notification) => {
    const isClicked = notification.getData().userInteraction === 1;
    // Handle deeplink here from notification - done below
  };
```
We need to add `onLocalNotification()` to event listeners, so updated event lister will look like below.
```
useEffect(() => {
    PushNotificationIOS.addEventListener("register", onRegistered);
    PushNotificationIOS.addEventListener(
      "registrationError",
      onRegistrationError
    );
    PushNotificationIOS.addEventListener(
      "localNotification",
      onLocalNotification
    ); // Handling click on notification

    PushNotificationIOS.requestPermissions().then(
      (data) => {
        console.log("PushNotificationIOS.requestPermissions", data);
      },
      (data) => {
        console.log("PushNotificationIOS.requestPermissions failed", data);
      }
    );

    return () => {
      PushNotificationIOS.removeEventListener("register");
      PushNotificationIOS.removeEventListener("registrationError");
      PushNotificationIOS.removeEventListener("notification");
      PushNotificationIOS.removeEventListener("localNotification");
    };
  }, []);
```

### Lets do magic now

Import `Linking` from `react-native` on top of the file.

Modify `onLocalNotification()` method as below
```
const onLocalNotification = (notification) => {
    const isClicked = notification.getData().userInteraction === 1;
    Linking.openURL(notification.getMessage());
  };
```

---

**We are done with the coding part**

It was easy, wasn't it?

---

### Testing deeplink from notification

Video of testing 


<iframe width="860" height="515" src="https://www.youtube.com/embed/s8YaclRknYw?start=05" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Full source code can be found on [Github Repo](https://github.com/AnkitDroidGit/ReactNative-Deeplink/tree/notification-deeplink)

This content is also available as video on [YouTube](https://www.youtube.com/watch?v=W4800s7HiOU)

---

## Further Reading

- [How to implement deep linking in React Native app with React Navigation v5](https://ankitkumar.dev/react-native-deeplink-with-react-navigation/)

---


Also, to be notified about my new articles and stories:

Subscribe to my [YouTube Channel](https://www.youtube.com/TechTalksByAnkitKumar)

Follow me on [Medium](https://ankitdeveloper.medium.com/), [Github](https://github.com/AnkitDroidGit), and [Twitter](https://twitter.com/KumarrAnkitt).

You can find me on [LinkedIn](https://www.linkedin.com/in/kumarankitkumar/) as well.

I am quite active on [Dev Community](https://dev.to/ankitkumar) as well and write small topics over there.

Cheers!!! Happy coding!!
