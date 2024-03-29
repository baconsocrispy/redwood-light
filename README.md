## BASIC SETUP

### SETUP CREATE-REACT-APP AND STYLED COMPONENTS
Initialize Create-React-App
* `npx create-react-app redwood-light-app`

Setup React Router to handle routing to Awards, Contact and Team pages.
* `yarn add react-router-dom`

Import BrowserBrowser router into index.js and wrap App element in BrowserRouter tags.
* `import { BrowserRouter } from 'react-router-dom';`

Add Styled Components
* `yarn add styled-components`


### TESTING, ESLINT & PRETTIER SETUP
Add testing packages:
* `yarn add eslint-plugin-testing-library eslint-plugin-jest-dom`

Add most recent UserEvent dependency to Testing Library
* `yarn add @testing-library/user-event@^14`

Remove `eslintconfig` from package.json

Create `.eslintrc` and add standard config
```
{
  "plugins": [
    "jest-dom",
    "testing-library"
  ],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
}
```

Create `.vscode/settings.json` and add standard config
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### TYPESCRIPT CONFIGURATION
Add Typescript
* `yarn add typescript`

Add React Types
* `yarn add --dev @types/react @types/react-dom @types/react-router-dom`

Add Styled Component Types
* `yarn add --dev @types/styled-components`

Setup PNG handling
* create `global.d.ts` file in root directory
* inside: 
`declare module '*.png';`
`declare module '*.jpeg';`
`declare module '*.jpg';`

Create `tsconfig.json` and save in root directory
* "include" should reference the `src` folder and the `global.d.ts` file
* "compiler options" should have "jsx" set to "react-jsx" and "target" set to "es6"


## ADD REACT BOOTSTRAP
`yarn add react-bootstrap bootstrap`

Add react-bootstrap script tags to `public/index.html` from here:
https://react-bootstrap.netlify.app/getting-started/introduction/#browser-globals

import react bootstrap into `index.js`
`import 'bootstrap/dist/css/bootstrap.min.css'`

## ADD FONTAWESOME FONTS

Using font awesome fonts for slideshow buttons:

Base and React packages: 

`yarn add @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome --save`

Solid free icons: 
`yarn add @fortawesome/free-solid-svg-icons --save`

## ADD REACT TRANSITION GROUP
This library handles transitions when components mount and unmount. 
Using it here to handle slideshow image transitions.

`yarn add react-transition-group --save`

add the types:
`yarn add @types/react-transition-group --dev --save`

## NETLIFY SETUP
Need to add a `_resources` file to the public folder with the following line to
prevent 404 not found errors when reloading sub routes.

* `/* /index.html`
