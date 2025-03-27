# <center>BeastHunter</center>

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Requirements

1. Install the NVM(Node Version Manager)
   1. [NVM for Windows](https://github.com/coreybutler/nvm-windows)  
      a. Download version 1.1.12, latest will go fall([report issue](https://github.com/coreybutler/nvm-windows/issues/1240))  
      b. Follow [Installation](https://github.com/coreybutler/nvm-windows/wiki) step
   2. [NVM Github](https://github.com/nvm-sh/nvm)
2. Install the Node.js(Ver. 23.8.0 )
    >nvm install 23.8.0  
    <i style = 'color: crimson'>No need to install any Nodejs.exe</i>
3. Use the specific version of Node.js
    >nvm use 23.8.0
4. Look for all version of Nodejs
    >nvm list

## Install Angular CLI

> npm install -g @angular/cli@19.2.1

Run `ng version`, if see below, means success.  
![ng version](https://i.imgur.com/PtqEC6V.png "")

## Install the node modules

> npm install

## Development server

To start a local development server, run:

```bash
ng serve --port 4201
```

Once the server is running, open your browser and navigate to `http://localhost:4201/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
