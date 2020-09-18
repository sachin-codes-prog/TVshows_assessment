# tvshow_assignment
This is an application providing a bucket list of TV shows. A user can find the details of of a particular TV show by clicking on the thumbnail. There is a search option to find any particular show by name. 
This application is built using data from the API "http://www.tvmaze.com/api".

## Project framework
This application is built using VueJS. It is a progressive framework with a small size of around ~21kb , easy to understand and scale large application. For more information refer the following pages.

https://cli.vuejs.org/
https://cli.vuejs.org/guide/

Vue can be installed on a system by firing below command. 
```
npm install -g @vue/cli
```
Note: One must have node and npm installed as a prerequisite. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Project guidelines
* This application is using smallcase for Folder Naming Convention (Example : views, components)
and Pascal case for files (Example: DashBoard.vue, Details.vue)

* This application is using camelCase naming conventions for Method Naming, variable, object declaration,
Example : getResults() , tvShowName etc..

### Project dependencies and devDependencies 
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios 

2. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
