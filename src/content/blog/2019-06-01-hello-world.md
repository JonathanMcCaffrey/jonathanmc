---
title: 'Hello World'
cover: 'covers/devices.webp'
coverBlur: 'covers/devices_blur.webp'
created: 2019-06-01
lastUpdated: 2019-06-02
isDraft: false
excerpt: 'This website is made with React, Gatsby, and TypeScript...'
---

This is my developer portfolio website.

The content below is from the readme on my github. Read it to learn how to setup and edit a copy of this website.

# [ReadMe.md](https://github.com/JonathanMcCaffrey/website-jonathanmc/blob/master/README.md)

## About

Standard programmer blog website made with [React](https://reactjs.org/), [Gatsby](https://www.gatsbyjs.org/), and [TypeScript](https://www.typescriptlang.org/).

[Demo Link](https://jonathanmccaffrey.github.io/website-jonathanmc/)

_Website built first for Google Chrome._

[GitHub Link](https://github.com/JonathanMcCaffrey/website-jonathanmc)

Design uses CSS Grid to be responsive on all devices.

---

### Setup

-   Knowledge of [npm](https://www.npmjs.com/) required.

```bash
# install needed files
npm install gh-pages -g
npm install gatsby -g
```

```bash
# download and initialize the project
git clone https://github.com/JonathanMcCaffrey/website-jonathanmc.git
cd website-jonathanmc
yarn install
```

```bash
# run the project on your local machine
yarn start
```

---

### Editing

-   Create your own [fork](https://help.github.com/en/articles/fork-a-repo).

-   Make changes to your forked copy.

-   Deploy those changes to [gh-pages](https://pages.github.com/).

```bash
# deploy to gh-pages
gatsby build --prefix-paths && gh-pages -d public
```

View your changes here: https://[YOUR-GITHUB-USERNAME].github.io/website-jonathanmc/
