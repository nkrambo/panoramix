
# README #

### Front End Setup ###

#### Getting Started

We are using the [Yarn](https://yarnpkg.com/en/) NPM client. You must install this on your machine.

You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.

`brew install yarn`

If you use nvm you should exclude installing Node.js so that nvm's version of Node.js is used.

`brew install yarn --ignore-dependencies`

Once you have Yarn installed. You can continue with project setup.

Setup commands must be run from the client interface directory.

`yarn` will install the project dependencies.

`yarn start` starts the local development server at http://localhost:8080

Do not edit the yarn.lock file directly. This will re-generate from yarn commands as needed. Please keep the yarn.lock tracked with git.

Do not use the NPM client to install/remove dependencies or launch NPM scripts. Please use [Yarn commands](https://yarnpkg.com/en/docs/cli/) instead.

The Webpack development server watches for code changes and reloads live updates, using Hot Module Replacement (HMR), there is no need to refresh your browser.

#### React Semantic UI

If you make changes to the [React Semantic UI](https://react.semantic-ui.com/introduction) files, you must re-build the dependency.

`cd /semantic`

`gulp build`

You can also simply watch for changes and a fast build will automatically happen. This is the recommended approach.

`gulp watch`

#### ES6 with Babel

We are compiling our javascript into code that works across browser using [Babel](https://babeljs.io/). This means we can use the latest version of EcmaScript (ES6), so please use modern javascript.

#### ESLint

We're using [ESLint](http://eslint.org/) to help with javascript code quality with the AirBnB style guide configuration.

`yarn lint` will lint all the javascript files.

`yarn fix` will fix some ESLint errors automatically, other errors must be fixed manually.

#### Pre Commit Hook

When committing changes, yarn will run ESLint and also run snapshot tests for those files that have changed. It will stop you from committing changes that fail the lint and test process. If you really need to commit something that fails, ...naughty, you can pass the `-n` flag to disable it, like so.

`git commit -n -m 'Thou shalt not commit dirty code'`

#### Flow

We're using [Flow](https://flow.org/) for static type checking of javascript. Flow only checks those files with `// @flow` at the top.

#### Testing

##### Testing the front end

We're using the [Jest](https://facebook.github.io/jest/) testing framework from Facebook.

`yarn test` will run the test suite.

`yarn test:coverage` will produce a code coverage report. We have a high threshold, please check regularly.

`test:watch` will watch files and test for you, if you prefer.
