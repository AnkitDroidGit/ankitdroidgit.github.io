
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About Me",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It is created with Github Pages and hosted with Github.  ---- This page is in construction currently ---- : Questions or suggestion?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve AnkitDroidGit . Buy me a coffee"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "   Featured:                                                                                            Building your own Google Chrome Extension                          1 2 3 4 5                       :                Probably you are reading this article on the Google Chrome browser. Right?       :                                                                                        Ankit                  05 Sep 2020                                                                                                                                                        Apollo Server Express GraphQL API using Node. js with TypeScript                          1 2 3 4 5                       :                In this article, we are going to see how to build a Nodejs GraphQL API with TypeScript using Apollo Server Express.        :                                                                                        Ankit                  14 Jul 2020                                                                       All Stories:                                                                                              Github Secret : Creating A GitHub Profile                         1 2 3 4 5                      :       Creating A GitHub Profile:                                                                               Ankit                29 Jun 2020                                                                                                                              Working with Github (or any software development version control using Git) for the beginners              :       Working with Github (or any software development version control using Git) for the beginners:                                                                               Ankit                23 Jun 2020                                                                                                                              Getting Started with CameraX API                         1 2 3 4 5                      :       CameraX, launched at Google IO 19 , is a Jetpack support library, built to help us make camera app development easier. It provides a consistent and easy-to-use API surface that. . . :                                                                               Ankit                13 May 2019                                           "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/building-own-cheome-extension/",
    "title": "Building your own Google Chrome Extension",
    "body": "2020/09/05 - Probably you are reading this article on the Google Chrome browser. Right? If yes, you would have used extensions on your browser to customize your experience. Today I am here to describe how you can write and build your own extension for the Google Chrome browser. Lets Start !!!!: If you feel lazy in reading articles, you should watch a video tutorial below Let’s start reading finally. By this time you have got to know that we are going an extension for Google Chrome. So the question comes what this extension will do for us? The answer is We are will build an extension that will open a new tab on the browser with a predefined URL, in this example it is my YouTube Channel URL. What is the Google Chrome extension?:  Chrome Extension helps to add some functionality to Chrome through some of the JavaScript APIs Chrome exposes.  It is basically a webpage hosted within Chrome.  It can access some additional APIs. Let’s do some code now! Setting up the project: Create a directory called ChromeExtension and Open this in your favorite code editor Create the manifest: Extensions start with their manifest. Create a file called manifest. json and include the following code.  name is the name of the extension.  version is the current version of the extension. Introduce a User Interface and Logo: Create a file called test. html and add the following code. Add logo to project, I have added a file called logo. png. These files need to be designated as a popup in the manifest under browser_action The updated manifest. json will look like this Override Pages: As I mentioned above, we are building an extension that will open a new tab with a predefined URL. We have to add a page for it. Create a file called newtab. html and add the following code to it. These files need to be designated as a popup in the manifest under chrome_url_overrides. The updated manifest file shown is below We are done with the coding part. It was easy, wasn’t it? Adding an extension to Chrome:  Open the Extension Management page by navigating to chrome://extensionsor  The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then select Extensions Enable Developer Mode by clicking the toggle switch next to Developer mode Click the LOAD UNPACKED button and select the extension directory The extension has been successfully installed !!! You should pin it to make visible on the extension bar of Google Chrome.  Testing extension: Also, to be notified about my new articles and stories, follow me on Medium, Github, and Twitter. You can find me on LinkedIn as well. I am quite active on Dev Community as well and write small topics over there. Cheers!! "
    }, {
    "id": 6,
    "url": "http://localhost:4000/fundamentals-of-graphql/",
    "title": "Apollo Server Express GraphQL API using Node.js with TypeScript",
    "body": "2020/07/14 - In this article, we are going to see how to build a Nodejs GraphQL API with TypeScript using Apollo Server Express. I conducted a workshop for beginners who want to write GraphQL APIs using Typescript and Nodejs. If it feels boring reading lots of words one by one and you can understand Hindi a bit. You can watch video tutorials for this. Video tutorials are available on my YouTube Channel as Playlsit. Let’s understand a few terminologies before actually diving into the code. Node. js:  Node. js is a platform built on Chrome’s JavaScript runtime for easily building fast and scalable network applications.  Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.  More document about node. js is here. Apollo Server:  Apollo Server is an open-source, spec-compliant GraphQL server that’s compatible with any GraphQL client, including Apollo Client.  It’s the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.  Read more about Apollo Server here. You can use Apollo Server as: A stand-alone GraphQL server, including in a serverless environment An add-on to your application’s existing Node. js middleware (such as Express or Fastify) A gateway for a federated data graph. Apollo Server provides: Straightforward setup, so your client developers can start fetching data quickly Incremental adoption, allowing you to add features as they’re needed Universal compatibility with any data source, any build tool, and any GraphQL client Production readiness, enabling you to ship features faster. Express:  Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.  Read more about express hereTypeScript:  TypeScript is JavaScript that scales.  Because TypeScript is a superset of JavaScript, it doesn’t have a default template — there would be too many. Instead, other projects have their own TypeScript bootstrap templates with their own context. Why use TypeScript over JavaScript? If an experienced developer is working on relatively small coding projects, then JavaScript is ideal. However, if you have the knowledge and expertise development team, then Typescript is the most preferred option. Typescript has the following advantages over Javascript.  The powerful type system, including generics &amp; JS features TypeScript uses concepts like types and interfaces to describe data being used.  The Ecosystem is quite powerful and intuitive. Thus, it allows you to statically type various types of idiomatic JavaScript features like union types, intersection, discriminated union.  With Typescript, many npm packages either come with static type definitions or have an external one that is easy to install.  Typescript has a feature of prototyping.  Early spotted bugs Predictability Readability Power of OOPLet’s write code for what we are here…. : Creating a directory and working on 12mkdir apollo-server-demo-projectcd apollo-server-demo-projectSetting up the npm project 1npm init — yesThis command will create a package. json file in the project. Install and initializing TypeScript for our project Add TypeScript to our project’s npm devDependencies 1npm install — save-dev typescriptGenerate a tsconfig. json file using npx. 1npx tsc --init --rootDir src --outDir dist --lib dom,es6 --module commonjs –removeCommentsRunning above command will create tsconfig. json file in the project and it will look like this.  We will also need nodemon to compile our code on change, and ts-node to exec TypeScript files. Let’s install these 2 dependencies as well now 1npm i nodemon ts-node --save-devWriting actual code now: Create a /src directory with a server. ts file and print hello world from server. ts file 1console. log(“Hello World”);Run below command to see the result on your terminal of project. 1nodemon 'src/server. ts' --exec 'ts-node' src/server. tsYou will see Hello World printed on your terminal as below.  Lets now create an actual GraphQL API: Setting up Apollo-Server-Express Installing dependencies for apollo-server-express, cors, express and graphql 1npm install apollo-server-express cors express graphqlInstalling dependencies for @types/express, @types/node, graphql-tools and graphql-import-node 1npm install @types/express @types/node graphql-tools graphql-import-node --save-devCreating a simple schema and resolver In the /src folder, create a /schema folder and create a file schema. graphql Then let’s quickly create a resolvers. ts file in the /src folder Create a schema. ts file in the /src folder that will be in charge of making an Executable GraphQL Schema: Finally creating apollo-server Run your server again open http://localhost:8000/graphql on browsers of any other graphql client software.  Let’s test your helloWolrd query from the client: Add scripts in your package. json file as below for running commands in an easier way from next time. 123456 scripts : { start :  node 'dist/server. js' , build :  tsc -p . &amp;&amp; ncp src/schema dist/schema , start:dev :  npm run build:dev , build:dev :  nodemon 'src/server. ts' --exec 'ts-node' src/server. ts -e ts,graphql }, Running npm run build:dev in your terminal will compile your code.  You can run the compiled code with npm start:dev Running npm run build in your terminal will compile your code and put it in the /dist folder.  You can run the compiled code with npm startLets now create a Mutation GraphQL API: Add mutation object in src/schem/schema. graphql file Add some logic for resolving mutation in src/resolvers. ts file as shown below Run the command and test mutation from client Happy learning and happy coding !!! The code for this workshop is available as open source on GitHub repo. I have tried to share some of the lessons that I have learned from various sources. I will continue to keep learning more and sharing more. I hope it helps someone and makes their life a bit easier. Also, to be notified about my new articles and stories, follow me on Medium, Github, and Twitter. You can find me on LinkedIn as well. I am quite active on Dev Community as well and write small topics over there. Cheers!!!! "
    }, {
    "id": 7,
    "url": "http://localhost:4000/github-secret-creating-github-profile/",
    "title": "Github Secret : Creating A GitHub Profile",
    "body": "2020/06/29 - Creating A GitHub Profile: Github says AnkitDroidGit/AnkitDroidGit is now a special repository: its README. md will appear on your profile! GitHub recently released a feature that allows users to create a profile README to display prominently on their GitHub profile. This write-up explains how to access this new feature and create your own special repository. Let’s Start !!: The profile README is created by creating a new repository with the same name as your username. Let’s understand with my example:My GitHub username is AnkitDroidGit so I created a new repository with the name AnkitDroidGit. Note: new repository name must match (including letter case) your GitHub username. Let’s follow the steps:  Create a new repository with the same name (including casing) as your GitHub username: https://github. com/new Let it be public.  Initialize this repository with a README.  Modify README. md file inside the repo with your content (text, GIFs, images, emojis, etc. ) Commit your README! Push changes to GitHub (if you made changes locally). And finally, you will get a profile read me like mine.  Also, to be notified about my new articles and stories, follow me on Medium, Github. You can find me on LinkedIn as well. Cheers! "
    }, {
    "id": 8,
    "url": "http://localhost:4000/git-basics-for-beginners/",
    "title": "Working with Github (or any software development version control using Git) for the beginners",
    "body": "2020/06/23 - Working with Github (or any software development version control using Git) for the beginners Many new developers face this problem when they start working on a project which is shared among many team member and many of them need to work together on the project. It becomes hard for newbies to create PR and adding their work to the upstream project repo. I am trying to make this easier for all the newbies who are going to work on the project collaboration in the team. By following these steps, it becomes easier to handle changes, stashing, committing, creating, and merging PR after approval. Let’s go through the steps with commands and sample project on Github. For getting hands-on experience of the below steps, feel free to fork this Github repo and follow along    Clone project from upstream to the local repo   1   git clone git@github. com:AnkitDroidGit/git-basics-for-newbies. git    Open project with your favorite IDE/Code Editor   Pull the latest changes from upstream if you haven’t pulled changes from quite some time (think of changes merged by other members of your team)   1   git pull    Make your changes on the master (default) branch. I am adding a new file called contributors. md and appending it with my name Ankit Kumar.    Add file(s) to git for tracking by git add   1   git add name    You can add all files by running below command   1   git add .       Check differences by running the following command.   1   git diff      Now suppose someone from your teams has already added and merged his changes to the master branch. If you are going to commit and push your changes without synching repo with upstream, you might get conflicts that become hard to resolve later in case of many conflicts. Its a great idea to sync your local repo with upstream. We will do it here by the below commands.          First, stash your changes. Stashing saves your working directory and index state WIP on master: with the latest commit     1  git stash              Run git pull for latest changes from upstream branch, if any.     1  git pull              Apply your stashed change to an active changelist or default changelist.     1  git stash apply             Check your difference again by running git diff   1  git diff    Resolve conflicts if any. Resolving conflicts now is easier compared to the time of many many conflicts at the time of creating PR without synching.    Now, add commit message   1  git commit - m  added my name in contributors. md       Checkout to a new branch   1  git checkout -b addedName      Push your changes to the newly checked out branch. It will create a new branch on upstream with the same name your have checked out with.   1  git push --set-upstream origin addedName      Visit Github (or any software development version control using Git) repo on the browser. Click on compare and pull request,Write your PR name with appropriate comments. Add reviewers to request team members to review your PR.     Finally click on create pull requestYou have done your work already. Wait for the reviewer to review     Once PR is approved by the reviewer(s). Visit your branch and merge your branch.   On your local repo, pull master again before making any other changes, follow the steps again. Also, to be notified about my new articles and stories, follow me on Medium, Github. You can find me on LinkedIn as well. Cheers! "
    }, {
    "id": 9,
    "url": "http://localhost:4000/camera-x-android/",
    "title": "Getting Started with CameraX API",
    "body": "2019/05/13 - CameraX, launched at Google IO 19 , is a Jetpack support library, built to help us make camera app development easier. It provides a consistent and easy-to-use API surface that works across most Android devices, with backward-compatibility to Android 5. 0 (API level 21). Why CameraX is beneficial?: As per the documentation, CameraX has following primary benefits :  Easy to use Consistence across the devices It provide new camera experience to the userRequirements: Requirements to use CameraX are :  Android Studio 3. 3 or later A device running on Android L or laterLet’s get hands on app code: Create Android Project with minimum APL level 21. 123456  defaultConfig {    applicationId  com. ankkumar. cameraxsampleapp     minSdkVersion 21    targetSdkVersion 28    . . . . . .   }Add dependencies in app 12  implementation  androidx. camera:camera-core:1. 0. 0-alpha01   implementation  androidx. camera:camera-camera2:1. 0. 0-alpha01 Request Camera Permissions In the manifest file 1  &lt;uses-permission android:name= android. permission. CAMERA  /&gt;Handoling runtime permission in kotlin 12345678  import android. Manifest  import android. util. Size  import android. graphics. Matrix  import java. util. concurrent. TimeUnit  private const val REQUEST_CODE_PERMISSIONS = 881  private val REQUIRED_PERMISSIONS = arrayOf(Manifest. permission. CAMERA)actual code of permission handling look like below Time to create UI:  Create and Implement view finder   Implementation of view finder          Declare lateinit     1  private lateinit var viewFinder: TextureView          define it inside onCreate(. . ) method    1  viewFinder = findViewById(R. id. finder_view)              and implement it as below           Implementing Image Capture:    Write below code to capture image      Place below code between CameraX. bindToLifecycle(this, preview) and CameraX. bindToLifecycle(this, preview, imageCapture)   Analysing captured image:    create a class called ImageAnalyzer as below   12345 class ImageAnalyzer : ImageAnalysis. Analyzer {   override fun analyze(image: ImageProxy?, rotationDegrees: Int) {     TODO( not implemented ) //To change body of created functions use File | Settings | File Templates.    } }    And implement above class for analyzing image  Now add image analysis code inside startCamera() method as below  12345678910111213  // Setup image analysis pipeline that computes average pixel luminance val analyzerConfig = ImageAnalysisConfig. Builder(). apply {   // Use a worker thread for image analysis to prevent glitches   val analyzerThread = HandlerThread(       LuminosityAnalysis    ). apply { start() }   setCallbackHandler(Handler(analyzerThread. looper))   // In our analysis, we care more about the latest image than   // analyzing *every* image   setImageReaderMode(     ImageAnalysis. ImageReaderMode. ACQUIRE_LATEST_IMAGE   ) }. build()    After adding this snippet modify CameraX. bindToLifecycle() method with this argument Now our complete startCamera() will look like this Testing app: And it works perfect !!!Congratulations !!! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});