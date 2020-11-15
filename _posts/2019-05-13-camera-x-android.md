---
layout: post
title: "Getting Started with CameraX API"
author: ankit
categories: [Android, Jetpack Compose, CameraX, Technology]
tags: [Android, Jetpack Compose, CameraX, Technology]
image: assets/images/11.png
description: "CameraX, launched at Google IO 19 , is a Jetpack support library, built to help us make camera app development easier. It provides a consistent and easy-to-use API surface that works across most Android devices, with backward-compatibility to Android 5.0 (API level 21)."
featured: false
hidden: false
comments: false
rating: 4.5
---

CameraX, launched at Google IO 19 , is a Jetpack support library, built to help us make camera app development easier. It provides a consistent and easy-to-use API surface that works across most Android devices, with backward-compatibility to Android 5.0 (API level 21).

### Why CameraX is beneficial?

As per the [documentation](https://developer.android.com/training/camerax#primary), CameraX has following primary benefits :

1. Easy to use
2. Consistence across the devices
3. It provide new camera experience to the user

### Requirements

Requirements to use CameraX are :

- Android Studio 3.3 or later
- A device running on Android L or later

### Let’s get hands on app code

**Create Android Project with minimum APL level 21.**

```
    defaultConfig {
        applicationId "com.ankkumar.cameraxsampleapp"
        minSdkVersion 21
        targetSdkVersion 28
        ......
    }
```

Add dependencies in app

```
    implementation "androidx.camera:camera-core:1.0.0-alpha01"
    implementation "androidx.camera:camera-camera2:1.0.0-alpha01"
```

**Request Camera Permissions**

In the manifest file

```
    <uses-permission android:name="android.permission.CAMERA" />
```

Handoling runtime permission in kotlin

```
    import android.Manifest
    import android.util.Size
    import android.graphics.Matrix
    import java.util.concurrent.TimeUnit

    private const val REQUEST_CODE_PERMISSIONS = 881

    private val REQUIRED_PERMISSIONS = arrayOf(Manifest.permission.CAMERA)
```

actual code of permission handling look like below

<script src="https://gist.github.com/AnkitDroidGit/132ef18e5760d202e43513b55e2488c7.js"></script>

---

#### Time to create UI

- Create and Implement view finder

<script src="https://gist.github.com/AnkitDroidGit/e8207c26817774fdb20af611fdf9ed29.js"></script>

- Implementation of view finder

  - Declare lateinit

    ```
        private lateinit var viewFinder: TextureView
    ```

  - define it inside onCreate(..) method
    ```
       viewFinder = findViewById(R.id.finder_view)
    ```
  - and implement it as below

    <script src="https://gist.github.com/AnkitDroidGit/b691aef48268d2f7cafd787bcf8c60de.js"></script>

### Implementing Image Capture

- Write below code to capture image
    <script src="https://gist.github.com/AnkitDroidGit/11555201e33e8b74eda1e757685aeb71.js"></script>

- Place below code between `CameraX.bindToLifecycle(this, preview)` and `CameraX.bindToLifecycle(this, preview, imageCapture)`
    <script src="https://gist.github.com/AnkitDroidGit/7976120ebcfeefaef55bb73e05bc420b.js"></script>

### Analysing captured image

- create a class called ImageAnalyzer as below

  ```
    class ImageAnalyzer : ImageAnalysis.Analyzer {
        override fun analyze(image: ImageProxy?, rotationDegrees: Int) {
            TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        }
    }
  ```

- And implement above class for analyzing image
    <script src="https://gist.github.com/AnkitDroidGit/77c87e7d35f22621063f5f9213c5353d.js"></script>
- Now add image analysis code inside `startCamera()` method as below
  ```
     // Setup image analysis pipeline that computes average pixel luminance
    val analyzerConfig = ImageAnalysisConfig.Builder().apply {
        // Use a worker thread for image analysis to prevent glitches
        val analyzerThread = HandlerThread(
              "LuminosityAnalysis"
        ).apply { start() }
        setCallbackHandler(Handler(analyzerThread.looper))
        // In our analysis, we care more about the latest image than
        // analyzing *every* image
        setImageReaderMode(
            ImageAnalysis.ImageReaderMode.ACQUIRE_LATEST_IMAGE
        )
    }.build()
  ```
- After adding this snippet modify CameraX.bindToLifecycle() method with this argument
- Now our complete startCamera() will look like this
    <script src="https://gist.github.com/AnkitDroidGit/de4d7bb7c453a9e1fecec162cfb071f6.js"></script>

### Testing app

![](../../assets/images/post/test_camera_x.png)

And it works perfect !!!
Congratulations !!!
