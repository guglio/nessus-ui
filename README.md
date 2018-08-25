# Nessus UI

Web application that requests from a remote sever a list of hosts, and display them into a table.
The data showed in the table is sortable (by all the columns) and searchable.
There is also an additional page (Request) that change the number of hosts the user can request from the server.

You can see a running version of this web application here:   
    [https://guglio.github.io/nessus-ui/](https://guglio.github.io/nessus-ui/)


## Structure of the application

```ANSI
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components
    │   ├── AlertDialog.js
    │   ├── App.js
    │   ├── Header.js
    │   ├── HostsInput.js
    │   ├── HostsTable.js
    │   ├── Main.js
    │   ├── Request.js
    │   └── menu.js
    ├── config.json
    ├── constants
    │   └── index.js
    ├── containers
    │   ├── TableContent.js
    │   └── TableHeader.js
    ├── index.css
    ├── index.js
    ├── registerServiceWorker.js
    └── services
        └── index.js

```
Application components tree

```ANSI
index.js
  └── App.js
        ├── Header.js
        ├── menu.js
        ├── Main.js
        │   ├── AlertDialog.js
        │   ├── HostsInput.js
        │   └── HostsTable.js
        │       ├── TableHeader.js
        │       └── TableContent.js
        └── Request.js

```
- __index.js__ : render App.js to the document
- __App.js__ : is the wrapper of the application and display the active view.
- __Header.js__ : top application bar
- __menu.js__ : left menu for the navigation.
- __Main.js__ : this component has multiple functionality:
    1. request list of hosts to the remote server
    2. Promise => pending:
        1. display a spinner
    3. Promise => resolved:
        1. populate a table with the hosts informations ( -> HostsTable)
        2. search the hosts ( -> HostsInput)
        3. order selected columns ( -> HostsTable)
    3. Promise => rejected:
        1. display an error message ( -> AlertDialog)
- __Request.js__ : display current configuration and handle gives the user the possibility to change the number of hosts that can be requested.

## API structure

The API called use this schema: 'http://[server]/download/request?host=2'</br>
For this project, the server is hosted on [Heroku](https://www.heroku.com) and the code of the node server is [here](https://github.com/guglio/nessus).
The response's return uses this schema:
```json
{
  "configurations" : [
    {
      "name" : "name of the host",
      "hostname" : "hostname",
      "port" : "port number",
      "username" : "username"
    }
  ]
}
```
Based on the query host, the server generates random hosts.

The API can be tested even without the application, just open the browser and insert into the address bar [https://nessus-ui.herokuapp.com/download/request?host=2](https://nessus-ui.herokuapp.com/download/request?host=2) (change the host=2 to host=100 to request 100 random hosts).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need a local machine with [Node.js](https://nodejs.org/en/) installed and [npm](https://www.npmjs.com/) to install the required packages

### Installing

To install this project, you need to clone or download the repository (more info [here](https://help.github.com/articles/cloning-a-repository/) on how to clone with different platforms):

__MacOS__

Open terminal and type:
```shell
git clone https://github.com/guglio/nessus-ui.git
cd nessus-ui
npm install
```

## Running the application

To start the development environment run in the project directory the following command:
```shell
npm start
```

Then open the browser and type in the address bar [`http://localhost:3000/`](http://localhost:3000/)

## Create a production version

When you're ready to deploy to production run in the project directory the following command:
```shell
npm run build
```
will create an optimized build of your app in the build folder.

## Deploy the application to GitHub Pages

To deploy the application to GitHub Pages, I used the following guide.
### [GitHub Pages](https://pages.github.com/)

>Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field for your project:

```json
  "homepage": "https://myusername.github.io/my-app",
```

or for a GitHub user page:

```json
  "homepage": "https://myusername.github.io",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app](https://myusername.github.io/my-app), run:

```sh
npm install --save gh-pages
```

Alternatively you may use `yarn`:

```sh
yarn add gh-pages
```

Add the following scripts in your `package.json`:

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

The `predeploy` script will run automatically before `deploy` is run.

If you are deploying to a GitHub user page instead of a project page you'll need to make two
additional modifications:

1. First, change your repository's source branch to be any branch other than **master**.
1. Additionally, tweak your `package.json` scripts to push deployments to **master**:
```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">

#### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://reacttraining.com/react-router/web/api/Router) about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).

#### Troubleshooting

##### "/dev/tty: No such a device or address"

If, when deploying, you get `/dev/tty: No such a device or address` or a similar error, try the follwing:

1. Create a new [Personal Access Token](https://github.com/settings/tokens)
2. `git remote set-url origin https://<user>:<token>@github.com/<user>/<repo>` .
3. Try `npm run deploy again`

#### Additiona information on deployment
Additional information on how to deploy to different platforms are available here: [https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)

## Built With

* [React](https://facebook.github.io/react/) - The heart of the web application
* [MATERIAL-UI](https://material-ui.com/) - React components that implement Google's Material Design
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Heroku](https://www.heroku.com) - cloud application server
* [npm](https://www.npmjs.com/) - Package manager
* [Atom](https://atom.io/) - text editor
* [gh-pages](https://github.com/tschaub/gh-pages) - deploy this application to GitHub


## Versioning

I use git for versioning.

## Author

[Guglielmo Turco](https://github.com/guglio)
