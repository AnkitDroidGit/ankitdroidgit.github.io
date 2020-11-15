---
layout: post
title: "Working with Github (or any software development version control using Git) for the beginners"
author: ankit
categories: [git, github, tutorial]
tags: [git, github, tutorial]
image: assets/images/post/git_basics.png
featured: true
hidden: true
comments: false
---

Working with Github (or any software development version control using Git) for the beginners

Many new developers face this problem when they start working on a project which is shared among many team member and many of them need to work together on the project.
It becomes hard for newbies to create PR and adding their work to the upstream project repo.
I am trying to make this easier for all the newbies who are going to work on the project collaboration in the team.
By following these steps, it becomes easier to handle changes, stashing, committing, creating, and merging PR after approval.

Let's go through the steps with commands and sample project on Github.
For getting hands-on experience of the below steps, feel free to fork [this Github repo](https://github.com/AnkitDroidGit/git-basics-for-newbies) and follow along

- Clone project from upstream to the local repo

  ```bash
       git clone git@github.com:AnkitDroidGit/git-basics-for-newbies.git
  ```

- Open project with your favorite IDE/Code Editor
- Pull the latest changes from upstream if you haven't pulled changes from quite some time (think of changes merged by other members of your team)

  ```bash
       git pull
  ```

- Make your changes on the master (default) branch. I am adding a new file called `contributors.md` and appending it with my name `Ankit Kumar`.
- Add file(s) to git for tracking by git add

  ```bash
       git add name
  ```

  You can add all files by running below command

  ```bash
       git add .
  ```

- Check differences by running the following command.

  ```bash
       git diff
  ```

- Now suppose someone from your teams has already added and merged his changes to the master branch. If you are going to commit and push your changes without synching repo with upstream, you might get conflicts that become hard to resolve later in case of many conflicts.
  Its a great idea to sync your local repo with upstream.
  We will do it here by the below commands.

  - First, stash your changes. Stashing saves your working directory and index state WIP on master: with the latest commit

    ```bash
        git stash
    ```

  - Run git pull for latest changes from upstream branch, if any.

    ```bash
        git pull
    ```

  - Apply your stashed change to an active changelist or default changelist.

    ```bash
        git stash apply
    ```

- Check your difference again by running git diff

  ```bash
      git diff
  ```

- Resolve conflicts if any. Resolving conflicts now is easier compared to the time of many many conflicts at the time of creating PR without synching.
- Now, add commit message

  ```bash
      git commit - m "added my name in contributors.md"
  ```

- Checkout to a new branch

  ```bash
      git checkout -b addedName
  ```

- Push your changes to the newly checked out branch. It will create a new branch on upstream with the same name your have checked out with.

  ```bash
      git push --set-upstream origin addedName
  ```

- Visit Github (or any software development version control using Git) repo on the browser.
  Click on `compare and pull request`,
  Write your PR name with appropriate comments.
  Add `reviewers` to request team members to review your PR.

- Finally click on `create pull request`
  You have done your work already.
  Wait for the reviewer to review

- Once PR is approved by the reviewer(s).
  Visit your branch and merge your branch.

- On your local repo, pull master again before making any other changes, follow the steps again.

Also, to be notified about my new articles and stories, follow me on [Medium](https://medium.com/@ankitdeveloper), [Github](https://github.com/AnkitDroidGit). You can find me on [LinkedIn](https://www.linkedin.com/in/kumarankitkumar/) as well. Cheers!
