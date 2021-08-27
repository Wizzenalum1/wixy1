# Table of content
#### How to use as social media api
#### How to contribute to update application
#### Process of building this application

## Process of building this application
all the following steps have thier own individual commits so you can explore each step of the process.
1. setup node, express, nodemon
2. setup mvc file structure


### 1. setup node, express, nodemon
-[node] is back-end javascript runtime environment. basically this is the language in which this application is written.use[nvm] ([nvm-more]) to install any version of the node.

-[express] is node.js web application framework. it will help to create mvc file structure fairly simple way.

-[nodemon] help to automatic reastart the node application as the file changes.
### 2. setup mvc file structure
-Management of files is very crucial for any application develpment. so we decided the [MVC] (module-view-controller) software design pattern. which helps us to scale the file structure as it grows.
we will following this structure will going to grow to much this is just start.
```sh
        ├── assets
        │   ├── image
        │   ├── script
        │   │   └── home-script.js
        │   └── style
        │       ├── home-style.css
        │       └── layout.css
        ├── config
        │   └── mongoose.js
        ├── controlers
        │   ├── home_controler.js
        │   ├── post_controler.js
        │   └── users_controler.js
        ├── index.js
        ├── models
        ├── package.json
        ├── package-lock.json
        ├── routes
        │   ├── index.js
        │   ├── post.js
        │   └── users.js
        └── views
            ├── home.ejs
            ├── layout.ejs
            ├── partials
            │   ├── _footer.ejs
            │   └── _header.ejs
            └── user-profile.ejs
```


[nvm-more](https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b)
[nvm](https://github.com/nvm-sh/nvm)
[nodemon](https://www.npmjs.com/package/nodemon)
[express](https://expressjs.com/en/starter/installing.html)
[MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)


