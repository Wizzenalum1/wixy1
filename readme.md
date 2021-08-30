# Table of content
#### How to use as social media api
#### How to contribute to update application
#### Process of building this application

## Process of building this application
all the following steps have thier own individual commits so you can explore each step of the process.
1. setup node, express, nodemon
2. setup mvc file structure
3. setup basic routing, static file path, seting the ejs engine and responding with that.
4. setup the routes,controller to home, ejs-layout


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
### 3.setup basic routing, static file path, seting the ejs engine and responding with that.
routes are the address to accessing the application,
static file path is set so that static files can be used directlly without mentioning the absolute or relative address to root.
ejs engine will render the ejs formated files to html files.[setting-EJS](https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/)

you can visit localhost:8000/check.html when you are at this head in repo.

### 4. setup the routes,controller to home, ejs-layout, partials
controllers are set of actions that decide the responce.
routes are address to reach the specific action. to set good routing we going to use routes.[about-routing](https://expressjs.com/en/guide/routing.html), [Router](https://expressjs.com/en/4x/api.html#router)
[ejs-layout] helps us to efficiantly use ejs files and reuse the base code.
partials are the reusable code that can be used multiple plces in ejs files.





[nvm-more](https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b)
[nvm](https://github.com/nvm-sh/nvm)
[nodemon](https://www.npmjs.com/package/nodemon)
[express](https://expressjs.com/en/starter/installing.html)
[MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
[ejs-layout](https://www.npmjs.com/package/express-ejs-layouts)

